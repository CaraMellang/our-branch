import '@/styles/globals.css';
import '@styles/reset.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import { ManagedUI } from '@/src/components/common/ManageUI/ManageUI';

const Noop = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  return (
    <ManagedUI>
      <Component {...pageProps} />
    </ManagedUI>
  );
}
