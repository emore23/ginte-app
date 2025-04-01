import api from '@/services/api/axios';
import { UPDATE_NEW_PASSWORD } from '@/services/routes/authRoutes';

export const updateUserPassword = async (password: string) => {
  return await api.put(`${UPDATE_NEW_PASSWORD}`, password);
};
