"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  nome: string;
  descricao?: string;
  preco?: string;
  imagem: string;
  link: string;
}

interface ProductGridProps {
  products: Product[];
}

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-hover bg-[var(--color-bg-card)] rounded-xl overflow-hidden flex flex-col">
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
            sizes="(max-width: 768px) 50vw, 33vw"
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
          <p className="text-sm font-bold text-[var(--color-text-main)] text-center">
            {product.nome}
          </p>
        </a>

        {product.preco && (
          <p className="text-base font-bold text-[var(--color-gold)] text-center">
            {product.preco}
          </p>
        )}

        {product.descricao && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors mt-1 mx-auto cursor-pointer bg-transparent border-none"
            >
              {open ? "Ocultar descrição ▲" : "Ver descrição ▼"}
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
            >
              <p className="text-xs text-[#AAAAAA] text-center mt-1 leading-relaxed">
                {product.descricao}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
