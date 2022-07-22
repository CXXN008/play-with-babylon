import * as BABYLON from 'babylonjs'

const canvas = <HTMLCanvasElement>document.getElementById('app')
// Load the 3D engine
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })
const createScene = () => {
  const scene = new BABYLON.Scene(engine)

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);
  
  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene)


  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  box.position.y = 0.5;
  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;

  const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 })

  // const music = new BABYLON.Sound('music', 'https://playground.babylonjs.com/sounds/cellolong.wav', scene, null, { loop: true, autoplay: true })
  return scene
}

const scene = createScene()

// run the render loop
engine.runRenderLoop(function () {
  scene.render()
})
// the canvas/window resize event handler
window.addEventListener('resize', function () {
  engine.resize()
})
