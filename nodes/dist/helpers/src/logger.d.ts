import type { Writable } from 'svelte/store';
interface Logger {
    (...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(err: Error): void;
}
declare function log(scope: string): Logger;
declare namespace log {
    var getStore: () => Writable<unknown[]>;
    var setFilter: (...f: string[]) => void;
    var setLevel: (l?: number) => void;
}
export default log;
