import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export function ManagedUI({ children }: { children: React.ReactNode }) {
  return (
    <EmotionThemeProvider theme={{}}>
      <div>{children}</div>
    </EmotionThemeProvider>
  );
}
