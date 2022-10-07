import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { hslToRgb } from '../util/colors'

function PointsSphere(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 80
    ref.current.rotation.y -= delta / 120
  })
  let [sat, lightness] = [.8, .6]
  let hue = Math.random()

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={hslToRgb(hue, sat, lightness)} size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function Background(props) {
  return (
    <Canvas camera={{ position: [0, 0, 0.9] }}>
      <PointsSphere/>
      <PointsSphere/>
      <PointsSphere/>
      <PointsSphere/>
    </Canvas>
  )
}
