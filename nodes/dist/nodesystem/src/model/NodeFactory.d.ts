import type NodeSystem from './NodeSystem';
import type Node from './Node';
export default class NodeFactory {
    system: NodeSystem;
    id: {
        (id?: number, iteration?: number): string;
        reset(): void;
    };
    constructor(system: NodeSystem);
    reset(): void;
    create(props: NodeProps): Node;
}
