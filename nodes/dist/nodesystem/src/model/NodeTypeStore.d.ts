import { EventEmitter } from '@plantarium/helpers';
import type NodeType from './NodeType';
export default class NodeTypeStore extends EventEmitter {
    types: NodeType[];
    typeMap: {
        [name: string]: NodeType;
    };
    constructor();
    add(type: NodeType): void;
    getByName(name: string): NodeType;
}
