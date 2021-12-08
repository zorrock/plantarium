import { EventEmitter } from '@plantarium/helpers';
import NodeSystemView from '../view/NodeSystemView';
import Logger from './Logger';
import type Node from './Node';
import NodeFactory from './NodeFactory';
import NodeHistory from './NodeHistory';
import type NodeType from './NodeType';
import NodeTypeStore from './NodeTypeStore';
interface NodeSystemOptions {
    view?: boolean;
    wrapper?: HTMLElement;
    defaultNodes?: string[] | boolean;
    registerNodes?: NodeTypeData[];
    logLevel?: number;
    parent?: HTMLElement;
}
export default class NodeSystem extends EventEmitter {
    private parser;
    meta: NodeSystemMeta;
    outputNode: Node;
    factory: NodeFactory;
    store: NodeTypeStore;
    log: Logger;
    history: NodeHistory;
    isLoaded: boolean;
    isPaused: boolean;
    nodes: Node[];
    _result: unknown;
    states: NodeSystemData[];
    id: number;
    view: NodeSystemView;
    options: NodeSystemOptions;
    constructor(options?: NodeSystemOptions);
    get result(): unknown;
    set result(res: unknown);
    setMetaData(data: Partial<NodeSystemMeta>): void;
    load(systemData: NodeSystemData): this;
    serialize(): {
        history: {
            steps: {
                previous: unknown;
                next: unknown;
            }[];
            index: number;
        };
        meta: NodeSystemMeta;
        nodes: {
            attributes: NodeAttributes;
            state: {};
        }[];
    };
    save(): void;
    setOutputNode(node: Node): void;
    addNodes(nodes: Node[]): void;
    addNode(node: Node): void;
    removeNode(node: Node): void;
    spliceNode(node: Node): void;
    getSockets(type?: string): (import("./NodeInput").default | import("./NodeOutput").default)[];
    getInputs(type?: string): import("./NodeInput").default[];
    getOutputs(type?: string[]): import("./NodeOutput").default[];
    createNode(props: NodeProps): Node;
    getNodes(): Node[];
    findNodeById(id: string): Node;
    getNodeTypes(): NodeType[];
    registerNodeType(type: NodeType | NodeTypeData): void;
}
export {};
