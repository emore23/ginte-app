import api from '@/services/api/axios';
import { VALIDATE_EMAIL } from '@/services/routes/authRoutes';

export const getValidUserEmail = async () => {
  return await api.get(`${VALIDATE_EMAIL}`);
};
