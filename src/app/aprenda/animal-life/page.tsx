import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ProductGrid from "@/components/ProductGrid";
import infoprodutos from "../../../../data/infoprodutos.json";

export default function AnimalLifeProdutos() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6">
          🐾 Produtos Animal Life
        </h2>
        <ProductGrid products={infoprodutos["animal-life"]} />
        <div className="text-center">
          <BackButton href="/aprenda" />
        </div>
      </main>
      <Footer />
    </>
  );
}
