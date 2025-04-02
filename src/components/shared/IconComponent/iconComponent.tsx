import Image from 'next/image';
import React, { type ReactNode } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

type IconComponentProps = {
  textColor: string;
  backgroundColor: string;
  iconUrl?: StaticImport | string;
  svgIcon?: ReactNode;
};

export default function IconComponent({
  textColor,
  backgroundColor,
  iconUrl,
  svgIcon,
}: IconComponentProps) {
  return (
    <div
      className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
      style={{ color: textColor, backgroundColor }}>
      {iconUrl ? (
        <Image src={iconUrl as StaticImport} alt="Icon component" width={80} height={80} />
      ) : (
        svgIcon
      )}
    </div>
  );
}
