import { logger } from '@plantarium/helpers';
import type { NodeSystem } from '..';
declare class DummyClass {
    system: NodeSystem;
}
export default class Logger {
    module: unknown;
    name: string;
    level: number;
    length: number;
    isGrouped: boolean;
    output: ReturnType<typeof logger>;
    constructor(module: DummyClass | NodeSystem | object, logLevel?: number);
    private getModuleName;
    private handle;
    info(message: unknown, ...args: unknown[]): void;
    log(message: string | unknown, ...args: unknown[]): void;
    warn(message: string | unknown, ...args: unknown[]): void;
    error(message: Error, ...args: unknown[]): void;
    group(message: string): void;
    groupEnd(): void;
}
export {};
