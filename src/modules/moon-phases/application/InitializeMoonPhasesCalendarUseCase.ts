import * as _ from 'lodash';
import dayjs from 'dayjs';

import { UseCase } from "../../shared/application/UseCase";

import { MOON_PHASES, MoonService } from "../index";
import { MoonPhaseEventRepository } from '../domain/MoonPhaseEventRepository';

const print = console.log;

export class InitializeMoonPhasesCalendarUseCase implements UseCase {
  private readonly moonPhases = MOON_PHASES;

  constructor(
    private moonPhaseEventRepository: MoonPhaseEventRepository,
    private moonService: MoonService
  ) {

  }

  async invoke(request: any) {
    const year = request.year;

    const startOfYear = dayjs(`${year}-01-01T12:00:00.000Z`);
    const endOfYear = startOfYear.endOf('year');

    const calendar = [];
    let candidates = [];

    for (let now = startOfYear; now.isBefore(endOfYear); now = now.add(1, 'day')) {
      const illumination = this.moonService.getIllumination(now.toDate());
      const fraction = _.round(illumination.fraction, 2);
      const phase = _.round(illumination.phase, 3);

      const moonPhaseDetails = this.getMoonPhaseDetails(fraction, phase, now);
      if (!moonPhaseDetails) {
        continue;
      }

      if (!candidates.length) {
        candidates.push(moonPhaseDetails);
      } else {
        const firsCandidate = candidates[0];
        if (firsCandidate.moonPhase!.name === moonPhaseDetails.moonPhase!.name) {
          candidates.push(moonPhaseDetails);
        } else {
          const candidate = _.minBy(candidates, 'diff');
          calendar.push({
            date: now.subtract(1, 'day'),
            details: candidate,
          });

          candidates = [];
          candidates.push(moonPhaseDetails);
        }
      }
    }

    for (const element of calendar) {
      print(`"${element.date.toISOString()}","${element.details!.moonPhase!.emoji}","${element.details!.index}"`);
      await this.moonPhaseEventRepository.createMoonPhaseEvent({
        name: element.details!.moonPhase!.name,
        occurredOn: element.date.toDate(),
      });
    }
  }

  private getMoonPhaseDetails(fraction: number, phase: number, now: dayjs.Dayjs) {
    if (fraction === 0) {
      const moonPhase = this.moonPhases.find((phase) => phase.name === 'New Moon');
      const diff = Math.abs(phase - moonPhase!.phase);
      const index = this.moonPhases.indexOf(moonPhase!);
      if (phase > 0.980 || diff < 0.025) {
        return {
          moonPhase,
          fraction,
          phase,
          diff,
          index,
        };
      }
    } else if (fraction === 1 && _.round(phase, 1) === 0.5) {
      const moonPhase = this.moonPhases.find((phase) => phase.name === 'Full Moon');
      const index = this.moonPhases.indexOf(moonPhase!);
      return {
        moonPhase,
        fraction,
        phase,
        diff: 0,
        index,
      };
    } else {
      const results = this.moonPhases
        .filter(moonPhase => !['New Moon', 'Full Moon'].includes(moonPhase.name))
        .map(moonPhase => {
          const diff = Math.abs(moonPhase.phase - phase);
          const index = this.moonPhases.indexOf(moonPhase);
          return {
            moonPhase,
            fraction,
            phase,
            diff,
            index,
          };
        });
      return _.minBy(results, 'diff')
    }
    return null;
  }
}
