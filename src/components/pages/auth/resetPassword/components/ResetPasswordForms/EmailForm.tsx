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
import { emailSchema } from '@/utils/schemas/resetPasswordSchema';
import { LockOpen, Send } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import IconComponent from '@/components/shared/IconComponent/iconComponent';

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
      <Card className="min-w-[342px] max-w-[800px] w-full p-6 gap-7">
        <CardHeader>
          <div className="flex flex-col items-center gap-2 text-center w-full">
            <IconComponent backgroundColor="#000000" textColor="#fff" svgIcon={<LockOpen />} />

            <CardTitle className="text-4xl mt-2">Recupere sua senha</CardTitle>
            <CardDescription className="text-xl text-[#71717A]">
              Informe seu e-mail para receber as instruções de redefinição de senha.
            </CardDescription>
          </div>
        </CardHeader>

        <div className="border border-solid bg-gray-300 w-full h-0.5" />

        <CardContent className="p-0">
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-[#18181B]">E-mail da conta</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base text-[#A1A1AA] h-[40px]"
                      placeholder="Digite o e-mail para recuperação"
                      type="email"
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
              <Send />
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
