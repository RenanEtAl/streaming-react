import React from "react";
import ReactDOM from "react-dom";
import './Modal.styles.css'

const Modal = ({ onDismiss, title, content, actions }) => {
  
  return ReactDOM.createPortal(
    // render modal
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="modal-container ui standard modal visible active"
      >
        <div className="header modal-title">{title}</div>
        <div className="content modal-content">{content}</div>
        <div className="actions modal-action">{actions}</div>
      </div>
    </div>,
    // attach it to modal div in index.html
    document.querySelector("#modal")
  );
};

export default Modal;

