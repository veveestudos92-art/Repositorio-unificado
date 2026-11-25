import { describe, it, expect } from "vitest";
import { quizzes, calcularResultado, type EstiloId } from "@/lib/estilos";

describe("lógica do quiz", () => {
  for (const [g, { ordem, perguntas }] of Object.entries(quizzes)) {
    it(`${g}: cada estilo vence quando é a maioria das respostas`, () => {
      for (const id of ordem) {
        const resp = perguntas.map((p, i) => (i < 5 ? id : p.opcoes[i % 6]!.e)) as EstiloId[];
        expect(calcularResultado(resp).vencedor).toBe(id);
      }
    });
    it(`${g}: respostas aleatórias geram os 6 resultados`, () => {
      const vistos = new Set<string>();
      for (let k = 0; k < 3000; k++) vistos.add(calcularResultado(perguntas.map((p) => p.opcoes[Math.floor(Math.random() * 6)]!.e)).vencedor!);
      expect([...vistos].sort()).toEqual([...ordem].sort());
    });
  }
});
