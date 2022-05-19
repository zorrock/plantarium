import { InstancedGeometry, TransferGeometry } from "@plantarium/types";
export default function instanceGeometry(geo: TransferGeometry, { offset, scale, rotation, id, baseAlpha, depth }: {
    id?: string;
    depth?: number;
    baseAlpha?: Float32Array;
    offset?: number[] | Float32Array;
    scale?: number[] | Float32Array;
    rotation?: number[] | Float32Array;
}): InstancedGeometry;
