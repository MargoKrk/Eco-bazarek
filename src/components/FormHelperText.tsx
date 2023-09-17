import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export interface FormHelperTextProps
  extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children"> {
  className?: string;
  helperText?: string;
}

export const FormHelperText = (props: FormHelperTextProps) => {
  const { className, helperText, ...other } = props;

  return (
    <span
      className={clsx("block text-xs font-normal mt-1", className)}
      {...other}
    >
      {helperText}
    </span>
  );
};
