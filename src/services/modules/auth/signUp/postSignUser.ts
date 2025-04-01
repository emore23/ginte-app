import api from '@/services/api/axios';
import { SIGN_IN_USER, SIGN_UP_USER } from '@/services/routes/authRoutes';
import { type SignInUserProps } from '@/types/signInUser';
import { type SignUpUserProps } from '@/types/signUpUser';
import { type AxiosResponse } from 'axios';

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const postSignInUser = async (
  data: Omit<SignInUserProps, 'rememberMe'>,
): Promise<AxiosResponse<AuthResponse>> => {
  return await api.post<AuthResponse>(SIGN_IN_USER, data);
};

export const postSignUpUser = async (data: SignUpUserProps) => {
  return await api.post(`${SIGN_UP_USER}`, data);
};
