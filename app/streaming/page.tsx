import { LoadingSpinner } from "@/app/components/ui/loading-spinner";
import { PostCard } from "@/app/components/ui/post-card";
import { getPost, getPosts } from "@/app/lib/data";
import { Suspense } from "react";

// 投稿リストを取得するコンポーネント
async function PostList() {
  const posts = await getPosts();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

// 個別の投稿を取得するコンポーネント
async function SinglePost({ id }: { id: number }) {
  const post = await getPost(id);

  return <PostCard post={post} />;
}

export default function StreamingPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        ストリーミングデータフェッチのデモ
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">投稿リスト</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <PostList />
          </Suspense>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">個別の投稿</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <SinglePost id={1} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
