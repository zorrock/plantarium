import 'svelte/store';
import type { SvelteComponentDev } from 'svelte/internal';
import type { Message, MessageOptions } from '../helpers/IMessage';
import type { Writable } from 'svelte/store';
declare const store: Writable<Message[]>;
declare const createToast: (content: string | Error | typeof SvelteComponentDev, options?: Partial<MessageOptions>) => Promise<unknown>;
export { store, createToast };
