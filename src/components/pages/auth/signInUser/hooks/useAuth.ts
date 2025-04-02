import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSignInUser } from '@/services/modules/auth/signUp/postSignUser';
import { type SignInUserProps } from '@/types/signInUser';

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    Cookies.remove('token');
    queryClient.clear();
    router.push('/auth/login');
  };

  const loginMutation = useMutation({
    mutationFn: (credentials: SignInUserProps) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { rememberMe, ...loginData } = credentials;
      return postSignInUser(loginData);
    },
    onSuccess: (response, variables) => {
      const token = response.data.accessToken;

      if (variables.rememberMe) {
        Cookies.set('token', token, {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
        });
      } else {
        Cookies.set('token', token, {
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
        });
      }

      toast.success('Login realizado com sucesso!');
      router.push('/dashboard');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.response.data.message as string);
      } else {
        toast.error('Erro ao fazer login');
      }
    },
  });

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    logout: handleLogout,
  };
}
