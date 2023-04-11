import './globals.css';
import React from 'react';
import { StoreProvider } from '@/src/redux/app/store';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode,
}) {

  return <html lang='en'>
  <body>
  <StoreProvider>
    {
      children
    }
  </StoreProvider>
  </body>
  </html>;
}
