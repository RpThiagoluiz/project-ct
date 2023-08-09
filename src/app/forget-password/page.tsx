'use client';

import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { Button } from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';
import { isCPFValid } from '@/utils/isCPFValid';

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
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-whitePrimary text-primaryDarkBlue">
      <form className=" flex flex-col p-4 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md gap-10 max-w-screen-lg sm:w-96">
        <span className="font-light text-sm">
          Digite seu acesso para recuperar sua senha
        </span>
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
