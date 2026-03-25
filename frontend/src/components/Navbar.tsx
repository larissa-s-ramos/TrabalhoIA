import React from 'react';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 to-cyan-400 shadow-lg text-white px-8 py-3 flex justify-between items-center">
      <div className="font-extrabold text-2xl tracking-tight flex items-center gap-2">
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-black text-xl">VQ</span>
        ViajeAqui
      </div>
      <div className="flex gap-6 text-lg font-medium">
        <Link href="/">Início</Link>
        <Link href="/viagens">Buscar Viagens</Link>
        <Link href="/reservas">Minhas Reservas</Link>
        <Link href="/login">Entrar</Link>
      </div>
    </nav>
  );
}
