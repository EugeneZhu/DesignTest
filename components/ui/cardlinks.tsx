import React from "react";

interface CardLinksProps {
    href1: string;
    href2: string;
}

const CardLinks: React.FC<CardLinksProps> = ({ href1, href2 }) => {
    return (
        <div className="flex w-full justify-between">
            <a className="underline text-center" href={href1} target="_blank">
                Linkedin
            </a>
            <a className="rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/75 h-9 px-4 py-2" href={href2} target="_blank">
                Visit Website
            </a>
        </div>
    );

}

export { CardLinks }