import { join } from 'helpers';
import { PlantariumSettings } from '@plantarium/types';
import tube from 'shapes/tube';
import { Vec3 } from 'ogl';
import { noise, interpolateArray, interpolateSkeleton } from 'helpers';
import arbitraryRotate from 'helpers/arbitraryRotate';

export const skeleton = (part: PlantPart, settings: PlantariumSettings) => {
  const branches: Float32Array[] = [];

  const gravity = 0;
  const branchLengthArray = [0, 1];
  const branchLengthVariation = 0;

  const branchOffset = 0;
  const branchOffsetVariation = 0;

  const branchAngleArray = [0, 1];
  const branchAngleVariation = 0;

  const branchRotation = 0;
  const branchRotationVariation = 0;

  const branchNoiseStrengthArray = [0, 1];
  const branchNoiseStrength = 1;
  const branchNoiseScale = 1;

  const {
    length = 1,
    amount: branchAmount = 4,
    input: { skeletons: inputSkeletons },
    thiccness = 0.2,
    lowestBranch = 0.5,
  } = part.parameters;

  const branchDistance = (1 - lowestBranch) / branchAmount;

  for (let i = 0; i < inputSkeletons.length; i++) {
    const skeleton = inputSkeletons[i];

    const skeletonLength = skeleton.length / 3;

    for (let j = 0; j < branchAmount; j++) {
      const a = j / branchAmount;

      const switchSide = j % 2 === 0;

      //Compute branch length
      let length = interpolateArray(branchLengthArray, 1 - a);
      /*       if (branchLengthVariation) {
        length -=
          length *
          branchLengthVariation *
          ((noise.n1d(341341 + j * 123969) + 1) / 2);
      } */

      //Compute position along stem
      let positionAlongStem = lowestBranch + j * branchDistance;
      /*       if (branchOffsetVariation) {
        positionAlongStem -=
          branchDistance * branchOffsetVariation * noise.n1d(92584 + j * 198);
      }
  
      if (switchSide) {
        positionAlongStem += (1 - branchOffset) * branchDistance;
      } */

      //Point along stem
      const origin = new Vec3().fromArray(
        interpolateSkeleton(skeleton, positionAlongStem),
      );

      //Get previos and next stem segment
      const p = Math.max(
        Math.min(
          Math.floor(skeletonLength * positionAlongStem),
          skeletonLength - 3,
        ),
        1,
      );
      const n = Math.max(
        Math.min(
          Math.ceil(skeletonLength * positionAlongStem),
          skeletonLength - 2,
        ),
        1,
      );
      const prevSegment = new Vec3(
        origin[0] - skeleton[p * 3 - 3],
        origin[1] - skeleton[p * 3 - 2],
        origin[2] - skeleton[p * 3 - 1],
      );
      const nextSegment = new Vec3(
        skeleton[n * 3 + 3] - origin[0],
        skeleton[n * 3 + 4] - origin[1],
        skeleton[n * 3 + 5] - origin[2],
      );

      const average = new Vec3(
        (prevSegment[0] + nextSegment[0]) / 2,
        (prevSegment[1] + nextSegment[1]) / 2,
        (prevSegment[2] + nextSegment[2]) / 2,
      );

      const offsetVec = new Vec3().cross(prevSegment, nextSegment).normalize();

      const rotationAxis = new Vec3().cross(average, offsetVec);

      let branchAngle = interpolateArray(branchAngleArray, a) * Math.PI;
      if (branchAngleVariation) {
        branchAngle -=
          branchAngle *
          branchAngleVariation *
          noise.n1d(896217392 + j * 123) *
          Math.PI;
      }

      let _branchRotation = branchRotation * j;
      if (branchRotationVariation) {
        _branchRotation -=
          branchRotationVariation * noise.n1d(896217392 + j * 123) * Math.PI;
      }

      const amountPoints = 3 + Math.floor(skeletonLength * length * 0.5);

      branches[j] = new Float32Array(amountPoints * 3);

      for (let k = 0; k < amountPoints; k++) {
        const _a = k / (amountPoints - 1);

        //Create the basic point
        let x = offsetVec[0] * (switchSide ? -length : length) * _a;
        let y = 0 * (switchSide ? -length : length) * _a;
        let z = offsetVec[2] * (switchSide ? -length : length) * _a;

        if (branchNoiseStrength) {
          x +=
            _a *
            (noise.n1d(2312312 + _a * branchNoiseScale + i * 100 + j * 100) *
              interpolateArray(branchNoiseStrengthArray, _a) *
              branchNoiseStrength);
          y +=
            _a *
            (noise.n1d(92538165 + _a * branchNoiseScale + i * 100 + j * 100) *
              interpolateArray(branchNoiseStrengthArray, _a) *
              branchNoiseStrength);
          z +=
            _a *
            (noise.n1d(5126126 + _a * branchNoiseScale + i * 100 + j * 100) *
              interpolateArray(branchNoiseStrengthArray, _a) *
              branchNoiseStrength);
        }

        //Apply angle rotation
        const pos = arbitraryRotate(
          new Vec3(x, y, z),
          switchSide ? branchAngle : -branchAngle,
          rotationAxis,
        );

        //Apply rotation around stem
        const _pos = arbitraryRotate(pos, _branchRotation, average);

        //Apply gravity; (sine wave for now, rotating around average would look nicer)
        const curlBack = 1 - _a * 0.5 * gravity;
        const __x = _pos[0] * curlBack;
        const __y =
          _pos[1] +
          Math.sin(_a * Math.PI * 0.5 + Math.PI * 0.5) * gravity -
          gravity;
        const __z = _pos[2] * curlBack;

        branches[j][k * 3 + 0] = origin[0] + __x;
        branches[j][k * 3 + 1] = origin[1] + __y;
        branches[j][k * 3 + 2] = origin[2] + __z;
      }

      //const element = array[i];
    }
  }

  return branches;
};

export const oldskeleton = (part: PlantPart, settings: PlantariumSettings) => {
  const {
    length = 1,
    amount = 4,
    input: { skeletons: inputSkeletons },
    thiccness = 0.2,
    lowestBranch = 0.5,
  } = part.parameters;

  const skeletons: Float32Array[] = [];

  for (let s = 0; s < inputSkeletons.length; s++) {
    const skelly = inputSkeletons[s];

    for (let i = 0; i < amount; i++) {
      const a = i / amount;
      const [x, y, z, thicc] = interpolateSkeleton(
        skelly,
        lowestBranch + a * lowestBranch,
      );

      skeletons.push(
        Float32Array.from([
          x,
          y,
          z,
          thicc * thiccness,
          x + length,
          y,
          z,
          thicc * thiccness,
        ]),
      );
    }
  }

  return skeletons;
};

export const geometry = (part: PlantPart, settings: PlantariumSettings) => {
  const { stemResX = 3 } = settings;

  console.log(part);

  return join(
    part.geometry ?? part.parameters.input.geometry,
    ...part.skeletons.map((skeleton) => {
      return tube(skeleton, stemResX);
    }),
  );
};