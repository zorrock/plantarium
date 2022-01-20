import type NodeSystem from './NodeSystem';
export default class NodeHistory {
    private system;
    history: {
        previous: Partial<NodeProps>;
        next: Partial<NodeProps>;
    }[];
    historyIndex: number;
    isApplyingChanges: boolean;
    addAction: NodeHistory['_addAction'];
    prevState: NodeProps[];
    constructor(system: NodeSystem);
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
