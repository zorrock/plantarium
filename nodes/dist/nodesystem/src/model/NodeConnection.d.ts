import type NodeOutput from './NodeOutput';
import type Node from './Node';
import type NodeInput from './NodeInput';
import type NodeSystem from './NodeSystem';
import NodeConnectionView from '../view/NodeConnectionView';
interface ConnectionOptions {
    output: NodeOutput;
    input: NodeInput;
}
export default class NodeConnection {
    system: NodeSystem;
    input: NodeInput;
    output: NodeOutput;
    type: string;
    view: NodeConnectionView;
    constructor(system: NodeSystem, { input, output }: ConnectionOptions);
    joinNode(node: Node): void;
    isNodeJoinable(node: Node): boolean;
    remove(): void;
    deserialize(): {
        id: string;
        out: number;
        in: string;
    };
    get indexOut(): number;
    get indexIn(): string;
}
export {};
