export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export interface ProductImageProps {
  src: string;
  alt: string;
}

export interface RatingStarsProps {
  rating: number;
}

export interface CarouselImageProps {
  src: string;
  alt: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
} 