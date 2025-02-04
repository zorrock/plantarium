import type { InstancedGeometry, TransferGeometry } from "@plantarium/types"
import insertArray from "./insertArray";
import rotate3D from "./rotate3D";

function applyTransformation(
  geo: TransferGeometry,
  offset: number[] = [0, 0, 0],
  rot: number[] = [0, 0, 0],
  scale: number[] = [1, 1, 1],
): TransferGeometry {
  const newPos = new Float32Array(geo.position.length);

  const l = geo.position.length;
  const pos = geo.position;
  for (let i = 0; i < l; i += 3) {
    //Apply scale
    const x = pos[i + 0] * scale[0];
    const y = pos[i + 1] * scale[1];
    const z = pos[i + 2] * scale[2];

    //Apply rotation
    const _x = x;
    const _y = Math.cos(rot[0]) * y - Math.sin(rot[0]) * z;
    const _z = Math.sin(rot[0]) * y + Math.cos(rot[0]) * z;

    const __x = Math.cos(rot[1]) * _x - Math.sin(rot[1]) * _z;
    const __y = _y;
    const __z = Math.sin(rot[1]) * _x + Math.cos(rot[1]) * _z;


    //Apply offset
    newPos[i + 0] = __x + offset[0];
    newPos[i + 1] = __y + offset[1];
    newPos[i + 2] = __z + offset[2];
  }

  return {
    position: newPos,
    uv: geo.uv,
    normal: geo.normal,
    index: geo.index,
  };
}

export default function convertInstancedGeometry(instances: InstancedGeometry): TransferGeometry[] {

  if (Array.isArray(instances)) return instances.map(i => convertInstancedGeometry(i)).flat()

  const exp: TransferGeometry[] = [];
  const geometry: TransferGeometry = {
    position: instances.position,
    normal: instances.normal,
    uv: instances.uv,
    index: instances.index,
  };

  const offset = instances.offset;
  const rotation = instances.rotation;
  const scale = instances.scale;

  const l = instances.offset.length;
  for (let i = 0; i < l; i += 3) {
    exp.push(
      applyTransformation(
        geometry,
        [offset[i + 0], offset[i + 1], offset[i + 2]],
        [rotation[i + 0], rotation[i + 1], rotation[i + 2]],
        [scale[i + 0], scale[i + 1], scale[i + 2]],
      ),
    );
  }

  return exp;
}
