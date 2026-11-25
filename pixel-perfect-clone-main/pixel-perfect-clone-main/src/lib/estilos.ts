import minimalista from "@/assets/minimalista.jpg";
import romantico from "@/assets/romantico.jpg";
import classico from "@/assets/classico.jpg";
import boho from "@/assets/boho.jpg";
import streetwear from "@/assets/streetwear.jpg";
import elegante from "@/assets/elegante.jpg";
import mClassico from "@/assets/m-classico.jpg";
import mEsportivo from "@/assets/m-esportivo.jpg";
import mStreetwear from "@/assets/m-streetwear.jpg";
import mCasual from "@/assets/m-casual.jpg";
import mElegante from "@/assets/m-elegante.jpg";
import mAventureiro from "@/assets/m-aventureiro.jpg";

export type EstiloId =
  | "romantico" | "classico" | "minimalista" | "streetwear" | "elegante" | "boho"
  | "m_classico" | "m_esportivo" | "m_streetwear" | "m_casual" | "m_elegante" | "m_aventureiro";

type Estilo = { nome: string; emoji: string; img: string; desc: string; caracteristicas: string[]; pecas: string[]; cores: string[]; acessorios: string[] };

export const estilos: Record<EstiloId, Estilo> = {
  romantico: { nome: "Romântico", emoji: "💗", img: romantico, desc: "Você ama delicadeza: peças femininas, cores suaves, estampas florais e detalhes que encantam.", caracteristicas: ["Delicado", "Feminino", "Sonhador"], pecas: ["Vestido floral", "Blusa de renda", "Saia midi plissada", "Sapatilha com laço"], cores: ["Rosa claro", "Lavanda", "Off-white"], acessorios: ["Pérolas", "Laços de cabelo", "Brincos delicados"] },
  classico: { nome: "Clássico", emoji: "🖤", img: classico, desc: "Seu estilo é atemporal: roupas bem estruturadas, tons neutros e sofisticação que nunca sai de moda.", caracteristicas: ["Atemporal", "Estruturado", "Sóbrio"], pecas: ["Trench coat", "Camisa branca", "Calça de alfaiataria", "Mocassim"], cores: ["Bege", "Caramelo", "Azul-marinho"], acessorios: ["Relógio de couro", "Bolsa estruturada", "Lenço de seda"] },
  minimalista: { nome: "Minimalista", emoji: "🤍", img: minimalista, desc: "Menos é mais para você: looks simples, funcionais, poucas cores e um visual clean e inteligente.", caracteristicas: ["Clean", "Funcional", "Essencial"], pecas: ["Camisa branca", "Calça reta", "Suéter básico", "Tênis branco liso"], cores: ["Branco", "Cinza", "Preto"], acessorios: ["Bolsa lisa", "Argola fina", "Relógio simples"] },
  streetwear: { nome: "Streetwear", emoji: "🏙️", img: streetwear, desc: "Você tem atitude urbana: peças oversized, tênis robustos, jaquetas e acessórios que chamam atenção.", caracteristicas: ["Urbano", "Moderno", "Ousado"], pecas: ["Camiseta oversized", "Calça cargo", "Jaqueta bomber", "Tênis chunky"], cores: ["Preto", "Cinza", "Toques neon"], acessorios: ["Correntes", "Bucket hat", "Pochete"] },
  elegante: { nome: "Elegante", emoji: "✨", img: elegante, desc: "Você brilha com refinamento: looks luxuosos, tecidos nobres e acessórios marcantes.", caracteristicas: ["Sofisticado", "Luxuoso", "Marcante"], pecas: ["Vestido de cetim", "Blazer acinturado", "Sandália de salto", "Saia lápis"], cores: ["Preto", "Dourado", "Champagne"], acessorios: ["Brincos statement", "Clutch", "Joias douradas"] },
  boho: { nome: "Boho", emoji: "🌿", img: boho, desc: "Espírito livre: tecidos fluidos, bordados, crochê, franjas e tons terrosos com inspiração natural.", caracteristicas: ["Livre", "Natural", "Artístico"], pecas: ["Saia longa bordada", "Top de crochê", "Vestido fluido", "Sandália rasteira"], cores: ["Terracota", "Creme", "Caramelo"], acessorios: ["Chapéu de palha", "Bolsa de franjas", "Colares sobrepostos"] },

  m_classico: { nome: "Clássico", emoji: "🎩", img: mClassico, desc: "Você valoriza o atemporal: alfaiataria, camisas bem passadas e combinações que sempre funcionam.", caracteristicas: ["Tradicional", "Alinhado", "Confiável"], pecas: ["Blazer azul-marinho", "Camisa oxford", "Calça chino", "Mocassim de couro"], cores: ["Azul-marinho", "Bege", "Azul-claro"], acessorios: ["Relógio de couro", "Cinto marrom", "Lenço de bolso"] },
  m_esportivo: { nome: "Esportivo", emoji: "👟", img: mEsportivo, desc: "Conforto e movimento: peças técnicas e práticas, prontas para o treino ou para o dia a dia.", caracteristicas: ["Ativo", "Prático", "Confortável"], pecas: ["Jaqueta de treino", "Calça jogger", "Tênis de corrida", "Camiseta dry-fit"], cores: ["Preto", "Cinza", "Branco"], acessorios: ["Boné", "Relógio esportivo", "Mochila leve"] },
  m_streetwear: { nome: "Streetwear", emoji: "🏙️", img: mStreetwear, desc: "Atitude das ruas: camisetas oversized, jeans largos, tênis de cano alto e acessórios marcantes.", caracteristicas: ["Urbano", "Criativo", "Ousado"], pecas: ["Camiseta oversized estampada", "Jeans baggy", "Tênis cano alto", "Moletom"], cores: ["Areia", "Preto", "Jeans"], acessorios: ["Gorro", "Corrente prata", "Pochete"] },
  m_casual: { nome: "Casual", emoji: "😎", img: mCasual, desc: "Descontraído e versátil: jeans, camisetas e tênis que combinam com qualquer programa.", caracteristicas: ["Descontraído", "Versátil", "Leve"], pecas: ["Camiseta henley", "Jaqueta jeans", "Calça jeans escura", "Tênis de lona"], cores: ["Branco", "Azul jeans", "Cinza"], acessorios: ["Óculos de sol", "Relógio simples", "Boné discreto"] },
  m_elegante: { nome: "Elegante", emoji: "✨", img: mElegante, desc: "Refinamento total: ternos bem cortados, sapatos impecáveis e detalhes que mostram bom gosto.", caracteristicas: ["Refinado", "Imponente", "Sofisticado"], pecas: ["Terno preto", "Camisa social branca", "Gravata de seda", "Sapato oxford"], cores: ["Preto", "Branco", "Dourado"], acessorios: ["Abotoaduras", "Relógio clássico", "Perfume marcante"] },
  m_aventureiro: { nome: "Aventureiro", emoji: "🧭", img: mAventureiro, desc: "Pronto para explorar: roupas resistentes, tons de natureza e muita funcionalidade.", caracteristicas: ["Explorador", "Resistente", "Funcional"], pecas: ["Jaqueta utilitária", "Camisa de flanela", "Calça cargo", "Bota de trilha"], cores: ["Verde-oliva", "Marrom", "Caqui"], acessorios: ["Mochila", "Bússola", "Canivete"] },
};

