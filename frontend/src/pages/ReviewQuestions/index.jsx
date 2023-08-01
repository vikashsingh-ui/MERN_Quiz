import React, { useState, useEffect } from "react";

import { Button, Img, Input, Text } from "components";
import TopNav from "../../components/topnav";
import Sidebar from "../../components/sidebar"; // Import the Sidebar component
import { CloseSVG } from "../../assets/images";
import TruncatedText from "../../components/TruncatedText";
import { useNavigate, useLocation } from 'react-router-dom';

const ReviewQuestionsPage = () => {
  const [group121value, setGroup121value] = React.useState("");
 
  const API_BASE_URL = "https://vikash-quiz-app.onrender.com";


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] =useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const data = location.state?.data || {
    userName: "vikash singh",
    category: " ",

  };;

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

  const imageUrl = getImageSrcForCategory(data.category);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/questions`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Error fetching quiz questions");
        }
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch quiz questions");
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, []);

  useEffect(() => {
    // Filter questions only if inputData.category is not empty
   // console.log(inputData.category)
    if (data.category) {
      const questionsForCategory = questions.filter((item) => item.category === data.category);
      // console.log(questionsForCategory)
      setFilteredQuestions(questionsForCategory);
    }
  }, [data.category, questions]);
  
  console.log(filteredQuestions[0]?.questions);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(filteredQuestions[0]?.questions.length).fill(data.userAnser ));
  // userAnser : selectedAnswers,
  // quizTime :quizTime
  // setSelectedAnswers(data.userAnser)
  console.log(selectedAnswers);

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  };

  const handleNextQuestion = () => {
    // Save the selected answer for the current question
  
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const handleNextQuiz = () => {
  // Navigate to the select topic page 
  setSelectedAnswers(Array(filteredQuestions[0]?.questions.length).fill(null));
  setCurrentQuestionIndex(0);
  
  navigate("/selecttopicone", { state:  { userName : data.userName } })

  };
const handleToDashboard = () => {
  navigate("/dashboard", { state:  { email : data.userName } })
}


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1378px] mb-0.5 mx-auto md:px-5 w-full">
          <TopNav
          group132value={group121value}
          setGroup132value={setGroup121value}
          // handleStartQuiz={handleStartQuiz}
          userName={data.userName}
        />
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-1/5 md:w-full">
              <Input
                name="group119"
                placeholder="Dashboard" onClick={handleToDashboard} 
                className="font-semibold cursor-pointer leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
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
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[30px] shadow-bs w-[79%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-2.5 w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-[98%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                    size="txtPoppinsBold33"
                  >
                    {data.category} Quiz
                  </Text>
                  <Text
                    className="mb-0.5 sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                    size="txtPoppinsRegular33"
                  >
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      Timer:{" "}
                    </span>
                    <span className="text-red-400 font-poppins text-left font-normal">
                    {data.quizTime}
                    </span>
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      {" "}
                      Mins
                    </span>
                  </Text>
                </div>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[5px] text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Answer the question below
                </Text>
                <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mt-[13px] w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[7px] w-1/2 md:w-full">
                  <Img
                     className="h-[296px] sm:h-auto mt-5 object-cover rounded-[30px] w-full"
                     src={imageUrl}
                      alt={data.category}
                      />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[25px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                      size="txtPoppinsSemiBold23"
                    >
                      Choose answer
                    </Text>
                    <Text className="mb-1 sm:ml-[0] ml-[37px] text-gray-600 text-lg" size="txtPoppinsRegular18Gray600">
                       <div className="flex flex-row">
                      <span className="text-deep_orange-600 font-poppins text-left font-bold">Your Answer</span>
                      <span className="text-gray-600 ml-[37px]  font-poppins text-left font-normal">{selectedAnswers[0]?.[currentQuestionIndex]}</span>
                      </div>
                      <div className="flex flex-row">
                      <span className="text-green-A700 font-poppins text-left font-bold">Correct Answer</span>
                      <span className="text-gray-600 ml-[37px]  font-poppins text-left font-normal">{filteredQuestions[0]?.questions[currentQuestionIndex]?.correctAnswer}</span>
                      </div>
                    </Text>
                    <div className="flex flex-row gap-7 items-left justify-start md:ml-[0] ml-[0px] mt-[22px] w-[80%] md:w-full">
                      <div className="flex flex-col gap-[30px] items-left justify-start ">
                      {filteredQuestions[0]?.questions[currentQuestionIndex]?.options.map((option, index) => (
                       <div className="flex flex-row gap-[30px] items-left justify-start" key={index}>
                       <input
                       type="radio"
                       name="answerOption"
                       value={option}
                       checked={selectedAnswers[0]?.[currentQuestionIndex] === option }
                        />
                        <Text className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18Gray600">{option}</Text>
                       </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                      size="txtPoppinsSemiBold23"
                    >
                       Question {currentQuestionIndex + 1}/{filteredQuestions[0]?.questions.length}
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-600 text-lg w-[98%] sm:w-full"
                      size="txtPoppinsRegular18Gray600"
                    >
                     {filteredQuestions[0]?.questions[currentQuestionIndex]?.question}
                    </Text>
                    {(currentQuestionIndex === filteredQuestions[0]?.questions.length-1) ? <Button
                    onClick={handleNextQuiz} 
                    className="bg-blue_gray-400 cursor-pointer font-bold leading-[normal] min-w-[212px] md:ml-[0] ml-[251px] mt-[469px] py-[15px] rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                   >
                    Next Quiz
                   </Button> :  <Button onClick={handleNextQuestion} className="bg-blue_gray-400 cursor-pointer font-bold leading-[normal] min-w-[212px] md:ml-[0] ml-[251px] mt-[469px] py-[15px] rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                      Next
                    </Button>

                   }
                  </div>
                </div>
                {(currentQuestionIndex > 0) ? <Button
                    onClick={handlePrevQuestion}
                    className="bg-blue_gray-400 cursor-pointer font-bold leading-[normal] min-w-[212px] py-[15px] rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                  >
                    Previous
                  </Button> : ''

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewQuestionsPage;

