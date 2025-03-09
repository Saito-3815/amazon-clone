import { CarouselImageProps } from "@/types";
import Image from "next/image";

export default function CarouselImage({ src, alt }: CarouselImageProps) {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      width={1500}
      height={600}
      className="object-cover"
      priority={false}
    />
  );
}
