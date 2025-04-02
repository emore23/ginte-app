'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface InstructionsCardProps {
  email: string;
  onContinue: () => void;
}

export function InstructionsCard({ email, onContinue }: InstructionsCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="text-green-500" />
          Instruções enviadas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Enviamos as instruções para redefinir sua senha para o e-mail:
          <span className="font-semibold"> {email}</span>
        </p>
        <p>Verifique sua caixa de entrada e siga as instruções.</p>
        <Button onClick={onContinue} className="w-full">
          Continuar
        </Button>
      </CardContent>
    </Card>
  );
}