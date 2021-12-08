import { EventEmitter } from '@plantarium/helpers';
import NodeStateView from '../view/NodeStateView';
import type Node from './Node';
import NodeInput from './NodeInput';
export default class NodeState extends EventEmitter {
    node: Node;
    key: string;
    template: ValueTemplate;
    isExternal: boolean;
    private input;
    view: NodeStateView;
    private value;
    constructor(node: Node, key: string, template: ValueTemplate);
    setIsExternal(isExternal?: boolean): void;
    getValue(): unknown;
    setValue(value: unknown): void;
    remove(): void;
    getInput(): NodeInput;
    bindView(): void;
}
