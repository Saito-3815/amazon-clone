import { CarouselImageProps, Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "新型Fire TV Stick",
    price: 4980,
    description: "Alexa対応音声認識リモコン付属。4K Ultra HD、Dolby Vision対応の高性能ストリーミングデバイス。",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: 4,
  },
  {
    id: 2,
    title: "Echo Dot (第5世代)",
    price: 6980,
    description: "コンパクトで高音質なスマートスピーカー。Alexaでスマートホーム操作や音楽再生が可能。",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Kindle Paperwhite",
    price: 15980,
    description: "防水機能搭載、高解像度ディスプレイ、長時間バッテリー。読書をより快適に。",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "ゲーミングヘッドセット",
    price: 8990,
    description: "7.1サラウンドサウンド、ノイズキャンセリングマイク、快適な装着感。",
    category: "Gaming",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: 4,
  },
  {
    id: 5,
    title: "ワイヤレスイヤホン",
    price: 12800,
    description: "ノイズキャンセリング機能搭載、最大30時間再生、防水性能IPX7。",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 4,
  },
  {
    id: 6,
    title: "4Kウェブカメラ",
    price: 9800,
    description: "4K Ultra HD、オートフォーカス、デュアルマイク内蔵。テレワークに最適。",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: 3,
  },
  {
    id: 7,
    title: "スマートウォッチ",
    price: 24800,
    description: "心拍数モニター、GPS搭載、50m防水、バッテリー寿命7日間。",
    category: "Wearables",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "メカニカルキーボード",
    price: 15800,
    description: "RGBバックライト、青軸スイッチ、耐久性10000万回クリック。",
    category: "Gaming",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4,
  }
];

export const BANNER_IMAGES: CarouselImageProps[] = [
  {
    src: "https://links.papareact.com/gi1",
    alt: "プライムデー特別セール",
  },
  {
    src: "https://links.papareact.com/6ff",
    alt: "新商品セール",
  },
  {
    src: "https://links.papareact.com/7ma",
    alt: "季節限定キャンペーン",
  },
]; 