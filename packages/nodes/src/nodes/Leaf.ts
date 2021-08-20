const defaultValue = [
  {
    x: 1,
    y: 1,
    pinned: true,
  },
  {
    x: 0.62,
    y: 0.84,
    pinned: false,
  },
  {
    x: 0.54,
    y: 0.63,
    pinned: false,
  },
  {
    x: 0.38,
    y: 0.41,
    pinned: true,
  },
  {
    x: 0.44,
    y: 0.23,
    pinned: false,
  },
  {
    x: 0.64,
    y: 0.12,
    pinned: false,
  },
  {
    x: 0.98,
    y: 0.02,
    pinned: true,
  },
];

const node: PlantNode = {
  title: 'Leaf',
  type: 'leaf',
  outputs: ['plant', 'leaf'],
  parameters: {
    input: {
      type: 'plant',
      external: true,
    },
    size: {
      type: ['number', 'parameter', 'curve', 'vec2'],
      inputType: 'slider',
      min: 0,
      max: 3,
      step: 0.05,
      value: 0,
    },
    shape: {
      type: 'leaf',
      external: true,
      defaultValue,
    },
    amount: {
      type: 'number',
      min: 0,
      max: 20,
      value: 1,
    },
  },

  computeSkeleton(parameters) {
    const { shape } = parameters;
    console.log(shape);

    return {};
  },

  computeGeometry(parameters) {
    const { input } = parameters;
    return {
      geometry: input.result.geometry,
    };
  },
};

export default node;