'use client';

import { type z } from 'zod';
import { Button } from '@/components/ui/button';
import { type authSchema } from '@/utils/schemas/authSchema';
import { AuthLoginForm } from '@/components/pages/auth/signInUser/components/AuthLoginForm/AuthLoginForm';
import { useAuth } from '@/components/pages/auth/signInUser/hooks/useAuth';
import LogoGinteApp from '../../../../../public/assets/ginte-logo.png';
import AnimatedDiamond from './components/AnimatedDiamond/AnimatedDiamond';
import IconComponent from '@/components/shared/IconComponent/iconComponent';

export default function SignInUser() {
  const { login, isLoggingIn } = useAuth();

  const handleSubmit = (values: z.infer<typeof authSchema>) => {
    login(values);
  };

  return (
    <div className="flex flex-row gap-10 w-full h-full justify-center">
      <div className="flex flex-col justify-center w-full max-w-[680px] xl:px-16 py-16">
        <div className="flex flex-col items-start gap-2 text-center w-full">
          <IconComponent backgroundColor="#000" textColor="#fff" iconUrl={LogoGinteApp} />

          <h1 className="text-3xl font-bold mt-3">Entre na sua conta</h1>
          <p className="text-gray-600 text-lg text-start">
            Acesse sua conta e gerencie sua empresa
          </p>

          <div className="flex flex-row items-center gap-1 text-base mt-2">
            <span>Não possui uma conta?</span>
            <Button className="p-0 text-blue-600" variant="link">
              Cadastrar
            </Button>
          </div>
        </div>

        <div className="border border-solid bg-gray-300 w-full h-0.5 my-6" />
        <AuthLoginForm onSubmit={handleSubmit} isSubmitting={isLoggingIn} />
      </div>

      <div className="hidden xl:flex">
        <AnimatedDiamond />
      </div>
    </div>
  );
}
