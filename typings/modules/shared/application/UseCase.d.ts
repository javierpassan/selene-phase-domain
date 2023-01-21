export interface UseCase<Request = any, Response = any> {
    invoke(request: Request): Promise<Response>;
}
//# sourceMappingURL=UseCase.d.ts.map