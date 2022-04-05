import { ReactElement } from 'react'

// TODO: add animation: boolean
export interface SparksProps {
  quantity: 1 | 2 | 3;
  position?: {
    x: string;
    y: string;
  };
  size?: "small" | "standard" | "big";
  children: ReactElement;
}
