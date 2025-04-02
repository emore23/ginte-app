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
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { passwordResetSchema } from '@/utils/schemas/resetPasswordSchema';
import IconComponent from '@/components/shared/IconComponent/iconComponent';
import { KeyRound, LockOpen } from 'lucide-react';

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
      <Card className="min-w-[342px] max-w-[800px] w-full p-6 gap-7">
        <CardHeader>
          <div className="flex flex-col items-center gap-2 text-center w-full">
            <IconComponent backgroundColor="#000000" textColor="#fff" svgIcon={<LockOpen />} />

            <CardTitle className="text-4xl mt-2">Redefina sua senha</CardTitle>
            <CardDescription className="text-xl text-[#71717A]">
              Digite sua nova senha para recuperar o acesso à sua conta.
            </CardDescription>
          </div>
        </CardHeader>

        <div className="border border-solid bg-gray-300 w-full h-0.5" />

        <CardContent className="p-0">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-[#18181B]">Senha</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base text-[#A1A1AA] h-[40px]"
                      placeholder="Digite a nova senha"
                      type="password"
                      {...field}
                    />
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
                  <FormLabel className="text-sm text-[#18181B]">Confirmar senha</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base text-[#A1A1AA] h-[40px]"
                      placeholder="Digite a senha novamente"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 p-5 h-auto"
              loading={isSubmitting}>
              <KeyRound />
              Alterar Senha
            </Button>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
