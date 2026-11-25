import { useState } from 'react';
 
export default function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefas, setNovaTarefa] = useState('');
 
  const adicionar = (e) => {
    e.preventDefault();
    if (!novaTarefas.trim()) return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefas, concluida: false }]);
    setNovaTarefa('');
  };
 
  const alternar = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };
 
  const remover = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };
 
  return (
<div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
<h2 className="text-2xl font-bold mb-4 text-gray-800">To-Do List</h2>
<form onSubmit={adicionar} className="flex gap-2 mb-4">
<input
          type="text"
          value={novaTarefas}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-blue-500"
        />
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add</button>
</form>
<ul className="space-y-2">
        {tarefas.map(t => (
<li key={t.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
<span 
              onClick={() => alternar(t.id)}
              className={`cursor-pointer flex-1 ${t.concluida ? 'line-through text-gray-400' : 'text-gray-700'}`}
>
              {t.texto}
</span>
<button onClick={() => remover(t.id)} className="text-red-500 hover:text-red-700 ml-2">Excluir</button>
</li>
        ))}
</ul>
</div>
  );
}