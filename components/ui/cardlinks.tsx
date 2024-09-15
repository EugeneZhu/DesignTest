import React from "react";

interface CardLinksProps {
    href1: string;
    href2: string;
  }

const CardLinks : React.FC<CardLinksProps> = ({ href1, href2 }) => {
    return (
        <>
            <a className="underline text-center" href={href1} target="_blank">
                Linkedin
            </a>
            <div className="w-full">
                <div className="inline-flex items-center justify-center float-right whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/75 h-9 px-4 py-2"><a href={href2} target="_blank">Visit Website</a></div>
            </div>
        </>
      );
    
}

export { CardLinks }