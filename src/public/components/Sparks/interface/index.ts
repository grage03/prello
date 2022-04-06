import { ReactElement } from 'react'

// TODO: add animation: boolean
export interface SparksProps {
  quantity?: 1 | 2 | 3;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  rotate?: number;
  size?: "small" | "standard" | "big";
  children: ReactElement;
}
