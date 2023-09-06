import clsx from "clsx"
import { InputHTMLAttributes } from "react"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const TextField = (props: TextFieldProps) => {

    const {className, children, ...other} = props

    return (
        <input className={clsx(className, "h-[42px] text-black rounded-[2px] p-2 focus:outline-none")} {...other}
      ></input>

    )
}