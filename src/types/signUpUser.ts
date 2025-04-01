type User = {
  name: string;
  email: string;
  password: string;
};

type UserAddress = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
};

type UserCompany = {
  corporateName: string;
  taxId: string;
  email: string;
  phone: string;
};

type UserPlan = {
  id: string;
  PaymentMethodEnum: string;
};

export type SignUpUserProps = {
  user: User;
  address: UserAddress;
  company: UserCompany;
  plan: UserPlan;
};
