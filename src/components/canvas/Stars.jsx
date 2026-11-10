import { lazy, Suspense } from 'react'
import { useSceneVisibility } from './useSceneVisibility'
import { useReducedMotion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

const Stars = lazy(() => import('./StarsScene'))

const StarsCanvas = () => {
  const reduceMotion = useReducedMotion()
  const { ref, mounted, visible } = useSceneVisibility()
  const frameloop = visible ? (reduceMotion ? "demand" : "always") : "never"

  return (
    <div ref={ref} className="w-full h-auto absolute inset-0 z-[-1]">
      {mounted && (
        <Canvas frameloop={frameloop} camera={{ position: [0, 0, 1]}}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  )
}

export default StarsCanvas