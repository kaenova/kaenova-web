import { MouseEventHandler, ReactNode } from 'react';

export type PropsWithChildrenClassName = {
  children?: ReactNode | undefined,
  className?: string ;
}

export type ExtendClassName = {
  className?: string;
}

export type ButtonType = {
  className?: string;
  text: string;
  onClick? : MouseEventHandler;
};
