export interface InputValuTypes {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export interface InputProps {
  username: string;
  fullName: string;
  email: string;
  password: string;
  onSignUpValuesChange: (val: string, type: string) => void;
}
