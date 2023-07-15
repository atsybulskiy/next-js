import { IUser } from '@models/user';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type User1 = {
  id: number;
  _id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface Prompt {
  creator: IUser;
  prompt: string;
  tag: string;
  _id: string;
}
