'use client';

import Image from 'next/image';
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';
import Link from 'next/link';
import { isCPFValid } from '@/utils/isCPFValid';
import { useState } from 'react';

type Form = {
  user: string;
  password: string;
};

// TODO: MASCARAS no CPF

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Form>();

  const validateCpf = (e: string): string | undefined => {
    if (!isCPFValid(e)) {
      setError('user', {
        type: 'manual',
        message: 'CPF Inválido',
      });

      return 'CPF Inválido';
    }
    return undefined;
  };

  const onSubmit = (form: Form) => {
    console.log(form);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-whitePrimary ">
      <Image
        src="/images/package.svg"
        width={280}
        height={250}
        alt="{highlight}"
      />

      <div className="flex flex-col mt-8 mb-2 p-4 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md">
        <form className=" flex flex-col  gap-10 max-w-screen-lg sm:w-96">
          <InputWithLabel
            {...register('user', {
              required: {
                value: true,
                message: 'Campo não pode ser vazio',
              },
              validate: (value) => validateCpf(value),
            })}
            error={!!errors?.user}
            errorMessage={errors?.user?.message}
            label="CPF"
            icon={<AiOutlineUser size={16} />}
            maxLength={14}
          />
          <InputWithLabel
            {...register('password', {
              required: {
                value: true,
                message: 'Campo não pode ser vazio',
              },
            })}
            error={!!errors?.password}
            errorMessage={errors?.password?.message}
            label="SENHA"
            icon={
              showPassword ? (
                <AiOutlineEyeInvisible
                  size={16}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiOutlineEye
                  size={16}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )
            }
            maxLength={14}
            type={showPassword ? 'text' : 'password'}
          />
          <Button
            size="fullWidth"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            Entrar
          </Button>
        </form>
        <p className="mt-10 block text-right text-base font-normal leading-relaxed text-grayPrimary antialiased">
          Esqueci minha{' '}
          <Link
            className="font-medium text-grayDark transition-colors hover:text-primaryDarkBlue underline"
            href="/forget-password"
          >
            senha
          </Link>
        </p>
      </div>
    </div>
  );
}
