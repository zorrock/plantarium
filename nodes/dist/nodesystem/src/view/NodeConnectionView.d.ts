import type Node from '../model/Node';
import type NodeConnection from '../model/NodeConnection';
import ConnectionView from './ConnectionView';
import type NodeInputView from './NodeInputView';
import type NodeOutputView from './NodeOutputView';
export default class NodeConnectionView extends ConnectionView {
    connection: NodeConnection;
    input: NodeInputView;
    output: NodeOutputView;
    constructor(conn: NodeConnection);
    handleNodeOver(node: Node): void;
    handleNodeOut(node: Node): void;
    remove(): void;
}
