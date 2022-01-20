import './AddMenu.css';
import type NodeSystemView from './NodeSystemView';
import type NodeInput from '../model/NodeInput';
import type NodeOutput from '../model/NodeOutput';
import type NodeType from '../model/NodeType';
import type NodeSystem from '../model/NodeSystem';
import { InputSearch } from '@plantarium/ui/src/lib';
interface ContextOptions {
    x: number;
    y: number;
    socket?: NodeInput | NodeOutput;
}
export default class RightClickMenu {
    wrapper: HTMLDivElement;
    searchEl: InputSearch;
    view: NodeSystemView;
    system: NodeSystem;
    x: number;
    y: number;
    socket: NodeInput | NodeOutput | undefined;
    types: NodeType[];
    res: (data: NodeProps) => void;
    rej: () => void;
    constructor(view: NodeSystemView);
    updateTypes(types: NodeType[]): void;
    handleWindowClick(ev: MouseEvent): void;
    private reject;
    private resolve;
    hide(): void;
    show({ x, y, socket }: ContextOptions): Promise<NodeProps>;
}
export {};
