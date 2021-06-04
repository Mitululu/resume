import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

document.querySelector('#app').innerHTML = `
  <h1>This will be Mitul's resume page!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
