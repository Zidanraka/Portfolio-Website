import { lazy, Suspense } from 'react'
import { useSceneVisibility } from './useSceneVisibility'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = lazy(() => import('./BallScene'))

const BallCanvas = ({ icon }) => {
  const { ref, mounted, visible } = useSceneVisibility()
  return (
    <div ref={ref} className="h-full w-full">
      {mounted && (
        <Canvas frameloop={visible ? 'demand' : 'never'} gl={{preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  )
}

export default BallCanvas