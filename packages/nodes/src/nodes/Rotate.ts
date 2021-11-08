import { rotate3D } from '@plantarium/geometry';

const getRotationAxis = (mode: string) => {
  if (mode === 'X') return [1, 0, 0];
  if (mode === 'Z') return [0, 0, 1];
  return [0, 1, 0];
};

const node: PlantNode = {
  title: 'Rotate',
  type: 'rotate',

  outputs: ['plant'],

  parameters: {
    input: {
      type: 'plant',
      external: true,
    },
    type: {
      internal: true,
      label: false,
      type: 'select',
      values: ['Y', 'X', 'Z'],
    },
    spread: {
      internal: true,
      type: 'boolean',
      value: true,
    },
    angle: {
      type: 'number',
      inputType: 'slider',
      min: 0,
      max: Math.PI * 2,
      step: 0.05,
      value: 0,
    },
  },
  computeSkeleton(parameters, ctx) {
    const { input, type, spread } = parameters;

    const {
      result: { skeletons, allSkeletons },
    } = input;

    const rotationAxis = getRotationAxis(type as string);

    skeletons.forEach((skelly, j) => {
      const amount = skelly.length / 4;

      // const a = j / skeletons.length;

      const ox = skelly[0];
      const oy = skelly[1];
      const oz = skelly[2];

      const _a = j / skeletons.length;

      const angle =
        ctx.handleParameter(parameters.angle, _a) * (spread ? _a : 1);

      // Loop over every single joint in the skeleton
      for (let i = 1; i < amount; i++) {
        //Current point at skeleton
        let x = skelly[i * 4 + 0];
        let y = skelly[i * 4 + 1];
        let z = skelly[i * 4 + 2];

        //Subtract origin from point;
        x -= ox;
        y -= oy;
        z -= oz;

        //Rotate around axis
        [x, y, z] = rotate3D([x, y, z], rotationAxis, angle);

        //Move the point back
        x += ox;
        y += oy;
        z += oz;

        skelly[i * 4 + 0] = x;
        skelly[i * 4 + 1] = y;
        skelly[i * 4 + 2] = z;
      }
    });

    return {
      skeletons,
      allSkeletons,
    };
  },
  computeGeometry(parameters) {
    return parameters.input.result;
  },
};

export default node;