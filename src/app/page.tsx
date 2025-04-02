'use client';

import { useAuth } from '@/components/pages/auth/signInUser/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { isLoggingIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggingIn) {
      router.replace('/auth/login');
      return;
    }
  }, [isLoggingIn, router]);

  return null;
}
