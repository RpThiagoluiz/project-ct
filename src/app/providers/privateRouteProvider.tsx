'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const PrivateRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const isAuthenticate = false; //TODO: JWT cookie ou local storage

  // action login
  // tempo de expiração do token

  useEffect(() => {
    if (!isAuthenticate) {
      router.push('/login');
    }
  }, [isAuthenticate, router]);

  return (
    <>
      {!isAuthenticate && null}
      {isAuthenticate && children}
    </>
  );
};
