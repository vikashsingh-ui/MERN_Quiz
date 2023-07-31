import React from "react";
import { Img, Button, Input, Text } from "components";
import { CloseSVG } from "../assets/images";
import TruncatedText from "../components/TruncatedText";
import { toast } from 'react-toastify';

const TopNav = ({ group132value, setGroup132value, handleStartQuiz, userName }) => {
 
  const featureNotAvailable = () => {
    toast.error('Feature Not Available.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
 
  return (
    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
      <Text
        className="text-3xl  sm:text-[26px] md:text-[28px] text-gray-600"
        size="txtPoppinsExtraBold30"
      >
        Quiz Time
      </Text>
      <Input
        name="group132"
        placeholder="Search.."
        value={group132value} onClick={featureNotAvailable}
        // onChange={(e) => setGroup132value(e.target.value)}
        className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-[19px] text-gray-600 text-left w-full"
        wrapClassName="bg-white-A700 flex md:ml-[0] ml-[115px] md:mt-0 mt-[5px] pl-[27px] pr-[35px] py-[17px] rounded-[30px] shadow-bs w-[27%] md:w-full"
        prefix={
          <Img
            className="mt-1 mb-auto cursor-pointer h-[25px] mr-[13px]"
            src="images/img_search_blue_gray_400.svg"
            alt="search"
          />
        }
        suffix={
          <CloseSVG
            fillColor="#696f79"
            className="cursor-pointer h-[25px] my-auto"
            onClick={() => setGroup132value("")}
            style={{
              visibility: group132value?.length <= 0 ? "hidden" : "visible",
            }}
            height={25}
            width={25}
            viewBox="0 0 25 25"
          />
        }
      ></Input>
      <Button
        className="bg-blue_gray-400 cursor-pointer font-semibold leading-[normal] min-w-[212px] md:ml-[0] ml-[180px] md:mt-0 mt-[5px] py-[17px] rounded-[30px] text-center text-white-A700 text-xl"
        onClick={featureNotAvailable}
      >
        your Quiz
      </Button>
      <Img
        className="h-[70px] md:h-auto md:ml-[0] ml-[134px] rounded-[50%] w-[70px]"
        src="images/img_ellipse6_70x70.png" onClick={featureNotAvailable}
        alt="ellipseSix"
      />
      <Text
        className="md:ml-[0] ml-[15px] text-[19px] text-gray-600"
        size="txtPoppinsRegular19"
      >
      <TruncatedText text={userName} maxLength={14} />
      </Text>
    </div>
  );
};

export default TopNav;
