import type Node from '../model/Node';
import type NodeInput from '../model/NodeInput';
import type NodeConnectionView from './NodeConnectionView';
import './NodeInputView.scss';
export default class NodeInputView {
    node: Node;
    input: NodeInput;
    wrapper: HTMLDivElement;
    connection: NodeConnectionView;
    constructor(input: NodeInput);
    rect: DOMRect;
    updatePosition(): void;
    remove(): void;
    set state(v: string);
    get x(): number;
    get y(): number;
}
