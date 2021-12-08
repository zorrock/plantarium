import './BoxSelection.scss';
import { EventEmitter } from '@plantarium/helpers';
import type NodeSystemView from './NodeSystemView';
import type Node from '../model/Node';
export default class BoxSelectionView extends EventEmitter {
    view: NodeSystemView;
    wrapper: HTMLDivElement;
    mDownX: number;
    mDownY: number;
    downX: number;
    downY: number;
    isShiftKey: boolean;
    resolve: (nodes: Node[]) => void;
    constructor(view: NodeSystemView);
    show(): void;
    private projectBox;
    hide(): void;
}
