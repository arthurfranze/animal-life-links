import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const links = [
  {
    emoji: "🛍️",
    title: "Achadinhos Pet",
    description: "Os melhores produtos para o seu bichinho",
    href: "/achadinhos",
  },
  {
    emoji: "📚",
    title: "Conheça e Ensine Seu Pet",
    description: "Conteúdos e cursos para donos de pets",
    href: "/aprenda",
  },
  {
    emoji: "💬",
    title: "Comunidade Animal Life",
    description: "Entre no nosso grupo exclusivo",
    href: "/comunidade",
  },
  {
    emoji: "🤝",
    title: "Mídia Kit & Parcerias",
    description: "Leve sua marca para quem ama pets",
    href: "/midia-kit",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 animate-fade-in">
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card-hover flex items-center gap-4 bg-[var(--color-bg-card)] rounded-2xl p-5 no-underline"
            >
              <span className="text-3xl">{link.emoji}</span>
              <div>
                <p className="font-semibold text-lg text-[var(--color-text-main)]">
                  {link.title}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
