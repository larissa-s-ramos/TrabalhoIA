import React from 'react';

export default function SearchBar() {
  // TODO: Filtros de busca (destino, data, preço)
  return (
    <form className="flex gap-2 mb-4">
      <input className="border p-2 flex-1" placeholder="Destino" />
      <input className="border p-2" type="date" />
      <input className="border p-2 w-32" type="number" placeholder="Preço máx" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Buscar</button>
    </form>
  );
}
