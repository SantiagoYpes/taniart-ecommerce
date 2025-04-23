import './globals.css';
import { ProductsProvider } from './context/ProductsProvider';
import { CartProvider } from './context/CartProvider';

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
            {children}
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}