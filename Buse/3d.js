import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//#region init
window.onload = function(){
  init();
}

function init(){
  console.log('jajaj')
  document.getElementById('submitForm').addEventListener('click', testLalala)
}

//#endregion init
// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
// camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('/images/Sky.jpg');
// scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('/images/Team.jpg');

const jeff = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.75, 2.5), new THREE.MeshBasicMaterial({ map: jeffTexture }));

// scene.add(jeff);

jeff.position.z = -7;
jeff.position.x = 0;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  jeff.rotation.y += 0.01;

  camera.position.z = t * -0.005;
  jeff.position.z = camera.position.z - 6;

}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
}

animate();




function testLalala() {
  var keineFalscheEingabe = true;
  const vname = function () {
    let m = document.getElementById('vorname');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe vorname")
    }
  }

  let nname = function () {
    let m = document.getElementById('nachname');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe nachname")
    }

  }

  let email = function () {
    let m = document.getElementById('emailadresse');
    if (validateEmail(m.value) && m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe mail")
    }
  }

  let nachricht = function () {
    let m = document.getElementById('nachricht');
    if (m.value != undefined) {
      return m.value
    } else {
      keineFalscheEingabe = false;
      fFalscheEingabe(m)
      return ("hoe nachricht")
    }
  }

  console.log(vname())
  console.log(nname())
  console.log(email())
  console.log(nachricht())
  return [vname(), nname(), email(), nachricht(), keineFalscheEingabe]
}

function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function fFalscheEingabe(pBetroffenesElement) {
  //Implement Error Handeling
  return pBetroffenesElement
}
