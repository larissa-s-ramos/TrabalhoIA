
export const metadata = {
  title: 'ViajeAqui - Sua agência de viagens',
  description: 'Reserve voos, hotéis e pacotes com a ViajeAqui',
}


import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 min-h-screen font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
