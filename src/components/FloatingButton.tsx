import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export interface FloatingButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const FloatingButton = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        })
    }

  return (
    <div className="flex justify-center items-center w-[42px] h-[42px] bg-[#46AA42] rounded-full fixed right-[27px] top-[624px]">
      <FontAwesomeIcon
        icon={faChevronUp}
        className="w-[30px] h-[16px] text-white"
        onClick={handleScroll}
      />
    </div>
  );
};
