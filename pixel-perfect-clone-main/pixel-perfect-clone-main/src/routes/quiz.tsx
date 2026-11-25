import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { estilos, quizzes, calcularResultado, type EstiloId } from "@/lib/estilos";

const rotacionar = <T,>(a: T[], n: number) => { const k = (n * 5) % a.length; return [...a.slice(k), ...a.slice(0, k)]; };

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz: Qual é o seu estilo? — Meu Estilo" },
      { name: "description", content: "Responda 6 perguntas e descubra seu estilo de moda." },
      { property: "og:title", content: "Quiz: Qual é o seu estilo? — Meu Estilo" },
      { property: "og:description", content: "Responda 6 perguntas e descubra seu estilo de moda." },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [genero, setGenero] = useState<keyof typeof quizzes | null>(null);
  const [passo, setPasso] = useState(0);
  const [resp, setResp] = useState<EstiloId[]>([]);
  const { perguntas, ordem } = quizzes[genero ?? "feminino"];
  const fim = passo >= perguntas.length;

  const responder = (e: EstiloId) => { setResp([...resp, e]); setPasso(passo + 1); };
  const reiniciar = () => { setResp([]); setPasso(0); };
  const trocar = () => { reiniciar(); setGenero(null); };

  const { pontos: c, vencedor } = calcularResultado(resp);
  const pct = (id: EstiloId) => Math.round(((c[id] ?? 0) / Math.max(resp.length, 1)) * 100);
  const resultado = (vencedor ?? ordem[0]) as EstiloId;
  const ranking = ordem.filter((id) => c[id]).sort((a, b) => (c[b] ?? 0) - (c[a] ?? 0));

  return (
    <section className="min-h-[80vh] bg-blush/60 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-center">Quiz interativo</p>
        <h1 className="mt-3 text-center text-5xl md:text-6xl">Qual é o seu estilo?</h1>

        {!genero ? (
          <div className="mt-10 rounded-[2rem] bg-card p-6 text-center shadow-soft md:p-10">
            <h2 className="text-3xl md:text-4xl">Escolha o seu quiz</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button onClick={() => setGenero("feminino")} className="rounded-2xl border bg-background p-6 transition hover:-translate-y-0.5 hover:border-accent hover:bg-blush">
                <span className="text-4xl">👩</span><p className="mt-2 font-display text-2xl">Feminino</p>
                <p className="mt-1 text-xs text-muted-foreground">Romântico · Clássico · Minimalista · Streetwear · Elegante · Boho</p>
              </button>
              <button onClick={() => setGenero("masculino")} className="rounded-2xl border bg-background p-6 transition hover:-translate-y-0.5 hover:border-accent hover:bg-blush">
                <span className="text-4xl">👨</span><p className="mt-2 font-display text-2xl">Masculino</p>
                <p className="mt-1 text-xs text-muted-foreground">Clássico · Esportivo · Streetwear · Casual · Elegante · Aventureiro</p>
              </button>
            </div>
          </div>
        ) : !fim ? (
          <div key={passo} className="mt-10 rounded-[2rem] bg-card p-6 shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-500 md:p-10">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Pergunta {passo + 1} de {perguntas.length}</span>
              {passo > 0 && <button onClick={() => { setPasso(passo - 1); setResp(resp.slice(0, -1)); }} className="hover:text-foreground">← Voltar</button>}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${(passo / perguntas.length) * 100}%` }} />
            </div>
            <h2 className="mt-8 text-3xl md:text-4xl">{perguntas[passo]!.q}</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rotacionar(perguntas[passo]!.opcoes, passo).map((o, i) => (
                <button key={o.t} onClick={() => responder(o.e)} className="flex items-center gap-4 rounded-2xl border bg-background p-4 text-left transition hover:-translate-y-0.5 hover:border-accent hover:bg-blush">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg">{String.fromCharCode(65 + i)}</span>
                  {o.t}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-card shadow-soft animate-in fade-in zoom-in-95 duration-700 md:grid md:grid-cols-2">
            <img src={estilos[resultado].img} alt={estilos[resultado].nome} width={768} height={960} className="aspect-[4/5] h-full w-full object-cover" />
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="eyebrow">Seu estilo predominante é</p>
              <h2 className="mt-2 text-5xl italic md:text-6xl">{estilos[resultado].emoji} {estilos[resultado].nome}!</h2>
              <p className="mt-2 text-sm">Identificação: <strong>{pct(resultado)}%</strong></p>
              <p className="mt-4 text-muted-foreground">{estilos[resultado].desc}</p>
              {([["Peças", estilos[resultado].pecas], ["Cores", estilos[resultado].cores], ["Acessórios", estilos[resultado].acessorios]] as const).map(([t, l]) => (
                <div key={t} className="mt-4">
                  <p className="text-sm font-medium">{t}</p>
                  <div className="mt-1 flex flex-wrap gap-2">{l.map((p) => <span key={p} className="rounded-full bg-secondary px-3 py-1 text-xs">{p}</span>)}</div>
                </div>
              ))}
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium">Seu perfil completo</p>
                {ranking.map((id) => (
                  <div key={id} className="flex items-center gap-3 text-xs">
                    <span className="w-24 shrink-0">{estilos[id].emoji} {estilos[id].nome}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-accent" style={{ width: `${pct(id)}%` }} /></div>
                    <span className="w-9 text-right">{pct(id)}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={reiniciar} className="btn-primary">Refazer quiz</button>
                <Link to="/estilos" className="btn-outline">Ver todos os estilos</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
