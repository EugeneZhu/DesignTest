import React from "react";
import Image from "next/image";
import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CardLinks } from "@/components/ui/cardlinks"
import { CardInline } from "@/components/ui/cardinline"

const agencies = [
  {
    title: "Turtle",
    location: "Vancouver, British Columbia",
    employees: "51-200",
    services: [
      "UX/UI",
      "Web"
    ],
    logo: "/images/turtledesign_logo.jpg",
    alt: "Image of Turtle logo.",
    content: "We design world-class teams that design world-class products",
    link1: "https://www.linkedin.com/company/turtledesign",
    link2: "https://www.turtle.design/"
  },
  {
    title: "Daybreak Studio",
    location: "Toronto, Ontario",
    employees: "11-50",
    services: [
      "Brand",
      "Web",
      "Software"
    ],
    logo: "/images/daybreakstudio_logo.jpg",
    alt: "Image of Daybreak Studios logo.",
    content: "A technology first design studio.",
    link1: "https://www.linkedin.com/company/daybreakstudio",
    link2: "https://www.daybreak.studio/"
  },
  {
    title: "Green Stone",
    location: "Toronto, Ontario",
    employees: "11-50",
    services: [
      "UX/UI",
      "Brand",
      "Service"
    ],
    logo: "/images/green_stone_logo.jpg",
    alt: "Image of Green Stone logo.",
    content: "A digital experience agency that delivers customer loyalty through human-centric products, platforms, and journeys.",
    link1: "https://www.linkedin.com/company/green-stone/",
    link2: "https://www.greenstone.co/"
  },
]




const AgencyList = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {
          agencies.map((agency: any, i: number) => (
            <Card key={i}>
              <CardHeader>
                <CardInline>
                  <div>
                    <CardTitle>{agency.title}</CardTitle>
                    <CardDescription>{agency.location}</CardDescription>
                    <CardDescription>{agency.employees}</CardDescription>
                    {agency.services.map((service: string, j: number) => (
                      <CardBadge key={j}>
                        <Badge>
                          {service}
                        </Badge>
                      </CardBadge>
                    ))}
                  </div>
                  <Image src={agency.logo} alt={agency.alt} width={50} height={50} className="ml-auto h-full w-auto object-contain rounded"></Image>
                </CardInline>
              </CardHeader>
              <CardContent>
                <p>{agency.content}</p>
              </CardContent>
              <CardFooter>
                <CardLinks href1={agency.link1} href2={agency.link2} />
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </>
  );

}

export { AgencyList }
