import { useState } from 'react';
 
export default function BuscadorCep() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');
 
  const buscar = async (e) => {
    e.preventDefault();
    setErro('');
    setResultado(null);
    const limpo = cep.replace(/\D/g, '');
    if (limpo.length !== 8) {
      setErro('O CEP deve conter exatamente 8 algarismos.');
      return;
    }
 
    try {
      const res = await fetch(`https://viacep.com.br{limpo}/json/`);
      const dados = await res.json();
      if (dados.erro) {
        setErro('CEP não encontrado.');
      } else {
        setResultado(dados);
      }
    } catch {
      setErro('Falha na conexão ao buscar o CEP.');
    }
  };
 
  return (
<div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
<h2 className="text-2xl font-bold mb-4 text-gray-800">Buscador de CEP</h2>
<form onSubmit={buscar} className="flex gap-2 mb-4">
<input
          type="text"
          maxLength="9"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP (Ex: 01001-000)"
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-blue-500"
        />
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Buscar</button>
</form>
      {erro && <p className="text-red-500 text-sm font-medium">{erro}</p>}
      {resultado && (
<div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700 space-y-1">
<p><strong>Logradouro:</strong> {resultado.logradouro}</p>
<p><strong>Bairro:</strong> {resultado.bairro}</p>
<p><strong>Cidade/UF:</strong> {resultado.localidade} - {resultado.uf}</p>
</div>
      )}
</div>
  );
}