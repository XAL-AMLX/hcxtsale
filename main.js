// import './style.css'

import * as THREE from 'three';
import {OrbitControls} from './OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(150);

renderer.render(scene, camera);
// document.body.appendChild( renderer.domElement );

const hcxTexture = new THREE.TextureLoader().load( 's3.jpg' );


const geometry = new THREE.BoxGeometry(25,25,25);
const material = new THREE.MeshBasicMaterial( {map: hcxTexture} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const pointLight = new THREE.PointLight( 0xffffff, 8, 100 );
pointLight.position.set( -30,20,30);

// const size = 10;
// const divisions = 10;
// const gridHelper = new THREE.GridHelper(200,50 );


// const sphereSize = 4;
// const pointLightHelper = new THREE.PointLightHelper( pointLight );

cube.position.z =-30;
cube.position.setX(-80);


//scene.add(gridHelper)
scene.add( pointLight );
// const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light

// const controls = new OrbitControls( camera, renderer.domElement );
const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.BoxGeometry(.15,.15,.15 );
  const material = new THREE.MeshStandardMaterial( {map: hcxTexture} );
  const star = new THREE.Mesh( geometry, material );

  const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x,y,z);
  scene.add( star );
}

Array(390).fill().forEach(addStar);

 const spaceTexture = new THREE.TextureLoader().load('space29.png')
 scene.background = spaceTexture;

// const hcxTexture = new THREE.TextureLoader().load( 'hcxTex.jpg' );


// const HcxToken = new THREE.Mesh(
//   new THREE.PlaneGeometry(20,5),
//   new THREE.MeshStandardMaterial( {map: hcxTexture})
// );

// scene.add(HcxToken);

// const loader = new THREE.CubeTextureLoader();


// const textureCube = loader.load( 'hcxTex.jpg' );

// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

//  const HcxToken = new THREE.Mesh(
   
//    new THREE.MeshSMaterial( { color: 0xffffff, envMap: textureCube } )
//  );




// immediately use the texture for material creation
//const material = new THREE.MeshBasicMaterial( { map: hcxTexture } );

//camera.position.z = 3;

function animate(){
  requestAnimationFrame(animate);

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;
  cube.rotation.z += 0.002;

  controls.update();

  renderer.render(scene, camera);
}

animate()
// document.body.appendChild( renderer.domElement );
