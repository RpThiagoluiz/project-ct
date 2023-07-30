'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticate = false;

  // action login
  // tempo de expiração do token

  // useEffect(() => {
  //   if (!isAuthenticate) {
  //     router.push('/login');
  //   }
  // }, [isAuthenticate, router]);

  return <>{children}</>;
};
