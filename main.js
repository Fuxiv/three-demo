import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(
//  75,
//  window.innerWidth / window.innerHeight,
//  0.1,
//  1000,
//);
//camera.lookAt(0, 0, 0);
//const renderer = new THREE.WebGLRenderer();
//renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);
//const geometry = new THREE.BoxGeometry(1, 1, 1);
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//cube.position.y = 1;
//const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//directionalLight.position.x = -3;
//directionalLight.position.y = 2;
//directionalLight.position.z = 2;
//console.log(directionalLight);
//console.log(cube);
//scene.add(directionalLight);
//scene.add(cube);
//camera.position.z = 5;
//camera.position.y = 1;
//camera.position.x = -3;
//camera.rotation.y = -0.5;
//const loader = new GLTFLoader();
//loader.load(
//  "test.glb",
//  function (gltf) {
//    scene.add(gltf.scene);
//  },
//  undefined,
//  function (error) {
//    console.error(error);
//  },
//);
//function animate() {
//  renderer.render(scene, camera);
//}
//renderer.setAnimationLoop(animate);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1d4869, 1);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Glass Cube Material
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x88ccff,
  roughness: 0.1,
  transmission: 0.9, // Glass effect
  opacity: 0.7, // Semi-transparent
  transparent: true,
  reflectivity: 0.9,
  metalness: 0.5,
});
const geometry = new THREE.BoxGeometry(1, 1, 0.01);
const cube = new THREE.Mesh(geometry, glassMaterial);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop
function animate() {
  //  cube.rotation.x += 0.01;
  //  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
