import type { SvelteComponent } from '@plantarium/ui/node_modules/svelte/types/runtime';
import type NodeState from '../model/NodeState';
import './NodeStateView.scss';
export default class NodeStateView {
    private nodeState;
    wrapper: HTMLDivElement;
    input: HTMLDivElement;
    element: SvelteComponent;
    private isPaused;
    constructor(nodeState: NodeState);
    private rect;
    updateValue(): void;
    updatePosition(): void;
    get y(): number;
    get height(): number;
    setActive(isActive: boolean): void;
}
