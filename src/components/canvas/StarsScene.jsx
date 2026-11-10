import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  const sphere = useMemo(() => random.inSphere(new Float32Array(4998), { radius: 1.2 }), [])
  useFrame((state, delta) => {
    if (state.frameloop !== 'always') return
    ref.current.rotation.x -= delta/10
    ref.current.rotation.y -= delta/15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default Stars
