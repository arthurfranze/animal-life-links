import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const marketplaces = [
  {
    logo: "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.92/mercadolibre/logo__large_plus.png",
    name: "Mercado Livre",
    href: "/achadinhos/mercado-livre",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
    href: "/achadinhos/amazon",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg",
    name: "Shopee",
    href: "/achadinhos/shopee",
  },
];

export default function Achadinhos() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-1">
          Achadinhos Pet 🛍️
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-6">
          Escolha onde prefere comprar:
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {marketplaces.map((mp) => (
            <Link
              key={mp.href}
              href={mp.href}
              className="card-hover flex-1 flex flex-col items-center gap-3 no-underline"
            >
              <div className="w-full bg-white rounded-2xl p-5 flex items-center justify-center">
                <img
                  src={mp.logo}
                  alt={mp.name}
                  style={{ maxHeight: "32px", width: "auto" }}
                />
              </div>
              <span className="text-lg font-semibold text-[var(--color-text-main)] whitespace-nowrap">
                {mp.name}
              </span>
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
