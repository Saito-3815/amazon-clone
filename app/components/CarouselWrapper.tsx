"use client";

interface CarouselWrapperProps {
  children: React.ReactNode;
}

export default function CarouselWrapper({ children }: CarouselWrapperProps) {
  const { Carousel } = require("react-responsive-carousel");
  require("react-responsive-carousel/lib/styles/carousel.min.css");

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      swipeable
      emulateTouch
    >
      {children}
    </Carousel>
  );
}
