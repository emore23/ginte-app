import React, { Suspense } from 'react';
import ResetPasswordComponent from '@/components/pages/auth/resetPassword';

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResetPasswordComponent />
    </Suspense>
  );
}
