import { useModalContext } from "../../hooks/ModalHook/ModalHook";
import "./styles.css";

export const Modal = ({ children }) => {
  const { setIsOpen } = useModalContext();

  return (
    <div className="container">
      <div className="overlay">
        <header className="header">
          <button type="button" onClick={() => setIsOpen(false)}>
            x
          </button>
        </header>
        <section className="bodyModal">{children}</section>
      </div>
    </div>
  );
};
