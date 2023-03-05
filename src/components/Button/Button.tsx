import { createElement } from 'react';

export interface ButtonProps {
  children: string;
}
export const Button = ({ children }: ButtonProps) => {
  const text = `${children}1`;
  return <button>{text}</button>;
};
