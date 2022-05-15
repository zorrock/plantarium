declare type Pojo = Record<string, any>;
export declare function diffObjects(alpha: Pojo, beta: Pojo): any;
export declare function diffBoth(alpha: Pojo, beta: Pojo): any[];
export declare function mergeObjects(alpha: Pojo, beta: Pojo): any;
export {};
