import type { NodeTypeData } from '../types';
import { NodeSystemData } from '../types';
import Node from './Node';
import type NodeSystem from './NodeSystem';
import type NodeType from './NodeType';
export default class NodeParser {
    system: NodeSystem;
    constructor(system: NodeSystem);
    parseSystem(nodeData: NodeSystemData): Node[];
    parseType(typeData: NodeTypeData): NodeType;
    getData(): {
        meta: import("../types").NodeSystemMeta;
        nodes: any[];
    };
}
