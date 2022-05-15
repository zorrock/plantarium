import NodeInputView from '../view/NodeInputView';
import type NodeConnection from './NodeConnection';
import type Node from './Node';
import type NodeState from './NodeState';
export default class NodeInput {
    state: NodeState;
    key: string;
    node: Node;
    view: NodeInputView;
    connection: NodeConnection;
    type: string[];
    constructor(state: NodeState, type: string[] | string, key: string);
    bindView(): void;
    removeConnection(): void;
    setConnection(conn: NodeConnection): void;
    remove(): void;
}
