'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { emailSchema, passwordResetSchema } from '@/utils/schemas/resetPasswordSchema';

interface EmailFormProps {
  onSubmit: (values: { email: string }) => void;
  isSubmitting?: boolean;
}

export function EmailForm({ onSubmit, isSubmitting }: EmailFormProps) {
  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
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
                <Input placeholder="Digite seu e-mail cadastrado" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" loading={isSubmitting}>
          Enviar
        </Button>
      </form>
    </Form>
  );
}

interface PasswordResetFormProps {
  onSubmit: (values: { newPassword: string; confirmPassword: string }) => void;
  isSubmitting?: boolean;
}

export function PasswordResetForm({ onSubmit, isSubmitting }: PasswordResetFormProps) {
  const form = useForm({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova senha</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua nova senha" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme sua senha</FormLabel>
              <FormControl>
                <Input placeholder="Digite novamente sua senha" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" loading={isSubmitting}>
          Redefinir senha
        </Button>
      </form>
    </Form>
  );
}