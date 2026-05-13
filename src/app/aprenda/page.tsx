import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const categories = [
  {
    emoji: "🐾",
    title: "Produtos Animal Life",
    description: "Conteúdos feitos por nós",
    href: "/aprenda/animal-life",
  },
  {
    emoji: "🌟",
    title: "Recomendações Especiais",
    description: "Infoprodutos selecionados",
    href: "/aprenda/parceiros",
  },
];

export default function Aprenda() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-1">
          Conheça e Ensine Seu Pet 📚
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-6">
          Escolha uma categoria:
        </p>
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card-hover flex items-center gap-4 bg-[var(--color-bg-card)] rounded-2xl p-5 no-underline"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <p className="font-semibold text-lg text-[var(--color-text-main)]">
                  {cat.title}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <BackButton href="/" />
        </div>
      </main>
      <Footer />
    </>
  );
}
