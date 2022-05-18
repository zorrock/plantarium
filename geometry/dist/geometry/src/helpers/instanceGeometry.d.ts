import { InstancedGeometry, TransferGeometry } from "@plantarium/types";
export default function instanceGeometry(geo: TransferGeometry, { offset, scale, rotation }: {
    offset?: number[] | Float32Array;
    scale?: number[] | Float32Array;
    rotation?: number[] | Float32Array;
}): InstancedGeometry;
