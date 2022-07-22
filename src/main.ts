import * as BABYLON from 'babylonjs'

const canvas = <HTMLCanvasElement>document.getElementById('app')
// Load the 3D engine
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })
const createScene = () => {
  const scene = new BABYLON.Scene(engine)

  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene)
  camera.attachControl(canvas, true)

  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)

  const box = BABYLON.MeshBuilder.CreateBox('box', { size: 1 }, scene)
  box.position.y = .5

  const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 })

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
