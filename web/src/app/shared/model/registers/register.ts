export interface Register {
  validate: TIPO_REGISTER;
  cnpjOfCpf: number;
  name: string;
  cep: string;
  provider: RegisterProvider;
  company: RegisterCompany;
}

export interface RegisterCompany {
  nameFantasia?: string;
}

export interface RegisterProvider {
  email?: string;
  rg?: string;
  dataNascimento?: string;
}

export enum TIPO_REGISTER {
  FornecedorPF = 'FornecedorPF',
  FornecedorPJ = 'FornecedorPJ',
  Empresa = 'Empresa'
}
