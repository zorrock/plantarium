interface Logger {
    (...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(err: Error): void;
    group(...args: unknown[]): void;
}
declare function log(scope: string): Logger;
declare namespace log {
    var setFilter: (...f: string[]) => void;
    var setLevel: (l?: number) => void;
}
export default log;
