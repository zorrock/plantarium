import Node from '../model/Node';
import type NodeSystem from '../model/NodeSystem';
import { NodeProps } from '../types';
import NodeView from '../view/NodeView';
declare class DebugNode extends Node {
    constructor(system: NodeSystem, props: NodeProps);
    compute({ input }: {
        input: any;
    }): any;
}
declare class DebugView extends NodeView {
    constructor(node: Node);
}
declare const _default: {
    title: string;
    meta: {
        description: string;
    };
    node: typeof DebugNode;
    view: typeof DebugView;
};
export default _default;
