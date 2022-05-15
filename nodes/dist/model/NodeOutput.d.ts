import NodeOutputView from '../view/NodeOutputView';
import type Node from './Node';
import type NodeConnection from './NodeConnection';
import type NodeInput from './NodeInput';
export default class NodeOutput {
    node: Node;
    view: NodeOutputView;
    connections: NodeConnection[];
    type: string;
    constructor(node: Node, type: string);
    bindView(): void;
    connectTo(input: NodeInput): NodeConnection;
    removeConnection(conn: NodeConnection): void;
    setConnection(conn: NodeConnection): void;
    remove(): void;
}
