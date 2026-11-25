import { useState } from 'react';
 
export default function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
 
  const calcularVencedor = (quadrados) => {
    const linhas = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
        return quadrados[a];
      }
    }
    return null;
  };
 
  const vencedor = calcularVencedor(tabuleiro);
  const estaCheio = tabuleiro.every(q => q !== null);
 
  const darClique = (indice) => {
    if (tabuleiro[indice] || vencedor) return;
    const novoTabuleiro = tabuleiro.slice();
    novoTabuleiro[indice] = xIsNext ? 'X' : 'O';
    setTabuleiro(novoTabuleiro);
    setXIsNext(!xIsNext);
  };
 
  const reiniciar = () => {
    setTabuleiro(Array(9).fill(null));
    setXIsNext(true);
  };
 
  return (
<div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md text-center">
<h2 className="text-2xl font-bold mb-4 text-gray-800">Jogo da Velha</h2>
<div className="text-lg font-semibold mb-4 text-gray-600">
        {vencedor ? `Vencedor: ${vencedor}` : estaCheio ? 'Empate!' : `Próximo: ${xIsNext ? 'X' : 'O'}`}
</div>
<div className="grid grid-cols-3 gap-2 w-48 mx-auto mb-6">
        {tabuleiro.map((valor, idx) => (
<button
            key={idx}
            onClick={() => darClique(idx)}
            className="w-14 h-14 bg-gray-100 border-2 border-gray-200 text-2xl font-bold rounded-lg flex items-center justify-center hover:bg-gray-200 text-gray-800"
>
            {valor}
</button>
        ))}
</div>
<button onClick={reiniciar} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Reiniciar Jogo
</button>
</div>
  );
}