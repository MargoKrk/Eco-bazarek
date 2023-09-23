import { HtmlHTMLAttributes, useEffect } from "react";
import { FormLabel, ValidationItem } from ".";

export interface PasswordValidatorProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  password: string;
  onValidationStatusChange?: (valid: boolean) => void;
}

export const PasswordValidator = (props: PasswordValidatorProps) => {
  const { password, onValidationStatusChange } = props;
  const passwordLength = password.length >= 8;
  const bigMark = [...password].some((x) => x.match(/^[A-Z]*$/));
  const oneNumber = [...password].some((x) => x.match(/^[0-9]*$/));
  const specialMark = [...password].some((x) =>
    x.match(/[!@#\$%\^\&*\)\(+=._-]+$/g)
  );

  useEffect(() => {
    onValidationStatusChange &&
      onValidationStatusChange(
        passwordLength && bigMark && oneNumber && specialMark
      );
  }, [
    onValidationStatusChange,
    passwordLength,
    bigMark,
    oneNumber,
    specialMark,
  ]);

  return (
    <div>
      <FormLabel label="Hasło musi spełniać następujące wymagania:"/>
        <ul>
          <ValidationItem isValid={passwordLength} message="Przynajmniej 8 znaków" />
          <ValidationItem isValid={bigMark} message="Przynajmniej jedna duża litera" />
          <ValidationItem isValid={oneNumber} message="Przynajmniej 1 cyfra" />
          <ValidationItem isValid={specialMark} message="Znak specjalny" />
        </ul>
    </div>
  );
};
