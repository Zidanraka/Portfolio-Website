import { lazy, Suspense } from 'react'
import { useSceneVisibility } from './useSceneVisibility'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = lazy(() => import('./EarthScene'))

const EarthCanvas = () => {
  const { ref, mounted, visible } = useSceneVisibility()
  return (
    <div ref={ref} className="h-full w-full">
      {mounted && (
        <Canvas shadows frameloop={visible ? 'demand' : 'never'} gl={{ preserveDrawingBuffer: true }} camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Earth />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default EarthCanvas