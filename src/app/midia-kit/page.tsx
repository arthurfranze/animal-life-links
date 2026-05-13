import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const stats = [
  { emoji: "📱", value: "12.600+", label: "Seguidores engajados" },
  { emoji: "👁️", value: "10 Milhões+", label: "de visualizações em 6 meses" },
  { emoji: "❤️", value: "2 Milhões+", label: "de curtidas e comentários" },
  { emoji: "📅", value: "1 vídeo/dia", label: "Consistência total" },
];

const offers = [
  { emoji: "🎬", text: "Reels patrocinados com conteúdo orgânico" },
  { emoji: "📸", text: "Stories diários com divulgação do produto" },
  { emoji: "🔗", text: "Link na bio com destaque exclusivo" },
  { emoji: "💬", text: "Menção direta nos conteúdos" },
];

export default function MidiaKit() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 animate-fade-in">
        <section className="text-center mb-8">
          <span className="text-6xl block mb-4">🤝</span>
          <h2 className="text-3xl font-bold mb-2">Parcerias & Mídia Kit</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Leve sua marca para quem ama pets de verdade
          </p>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[var(--color-bg-card)] rounded-xl p-4 text-center"
              >
                <span className="text-2xl block mb-1">{stat.emoji}</span>
                <p className="text-xl font-bold text-[var(--color-gold)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-center">
            O que oferecemos
          </h3>
          <div className="flex flex-col gap-3">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[var(--color-bg-card)] rounded-xl p-4"
              >
                <span className="text-2xl">{offer.emoji}</span>
                <p className="text-[var(--color-text-main)]">{offer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://wa.me/5544999030219?text=Olá!%20Tenho%20interesse%20em%20uma%20parceria%20com%20o%20Animal%20Life!"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xl"
        >
          Quero fazer parceria 🤝
        </a>

        <div className="text-center">
          <BackButton href="/" />
        </div>
      </main>
      <Footer />
    </>
  );
}
