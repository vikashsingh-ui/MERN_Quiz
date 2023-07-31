import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Img, Input, Text } from "components";
import TopNav from "../../components/topnav";
import Sidebar from "../../components/sidebar";
const SelectTopicOnePage = () => {
  const [group137value, setGroup137value] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || 'vikash singh';
 
  const handleQuiz = (category) => {
    console.log(category); // Output: History, Medicine, Technology, or Agriculture
    var instructionData = {
      userName: userName,
      category: category
    };
    // Navigate to the quiz page or perform any other logic with the filtered questions
    navigate("/instruction", { state: { data: instructionData } });
  };

  const handleToDashboard = () => {
    navigate("/dashboard", { state:  { email : userName} })
  }
  const featureNotAvailable = () => {
    toast.error('Feature Not Available.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
  
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1378px] mb-0.5 mx-auto md:px-5 w-full">
        <TopNav
        group132value={group137value}
        setGroup132value={setGroup137value}
        // handleStartQuiz={handleStartQuiz}
        userName={userName}
      />
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-1/5 md:w-full">
              <Input
                name="group135"
                placeholder="Dashboard" onClick={handleToDashboard} 
                className="font-semibold  cursor-pointer leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                wrapClassName="bg-blue_gray-400 flex px-[35px] py-4 rounded-[30px] w-full"
                prefix={
                  <Img
                    className="mt-[3px] mb-px h-[25px] mr-[30px]"
                    src="images/img_icroundspacedashboard.svg"
                    alt="ic:round-space-dashboard"
                  />
                }
              ></Input>
              <Sidebar />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-[30px] shadow-bs w-[79%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-1.5 w-[99%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                  size="txtPoppinsBold33"
                >
                  Select Topic
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-1.5 text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Featured Category
                </Text>
                <div className="md:gap-5 gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[22px] w-full">
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("History")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle274_172x235.png"
                      alt="rectangle274"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[10%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      History
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full"  onClick={() => handleQuiz("Medicine")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle275_172x235.png"
                      alt="rectangle275"
                    />
                    <Text
                      className="absolute bottom-[6%] left-[9%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Medcine
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("History")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle274_172x235.png"
                      alt="rectangle286"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[9%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      History
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full"  onClick={() => handleQuiz("Medicine")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle275_172x235.png"
                      alt="rectangle287"
                    />
                    <Text
                      className="absolute bottom-[6%] left-[9%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Medcine
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Technology")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle276_172x235.png"
                      alt="rectangle276"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[8%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Technology
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Agriculture")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle277_172x235.png"
                      alt="rectangle277"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[10%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Agriculture
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Technology")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle276_172x235.png"
                      alt="rectangle288"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[8%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Technology
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Agriculture")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle277_172x235.png"
                      alt="rectangle289"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[10%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Agriculture
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Technology")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle276_172x235.png"
                      alt="rectangle290"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[8%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Technology
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Agriculture")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle277_172x235.png"
                      alt="rectangle291"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[10%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Agriculture
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Technology")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle276_172x235.png"
                      alt="rectangle292"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[8%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Technology
                    </Text>
                  </div>
                  <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Agriculture")}>
                    <Img
                      className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                      src="images/img_rectangle277_172x235.png"
                      alt="rectangle293"
                    />
                    <Text
                      className="absolute bottom-[5%] left-[10%] text-white-A700 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Agriculture
                    </Text>
                  </div>
                </div>
                <Button onClick={featureNotAvailable}  className="bg-blue_gray-400 cursor-pointer font-semibold leading-[normal] min-w-[212px] md:ml-[0] ml-[800px] mt-16 py-[17px] rounded-[30px] text-center text-white-A700 text-xl">
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTopicOnePage;
