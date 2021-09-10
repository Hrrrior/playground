import * as THREE from 'three'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xbfe3dd)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
// document.body.appendChild(renderer.domElement)
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 'orange' })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

const animate = function () {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

export default {
  name: 'Canvas',
  // data () { return { box: renderer.domElement } },
  created () {
    animate()
  }
}
