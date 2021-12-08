import './AddMenu.scss';
import type NodeSystemView from './NodeSystemView';
import NodeInput from '../model/NodeInput';
import type NodeOutput from '../model/NodeOutput';
import type NodeType from '../model/NodeType';
import type NodeSystem from '../model/NodeSystem';
import Logger from '../model/Logger';
interface ContextOptions {
    x: number;
    y: number;
    socket?: NodeInput | NodeOutput;
}
declare class SearchContainer {
    menu: RightClickMenu;
    type: NodeType;
    children: SearchContainer[];
    wrapper: HTMLDivElement;
    searchString: string;
    constructor(menu: RightClickMenu, type: NodeType, containers?: SearchContainer[]);
    show(): void;
    hide(): void;
    blur(): void;
    focus(): void;
    showIfSearch(search: string): boolean;
    destroy(): void;
}
export default class RightClickMenu {
    wrapper: HTMLDivElement;
    searchInput: HTMLInputElement;
    view: NodeSystemView;
    system: NodeSystem;
    x: number;
    y: number;
    visible: boolean;
    log: Logger;
    possibleContainers: SearchContainer[];
    filteredContainers: SearchContainer[];
    containers: SearchContainer[];
    activeContainer?: SearchContainer;
    socket: NodeInput | NodeOutput | undefined;
    res: (data: NodeProps) => void;
    rej: () => void;
    constructor(view: NodeSystemView);
    updateTypes(types: NodeType[]): void;
    setActive(num: number): void;
    bindEventListeners(): void;
    handleWindowClick(ev: MouseEvent): void;
    search(s?: string): void;
    reject(): void;
    resolve(): void;
    hide(): void;
    show({ x, y, socket }: ContextOptions): Promise<NodeProps>;
}
export {};
