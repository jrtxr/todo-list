import { useContext } from "react";
import { ModalsContext } from "../../context/ModalContext/ModalContext";

export const useModalContext = () => {
  const context = useContext(ModalsContext);
  const { isOpen, setIsOpen } = context;

  return { isOpen, setIsOpen };
};
