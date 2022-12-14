import { Vector3 } from 'three';
import { useMemo, useRef, useLayoutEffect } from 'react';
import boldUrl from '../../../assets/fonts/blob.blob';
import { Text3D } from '@react-three/drei';

export  const Text =({
  children,
  vAlign = 'right',
  hAlign = 'center',
  size = 1.5,
  ...props
}) =>{
  const config = useMemo(
    () => ({
      size: 40,
      height: 20,
      curveSegments: 48,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    []
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.position.x =
      hAlign === 'center' ? -size.x / 4 : hAlign === 'right' ? 0 : -size.x;
    mesh.current.position.y =
      vAlign === 'center' ? -size.y / 4 : vAlign === 'top' ? 0 : -size.y;
  });
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <meshPhongMaterial  />
      </Text3D>
    </group>
  );
}
