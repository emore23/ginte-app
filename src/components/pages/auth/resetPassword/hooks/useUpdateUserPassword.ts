import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { updateUserPassword } from '@/services/modules/auth/resetPassword/updateUserPassword';

export function useUpdateUserPassword() {
  const router = useRouter();

  const updatePasswordMutation = useMutation({
    mutationFn: async (password: string): Promise<AxiosResponse<unknown>> => {
      const token = Cookies.get('token');

      if (!token) {
        throw new Error('Usuário não autenticado');
      }

      return await updateUserPassword(password);
    },
    onSuccess: () => {
      toast.success('Senha atualizada com sucesso!');
      localStorage.removeItem('token');
      router.push('/auth/login');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro ao atualizar senha');
      }
    },
  });

  return {
    updatePassword: updatePasswordMutation.mutate,
    isUpdatingPassword: updatePasswordMutation.isPending,
  };
}
