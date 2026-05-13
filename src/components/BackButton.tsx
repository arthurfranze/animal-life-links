import Link from "next/link";

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({ href, label = "Voltar" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors mt-6 text-sm"
    >
      <span>←</span>
      <span>{label}</span>
    </Link>
  );
}
