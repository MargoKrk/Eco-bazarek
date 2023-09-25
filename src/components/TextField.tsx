import clsx from "clsx";
import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  forwardRef,
  useState,
} from "react";
import { FormHelperText, FormLabel, PasswordItem } from ".";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextFieldProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  className?: string;
  classNameDiv?: string;
  classNameLabel?: string;
  classNameHelperText?: string;
  classNameItem?: string
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  password?:boolean;
  type?: string;
  inputRef?: RefObject<HTMLInputElement>;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      classNameDiv,
      classNameLabel,
      classNameItem,
      label,
      required = false,
      helperText,
      classNameHelperText,
      error = false,
      password=false,
      inputProps = {},
      inputRef,
      ...other
    } = props;

    const { className: classNameInput, ...otherInput } = inputProps;
    const [inputType, setInputType] = useState("password")


    const toggleInput = () => {
      setInputType(inputType === "password" ? "text" : "password")
    }

    return (
      <div
        ref={ref}
        className={clsx(classNameDiv, error ? "text-red-600" : "text=black")}
        {...other}
      >
        <FormLabel
          label={label as string}
          required={required}
          className={classNameLabel}
        />
        <input
          ref={inputRef}
          type={inputType}
          className={clsx(
            className,
            "h-[42px] w-full text-black rounded-[2px] p-2 focus:outline-none",
            error ? "bg-red-200 border-2 border-red-300" : "bg-white"
          )}
          {...otherInput}
        />{password && (
          <PasswordItem toggleInput={toggleInput} className={classNameItem}/>
        )}
        {helperText && (
          <FormHelperText
            helperText={helperText}
            className={classNameHelperText}
          />
        )}
      </div>
    );
  }
);
