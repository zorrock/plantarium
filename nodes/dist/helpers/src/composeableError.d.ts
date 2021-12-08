export default class ComposableError extends Error {
    detail: unknown;
    meta: Record<string, unknown>;
    constructor(message: any, meta?: {});
    static fromParent(parentError: any, code: any, message: any, meta: any): ComposableError;
    getCause(): unknown;
    unwrapChain(err?: this): any[];
    static unwrapChain: (err: any) => any[];
}
