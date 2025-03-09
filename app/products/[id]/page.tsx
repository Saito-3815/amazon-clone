import { Star } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

async function ProductPage({ params: { id } }: PageProps) {
  // 商品データ
  const products = [
    {
      id: 1,
      title: "新型Fire TV Stick",
      price: 4980,
      description:
        "Alexa対応音声認識リモコン付属。4K Ultra HD、Dolby Vision対応の高性能ストリーミングデバイス。",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Echo Dot (第5世代)",
      price: 6980,
      description:
        "コンパクトで高音質なスマートスピーカー。Alexaでスマートホーム操作や音楽再生が可能。",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Kindle Paperwhite",
      price: 15980,
      description:
        "防水機能搭載、高解像度ディスプレイ、長時間バッテリー。読書をより快適に。",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      id: 4,
      title: "ゲーミングヘッドセット",
      price: 8990,
      description:
        "7.1サラウンドサウンド、ノイズキャンセリングマイク、快適な装着感。",
      category: "Gaming",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: 4,
    },
    {
      id: 5,
      title: "ワイヤレスイヤホン",
      price: 12800,
      description:
        "ノイズキャンセリング機能搭載、最大30時間再生、防水性能IPX7。",
      category: "Electronics",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 4,
    },
    {
      id: 6,
      title: "4Kウェブカメラ",
      price: 9800,
      description:
        "4K Ultra HD、オートフォーカス、デュアルマイク内蔵。テレワークに最適。",
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
    },
  ];

  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 px-4 mt-12 pb-10">
      <div className="w-full md:w-1/2">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="flex items-center gap-2">
          {Array(product.rating)
            .fill(null)
            .map((_, i) => (
              <Star key={i} className="h-5 text-yellow-500" />
            ))}
          <span className="text-gray-500">({product.rating})</span>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <p className="text-gray-700 text-lg">{product.description}</p>
        </div>

        <div className="text-2xl font-bold">
          ¥{product.price.toLocaleString()}
        </div>

        <div className="space-y-2">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
            カートに追加
          </button>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            今すぐ購入
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="font-bold text-lg mb-2">商品の特徴</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>高品質な{product.category}製品</li>
            <li>信頼性の高いブランド</li>
            <li>充実したアフターサポート</li>
            <li>スムーズな操作性</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
