export default class EventEmitter {
    index: number;
    constructor();
    private cbs;
    private cbsOnce;
    /**
     * Emit an event with optional data to all the listeners
     * @param {string} event Name of the event to emit
     * @param data Data to send along
     */
    emit(event: string, data?: unknown): void;
    /**
     * Register a new listener on the EventEmitter
     * @param {string} event Name of the event to listen to
     * @param {function} cb Listener, gets called everytime the event is emitted
     * @param {number} [throttleTimer=0] The listener can be throttled
     * @returns {function} Returns a function which removes the listener when called
     */
    on(event: string, cb: (data?: unknown) => unknown, throttleTimer?: number): () => void;
    /**
     * Register a special listener which only gets called once
     * @param {string} event Name of the event to listen to
     * @param {function} cb Listener, gets called everytime the event is emitted
     * @returns {function} Returns a function which removes the listener when called
     */
    once(event: string, cb: (data: unknown) => unknown): () => void;
    destroyEventEmitter(): void;
}
