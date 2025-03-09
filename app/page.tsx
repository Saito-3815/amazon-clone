import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header";
import ProductFeed from "@/app/components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed />
      </main>
    </div>
  );
}
