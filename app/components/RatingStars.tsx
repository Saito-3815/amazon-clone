import { RatingStarsProps } from "@/types";
import { Star } from "lucide-react";

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex" role="img" aria-label={`評価: ${rating}つ星`}>
      {Array(rating)
        .fill(null)
        .map((_, i) => (
          <Star key={i} className="h-5 text-yellow-500" />
        ))}
    </div>
  );
}
