import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { Message, MessageOptions } from './IMessage';
import { MessageType } from './IMessage';
declare const _default: () => {
    store: Writable<Message[]>;
    createMessage: (content: string | Error | typeof SvelteComponent, options?: Partial<MessageOptions>) => Promise<unknown>;
    MessageType: typeof MessageType;
};
export default _default;
