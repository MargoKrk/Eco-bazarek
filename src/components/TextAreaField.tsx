import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

export interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  classNameLabel?: string;
  classNameDiv?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean
}

export const TextAreaField = (props: TextAreaFieldProps) => {
  const {
    className,
    classNameLabel,
    classNameDiv,
    label,
    value,
    placeholder,
    disabled,
    required,
    children,
    ...other
  } = props;

  return (
    <div className={clsx(classNameDiv)}>
      <label className={clsx("block text-[12px]", classNameLabel)}>
        {label}{required && "*"}
      </label>
      <textarea
        placeholder={placeholder}
        className={clsx(
          className,
          "text-black w-full rounded-[2px] p-2 focus:outline-none resize-none"
        )}
        {...other}
      ></textarea>
    </div>
  );
};
