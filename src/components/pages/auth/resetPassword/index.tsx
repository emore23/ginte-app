'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import { EmailForm } from './components/ResetPasswordForms/EmailForm';
import { PasswordResetForm } from './components/ResetPasswordForms/PasswordResetForm';
import { InstructionsCard } from './components/InstructionsCard/InstructionsCard';
import { useUpdateUserPassword } from './hooks/useUpdateUserPassword';
import { useSendEmailResetPassword } from './hooks/useSendEmailResetPassword';
import { FloatingCircles } from './components/FloatingCircles/FloatingCircles';

export default function ResetPasswordComponent() {
  const [step, setStep] = useState<'email' | 'instructions' | 'password'>('email');
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();
  const { updatePassword, isUpdatingPassword } = useUpdateUserPassword();
  const { sendEmail, isSendingEmail } = useSendEmailResetPassword();
  const router = useRouter();

  // Verificação contínua do token
  useEffect(() => {
    const checkToken = () => {
      const urlToken = searchParams.get('token');
      const cookieToken = Cookies.get('token');

      if (!urlToken && !cookieToken && step !== 'email' && step !== 'instructions') {
        router.push('/auth/login');
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 5000);

    window.addEventListener('focus', checkToken);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', checkToken);
    };
  }, [searchParams, router, step]);

  // Sincronização inicial do token
  useEffect(() => {
    const urlToken = searchParams.get('token');
    const cookieToken = Cookies.get('token');

    if (cookieToken && !urlToken) {
      router.replace(`/auth/reset-password?token=${cookieToken}`);
    } else if (urlToken && urlToken !== cookieToken) {
      Cookies.set('token', urlToken, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });
    }
  }, [searchParams, router]);

  const handleEmailSubmit = async (values: { email: string }) => {
    try {
      setEmail(values.email);
      await sendEmail(values.email);
      setStep('instructions');
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleContinue = () => {
    const token = Cookies.get('token');
    if (token) {
      router.push(`/auth/reset-password?token=${token}`);
    }
    setStep('password');
  };

  const handlePasswordSubmit = (values: { newPassword: string }) => {
    updatePassword(values.newPassword);
    Cookies.remove('token');
    router.push('/auth/login');
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white top-0 bottom-0 right-0 left-0">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <FloatingCircles />
      </div>

      <div className="relative z-10 flex w-full items-center justify-center">
        {step === 'email' && (
          <EmailForm onSubmit={handleEmailSubmit} isSubmitting={isSendingEmail} />
        )}
        {step === 'instructions' && <InstructionsCard email={email} onContinue={handleContinue} />}
        {step === 'password' && (
          <PasswordResetForm onSubmit={handlePasswordSubmit} isSubmitting={isUpdatingPassword} />
        )}
      </div>
    </div>
  );
}
