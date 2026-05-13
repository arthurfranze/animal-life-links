import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ProductGrid from "@/components/ProductGrid";
import produtos from "../../../../data/produtos.json";

export default function Amazon() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6">🔵 Amazon</h2>
        <ProductGrid products={produtos["amazon"]} />
        <div className="text-center">
          <BackButton href="/achadinhos" />
        </div>
      </main>
      <Footer />
    </>
  );
}