type Op = { t: string; e: EstiloId };
const q = (pergunta: string, ...o: [string, EstiloId][]) => ({ q: pergunta, opcoes: o.map(([t, e]): Op => ({ t, e })) });

export const ordemFeminino: EstiloId[] = ["romantico", "classico", "minimalista", "streetwear", "elegante", "boho"];
export const ordemMasculino: EstiloId[] = ["m_classico", "m_esportivo", "m_streetwear", "m_casual", "m_elegante", "m_aventureiro"];
// mantido para a página inicial
export const ordem = ordemFeminino;

export const perguntasFeminino = [
  q("Qual look você escolheria para sair com os amigos?", ["Vestido florido e sapatilha", "romantico"], ["Calça de alfaiataria e camisa", "classico"], ["Camiseta branca e calça reta", "minimalista"], ["Moletom oversized e calça cargo", "streetwear"], ["Vestido de cetim e salto", "elegante"], ["Saia longa bordada e top de crochê", "boho"]),
  q("Qual combinação de cores você prefere?", ["Rosa claro e lavanda", "romantico"], ["Bege, caramelo e marinho", "classico"], ["Branco, cinza e preto", "minimalista"], ["Preto com toques neon", "streetwear"], ["Preto com dourado", "elegante"], ["Terracota, creme e verde-musgo", "boho"]),
  q("Qual acessório combina mais com você?", ["Colar de pérolas", "romantico"], ["Relógio de couro", "classico"], ["Uma argola fina e discreta", "minimalista"], ["Correntes e bucket hat", "streetwear"], ["Brincos dourados statement", "elegante"], ["Chapéu de palha e colares sobrepostos", "boho"]),
  q("Como você gosta de se vestir no dia a dia?", ["Delicada e feminina", "romantico"], ["Arrumada e alinhada", "classico"], ["Simples e funcional", "minimalista"], ["Com atitude urbana", "streetwear"], ["Sempre impecável", "elegante"], ["Leve, solta e livre", "boho"]),
  q("Qual tipo de calçado você escolheria?", ["Sapatilha com laço", "romantico"], ["Mocassim de couro", "classico"], ["Tênis branco liso", "minimalista"], ["Tênis chunky", "streetwear"], ["Sandália de salto fino", "elegante"], ["Rasteira de couro", "boho"]),
  q("Qual ocasião é a sua cara?", ["Piquenique no parque", "romantico"], ["Reunião importante", "classico"], ["Café tranquilo com um livro", "minimalista"], ["Show de rap ou skate", "streetwear"], ["Jantar sofisticado", "elegante"], ["Festival de música ao ar livre", "boho"]),
  q("Qual peça não pode faltar no seu armário?", ["Saia midi de tule", "romantico"], ["Trench coat", "classico"], ["Camiseta básica perfeita", "minimalista"], ["Jaqueta bomber", "streetwear"], ["Pretinho básico de cetim", "elegante"], ["Vestido longo fluido", "boho"]),
  q("Qual palavra melhor representa você?", ["Doçura", "romantico"], ["Sofisticação", "classico"], ["Essência", "minimalista"], ["Atitude", "streetwear"], ["Glamour", "elegante"], ["Liberdade", "boho"]),
];

