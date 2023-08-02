'use client';

import { usePathname } from 'next/navigation';
import { PrivateRouteProvider } from './providers/privateRouteProvider';
import { checkIsPublicRoute } from '@/utils/checkIsPublicRoute';

export const GuardianRoutes = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isPublicRoute = checkIsPublicRoute(pathname!);

  return (
    <>
      {isPublicRoute && children}
      {!isPublicRoute && (
        <PrivateRouteProvider>{children}</PrivateRouteProvider>
      )}
    </>
  );
};
