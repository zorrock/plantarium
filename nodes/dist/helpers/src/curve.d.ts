interface Vec2 {
    x: number;
    y: number;
    pinned?: boolean;
}
export declare function computeControlPoints(points: Vec2[]): ({
    rx: number;
    ry: number;
    lx?: undefined;
    ly?: undefined;
} | {
    lx: number;
    ly: number;
    rx?: undefined;
    ry?: undefined;
} | {
    lx: number;
    ly: number;
    rx: number;
    ry: number;
})[];
export declare function drawLinear(ctx: CanvasRenderingContext2D, points: Vec2[]): void;
export declare function drawControlPoints(ctx: CanvasRenderingContext2D, points: Vec2[]): void;
export declare function drawCurve(ctx: CanvasRenderingContext2D, points: Vec2[]): void;
export declare function toArray(points: Vec2[]): {
    x: number;
    y: number;
}[];
export declare function drawSamplePoints(ctx: CanvasRenderingContext2D, points: Vec2[]): void;
export {};
