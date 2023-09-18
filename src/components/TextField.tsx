import clsx from "clsx";
import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  forwardRef,
} from "react";
import { FormHelperText, FormLabel } from ".";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextFieldProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  className?: string;
  classNameDiv?: string;
  classNameLabel?: string;
  classNameHelperText?: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      classNameDiv,
      classNameLabel,
      label,
      required = false,
      helperText,
      classNameHelperText,
      error = false,
      inputProps = {},
      inputRef,
      ...other
    } = props;

    const { className: classNameInput, ...otherInput } = inputProps;

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
          className={clsx(
            className,
            "h-[42px] w-full text-black rounded-[2px] p-2 focus:outline-none"
          )}
          {...otherInput}
        />
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
