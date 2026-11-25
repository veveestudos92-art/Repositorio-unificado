import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/Site";

export const Route = createFileRoute("/dicas")({
  head: () => ({
    meta: [
      { title: "Dicas de moda — Meu Estilo" },
      { name: "description", content: "Dicas simples para combinar roupas, cores e acessórios e descobrir seu estilo." },
      { property: "og:title", content: "Dicas de moda — Meu Estilo" },
      { property: "og:description", content: "Como combinar roupas, cores e acessórios." },
    ],
  }),
  component: Dicas,
});

const grupos = [
  { t: "Combinando roupas", d: ["Equilibre volumes: peça larga com peça ajustada.", "Tenha básicos versáteis que combinam entre si.", "Uma peça de destaque por look já é suficiente."] },
  { t: "Combinando cores", d: ["Neutros (bege, branco, preto) combinam com tudo.", "Tom sobre tom deixa o visual sofisticado.", "Use cores complementares com moderação."] },
  { t: "Acessórios", d: ["Escolha um ponto focal: colar ou brincos marcantes.", "Combine metais: dourado com tons quentes, prata com frios.", "Uma boa bolsa transforma um look simples."] },
  { t: "Descobrindo seu estilo", d: ["Salve imagens de looks que você ama e encontre padrões.", "Observe as peças que você mais usa no seu armário.", "Experimente sem medo — estilo é construção."] },
];

function Dicas() {
  return (
    <div className="pb-24">
      <PageHead eyebrow="Dicas de moda" title="Pequenos truques, grande estilo" />
      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2">
        {grupos.map((g, i) => (
          <div key={g.t} className={`rounded-2xl p-8 ${i % 2 ? "bg-nude/60" : "bg-blush/70"}`}>
            <p className="font-display text-5xl text-accent">0{i + 1}</p>
            <h2 className="mt-2 text-3xl">{g.t}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {g.d.map((x) => <li key={x} className="flex gap-3"><span className="text-accent">✦</span>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
