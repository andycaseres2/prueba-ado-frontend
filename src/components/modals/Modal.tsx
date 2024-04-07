import React from "react";
import CloseIcon from "../../assets/Icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-10 rounded shadow-md relative w-[90%] h-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <CloseIcon
          action={onClose}
          design="absolute top-3 right-3 cursor-pointer hover:scale-105 text-primary"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Modal;
