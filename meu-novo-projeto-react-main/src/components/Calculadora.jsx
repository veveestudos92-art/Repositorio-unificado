import { useState } from 'react';
 
export default function Calculadora() {

  const [display, setDisplay] = useState('');
 
  const clicarBotao = (valor) => setDisplay(display + valor);

  const limpar = () => setDisplay('');

  const calcular = () => {

    try {

      // Uso do Function para evitar eval direto de strings perigosas

      const resultado = new Function(`return ${display}`)();

      setDisplay(String(resultado));

    } catch {

      setDisplay('Erro');

    }

  };
 
  return (
<div className="max-w-xs mx-auto bg-white p-6 rounded-xl shadow-md">
<h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Calculadora</h2>
<div className="bg-gray-100 p-4 text-right text-2xl font-mono rounded-lg mb-4 h-16 flex items-center justify-end overflow-x-auto border">

        {display || '0'}
</div>
<div className="grid grid-cols-4 gap-2">
<button onClick={limpar} className="col-span-3 bg-red-500 text-white p-3 rounded-lg font-bold">C</button>
<button onClick={() => clicarBotao('/')} className="bg-amber-500 text-white p-3 rounded-lg font-bold">/</button>

        {['7','8','9','*', '4','5','6','-', '1','2','3','+'].map(char => (
<button key={char} onClick={() => clicarBotao(char)} className="bg-gray-200 p-3 rounded-lg font-bold text-gray-700 hover:bg-gray-300">{char}</button>

        ))}
<button onClick={() => clicarBotao('0')} className="col-span-2 bg-gray-200 p-3 rounded-lg font-bold text-gray-700">0</button>
<button onClick={() => clicarBotao('.')} className="bg-gray-200 p-3 rounded-lg font-bold text-gray-700">.</button>
<button onClick={calcular} className="bg-green-600 text-white p-3 rounded-lg font-bold">=</button>
</div>
</div>

  );

}

 