import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  label: string;
  required?: boolean;
}

export const FormLabel = (props: FormLabelProps) => {
  const { className, label, required = false, ...other } = props;

  return (
    <label className={clsx("block text-[12px]", className)} {...other}>
      {label}
      {required && "*"}
    </label>
  );
};
