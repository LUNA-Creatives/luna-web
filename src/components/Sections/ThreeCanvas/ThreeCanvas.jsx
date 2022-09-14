import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {  PerspectiveCamera, Stars,  Loader, OrbitControls } from '@react-three/drei'
import { Box } from '@mui/material';

import { TextGroup } from './TextGroup';
import { Model } from './Model';
import useStyles from './style';

export const ThreeCanvas = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.overlay}></Box>
      <Box className={classes.container}>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={95}>
          <pointLight intensity={2} position={[-10, -5, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.5} penumbra={1} position={[-15, 20, -15]} shadow-mapSize={[3000, 3000]} shadow-bias={0.1001} />
        </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model  position={[0, 5, 0]} scale={0.8} url={'space-landing/scene.gltf'} clock={'0'} />
            <TextGroup scale={'0.03'}/>
            <Model url={'iphone/scene.gltf'} position={[5, -1, 10]}  scale={0.01} clock={'-0.3'}/>
            <Model url={'macbook/scene.gltf'} position={[10, 4, -2]}  scale={0.9} clock={'0.2'}/>
            <Model url={'ipad/scene.gltf'} position={[-10, 0, -6]} scale={8.8} clock={'0.3'}/>
            <Model url={'astronaut/scene.gltf'} position={[-7, -5, 8]}   scale={0.01} clock={'0.2'}/>
          <Stars radius={500} depth={50} count={2000} factor={10}/>   
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={1} enablePan={false} enableRotate={false} enableZoom={false}/>
        </Canvas>
        <Loader />
      </Box>
      </Box>
  );
};