import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { FormHelperText, FormLabel } from ".";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextFieldProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  className?: string;
  classNameDiv?: string;
  classNameLabel?: string;
  classNameHelperText?: string;
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    classNameDiv,
    classNameLabel,
    type = "text",
    label,
    placeholder,
    required = false,
    helperText,
    classNameHelperText,
    error = false,
  } = props;

  return (
    <div className={clsx(classNameDiv, error ? "text-red-600" : "text=black")}>
      <FormLabel
        label={label as string}
        required={required}
        className={classNameLabel}
      />
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          className,
          "h-[42px] w-full text-black rounded-[2px] p-2 focus:outline-none"
        )}
      />
      {helperText && (
        <FormHelperText
          helperText={helperText}
          className={classNameHelperText}
        />
      )}
    </div>
  );
};
