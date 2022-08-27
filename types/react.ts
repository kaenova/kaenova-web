import { MouseEventHandler, ReactNode } from 'react';

export type PropsWithChildrenClassName = {
  children?: ReactNode | undefined,
  className?: string ;
}

export type ExtendClassName = {
  className?: string;
}

export interface ButtonType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  text: string;
  onClick? : MouseEventHandler;
}