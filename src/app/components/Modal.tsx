// components/Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full transform transition-transform duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-600 text-3xl float-right"
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
