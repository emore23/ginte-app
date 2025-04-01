import api from '@/services/api/axios';
import { VALIDADE_SESSION } from '@/services/routes/authRoutes';

export const getValidUserSession = async () => {
  return await api.get(`${VALIDADE_SESSION}`);
};
