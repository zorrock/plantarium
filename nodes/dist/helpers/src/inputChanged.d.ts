/**
 * Only calls the passed function when the input parameters changed
 * Warning: works with JSON.stringify, so key order in POJOS is ignored
 * @param func Function to proxy
 */
export default function memo<A extends unknown[], R>(fn: (...args: A) => R): (...args: A) => R;
