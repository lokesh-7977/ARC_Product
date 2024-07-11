"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  const banners = [
    { imageUrl: "https://neemans.com/cdn/shop/files/Web-Banner_The-Comfornauts_DF_050724_x1360.jpg?v=1720162345" },
    { imageUrl: "https://neemans.com/cdn/shop/files/Desktop01_524c50e4-741c-4252-a4ac-6125963c41e6_x1360.jpg?v=1719215440" },
    { imageUrl: "https://neemans.com/cdn/shop/files/Desktop02_39d5b43a-0417-42ec-affc-c9ecc1df5779_x1360.jpg?v=1719215554" },
  ];

  return (
    <div className="w-full relative">
      <Carousel className="w-full max-w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden">
                <Card className="relative overflow-hidden rounded-lg">
                  <CardContent className="relative flex items-center justify-center h-[300px] sm:h-[450px] md:h-[650px]">
                    <Image
                      src={banner.imageUrl}
                      alt={`Banner ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 z-10 p-2 bg-white bg-opacity-50 rounded-full transform -translate-y-1/2 top-1/2 hover:bg-opacity-75 transition duration-300" />
        <CarouselNext className="absolute right-2 z-10 p-2 bg-white bg-opacity-50 rounded-full transform -translate-y-1/2 top-1/2 hover:bg-opacity-75 transition duration-300" />
      </Carousel>
    </div>
  );
}