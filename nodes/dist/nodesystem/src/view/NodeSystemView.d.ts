import { EventEmitter } from '@plantarium/helpers';
import { createPanZoom } from '../helpers';
import type Node from '../model/Node';
import type NodeInput from '../model/NodeInput';
import type NodeOutput from '../model/NodeOutput';
import type NodeSystem from '../model/NodeSystem';
import AddMenu from './AddMenu';
import BoxSelection from './BoxSelection';
import './NodeSystemView.scss';
import ColorStore from './socketColorStore';
export default class NodeSystemView extends EventEmitter {
    system: NodeSystem;
    wrapper: HTMLElement;
    transformWrapper: HTMLDivElement;
    svg: SVGElement;
    addMenu: AddMenu;
    boxSelection: BoxSelection;
    colorStore: ColorStore;
    nodeContainer: HTMLDivElement;
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    s: number;
    mx: number;
    my: number;
    mdx: number;
    mdy: number;
    /**
     * Unprojected mouse x coordinate
     */
    rmx: number;
    /**
     * Unprojected mouse y coordinate
     */
    rmy: number;
    ev: MouseEvent;
    mouseDown: boolean;
    keyMap: {
        [key: string]: boolean;
    };
    activeNode: Node | undefined;
    selectedNodes: Node[];
    selectedNodesDown: [number, number][];
    clipboard: NodeProps[];
    panzoom: ReturnType<typeof createPanZoom>;
    dpr: number;
    constructor(system: NodeSystem);
    createFloatingConnection(socket: NodeInput | NodeOutput): void;
    setActive(n?: Node | undefined, { shiftKey, ctrlKey }?: {
        shiftKey?: boolean;
        ctrlKey?: boolean;
    }): void;
    getSelectedNodes(): Node[];
    projectLocalToWindow(x: number, y: number): {
        x: number;
        y: number;
    };
    projectWindowToLocal(x: number, y: number): {
        x: number;
        y: number;
    };
    setTransform({ x, y, s }?: {
        x?: number;
        y?: number;
        s?: number;
    }): void;
    private showAddMenu;
    bindEventListeners(): void;
    handleResize(): void;
    handleMouseMove(ev: MouseEvent): void;
    handleMouseDown(ev: MouseEvent): void;
    handleMouseUp({ clientX, clientY, shiftKey, ctrlKey }: MouseEvent): void;
    handleKeyUp({ key }: KeyboardEvent): void;
    handleKeyDown({ key, ctrlKey, shiftKey }: KeyboardEvent): void;
}
