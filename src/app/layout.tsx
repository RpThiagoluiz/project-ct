import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GuardianRoutes } from './guardianRoutes';

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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GuardianRoutes>{children}</GuardianRoutes>
      </body>
    </html>
  );
}
