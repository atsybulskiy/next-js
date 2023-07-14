import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@styles/globals.scss';

import { Nav } from '@components/Nav';
import { Provider } from '@components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Next App',
  description: 'Test Next App - new'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);
export default RootLayout;
