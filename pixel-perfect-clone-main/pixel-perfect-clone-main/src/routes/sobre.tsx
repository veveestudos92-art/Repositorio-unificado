import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "@/components/Site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o projeto — Meu Estilo" },
      { name: "description", content: "Projeto acadêmico criado com uma ferramenta de criação de sites com Inteligência Artificial." },
      { property: "og:title", content: "Sobre o projeto — Meu Estilo" },
      { property: "og:description", content: "Projeto acadêmico criado com IA." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="pb-24">
      <PageHead eyebrow="Sobre o projeto" title="Feito com estilo — e com IA" />
      <div className="mx-auto max-w-2xl space-y-5 px-5 text-center text-muted-foreground">
        <p>O <strong className="text-foreground">Meu Estilo</strong> foi desenvolvido como atividade acadêmica, utilizando uma ferramenta de criação de sites com Inteligência Artificial.</p>
        <p>O objetivo é unir moda, personalidade e tecnologia para ajudar as pessoas a descobrirem seu estilo pessoal de forma divertida e interativa.</p>
        <div className="pt-6"><Link to="/quiz" className="btn-primary">Fazer o quiz →</Link></div>
      </div>
    </div>
  );
}
