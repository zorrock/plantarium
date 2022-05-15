/**
 * Allows smooth kinetic scrolling of the surface
 */
export default function kinetic(getPoint: any, scroll: any, settings: any): {
    start: () => void;
    stop: () => void;
    cancel: () => void;
};
