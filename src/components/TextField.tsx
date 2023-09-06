import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  classNameDiv?: string;
  type: string;
  label?: string;
  value: string;
  placeholder?: string
  disabled?: boolean
}

export const TextField = (props: TextFieldProps) => {
  const { className, classNameLabel,classNameDiv, type, label, value, placeholder, disabled, children, ...other } = props;

  return (
    <div className={clsx(classNameDiv)}>
    <label className={clsx("block text-[12px]", classNameLabel)}>{label}</label>
    <input
      className={clsx(
        className,
        "h-[42px] text-black rounded-[2px] p-2 focus:outline-none"
      )}
      {...other}
    ></input>
    </div>
  );
};
