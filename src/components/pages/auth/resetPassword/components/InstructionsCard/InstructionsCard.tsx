'use client';

import IconComponent from '@/components/shared/IconComponent/iconComponent';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Send } from 'lucide-react';

interface InstructionsCardProps {
  email: string;
  onContinue: () => void;
}

export function InstructionsCard({ email, onContinue }: InstructionsCardProps) {
  return (
    <Card className="min-w-[342px] max-w-[800px] w-full p-6 gap-7">
      <CardHeader>
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <IconComponent backgroundColor="#16A34A" textColor="#fff" svgIcon={<Check />} />

          <CardTitle className="text-4xl mt-2 font-semibold">Instruções Enviadas</CardTitle>
          <CardDescription className="text-xl text-[#71717A]">
            Verifique seu e-mail! As instruções para a recuperação da senha foram enviadas.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <p className="text-base text-[#18181B]">
          E-mail:
          <span className="font-semibold"> {email}</span>
        </p>
        <Button
          onClick={onContinue}
          className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 p-5 h-auto">
          <Send />
          Continuar
        </Button>
      </CardContent>
    </Card>
  );
}
