import Logger from './Logger';
import type NodeSystem from './NodeSystem';
export default class NodeHistory {
    private system;
    history: {
        previous: unknown;
        next: unknown;
    }[];
    historyIndex: number;
    isApplyingChanges: boolean;
    log: Logger;
    addAction: NodeHistory['_addAction'];
    prevState: NodeSystemData;
    constructor(system: NodeSystem);
    private _addAction;
    serialize(): {
        steps: {
            previous: unknown;
            next: unknown;
        }[];
        index: number;
    };
    deserialize(data: HistoryData): void;
    undo(): void;
    redo(): void;
}
