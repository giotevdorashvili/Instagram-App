import {Dispatch, SetStateAction} from 'react';

export interface InputProps {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export interface LoginButtonprops {
  email: string;
  password: string;
}
