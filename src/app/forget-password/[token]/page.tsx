'use client';

import { Button } from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type Props = {
  params: { token: string };
};

type Form = {
  password: string;
  confirmPassword: string;
};

export default function Page({ params }: Props) {
  const [showField, setShowField] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<Form>();

  const password = watch('password');

  const validateConfirmPassword = (e: string): string | undefined => {
    if (e !== password) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'As senhas devem conferir',
      });

      return 'As senhas devem conferir';
    }
    return undefined;
  };

  const onSubmit = (form: Form) => {
    console.log(form);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-whitePrimary text-primaryDarkBlue">
      <h3>TODO: TOKEN &gt; {params.token}</h3>
      <h3 className="mb-8 text-center">Recuperar Senha</h3>
      <div className="flex flex-col mt-8 mb-2 p-4 border lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md">
        <form className=" flex flex-col gap-10 max-w-screen-lg sm:w-96">
          <InputWithLabel
            {...register('password', {
              required: {
                value: true,
                message: 'Campo não pode ser vazio',
              },
            })}
            error={!!errors?.password}
            errorMessage={errors?.password?.message}
            label="Senha"
            icon={
              showField.password ? (
                <AiOutlineEyeInvisible
                  size={16}
                  onClick={() =>
                    setShowField((prevState) => ({
                      ...prevState,
                      password: !prevState.password,
                    }))
                  }
                />
              ) : (
                <AiOutlineEye
                  size={16}
                  onClick={() =>
                    setShowField((prevState) => ({
                      ...prevState,
                      password: !prevState.password,
                    }))
                  }
                />
              )
            }
            maxLength={14}
            type={showField.password ? 'text' : 'password'}
          />

          <InputWithLabel
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'Campo não pode ser vazio',
              },
              validate: (value) => validateConfirmPassword(value),
            })}
            error={!!errors?.confirmPassword}
            errorMessage={errors?.confirmPassword?.message}
            label="Confirmar Senha"
            icon={
              showField.confirmPassword ? (
                <AiOutlineEyeInvisible
                  size={16}
                  onClick={() =>
                    setShowField((prevState) => ({
                      ...prevState,
                      confirmPassword: !prevState.confirmPassword,
                    }))
                  }
                />
              ) : (
                <AiOutlineEye
                  size={16}
                  onClick={() =>
                    setShowField((prevState) => ({
                      ...prevState,
                      confirmPassword: !prevState.confirmPassword,
                    }))
                  }
                />
              )
            }
            maxLength={14}
            type={showField.confirmPassword ? 'text' : 'password'}
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
    </div>
  );
}
