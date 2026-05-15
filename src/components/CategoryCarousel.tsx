"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface Product {
  id: number;
  nome: string;
  descricao?: string;
  imagem: string;
  link: string;
}

interface Category {
  emoji: string;
  title: string;
  ids: number[];
}

interface CategoryCarouselProps {
  products: Product[];
  categories: Category[];
}

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-hover bg-[var(--color-bg-card)] rounded-xl overflow-hidden flex flex-col min-w-[160px] w-[160px] sm:min-w-[180px] sm:w-[180px] shrink-0 snap-start">
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={product.imagem}
            alt={product.nome}
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </a>

      <div className="p-3 flex flex-col gap-1 flex-1">
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <p className="text-xs font-bold text-[var(--color-text-main)] text-center leading-tight">
            {product.nome}
          </p>
        </a>

        {product.descricao && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="text-[10px] text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors mt-1 mx-auto cursor-pointer bg-transparent border-none"
            >
              {open ? "Ocultar ▲" : "Ver descrição ▼"}
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: open ? "200px" : "0px",
                opacity: open ? 1 : 0,
              }}
            >
              <p className="text-[10px] text-[#AAAAAA] text-center mt-1 leading-relaxed">
                {product.descricao}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Carousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Seta esquerda */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg-dark)]/80 hover:bg-[var(--color-gold)] text-white w-8 h-8 rounded-full items-center justify-center transition-all opacity-0 group-hover:opacity-100 -ml-3 cursor-pointer border-none"
      >
        ‹
      </button>

      {/* Carrossel */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Seta direita */}
      <button
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg-dark)]/80 hover:bg-[var(--color-gold)] text-white w-8 h-8 rounded-full items-center justify-center transition-all opacity-0 group-hover:opacity-100 -mr-3 cursor-pointer border-none"
      >
        ›
      </button>

      {/* Indicador de scroll mobile */}
      <div className="flex sm:hidden justify-center mt-1">
        <span className="text-[10px] text-[var(--color-text-secondary)]">
          ← Deslize para ver mais →
        </span>
      </div>
    </div>
  );
}

export default function CategoryCarousel({
  products,
  categories,
}: CategoryCarouselProps) {
  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => {
        const categoryProducts = category.ids
          .map((id) => products.find((p) => p.id === id))
          .filter((p): p is Product => p !== undefined);

        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.title}>
            <h3 className="text-lg font-bold mb-3">
              {category.emoji} {category.title}
            </h3>
            <Carousel products={categoryProducts} />
          </section>
        );
      })}
    </div>
  );
}
