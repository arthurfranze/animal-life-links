import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ProductGrid from "@/components/ProductGrid";
import infoprodutos from "../../../../data/infoprodutos.json";

export default function Parceiros() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6">
          🌟 Recomendações Especiais
        </h2>
        <ProductGrid products={infoprodutos["parceiros"]} />
        <div className="text-center">
          <BackButton href="/aprenda" />
        </div>
      </main>
      <Footer />
    </>
  );
}
