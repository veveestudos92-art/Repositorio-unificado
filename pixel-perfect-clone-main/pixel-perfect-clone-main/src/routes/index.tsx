import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { estilos, ordem } from "@/lib/estilos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Estilo — Descubra o estilo que combina com você" },
      { name: "description", content: "Conheça estilos de moda, faça nosso quiz e descubra seu estilo pessoal." },
      { property: "og:title", content: "Meu Estilo — Descubra o estilo que combina com você" },
      { property: "og:description", content: "Conheça estilos de moda, faça nosso quiz e descubra seu estilo pessoal." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-blush/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Moda · Personalidade · Descoberta</p>
            <h1 className="mt-5 text-6xl leading-[0.95] md:text-8xl">Meu <em>Estilo</em></h1>
            <p className="mt-6 text-xl text-muted-foreground">Descubra o estilo que combina com você!</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/quiz" className="btn-primary">Descobrir meu estilo →</Link>
              <Link to="/estilos" className="btn-outline">Ver estilos</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-[2rem] bg-nude" />
            <img src={hero} alt="Mulher elegante com blazer bege e cetim rosa" width={1024} height={1280} className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="eyebrow">A proposta</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Moda é a forma mais bonita de dizer quem você é.</h2>
        <p className="mt-6 text-muted-foreground">O Meu Estilo ajuda você a conhecer diferentes estilos de moda, entender suas preferências e descobrir, de forma leve e divertida, qual estilo traduz a sua personalidade.</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {ordem.map((id) => (
            <Link key={id} to="/estilos" className="group">
              <img src={estilos[id].img} alt={estilos[id].nome} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full rounded-xl object-cover transition duration-500 group-hover:-translate-y-1" />
              <p className="mt-2 text-center font-display text-lg">{estilos[id].nome}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-ink px-8 py-16 text-center text-ink-foreground">
          <p className="eyebrow !text-accent">Quiz interativo</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Qual é o seu estilo?</h2>
          <p className="mx-auto mt-4 max-w-md opacity-75">8 perguntas rápidas, 6 resultados possíveis e um perfil feito para você.</p>
          <Link to="/quiz" className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-ink transition hover:bg-blush">Começar agora →</Link>
        </div>
      </section>
    </>
  );
}
