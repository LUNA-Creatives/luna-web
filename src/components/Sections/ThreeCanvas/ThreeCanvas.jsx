import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {  PerspectiveCamera, Stars,  Loader, OrbitControls } from '@react-three/drei'
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import { Model } from './Model';
import useStyles from './style';
import {Header} from '../Header'

export const ThreeCanvas = ({data}) => {
  const classes = useStyles();
  const [ref, inView] = useInView();
  return (
    <Box className={classes.root}>
      <Box className={classes.overlay}><Header data={data} /></Box>
      <Box className={classes.container}>
      <Canvas ref={ref} dpr={[1.5, 2]} linear shadows>
        <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={60}>
          <pointLight intensity={2} position={[-10, -5, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.5} penumbra={1} position={[-15, 20, -15]} shadow-mapSize={[3000, 3000]} shadow-bias={0.1001} />
        </PerspectiveCamera>
        {inView && (
          <Suspense fallback={null}>
            <Model  position={[0, 0, 0]} scale={0.8} url={'space-landing/scene.gltf'} clock={'0'} />
            {/* <Model url={'iphone/scene.gltf'} position={[5, -8, 12]}  scale={0.01} clock={'-0.3'}/>
            <Model url={'macbook/scene.gltf'} position={[10, -2, -2]}  scale={0.6} clock={'0.2'}/>
            <Model url={'ipad/scene.gltf'} position={[-10, -6, -6]} scale={5.8} clock={'0.3'}/> */}
          <Stars radius={500} depth={50} count={500} factor={10}/>   
          </Suspense>
        )}
          {inView && (
            <OrbitControls autoRotate autoRotateSpeed={1} enablePan={false} enableRotate={false} enableZoom={false}/>
          )}
        </Canvas>
        <Loader />
      </Box>
      </Box>
  );
};