import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 flex flex-col items-center gap-1">
      <Link href="/" className="flex flex-col items-center gap-1 no-underline">
        <img
          src="/LOGO 2026.png"
          alt="Animal Life Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-[var(--color-gold)]">
          Animal Life
        </h1>
      </Link>
    </header>
  );
}
