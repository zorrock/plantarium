import Node from '../model/Node';
import type NodeSystem from '../model/NodeSystem';
import { NodeProps } from '../types';
import NodeView from '../view/NodeView';
declare class OutputNode extends Node {
    constructor(system: NodeSystem, props: NodeProps);
    compute({ input }: {
        input: any;
    }): any;
}
declare class OutputView extends NodeView {
    constructor(node: Node);
}
declare const _default: {
    title: string;
    meta: {
        description: string;
    };
    node: typeof OutputNode;
    view: typeof OutputView;
};
export default _default;
