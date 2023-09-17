import clsx from "clsx";
import { HtmlHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FormLabel } from ".";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextAreaFieldProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  textAreaProps?: TextAreaProps;
  className?: string;
  classNameLabel?: string;
  classNameDiv?: string;
  classNameHelperText?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean
}

export const TextAreaField = (props: TextAreaFieldProps) => {
  const {
    className,
    classNameLabel,
    classNameDiv,
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
      <textarea
        placeholder={placeholder}
        className={clsx(
          className,
          "text-black w-full rounded-[2px] p-2 focus:outline-none resize-none"
        )}
      ></textarea>
             {helperText && (
          <span
            className={clsx(
              "block text-xs font-normal mt-1",
              classNameHelperText
            )}
          >
            {helperText}
          </span>
        )}

    </div>
  );
};
