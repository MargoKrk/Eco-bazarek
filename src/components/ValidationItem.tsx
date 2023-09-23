import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark
  } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
  


export interface ValidationItemProps {
    isValid: boolean,
    message: string
}


export const ValidationItem = (props: ValidationItemProps) => {  
    const {isValid, message} = props


    return (
        <li className={clsx("flex flex-row text-[12px]", isValid ? "text-green-500" : "text-red-500")}>
            {isValid ? 
            <FontAwesomeIcon icon={faCheck} className="w-3 h-3"/> : <FontAwesomeIcon icon={faXmark} className="w-3 h-3"/>} {message}
        </li>
    )
}