import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const benefits = [
  { emoji: "🔥", text: "Promoções exclusivas antes de todo mundo" },
  { emoji: "🐶", text: "Dicas e novidades do mundo pet todo dia" },
  { emoji: "🛍️", text: "Achadinhos imperdíveis direto no seu WhatsApp" },
  { emoji: "❤️", text: "Uma comunidade que ama pets tanto quanto você" },
];

export default function Comunidade() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 animate-fade-in">
        <section className="text-center mb-8">
          <span className="text-6xl block mb-4">💬</span>
          <h2 className="text-3xl font-bold mb-2">Comunidade Animal Life</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            O lugar onde os amantes de pets se encontram!
          </p>
        </section>

        <section className="mb-8">
          <div className="flex flex-col gap-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[var(--color-bg-card)] rounded-xl p-4"
              >
                <span className="text-2xl">{b.emoji}</span>
                <p className="text-[var(--color-text-main)]">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-8">
          <p className="text-[var(--color-text-secondary)] text-lg">
            ✅ Mais de 500 membros já fazem parte!
          </p>
        </section>

        <a
          href="https://chat.whatsapp.com/Jm2wSeDtZ2W2w1lXvPvzq2"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xl"
        >
          Entrar na Comunidade 🐾
        </a>

        <div className="text-center">
          <BackButton href="/" />
        </div>
      </main>
      <Footer />
    </>
  );
}
