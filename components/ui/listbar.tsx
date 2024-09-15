import React from "react";
import { Button } from "@/components/ui/button"

const ListBar = () => {
    return (
        <>
          <div className="w-full h-20 sticky top-0 mb-8">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                <ul className="w-full md:flex gap-x-6 text-black items-center justify-center">
                  <li>
                      <Button>All Agencies</Button>
                  </li>
                  <li>
                      <Button>Canada</Button>
                  </li>
                  <li>
                      <Button>USA</Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    
}

export {ListBar}