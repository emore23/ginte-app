import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { postSignInUser } from '@/services/modules/auth/signUp/postSignUser';
import { type SignInUserProps } from '@/types/signInUser';

export function useSendEmailResetPassword() {
  const simulateLogin = useMutation({
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
    },
  });

  const sendEmailMutation = useMutation({
    mutationFn: async (email: string) => {
      if (email === process.env.NEXT_PUBLIC_TEST_USER_EMAIL) {
        return new Promise((resolve) => {
          simulateLogin.mutate({
            email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL!,
            password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD!,
            rememberMe: false,
          });

          resolve({ success: true });
        });
      }

      throw new Error('E-mail não encontrado');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocorreu um erro desconhecido.');
      }
    },
  });

  return {
    sendEmail: sendEmailMutation.mutate,
    isSendingEmail: sendEmailMutation.isPending,
  };
}
