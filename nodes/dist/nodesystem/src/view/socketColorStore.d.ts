import { EventEmitter } from '@plantarium/helpers';
export default class ColorStore extends EventEmitter {
    colors: {
        [type: string]: string;
    };
    index: number;
    constructor();
    private setType;
    on(socketType: string, cb: (color: string) => unknown): () => void;
}
