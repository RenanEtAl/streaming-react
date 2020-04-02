import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onDismiss, title, content, actions }) => {
  
  return ReactDOM.createPortal(
    // render modal
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    // attach it to modal div in index.html
    document.querySelector("#modal")
  );
};

export default Modal;

