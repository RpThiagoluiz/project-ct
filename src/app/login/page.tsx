'use client';

import { Button } from '@/components/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import InputWithLabel from '@/components/InputWithLabel';

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-whitePrimary ">
      <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Seu acesso
      </h4>

      {/* FORM essa DIV */}
      <form className="flex flex-col mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 p-4 gap-5 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md">
        <InputWithLabel label="CPF" />
        <InputWithLabel label="SENHA" />
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
