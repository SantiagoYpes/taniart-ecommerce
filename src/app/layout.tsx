import './globals.css';
import { ProductsProvider } from './context/ProductsProvider';
import { CartProvider } from './context/CartProvider';
import { NavBar } from './components/NavBar';

export const metadata = {
  title: 'Mi app',
  description: 'Descripción de tu app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ProductsProvider>
          <CartProvider>
          <NavBar />
            {children}
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}