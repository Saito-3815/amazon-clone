export interface Post {
  id: number;
  title: string;
  content: string;
}

// 非同期データフェッチをシミュレートする関数
export async function getPosts(): Promise<Post[]> {
  // 投稿リストは5秒の遅延を設定
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // ダミーデータを返す
  return [
    { id: 1, title: "最初の投稿", content: "これは最初の投稿の内容です。" },
    { id: 2, title: "2番目の投稿", content: "これは2番目の投稿の内容です。" },
    { id: 3, title: "3番目の投稿", content: "これは3番目の投稿の内容です。" },
  ];
}

// 個別の投稿を取得する関数
export async function getPost(id: number): Promise<Post> {
  // 個別の投稿は2秒の遅延を設定
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // ダミーデータを返す
  return {
    id,
    title: `投稿 ${id}`,
    content: `これは投稿 ${id} の詳細な内容です。`,
  };
} 