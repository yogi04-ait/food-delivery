import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
        <button className="float-right text-lg font-bold" onClick={onClose}>
          &times;
        </button>
        <div className="clear-both mt-4">{content}</div>
      </div>
    </div>
  );
};

function Component2() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        content="This is the modal content."
      />
    </div>
  );
}

export default Component2;
