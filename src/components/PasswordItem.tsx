import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface PasswordItemProps extends HTMLAttributes<HTMLDivElement> {
    classNameDiv?: string;
    toggleInput?: ()=> void
}


export const PasswordItem = (props: PasswordItemProps) => {

    const{classNameDiv, toggleInput} = props

    return (
        <div className={clsx("w-6 h-6 top-[-35px] relative right-[-480px]", classNameDiv)}>
            <FontAwesomeIcon 
            icon={faEye} 
            className="w-6 h-6 text-[#00000029] absolute"
            onClick={toggleInput}/>
        </div>
    )
}