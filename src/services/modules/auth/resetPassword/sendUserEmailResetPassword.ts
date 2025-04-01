import api from '@/services/api/axios';
import { RESET_PASSWORD } from '@/services/routes/authRoutes';

export const sendUserEmailResetPassword = async (email: string) => {
  return await api.put(`${RESET_PASSWORD}`, email);
};
