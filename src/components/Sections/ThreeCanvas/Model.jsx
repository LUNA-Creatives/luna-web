import { useRef} from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Model = (props) => {
  const ref = useRef();  const gltf = useLoader(GLTFLoader, props.url);

  useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * props.clock))
  

  return <primitive ref={ref} {...props} object={gltf.scene} />;
};