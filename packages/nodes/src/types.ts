import type { CheckboxTemplate, CurveTemplate, ShapeTemplate, FloatTemplate, IntegerTemplate, SelectTemplate, ValueTemplate } from "@plantarium/ui";
import type { NodeContext } from "@plantarium/generator"

type Instances = {
  offset: Float32Array;
  scale: Float32Array;
  rotation: Float32Array;
}

type PlantValue = {
  stems: PlantStem[], geometry: TransferGeometry, instances: Instances[]
}

type PlantTemplate = {
  type: "plant"
  value?: PlantValue
}

type Vec2Template = {
  type: "vec2"
  value: { x: number, y: number }
}

type Vec3Template = {
  type: "vec3"
  value: { x: number, y: number, z: number }
}

type AllTemplates = ValueTemplate | PlantTemplate | Vec2Template | Vec3Template;

export type NodeDataTypes = AllTemplates["type"];

type NodeParameters = Record<string, (AllTemplates) & { internal?: boolean, external?: boolean, label?: boolean | string }>;

type ResolvableParameter<T extends NodeParameters[string], K = T["value"]> = T["internal"] extends boolean ? K : (alpha?: number) => K;

type Parameter<T extends NodeParameters[string]> =
  T extends FloatTemplate ? ResolvableParameter<T>
  : T extends IntegerTemplate ? ResolvableParameter<T>
  : T extends CheckboxTemplate ? ResolvableParameter<T>
  : T extends SelectTemplate ? ResolvableParameter<T> // Unsure about this one, because select probably cant be driven by nodes
  : T extends Vec3Template ? ResolvableParameter<T>
  : T extends Vec2Template ? ResolvableParameter<T>
  : T extends ShapeTemplate ? ResolvableParameter<T>
  : T extends CurveTemplate ? ResolvableParameter<T>
  : T extends PlantTemplate ? ResolvableParameter<T, PlantValue>
  : unknown;

export type Params<T extends NodeParameters = NodeParameters> = {
  [K in keyof T]: Parameter<T[K]>
};

export type PlantNode<T extends NodeParameters = {}> = {
  title: string,
  type: string,
  outputs: NodeDataTypes[],
  meta?: { description?: string, tags?: string },
  parameters: T,
  computeValue?: (p: Params<T>, ctx: NodeContext, alpha?: number) => unknown
  computeStem?: (p: Params<T>, ctx: NodeContext) => { stems: PlantStem[], instances?: Instances[] }
  computeGeometry?: (p: Params<T>, result: ReturnType<PlantNode["computeStem"]>, ctx: NodeContext) => { geometry: TransferGeometry }
}

export function typeCheckNode<T extends NodeParameters>(node: PlantNode<T>): PlantNode {
  return node;
}