import clsx from "clsx";
import {
  HtmlHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { FormLabel } from ".";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextAreaFieldProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  textAreaProps?: TextAreaProps;
  className?: string;
  classNameLabel?: string;
  classNameDiv?: string;
  classNameHelperText?: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
}

export const TextAreaField = forwardRef<HTMLDivElement, TextAreaFieldProps>(
  (props, ref) => {
    const {
      className,
      classNameLabel,
      classNameDiv,
      label,
      required = false,
      helperText,
      classNameHelperText,
      error = false,
      textAreaProps = {},
      textAreaRef,
      ...other
    } = props;

    const { className: classNameInput, ...otherTextArea } = textAreaProps;

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
        <textarea
          ref={textAreaRef}
          className={clsx(
            className,
            "text-black w-full rounded-[2px] p-2 focus:outline-none resize-none"
          )}
          {...otherTextArea}
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
  }
);
