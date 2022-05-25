import { Role } from '.prisma/client';

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  cpf: string;
  phone: string;
  role: Role;
}
