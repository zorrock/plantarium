import { EventEmitter } from '@plantarium/helpers';
import { NodeAttributes, NodeProps } from '../types';
import type NodeView from '../view/NodeView';
import NodeConnection from './NodeConnection';
import type NodeOutput from './NodeOutput';
import type NodeState from './NodeState';
import type NodeSystem from './NodeSystem';
export default class Node extends EventEmitter {
    system: NodeSystem;
    id: string;
    attributes: NodeAttributes;
    outputs: NodeOutput[];
    _state: {};
    states: {
        [key: string]: NodeState;
    };
    inputData: unknown[];
    computedData: unknown;
    view: NodeView;
    wrapper: HTMLDivElement;
    enableUpdates: boolean;
    _compute: (state: {
        [key: string]: unknown;
    }) => unknown;
    refs: {
        node: Node;
        keyIn: string[];
        indexOut: number;
    }[];
    constructor(system: NodeSystem, props: NodeProps);
    get state(): {};
    bindView(view: NodeView): void;
    setAttributes(attrib: Partial<NodeAttributes>): void;
    compute(paramaters: unknown): unknown;
    getChildren(): Node[];
    getSockets(): (import("./NodeInput").default | NodeOutput)[];
    getInputs(): import("./NodeInput").default[];
    setStateValue(key: string, value: unknown): void;
    getStateValue(key: string): unknown;
    update(): void;
    remove(): void;
    connectTo(node: Node, indexOut?: number, keyIn?: string): NodeConnection;
    disconnectFrom(node: Node, keyIn: string, indexOut: number): void;
    deserialize(): any;
    save(): void;
}
