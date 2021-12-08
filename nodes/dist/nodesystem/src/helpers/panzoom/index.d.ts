import type NodeSystemView from '../../view/NodeSystemView';
interface Bounds {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface Transform {
    x: number;
    y: number;
    scale: number;
}
export interface TransformOrigin {
    x: number;
    y: number;
}
export interface PanZoomController {
    getOwner: () => Element;
    applyTransform: (transform: Transform) => void;
}
interface PanZoomOptions {
    filterKey?: () => boolean;
    bounds?: boolean | Bounds;
    maxZoom?: number;
    minZoom?: number;
    boundsPadding?: number;
    zoomDoubleClickSpeed?: number;
    zoomSpeed?: number;
    initialX?: number;
    initialY?: number;
    initialZoom?: number;
    pinchSpeed?: number;
    beforeWheel?: (e: WheelEvent) => void;
    beforeMouseDown?: (e: MouseEvent) => void;
    autocenter?: boolean;
    onTouch?: (e: TouchEvent) => void;
    onTransform?: (t: Transform) => void;
    onDoubleClick?: (e: Event) => void;
    smoothScroll?: boolean;
    controller?: PanZoomController;
    enableTextSelection?: boolean;
    disableKeyboardInteraction?: boolean;
    transformOrigin?: TransformOrigin;
    view?: NodeSystemView;
}
/**
 * Creates a new instance of panzoom, so that an object can be panned and zoomed
 *
 * @param {DOMElement} domElement where panzoom should be attached.
 * @param {Object} options that configure behavior.
 */
export declare function createPanZoom(domElement: HTMLElement, options: PanZoomOptions): {
    dispose: () => void;
    moveBy: (dx: any, dy: any) => void;
    moveTo: (x: any, y: any) => void;
    smoothMoveTo: (x: any, y: any) => void;
    centerOn: (ui: any) => void;
    zoomTo: (clientX: any, clientY: any, scaleMultiplier: any) => void;
    zoomAbs: (clientX: any, clientY: any, zoomLevel: any) => void;
    pause: () => void;
    resume: () => void;
    isPaused: () => boolean;
    getTransform: () => {
        x: number;
        y: number;
        scale: number;
    };
    setTransform: (x: any, y: any, s: any) => void;
    getTransformOrigin: () => any;
    setTransformOrigin: (newTransformOrigin: any) => void;
};
export {};
