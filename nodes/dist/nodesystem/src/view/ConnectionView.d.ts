import type NodeInput from '../model/NodeInput';
import type NodeOutput from '../model/NodeOutput';
import type NodeSystem from '../model/NodeSystem';
import './ConnectionView.scss';
export default class ConnectionView {
    path: SVGPathElement;
    hoverPath: SVGPathElement;
    system: NodeSystem;
    svg: SVGElement;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor({ x1, y1, x2, y2 }: {
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
    }, socket: NodeOutput | NodeInput);
    setPosition({ x1, y1, x2, y2 }?: {
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
    }): void;
    remove(): void;
}
