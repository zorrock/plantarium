export default function makeDomController(domElement: any): {
    getBBox: () => {
        left: number;
        top: number;
        width: any;
        height: any;
    };
    getOwner: () => any;
    applyTransform: (transform: any) => void;
};
export declare function isDomElement(element: any): any;
