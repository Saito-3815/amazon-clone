"use client";

export default function AddToCartButton() {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // リンクのナビゲーションを防止
    /* カート追加処理 */
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-auto button bg-yellow-400 hover:bg-yellow-500 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      aria-label="カートに追加"
    >
      カートに追加
    </button>
  );
}
