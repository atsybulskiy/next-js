import { DefaultSession, DefaultUser  } from 'next-auth';

interface IUser extends DefaultUser {
  id?: string;
}

declare module 'next-auth' {
  interface User extends IUser {}

  interface Session {
    user?: User & DefaultSession['user'];
  }

  interface Profile {
    picture?: string;
  }
}
