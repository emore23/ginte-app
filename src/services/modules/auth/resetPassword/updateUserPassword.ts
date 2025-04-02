import Cookies from 'js-cookie';
import { type AxiosResponse } from 'axios';
import api from '@/services/api/axios';
import { UPDATE_NEW_PASSWORD } from '@/services/routes/authRoutes';

export const updateUserPassword = async (password: string): Promise<AxiosResponse<unknown>> => {
  const resetToken = Cookies.get('token');

  if (!resetToken) {
    throw new Error('Token de redefinição não encontrado.');
  }

  return api.put(
    UPDATE_NEW_PASSWORD,
    { password },
    {
      headers: {
        Authorization: `Bearer ${resetToken}`,
      },
    },
  );
};
