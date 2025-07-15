import React from "react";

export default function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bg-black/50 inset-0"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-overlay fixed inset-0 bg-black/55 h-[80%] w-[85%] md:w-[70%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-2 px-4 flex flex-col justify-start items-end rounded-2xl">
        <button className="close-modal text-white " onClick={closeModal}>
          X
        </button>
        <div className="modal-content mb-2 bg-white h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
