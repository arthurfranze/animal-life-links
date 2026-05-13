import Image from "next/image";

interface Product {
  id: number;
  nome: string;
  imagem: string;
  link: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <a
          key={product.id}
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover bg-[var(--color-bg-card)] rounded-xl overflow-hidden block"
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
          <p className="p-3 text-sm font-medium text-center text-[var(--color-text-main)]">
            {product.nome}
          </p>
        </a>
      ))}
    </div>
  );
}
