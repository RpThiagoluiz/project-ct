'use client';

import { MdVpnKey } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

import { Button } from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-whitePrimary ">
      <Image
        src="/images/package.svg"
        width={250}
        height={250}
        alt="{highlight}"
      />

      {/* FORM essa DIV */}
      <form className="flex flex-col mt-8 mb-2 max-w-screen-lg sm:w-96 p-6 gap-5 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md">
        <InputWithLabel label="CPF" icon={<MdVpnKey size={16} />} />
        <InputWithLabel label="SENHA" icon={<AiOutlineUser size={16} />} />
        <Button
          size="fullWidth"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log('TODO');
          }}
        >
          Entrar
        </Button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-grayPrimary antialiased">
          Recuperar{' '}
          <a
            className="font-medium text-grayDark transition-colors hover:text-primaryDarkBlue underline"
            href="#"
          >
            Senha
          </a>
        </p>
      </form>
    </div>
  );
}
