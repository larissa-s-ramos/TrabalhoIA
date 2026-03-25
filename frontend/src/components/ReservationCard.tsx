import React from 'react';

export default function ReservationCard(/* props */) {
  // TODO: Exibir dados da reserva
  return (
    <div className="border rounded p-4 shadow">
      {/* Dados da reserva */}
      <div className="font-bold">Reserva</div>
      <div>Status: </div>
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Detalhes</button>
    </div>
  );
}