export const perguntasMasculino = [
  q("Qual look você escolheria para sair com os amigos?", ["Camisa oxford e calça chino", "m_classico"], ["Jogger e camiseta dry-fit", "m_esportivo"], ["Camiseta oversized e jeans baggy", "m_streetwear"], ["Camiseta, jeans e tênis de lona", "m_casual"], ["Blazer escuro e camisa social", "m_elegante"], ["Flanela, calça cargo e bota", "m_aventureiro"]),
  q("Qual combinação de cores você prefere?", ["Azul-marinho e bege", "m_classico"], ["Preto e cinza com detalhes vibrantes", "m_esportivo"], ["Areia, preto e estampas", "m_streetwear"], ["Branco e azul jeans", "m_casual"], ["Preto total com branco", "m_elegante"], ["Verde-oliva e marrom", "m_aventureiro"]),
  q("Qual acessório combina mais com você?", ["Cinto de couro marrom", "m_classico"], ["Relógio esportivo", "m_esportivo"], ["Corrente prata e gorro", "m_streetwear"], ["Óculos de sol", "m_casual"], ["Abotoaduras douradas", "m_elegante"], ["Mochila de trilha", "m_aventureiro"]),
  q("Como você gosta de se vestir no dia a dia?", ["Bem alinhado e tradicional", "m_classico"], ["Pronto para me movimentar", "m_esportivo"], ["Com atitude e criatividade", "m_streetwear"], ["Confortável e descontraído", "m_casual"], ["Sempre refinado", "m_elegante"], ["Preparado para qualquer terreno", "m_aventureiro"]),
  q("Qual tipo de calçado você escolheria?", ["Mocassim de couro", "m_classico"], ["Tênis de corrida", "m_esportivo"], ["Tênis de cano alto", "m_streetwear"], ["Tênis de lona", "m_casual"], ["Sapato oxford preto", "m_elegante"], ["Bota de trilha", "m_aventureiro"]),
  q("Qual programa é a sua cara?", ["Almoço de negócios", "m_classico"], ["Jogo de futebol ou academia", "m_esportivo"], ["Evento de música urbana", "m_streetwear"], ["Barzinho com os amigos", "m_casual"], ["Festa de gala", "m_elegante"], ["Acampamento na serra", "m_aventureiro"]),
  q("Qual peça não pode faltar no seu armário?", ["Blazer azul-marinho", "m_classico"], ["Calça jogger", "m_esportivo"], ["Moletom estampado", "m_streetwear"], ["Jaqueta jeans", "m_casual"], ["Terno bem cortado", "m_elegante"], ["Jaqueta utilitária", "m_aventureiro"]),
  q("Qual palavra melhor representa você?", ["Tradição", "m_classico"], ["Energia", "m_esportivo"], ["Atitude", "m_streetwear"], ["Leveza", "m_casual"], ["Elegância", "m_elegante"], ["Exploração", "m_aventureiro"]),
];

export const perguntas = perguntasFeminino;

export const quizzes = {
  feminino: { ordem: ordemFeminino, perguntas: perguntasFeminino },
  masculino: { ordem: ordemMasculino, perguntas: perguntasMasculino },
};

/** Soma 1 ponto por resposta para o estilo da alternativa; vence a maior pontuação.
 *  Empate: vence o estilo empatado escolhido mais recentemente. */
export function calcularResultado(resp: EstiloId[]) {
  const pontos: Partial<Record<EstiloId, number>> = {};
  resp.forEach((r) => (pontos[r] = (pontos[r] ?? 0) + 1));
  const max = Math.max(0, ...Object.values(pontos));
  const vencedor = [...resp].reverse().find((r) => pontos[r] === max);
  return { pontos, vencedor };
}
