'use client';

import { AuthForm } from '@/components/shared/form';
import { useAuth } from '@/hooks/useAuth';
import { type authSchema } from '@/utils/schemas/authSchema';
import { type z } from 'zod';

export default function SignInUser() {
  const { login, isLoggingIn } = useAuth();

  const handleSubmit = (values: z.infer<typeof authSchema>) => {
    login(values);
  };

  return (
    <div className="mx-auto max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Acesse sua conta</h1>
      </div>
      <AuthForm onSubmit={handleSubmit} isSubmitting={isLoggingIn} />
    </div>
  );
}