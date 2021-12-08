import type Node from '../model/Node';
import type NodeOutput from '../model/NodeOutput';
import type NodeConnectionView from './NodeConnectionView';
import './NodeOutputView.scss';
export default class NodeOutputView {
    node: Node;
    output: NodeOutput;
    wrapper: HTMLDivElement;
    connections: NodeConnectionView[];
    constructor(output: NodeOutput);
    remove(): void;
    set state(v: string);
    private rect;
    updatePosition(): void;
    get x(): number;
    get y(): number;
}
