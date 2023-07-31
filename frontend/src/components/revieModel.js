import React from "react";
import PropTypes from "prop-types";

const ReviewModal = ({ show, onClose, score }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white-A700 border border-gray-200_01 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[219px] md:mt-0 mt-[7px] p-[42px] md:px-10 sm:px-5 rounded-[30px] w-[57%] md:w-full">
        <img
          className="h-[100px] md:h-auto mt-2.5 object-cover w-[100px]"
          src="images/img_badge.png"
          alt="badge"
        />
        <p className="mt-[47px] text-[19px] text-black-900 text-center tracking-[0.50px]">
          Congratulations you have Submitted the quiz
        </p>
        <p className="mt-[9px] text-base text-black-900 text-center tracking-[0.50px]">
          You scored {score}%
        </p>
        <button
          className="mt-[72px] text-base text-black-900 text-center tracking-[0.50px] cursor-pointer"
          onClick={onClose}
        >
          Review Quiz
        </button>
      </div>
    </div>
  );
};

ReviewModal.propTypes = {
  show: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReviewModal;
