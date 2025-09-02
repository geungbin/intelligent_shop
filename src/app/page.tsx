import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <main className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 id="products" className="text-2xl font-bold mb-6">인기 상품</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
}