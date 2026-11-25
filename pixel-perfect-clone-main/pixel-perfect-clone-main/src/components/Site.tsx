import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", l: "Início" },
  { to: "/estilos", l: "Estilos" },
  { to: "/quiz", l: "Quiz" },
  { to: "/dicas", l: "Dicas" },
  { to: "/sobre", l: "Sobre" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl italic">Meu Estilo</Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((x) => (
            <Link key={x.to} to={x.to} className="text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground underline underline-offset-8 decoration-accent" }} activeOptions={{ exact: true }}>{x.l}</Link>
          ))}
          <Link to="/quiz" className="btn-primary !py-2 !px-5">Fazer o quiz</Link>
        </nav>
        <button className="md:hidden text-sm" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "Fechar" : "Menu"}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-5 py-5 md:hidden">
          {links.map((x) => <Link key={x.to} to={x.to} onClick={() => setOpen(false)}>{x.l}</Link>)}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl italic">Meu Estilo</p>
          <p className="mt-3 text-sm opacity-70">Vista sua personalidade. Descubra seu estilo!</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm opacity-80">
          {links.map((x) => <Link key={x.to} to={x.to} className="hover:text-accent">{x.l}</Link>)}
        </nav>
        <p className="text-sm opacity-60 md:text-right">Projeto acadêmico · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export function PageHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 text-center md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-6xl">{title}</h1>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}
