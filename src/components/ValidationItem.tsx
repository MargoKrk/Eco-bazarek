import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { LiHTMLAttributes } from "react";

export interface ValidationItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isValid?: boolean;
  message: string;
}

export const ValidationItem = (props: ValidationItemProps) => {
  const { isValid = false, message } = props;

  return (
    <li
      className={clsx(
        "flex flex-row items-center text-[12px]",
        isValid ? "text-green-500" : "text-red-500"
      )}
    >
      {isValid ? (
        <FontAwesomeIcon icon={faCheck} className="w-3 h-3 mr-2" />
      ) : (
        <FontAwesomeIcon icon={faXmark} className="w-3 h-3 mr-2" />
      )}
      {message}
    </li>
  );
};
