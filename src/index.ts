// import * as Three from 'three'

// const scene = new Three.Scene()
// const camera = new Three.PerspectiveCamera(110, window.innerWidth / window.innerHeight)
// const renderer = new Three.WebGLRenderer()

// console.log('Scene built')

// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// console.log('Scene appended to DOM')

// const geometry = new Three.BoxGeometry()
// const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } )
// const cube = new Three.Mesh( geometry, material )

// console.log('3D mesh built')

// scene.add(cube)

// console.log('3D mesh rendered')


// camera.position.z = 5

// function animate(): void {
//   requestAnimationFrame(animate)
//   renderer.render(scene, camera)
// }

// animate()

import Controller from './controller'

const controller = new Controller()
controller.setDeadzone(0.1)

window.addEventListener('gamepadconnected', e => {
  if (e instanceof GamepadEvent) {
    controller.attach(e.gamepad)
  }
})

window.addEventListener('gamepadisconnected', controller.detach)

controller.startPoll(100)
