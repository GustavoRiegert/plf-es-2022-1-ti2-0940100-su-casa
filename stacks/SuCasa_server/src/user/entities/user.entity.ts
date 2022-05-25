import { Role } from '.prisma/client';

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: Role;
}
