import { BANNER_IMAGES } from "@/constants/products";
import CarouselImage from "./CarouselImage";
import CarouselWrapper from "./CarouselWrapper";

// メインのBannerコンポーネントはサーバーコンポーネントとして実装
export default function Banner() {
  return (
    <section className="relative" aria-label="プロモーションバナー">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <CarouselWrapper>
        {BANNER_IMAGES.map((image) => (
          <div key={image.src}>
            <CarouselImage {...image} />
          </div>
        ))}
      </CarouselWrapper>
    </section>
  );
}
