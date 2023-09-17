import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { FormHelperText, FormLabel } from ".";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameDiv?: string;
  classNameLabel?: string;
  classNameHelperText?: string;
  type: string;
  label?: string;
  value: string;
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
    type,
    label,
    value,
    placeholder,
    required = false,
    helperText,
    classNameHelperText,
    error = false,
    children,
    ...other
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
        {...other}
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
