import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import TopNav from "../../components/topnav";
import Sidebar from "../../components/sidebar"; // Import the Sidebar component
import { CloseSVG } from "../../assets/images";
import TruncatedText from "../../components/TruncatedText";
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from "../../components/model";
import ReviewModal from "../../components/revieModel";
import { toast } from 'react-toastify';

const AnswerQuestionPage = () => {
  const [group116value, setGroup116value] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] =useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizTime , setQuizTime] = useState("");
  const [ scorevalue , setScorevalue ] =useState(0);
  // console.log(location.state?.data)
  const data = location.state?.data || {
    userName: "vikash singh",
    category: " "
  };;
  const API_BASE_URL = "https://vikash-quiz-app.onrender.com";

  const [remainingTime, setRemainingTime] = useState(15 * 60); // 15 minutes (in seconds)
  const [showFinalSubmissionPopup, setShowFinalSubmissionPopup] = useState(
    false
  );
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
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

  const decrementTime = () => {
    setRemainingTime((prevTime) => prevTime - 1);
  };
  

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
  
  // console.log(filteredQuestions[0]?.questions);

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(decrementTime, 1000);
    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  
useEffect(() => {
  // Start the timer when the component mounts
  const timer = setInterval(decrementTime, 1000);
  // Check if the remaining time has reached 0
  if (remainingTime === 0) {
    // Implement auto-submit functionality here
    // For example, call a function that submits the quiz
    // handleSubmitQuiz();
    handleFinalSubmission()
  }

  // Clear the timer when the component unmounts
  return () => {
    clearInterval(timer);
  };
}, [remainingTime]);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

  // Function to handle the "Next" button click
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  };

  const [selectedAnswers, setSelectedAnswers] = useState(Array(filteredQuestions[0]?.questions.length).fill(null));

  const handleNextQuestion = () => {
    // Save the selected answer for the current question
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[currentQuestionIndex] = selectedOption;
      // console.log(updatedAnswers)
      return updatedAnswers;

    });
    setSelectedOption("");
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const calculateScore = () => {
   let scorevalue = 0;
   filteredQuestions[0]?.questions.forEach((question, index) => {
    if (question.correctAnswer === selectedAnswers[index]) {
    scorevalue ++;
    }
  });
  // console.log(scorevalue)
  return scorevalue;
  };


  const handleSubmitQuiz = () => {
    handleNextQuestion();
    setShowFinalSubmissionPopup(true); // Show the popup for final submission
  };



  const handleFinalSubmission = () => {
    // Calculate the score %
    console.log(calculateScore())
    const score = calculatePercentage(calculateScore(), filteredQuestions[0]?.questions.length)
    // Clear selected answers and reset the current question index
    // setSelectedAnswers(Array(filteredQuestions[0]?.questions.length).fill(null));
    // setCurrentQuestionIndex(0);
    setQuizScore(score);
    setQuizTime(formatTime(remainingTime));
    // setShowFinalSubmissionPopup(true);
    // Hide the final submission popup
    setShowFinalSubmissionPopup(false);
    setShowReviewPopup(true);
  };


  const calculatePercentage = (score, totalQuestions) => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };
  

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1378px] mb-0.5 mx-auto md:px-5 w-full">
          <TopNav
          group132value={group116value}
          setGroup132value={setGroup116value}
          // handleStartQuiz={handleStartQuiz}
          userName={data.userName}
        />
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-1/5 md:w-full">
              <Input
                name="group114"
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
            
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[30px] shadow-bs w-[79%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[11px] w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-[99%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-[3px] sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                    size="txtPoppinsBold33"
                  >
                   {data.category} Quiz
                  </Text>
                  <Text
                    className="mb-[3px] sm:text-[29px] md:text-[31px] text-[33px] text-gray-600"
                    size="txtPoppinsBold33"
                  >
                    Timer: {formatTime(remainingTime)} Min
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
                    <div className="flex flex-row gap-7 items-center justify-start md:ml-[0] ml-[3px] mt-[22px] w-[47%] md:w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[11%]">
                      {filteredQuestions[0]?.questions[currentQuestionIndex]?.options.map((option, index) => (
                       <div className="flex flex-row gap-[30px] items-center justify-start w-[11%]" key={index}>
                       <input
                       type="radio"
                       name="answerOption"
                       value={option}
                       checked={selectedOption === option || selectedAnswers[currentQuestionIndex] == option }
                        onChange={() => setSelectedOption(option)}
                      />
                      <Text className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18Gray600">{option}</Text>
                       <br />
                       <br />
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
                    {(currentQuestionIndex == filteredQuestions[0]?.questions.length-1) ? <Button
                    onClick={handleSubmitQuiz} 
                    className="bg-blue_gray-400 cursor-pointer font-bold leading-[normal] min-w-[212px] md:ml-[0] ml-[251px] mt-[469px] py-[15px] rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                   >
                    submit
                   </Button> :  <Button onClick={handleNextQuestion} className="bg-blue_gray-400 cursor-pointer font-bold leading-[normal] min-w-[212px] md:ml-[0] ml-[251px] mt-[469px] py-[15px] rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                      Next
                    </Button>

                   }
                   
                  </div>
                 <Modal
                show={showFinalSubmissionPopup}
                onClose={() => setShowFinalSubmissionPopup(false)}
                onConfirm={() => {
               // handleSubmitQuiz();
                  handleFinalSubmission();
                  setShowFinalSubmissionPopup(false); // Close the modal after submission
                }}
                />
                <ReviewModal
                show={showReviewPopup}
                score={quizScore}
                onClose={() => {
                  var instructionData = {
                    userName: data.userName,
                    category: data.category,
                    userAnser : selectedAnswers,
                    quizTime :quizTime
                  };
                  // Navigate to the riview  page 
                  setShowReviewPopup(false)
                  toast('quiz complited successfuly!')
                  navigate("/reviewquestions", { state: { data: instructionData } });
                }}
                />

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

export default AnswerQuestionPage;
