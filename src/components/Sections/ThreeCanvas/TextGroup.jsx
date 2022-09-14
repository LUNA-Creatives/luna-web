import {  useRef } from 'react';
import { Text } from './Text';

export const TextGroup = () => {
    const ref = useRef();
 
    return (
      <group ref={ref} scale={0.1}>
        <Text hAlign="right"  position={[-20, 0, 53]} children="FRAMTIDENS" />
        <Text hAlign="right"  position={[-30, -6.5, 53]} children="TECHPARTNER" />
      </group>
    );
  }