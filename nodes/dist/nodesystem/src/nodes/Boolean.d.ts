declare const _default: {
    title: string;
    type: string;
    outputs: string[];
    parameters: {
        value: {
            type: string;
            defaultValue: boolean;
        };
    };
    compute({ value }: {
        value?: boolean;
    }): boolean;
};
export default _default;
