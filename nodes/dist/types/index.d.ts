import type { CheckboxTemplate, FloatTemplate, IntegerTemplate, SelectTemplate, ValueTemplate as _ValueTemplate } from "@plantarium/ui";
export declare type ValueTemplate = (_ValueTemplate | {
    type: "*";
    value?: unknown;
}) & {
    internal?: boolean;
    external?: boolean;
    label?: boolean | string;
};
declare type NodeParameters = Record<string, ValueTemplate>;
export declare type Params<T extends NodeParameters> = {
    [K in keyof T]: T[K] extends FloatTemplate ? number : T[K] extends IntegerTemplate ? number : T[K] extends CheckboxTemplate ? boolean : T[K] extends SelectTemplate ? string : unknown;
};
export declare type NodeTypeData<T extends NodeParameters = NodeParameters> = {
    title: string;
    type: string;
    outputs: string[];
    meta?: {
        description?: string;
        tags?: string[];
    };
    parameters: T;
    compute: (p: Params<T>) => void;
};
export declare function checkNodeType<T extends NodeParameters>(node: NodeTypeData<T>): NodeTypeData<T>;
export * from "./interfaces";
