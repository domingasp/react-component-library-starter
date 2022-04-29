import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps {
  children?: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
