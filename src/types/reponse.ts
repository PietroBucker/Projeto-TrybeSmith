type ServiceResponseErroType = 'NOT_FOUND';
type ServiceResponseSuccessType = 'SUCCESS' | 'CREATED';

type ServiceResponseErro = {
  status: ServiceResponseErroType,
  message: string
};

type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType,
  message: T
};

export type ServiceResponse<T> = ServiceResponseErro | ServiceResponseSuccess<T>;