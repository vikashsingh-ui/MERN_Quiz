import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Img, Input, Text } from "components";
import TopNav from "../../components/topnav";
import Sidebar from "../../components/sidebar"; // Import the Sidebar component
import TruncatedText from "../../components/TruncatedText";

const InstructionPage = () => {
  const [group132value, setGroup132value] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const today = new Date();
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, dateOptions);
  // console.log(formattedDate)

  // console.log(location.state?.data)
  // const userName = "Oluwatobi..";
  var inputData =[];
  inputData = location.state?.data ||  {userName: "vikash singh",
    category: "History"};
// console.log(inputData.category)
  const getImageSrcForCategory = (category) => {
    // Define a mapping of category names to image URLs
    const categoryImageMap = {
      History: "images/img_rectangle274_172x235.png",
      Medicine: "images/img_rectangle275_172x235.png",
      Technology: "images/img_rectangle276_172x235.png",
      Agriculture: "images/img_rectangle277_172x235.png",
     
    };
  
    // category exists in the mapping, and return the corresponding image URL
    return categoryImageMap[category] || 'images/default_image.png';
  };

  const imageUrl = getImageSrcForCategory(inputData.category);


  const startQuiz = () => {
   // Output: History, Medicine, Technology, or Agriculture
    var instructionData = {
      userName: inputData.userName,
      category: inputData.category
    };
    // Navigate to the quiz page or perform any other logic with the filtered questions
    navigate("/answerquestion", { state: { data: instructionData } });
  };
  const handleToDashboard = () => {
    navigate("/dashboard", { state:  { email : inputData.userName } })
  }
  


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1378px] mb-0.5 mx-auto md:px-5 w-full">
        <TopNav
        group132value={group132value}
        setGroup132value={setGroup132value}
        // handleStartQuiz={handleStartQuiz}
        userName={inputData.userName}
      />
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-1/5 md:w-full">
              <Input
                name="group130"
                placeholder="Dashboard" onClick={handleToDashboard} 
                className="font-semibold  cursor-pointer  leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
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
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2 rounded-[30px] shadow-bs w-[79%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[26px] mt-[17px] w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start w-4/5 md:w-full">
                  <div className="flex flex-col items-start justify-start w-[62%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                      size="txtPoppinsBold33"
                    >
                      {inputData.category} Quiz
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[5px] text-gray-600 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Read the following instructions
                    </Text>

                     <Img
                     className="h-[296px] sm:h-auto mt-5 object-cover rounded-[30px] w-full"
                     src={imageUrl}
                      alt={inputData.category}
                      />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-6 sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                      size="txtPoppinsSemiBold23"
                    >
                      Instructions
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[103px] w-[34%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                        size="txtPoppinsSemiBold23"
                      >
                        Date:{" "}
                      </Text>
                      <Text
                        className="text-gray-600 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        {formattedDate}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[41px] items-start justify-start mt-[31px] w-[89%] md:w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                        size="txtPoppinsSemiBold23"
                      >
                        Time Limit:{" "}
                      </Text>
                      <Text
                        className="mt-1 text-gray-600 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        15 Mins
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[50px] items-start justify-start mt-[35px] w-4/5 md:w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                        size="txtPoppinsSemiBold23"
                      >
                        Attempts:
                      </Text>
                      <Text
                        className="text-gray-600 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        Once
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between mt-7 w-[98%] md:w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                        size="txtPoppinsSemiBold23"
                      >
                        Points:
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-600 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        100 Points
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[26px] text-[19px] text-gray-600"
                  size="txtPoppinsRegular19"
                >
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      This quiz consists of 5 multiple-choice questions. To be
                      successful with the quizzes, it’s important to conversant
                      with the topics. Keep the following in mind:
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left text-[17px] font-normal">
                    <>
                      Timing - You need to complete each of your attempts in one
                      sitting, as you are allotted 30 minutes to each attempt.
                      <br />
                      Answers - You may review your answer-choices and compare
                      them to the correct answers after your final attempt.
                      <br />
                      <br />
                      To start, click the &quot;Start&quot; button. When
                      finished, click the &quot;Submit &quot; button
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    .
                  </span>
                </Text>
                <Button onClick= {startQuiz} className="bg-blue_gray-400 cursor-pointer leading-[normal] min-w-[212px] md:ml-[0] ml-[800px] mt-[55px] py-[17px] rounded-[30px] text-center text-white-A700 text-xl">
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructionPage;
