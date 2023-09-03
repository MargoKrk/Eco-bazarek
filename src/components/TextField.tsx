import { InputHTMLAttributes } from "react"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className,
        

}

export const TextField = () => {
    return (
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[420px] h-[42px] mr-[26px] text-black"
      ></input>

    )
}