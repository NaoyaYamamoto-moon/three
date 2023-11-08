import * as THREE from 'three';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const ambientlight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientlight);

// Collada 形式のモデルデータを読み込む
const loader = new ColladaLoader();
// dae ファイルのパスを指定
loader.load('models/dae/snowman.dae', (collada) => {
  const model = collada.scene;
  model.rotation.x += getRoatation(30);
  model.rotation.y += getRoatation(-15);
  scene.add(model); // 読み込み後に3D空間に追加
});

function getRoatation(a){
  return a*Math.PI/180;
}

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();