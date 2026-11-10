import { lazy, Suspense } from 'react'
import { useSceneVisibility } from './useSceneVisibility'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

const Stars = lazy(() => import('./StarsScene'))

const StarsCanvas = () => {
  const { ref, mounted, visible } = useSceneVisibility()
  return (
    <div ref={ref} className="w-full h-auto absolute inset-0 z-[-1]">
      {mounted && (
        <Canvas frameloop={visible ? "always" : "never"} camera={{ position: [0, 0, 1]}}>
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