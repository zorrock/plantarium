declare type Pojo = number | string | boolean | Record<string, Pojo> | Pojo[];
export declare function diffObjects(alpha: Pojo, beta: Pojo): any;
export declare function diffBoth(alpha: Pojo, beta: Pojo): any[];
export declare function mergeObjects(alpha: Pojo, beta: Pojo): any;
export {};
