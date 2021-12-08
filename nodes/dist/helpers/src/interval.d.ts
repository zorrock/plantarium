export default function (func: () => unknown, time: number): {
    stop: () => void;
    start: () => void;
};
