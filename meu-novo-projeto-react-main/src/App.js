import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/ToDoList'; // Corrigido para d minúsculo
import Contador from './components/Contador';
import JogoDaVelha from './components/JogoDaVelha'; // Corrigido para d minúsculo
import Calculadora from './components/Calculadora';
import BuscadorCep from './components/BuscadorCep';
 
export default function App() {
  const [viewAtiva, setViewAtiva] = useState('todo');
 
  const renderComponente = () => {
    switch (viewAtiva) {
      case 'todo': return <ToDoList />;
      case 'contador': return <Contador />;
      case 'velha': return <JogoDaVelha />;
      case 'calculadora': return <Calculadora />;
      case 'cep': return <BuscadorCep />;
      default: return <ToDoList />;
    }
  };
 
  return (
<div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
<Header viewAtiva={viewAtiva} setViewAtiva={setViewAtiva} />
<main className="max-w-6xl mx-auto p-6 mt-4">
        {renderComponente()}
</main>
</div>
  );
}
