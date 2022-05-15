import { EventEmitter } from '@plantarium/helpers';
import NodeInput from '../model/NodeInput';
import NodeOutput from '../model/NodeOutput';
import { CustomMouseEvent } from '../types';
import ConnectionView from './ConnectionView';
import type NodeSystemView from './NodeSystemView';
interface FloatingConnectionView extends ConnectionView, EventEmitter {
}
declare const FloatingConnectionView_base: {
    new (...args: any[]): {
        [x: string]: any;
    };
    [x: string]: any;
};
declare class FloatingConnectionView extends FloatingConnectionView_base {
    socket: NodeInput | NodeOutput;
    view: NodeSystemView;
    allSockets: (NodeInput | NodeOutput)[];
    potentialSockets: (NodeInput | NodeOutput)[];
    hoveredSocket: (NodeInput | NodeOutput) | undefined;
    isInput: boolean;
    isRightClick: boolean;
    mdx: number;
    mdy: number;
    dx2: number;
    dy2: number;
    private _unsubMouseUp;
    private _unsubMouseMove;
    constructor(socket: NodeInput | NodeOutput, point?: {
        x?: number;
        y?: number;
    });
    handleMouseUp(ev: CustomMouseEvent): void;
    handleMouseMove(ev: CustomMouseEvent): void;
    remove(): void;
}
export default FloatingConnectionView;
