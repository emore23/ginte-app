'use client';

import { useState } from 'react';
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
import { Eye, EyeOff, LogIn } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (values: AuthFormValues) => void;
  isSubmitting?: boolean;
}

export function AuthLoginForm({ onSubmit, isSubmitting }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
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
                <div className="relative">
                  <Input
                    placeholder="Digite sua senha"
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-[#000]" />
                    ) : (
                      <Eye className="h-4 w-4 text-[#000]" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row items-center justify-between gap-7">
          <Link
            href="/auth/reset-password"
            className="text-sm text-muted-foreground hover:underline">
            Esqueceu sua senha?
          </Link>

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-sm !mt-0">Manter conectado</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 p-5 h-auto" loading={isSubmitting}>
          <LogIn />
          Entrar
        </Button>
      </form>
    </Form>
  );
}
