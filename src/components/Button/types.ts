import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum EButtonColor {
  PRIMARY,
  SECONDARY
}

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  isActive?: boolean;
  color?: EButtonColor;
}

export type ButtonProps = PropsWithChildren<IButtonProps>;
