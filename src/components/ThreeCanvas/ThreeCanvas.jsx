import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


import Text from './Text'

function Jumbo() {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
  return (
    <group ref={ref}>
      <Text hAlign="right" position={[-12, 6.5, 0]} children="THREE" />
      <Text hAlign="right" position={[-12, 0, 0]} children="TRES" />
      <Text hAlign="right" position={[-12, -6.5, 0]} children="TROIS" />
    </group>
  )
}



export const ThreeCanvas = () => {
    return (
      <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
      </Suspense>
    </Canvas>
    )
  }