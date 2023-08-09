'use client';

import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { Button } from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';
import { isCPFValid } from '@/utils/isCPFValid';
import { useRouter } from 'next/navigation';

type Form = {
  user: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Form>();

  const router = useRouter();

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
    //TODO: API call and api will return a url
    //Like this -> http://localhost:3000/forget-password/274d64e4-26ea-4cf3-81e8-b9355f267e53
    console.log(form);
    const tokenId = '274d64e4-26ea-4cf3-81e8-b9355f267e53';
    router.push(`/forget-password/${tokenId}`);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-whitePrimary text-primaryDarkBlue">
      <h3 className="mb-8 text-center">
        Digite seu acesso para recuperar sua senha
      </h3>
      <form className=" flex flex-col p-4 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md gap-10 max-w-screen-lg sm:w-[560px]">
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

        <Button
          size="fullWidth"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
