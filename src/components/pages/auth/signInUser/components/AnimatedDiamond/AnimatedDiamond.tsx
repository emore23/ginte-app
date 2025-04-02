'use client';

import Image from 'next/image';
import AnimatedIcon from '../../../../../../../public/assets/animated.png';

export default function AnimatedDiamond() {
  return (
    <div className="flex w-full h-full">
      <Image src={AnimatedIcon} alt="Animated Image" className="w-full h-full" />
    </div>
  );
}
