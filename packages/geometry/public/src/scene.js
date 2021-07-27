// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../@types/ogl.d.ts"/>
import {
  Box,
  Camera,
  Mesh,
  Orbit,
  Renderer,
  Transform,
} from '../ogl.js';

import { join, transferToGeometry } from '../dist/index.js';
import createParticle from './particles.js';
import { green } from './shaders.js';

const renderer = new Renderer({
  dpr: 2,
  canvas: document.getElementById('render-canvas'),
});
const gl = renderer.gl;
gl.clearColor(1, 1, 1, 1);

const camera = new Camera(gl, { fov: 35 });
camera.position.set(5, 3, 6);
camera.lookAt([0, 0, 0]);

function resize() {
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
  camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

const scene = new Transform();
const controls = new Orbit(camera);

const particles = createParticle(gl);
particles.setParent(scene);

const obj = new Mesh(gl, {
  geometry: new Box(gl, { size: 0 }),
  program: green(gl),
});
obj.setParent(scene);

requestAnimationFrame(update);
function update() {
  requestAnimationFrame(update);

  controls.update();
  renderer.render({ scene, camera });
}

update();

let tempScene = [];

export function add(o) {
  tempScene.push(o);
}

export function commit() {
  if (tempScene.length) {
    const geo = tempScene.length > 1 ? join(...tempScene) : tempScene[0];
    obj.geometry = transferToGeometry(gl, geo);
    obj.visible = true;
    if (particles.visible) {
      particles.setPositions(obj.geometry.attributes.position.data);
    }
  } else {
    obj.visible = false;
  }

  tempScene = [];
}

export function getVertices() {
  return obj.geometry.attributes.position.data.length / 3;
}

export function setParticleVisible(visible) {
  particles.visible = visible;
}