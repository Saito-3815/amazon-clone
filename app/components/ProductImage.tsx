import { ProductImageProps } from "@/types";
import Image from "next/image";

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      src={src}
      width={200}
      height={200}
      className="object-contain h-48 w-48 mx-auto"
      alt={alt}
      loading="lazy"
    />
  );
}
