import Image from "next/image";
import React from "react";
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
import { AgencyLogo } from "@/components/ui/agencylogo"

const AgencyList = () => {
    return (
        <>
        <div className="grid grid-cols-3 gap-4">
        <Card>
            <CardHeader>
                <CardInline>
                <div>
                <CardTitle>Turtle</CardTitle>
                <CardDescription>Vancouver, British Columbia</CardDescription>
                <CardDescription>51-200</CardDescription>
                <CardBadge><Badge>UX/UI</Badge><Badge>Web</Badge></CardBadge>
                </div>
                <AgencyLogo src="/images/turtledesign_logo.jpg" alt="Image of Turtle logo."></AgencyLogo>
                </CardInline>
            </CardHeader>
            <CardContent>
                <p>We design world-class teams that design world-class products.</p>
            </CardContent>
            <CardFooter>
                <CardLinks href1="https://www.linkedin.com/company/turtledesign/" href2="https://www.turtle.design/"></CardLinks>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardInline>
                <div>
                <CardTitle>Daybreak Studio</CardTitle>
                <CardDescription>Toronto, Ontario</CardDescription>
                <CardDescription>11-50</CardDescription>
                <CardBadge><Badge>Brand</Badge><Badge>Web</Badge><Badge>Software</Badge></CardBadge>
                </div>
                <AgencyLogo src="/images/daybreakstudio_logo.jpg" alt="Image of Daybreak Studios logo."></AgencyLogo>
                </CardInline>
            </CardHeader>
            <CardContent>
                <p>A technology first design studio.</p>
            </CardContent>
            <CardFooter>
                <CardLinks href1="https://www.linkedin.com/company/daybreakstudio/" href2="https://www.daybreak.studio/"></CardLinks>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardInline>
                <div>
                <CardTitle>Green Stone</CardTitle>
                <CardDescription>Toronto, Ontario</CardDescription>
                <CardDescription>11-50</CardDescription>
                <CardBadge><Badge>UX/UI</Badge><Badge>Brand</Badge><Badge>Service</Badge></CardBadge>
                </div>
                <AgencyLogo src="/images/green_stone_logo.jpg" alt="Image of Green Stone logo."></AgencyLogo>
                </CardInline>
            </CardHeader>
            <CardContent>
                <p>A digital experience agency that delivers customer loyalty through human-centric products, platforms, and journeys.</p>
            </CardContent>
            <CardFooter>
                <CardLinks href1="https://www.linkedin.com/company/green-stone/" href2="https://www.greenstone.co//"></CardLinks>
            </CardFooter>
        </Card>
        </div>
        </>
      );
    
}

export {AgencyList}