import React, {ReactNode} from "react";

interface CardInlineProps {
    children: ReactNode;
  }


const CardInline: React.FC<CardInlineProps> = ({ children }) => {
    return (
        <>
            <div className="flex inline-block w-full">
                {children}
            </div>
        </>
      );
    
}

export {CardInline}