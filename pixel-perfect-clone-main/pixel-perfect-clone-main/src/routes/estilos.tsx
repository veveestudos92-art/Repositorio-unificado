import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "@/components/Site";
import { estilos, ordemFeminino, ordemMasculino } from "@/lib/estilos";

export const Route = createFileRoute("/estilos")({
  head: () => ({
    meta: [
      { title: "Conheça os estilos — Meu Estilo" },
      { name: "description", content: "Romântico, Clássico, Minimalista, Streetwear, Esportivo e Elegante: conheça cada estilo de moda." },
      { property: "og:title", content: "Conheça os estilos — Meu Estilo" },
      { property: "og:description", content: "Conheça seis estilos de moda e suas peças-chave." },
    ],
  }),
  component: Estilos,
});

function Estilos() {
  return (
    <div className="pb-24">
      <PageHead eyebrow="Conheça os estilos" title="Seis jeitos de se expressar" sub="Cada estilo conta uma história. Qual delas é a sua?" />
      {([["👩 Estilos femininos", ordemFeminino], ["👨 Estilos masculinos", ordemMasculino]] as const).map(([titulo, lista]) => (
      <div key={titulo} className="mx-auto max-w-6xl px-5 pb-16">
      <h2 className="mb-8 text-center text-4xl">{titulo}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((id) => {
          const s = estilos[id];
          return (
            <article key={id} className="overflow-hidden rounded-2xl bg-card shadow-soft">
              <img src={s.img} alt={s.nome} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-3xl">{s.emoji} {s.nome}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...s.caracteristicas, ...s.cores].map((p) => <span key={p} className="rounded-full bg-secondary px-3 py-1 text-xs">{p}</span>)}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      </div>
      ))}
      <div className="mt-16 text-center"><Link to="/quiz" className="btn-primary">Descobrir meu estilo →</Link></div>
    </div>
  );
}
