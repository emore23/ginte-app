'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';
import { type AuthFormValues, authSchema } from '@/utils/schemas/authSchema';

interface AuthFormProps {
  onSubmit: (values: AuthFormValues) => void;
  isSubmitting?: boolean;
  isRegister?: boolean;
}

export function AuthForm({ onSubmit, isSubmitting, isRegister }: AuthFormProps) {
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu melhor e-mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua senha" type="password" {...field} />
              </FormControl>
              {!isRegister && (
                <div className="flex justify-end">
                  <Link
                    href="/auth/reset-password"
                    className="text-sm text-muted-foreground hover:underline">
                    Esqueceu sua senha?
                  </Link>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {!isRegister && (
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="!mt-0">Manter conectado</FormLabel>
              </FormItem>
            )}
          />
        )}

        <Button type="submit" className="w-full" loading={isSubmitting}>
          {isRegister ? 'Criar conta' : 'Entrar'}
        </Button>
      </form>
    </Form>
  );
}
