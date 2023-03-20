import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ModalProvider } from '@components/common/Modal/ModalProvider';

export function ManagedUI({ children }: { children: React.ReactNode }) {
  return (
    <EmotionThemeProvider theme={{}}>
      <div>{children}</div>
      <ModalProvider />
    </EmotionThemeProvider>
  );
}
