'use client';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/utils/checkIsPublicRoute';
import { PrivateRouteProvider } from './providers/privateRouteProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Project CT',
  description: 'Get your secret',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicRoute = checkIsPublicRoute(pathname!);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <>
          {isPublicRoute && children}
          {!isPublicRoute && (
            <PrivateRouteProvider>{children}</PrivateRouteProvider>
          )}
        </>
      </body>
    </html>
  );
}
