declare const _default: {
    title: string;
    type: string;
    outputs: string[];
    parameters: {
        value: {
            type: string;
            internal: boolean;
            label: boolean;
            defaultValue: number;
        };
    };
    compute({ value }: {
        value?: number;
    }): number;
};
export default _default;
