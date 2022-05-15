import { HistoryData, NodeProps } from '../types';
import type NodeSystem from './NodeSystem';
export default class NodeHistory {
    private system;
    history: {
        previous: Partial<NodeProps>;
        next: Partial<NodeProps>;
    }[];
    historyIndex: number;
    isApplyingChanges: boolean;
    prevState: NodeProps[];
    private _timeout;
    constructor(system: NodeSystem);
    addAction(): void;
    private _addAction;
    serialize(): {
        steps: {
            previous: Partial<NodeProps>;
            next: Partial<NodeProps>;
        }[];
        index: number;
    };
    deserialize(data: HistoryData): void;
    undo(): void;
    redo(): void;
}
