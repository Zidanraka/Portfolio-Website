import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Decal, useTexture } from '@react-three/drei'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  const group = useRef(null)
  const phase = useRef(Math.random() * Math.PI * 2)

  useFrame(({ frameloop }, delta) => {
    if (frameloop !== 'always') return

    // Advance only on visible animation frames and limit jumps after stalls.
    phase.current += Math.min(delta, 0.1) * (1.75 / 4)
    const sine = Math.sin(phase.current)
    const object = group.current
    object.rotation.set(Math.cos(phase.current) / 8, sine / 8, sine / 20)
    object.position.y = sine / 5
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[ 2 * Math.PI, 0, 6.25]} flatShading map={decal}/>
      </mesh>
    </group>
  )
}

export default Ball
