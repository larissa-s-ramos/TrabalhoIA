
import React from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
          Descubra o mundo com a <span className="text-cyan-500">ViajeAqui</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Reserve voos, hotéis e pacotes com os melhores preços. Experimente uma experiência de compra rápida, fácil e segura, inspirada nas melhores agências online.
        </p>
        <SearchBar />
        <div className="mt-6 flex gap-4">
          <Link href="/viagens" className="bg-blue-700 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded shadow transition">Buscar Viagens</Link>
          <Link href="/register" className="bg-white border border-blue-700 text-blue-700 font-bold px-6 py-3 rounded shadow hover:bg-blue-50 transition">Criar Conta</Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="ViajeAqui" className="rounded-2xl shadow-xl w-full max-w-md" />
      </div>
    </section>
  );
}
