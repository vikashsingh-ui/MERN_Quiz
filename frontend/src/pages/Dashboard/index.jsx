import React, { useState, useEffect }  from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Img, Input, Line, Text } from "components";
import { CloseSVG } from "../../assets/images";
import TruncatedText from "../../components/TruncatedText";
import TopNav from "../../components/topnav";
import Sidebar from "../../components/sidebar"; // Import the Sidebar component

const DashboardPage = () => {
  const [group106value, setGroup106value] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || 'vikash singh';
  const userName = userEmail;
 
  const handleQuiz = (category) => {
    console.log(category); // Output: History, Medicine, Technology, or Agriculture
    var instructionData = {
      userName: userName,
      category: category
    };
    
    navigate("/instruction", { state: { data: instructionData } });
  };

  
   const handleClick = async()=>{
    // console.log('first')
     navigate("/selecttopicone", { state:  { userName } })
   }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
          <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1378px] mb-0.5 mx-auto md:px-5 w-full">
        <TopNav
        group132value={group106value}
        setGroup132value={setGroup106value}
        // handleStartQuiz={handleStartQuiz}
        userName={userName}
      />
            <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-8 justify-start w-1/5 md:w-full">
                <Input
                  name="groupNinetyNine"
                  placeholder="Dashboard"
                  className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
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
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[30px] sm:px-5 rounded-[30px] shadow-bs w-[79%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[3px] mt-[26px] w-full">
                  <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[258px] md:h-auto object-cover rounded-[30px]"
                      src="images/img_rectangle278_258x298.png"
                      alt="rectangle278"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="md:ml-[0] ml-[5px] sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                        size="txtPoppinsBold33"
                      >
                      <TruncatedText text={userEmail} maxLength={14} />
                      </Text>
                      <Text
                        className="ml-1.5 md:ml-[0] text-[19px] text-gray-600"
                        size="txtPoppinsRegular19"
                      >
                        Bonus booster 24lv
                      </Text>
                      <div className="h-3 mt-8 overflow-hidden relative rounded-[50%] shadow-bs1 w-[96%]">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                        <div
                          className="h-full absolute bg-gray_100  rounded-[6px]"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[5px] mt-[41px] w-full">
                        <Button className="bg-white-A700 flex h-[60px] items-center justify-center sm:mt-0 mt-0.5 p-[13px] rounded-[15px] shadow-bs w-[60px]">
                          <Img
                            className="h-10"
                            src="images/img_antdesignflagfilled.svg"
                            alt="antdesignflagfi"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] sm:text-[25px] md:text-[27px] text-[29px] text-gray-600"
                            size="txtPoppinsBold29"
                          >
                            27
                          </Text>
                          <Text
                            className="text-base text-gray-600"
                            size="txtPoppinsRegular16"
                          >
                            Quiz Passed
                          </Text>
                        </div>
                        <Button className="bg-white-A700 flex h-[60px] items-center justify-center sm:mt-0 mt-0.5 p-[17px] rounded-[15px] shadow-bs w-[60px]">
                          <Img
                            className="h-[33px]"
                            src="images/img_group14.svg"
                            alt="group102"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start sm:mt-0 mt-0.5">
                          <Text
                            className="ml-0.5 md:ml-[0] sm:text-[25px] md:text-[27px] text-[29px] text-gray-600"
                            size="txtPoppinsBold29"
                          >
                            27min
                          </Text>
                          <Text
                            className="text-base text-gray-600"
                            size="txtPoppinsRegular16"
                          >
                            Fastest Time
                          </Text>
                        </div>
                        <Button className="bg-white-A700 flex h-[60px] items-center justify-center sm:mt-0 mt-0.5 p-[15px] rounded-[15px] shadow-bs w-[60px]">
                          <Img
                            className="h-[38px]"
                            src="images/img_checkmark_gray_600.svg"
                            alt="akariconscircle"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] sm:text-[25px] md:text-[27px] text-[29px] text-gray-600"
                            size="txtPoppinsBold29"
                          >
                            200
                          </Text>
                          <Text
                            className="text-base text-gray-600"
                            size="txtPoppinsRegular16"
                          >
                            Correct Answers
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[92px] w-full">
                    <Text
                      className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                      size="txtPoppinsBold25"
                    >
                      Achievements
                    </Text>
                    <div className="h-3 md:ml-[0] ml-[126px] md:mt-0 mt-4 relative w-[17%] md:w-full">
                      <div className="absolute bg-gray-100 h-3 inset-y-[0] my-auto right-[0] rounded-md w-[96%]"></div>
                      <div className="absolute bg-gray-100 h-3 inset-y-[0] left-[0] my-auto rounded-md shadow-bs1 w-[62%]"></div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[34px] md:mt-0 mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                      size="txtPoppinsBold25"
                    >
                      Featured Category
                    </Text>
                    <a
                      onClick={handleClick}
                      className="md:ml-[0] ml-[187px] md:mt-0 mt-2.5 text-base text-gray-600 cursor-pointer"
                    >
                      <Text className="cursor-pointer" size="txtPoppinsRegular16">View All</Text>
                    </a>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mt-[13px] w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[30px] shadow-bs w-[48%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-4 w-[99%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_badge.png"
                            alt="badge"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_badge_41x41.png"
                            alt="badge_One"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start mt-2.5 w-[87%] md:w-full">
                          <Text
                            className="text-gray-600 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Comeback
                          </Text>
                          <Img
                            className="h-[100px] md:h-auto ml-[60px] mt-[3px] object-cover w-[100px]"
                            src="images/img_badge_1.png"
                            alt="badge_Two"
                          />
                          <Text
                            className="ml-[82px] text-gray-600 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Winner
                          </Text>
                        </div>
                        <Text
                          className="mt-[5px] text-gray-600 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Lucky
                        </Text>
                        <Line className="bg-gray-300 h-px mt-5 w-full" />
                        <a
                          className="mt-3.5 text-base text-gray-600"
                        >
                          <Text size="txtPoppinsRegular16">View All</Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                      <div className="sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="h-[172px] relative w-full" onClick={() => handleQuiz("History")}>
                          <Img
                            className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                            src="images/img_rectangle274_172x235.png"
                            alt="rectangle274"
                          />
                          <Text
                            className="absolute bottom-[5%] left-[9%] text-white-A700 text-xl"
                            size="txtPoppinsBold20"
                          >
                            History
                          </Text>
                        </div>
                        <div className="h-[172px] relative w-full" onClick={() => handleQuiz("Medicine")}>
                          <Img
                            className="h-[172px] m-auto object-cover rounded-[30px] w-full cursor-pointer"
                            src="images/img_rectangle275_172x235.png"
                            alt="rectangle275"
                          />
                          <Text
                            className="absolute bottom-[6%] left-[9%] text-white-A700 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Medicine
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
