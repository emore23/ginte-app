import api from '@/services/api/axios';
import { RESET_PASSWORD } from '@/services/routes/authRoutes';

export const sendUserEmailResetPassword = async (email: string) => {
  if (process.env.NODE_ENV === 'development') {
    return { data: { success: true } };
  }

  return await api.put(RESET_PASSWORD, { email });
};
