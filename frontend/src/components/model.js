import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white-A700 border border-gray-200_01 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[274px] md:mt-0 mt-[7px] p-[54px] md:px-10 sm:px-5 rounded-[30px] w-[48%] md:w-full">
        <div className="flex flex-col items-center justify-start mt-3.5 w-[92%] md:w-full">
          <div className="bg-gray-800 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[43px] shadow-bs2 w-[88px] md:w-full">
            <img
              className="h-7"
              src="images/img_question.svg"
              alt="question"
            />
          </div>
          <p className="leading-[150.00%] mt-[57px] text-base text-black-900 text-center tracking-[0.50px]">
            Are you sure you want to submit the Quiz?
          </p>
          <div className="flex flex-row items-center justify-between mt-[61px] w-full">
            <button
              className="text-base text-black-900 text-center tracking-[0.50px] cursor-pointer"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="text-base text-black-900 text-center tracking-[0.50px] cursor-pointer"
              onClick={onConfirm}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;
