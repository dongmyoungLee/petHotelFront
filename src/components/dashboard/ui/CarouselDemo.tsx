import * as React from "react"

import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import HotelCard from "@/components/dashboard/ui/HotelCard";

// max-w-sm
export function CarouselDemo() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent>
                                    <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-1">
                                        {/*<HotelCard />*/}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/*<CarouselPrevious />*/}
            {/*<CarouselNext />*/}
        </Carousel>
    )
}