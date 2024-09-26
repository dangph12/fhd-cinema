'use client';

import { useEffect } from 'react';
import { NotificationProvider } from '@/context/useNotificationContext';
import { Toaster } from 'sonner';
import { LayoutProvider } from '@/context/useLayoutContext';
import { AuthProvider } from '@/context/useAuthContext';
import { HelmetProvider } from 'react-helmet-async';
const AppProvidersWrapper = ({
  children
}) => {
  useEffect(() => {
    if (document) {
      const e = document.querySelector('#__next_splash');
      if (e?.hasChildNodes()) {
        document.querySelector('#splash-screen')?.classList.add('remove');
      }
      e?.addEventListener('DOMNodeInserted', () => {
        document.querySelector('#splash-screen')?.classList.add('remove');
      });
    }
  }, []);
  return <HelmetProvider>
      <AuthProvider>
        <LayoutProvider>
          <NotificationProvider>
            {children}
            <Toaster richColors />
          </NotificationProvider>
        </LayoutProvider>
      </AuthProvider>
    </HelmetProvider>;
};
export default AppProvidersWrapper;