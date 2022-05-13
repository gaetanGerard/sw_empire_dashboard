import React, { ReactNode } from 'react';

// Import Styles
import "../../styles/button.scss";

type BtnProps = {
    btnType: "button" | "submit" | "reset" | undefined,
    className?: string,
    children: ReactNode,
    onClick: (e: any) => void,
    disabled?: boolean,
    name?: string,
    dataHover?: string
}

const Button = ({ btnType, className, children, onClick, disabled, name, dataHover }: BtnProps): JSX.Element  => {
  return (
    <button type={btnType} data-hover={dataHover} className={`btn ${className}`} disabled={disabled} onClick={onClick} name={name}>
        {children}
    </button>
  )
}

export default Button