import { ButtonHTMLAttributes } from "react"
import "./Button.css"
import clsx from "clsx"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "text"
}

export const Button = (props: ButtonProps) => {

    const {className, children, variant, ...other} = props

    return (
        <button className={clsx(className, "Button-base", variant)} {...other}>{children}</button>
    )
}