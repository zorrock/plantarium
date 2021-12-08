import type NodeSystem from './NodeSystem';
import type Node from './Node';
import Logger from './Logger';
export default class NodeFactory {
    system: NodeSystem;
    log: Logger;
    id: {
        (id?: number, iteration?: number): string;
        reset(): void;
    };
    constructor(system: NodeSystem);
    reset(): void;
    create(props: NodeProps): Node;
}
