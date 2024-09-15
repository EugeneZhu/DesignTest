import React from "react";
import Image from "next/image";

interface AgencyLogoProps {
    src: string;
    alt: string;
  }

const AgencyLogo : React.FC<AgencyLogoProps> = ({ src, alt }) => {
    return (
        <>
            <Image src= {src} alt= {alt} width={50} height={50} className="ml-auto h-full w-auto object-contain rounded"></Image>
        </>
      );
    
}

export { AgencyLogo }