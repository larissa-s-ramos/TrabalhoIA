import React from 'react';

export default function TravelCard(/* props */) {
  // TODO: Exibir dados da viagem
  return (
    <div className="border rounded p-4 shadow">
      {/* Dados da viagem */}
      <div className="font-bold">Destino</div>
      <div>Tipo: </div>
      <div>Preço: </div>
      <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">Detalhes</button>
    </div>
  );
}
