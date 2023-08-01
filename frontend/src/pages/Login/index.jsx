import React, { useState }  from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {useNavigate} from "react-router-dom"
import { Button, CheckBox, Img, Input, Line, Text } from "components";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const API_BASE_URL = "https://vikash-quiz-app.onrender.com";


  // const googleSignIn = useGoogleLogin({
  //   onSuccess: (res) => {
  //     console.log("res", res);
  //     alert("Login successfull");
  //   },
  // });

  const handleEmailChange = (e) => {
    setEmail(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError(null);

      // Check if any required field is empty
    if (!email || !password) {
         setError("All fields are required.");
         return;
    }
      const response = await fetch(`${API_BASE_URL}/login`, {
       method: 'POST',
       headers: {
      'Content-Type': 'application/json',
       },
        body: JSON.stringify({ email, password,}),
      });

      if (response.ok) {
        setError('');
        const data = await response.json();
        //  console.log(data); // This will log the response data from the server
         
         const token= data.token;
         // Save the token to localStorage or any other state management system
         localStorage.setItem('token', token);
         toast('Login successful!')
         
         console.log('Login successful!');
        
         navigate("/dashboard" , { state: { email } })

      }else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred during login.');
        return;
      }

      } catch (error) {
      console.error('Error in registrayion', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleClick = async()=>{
    // console.log('first')
     navigate("/signup")
   }

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[89%] md:w-full">
          <div className="font-gayathri h-[1024px] relative w-[52%] md:w-full">
            <Img
              className="h-[1024px] m-auto object-cover w-full"
              src="images/img_rectangle29_1024x660.png"
              alt="rectangleTwentyNine"
            />
            <div className="absolute bg-blue_gray-400_7f flex flex-col h-full inset-[0] items-end justify-center m-auto p-[83px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-[220px] mt-[134px] w-[66%] md:w-full">
                <Text
                  className="md:text-5xl text-8xl text-cyan-A400"
                  size="txtGayathriBold96"
                >
                  “
                </Text>
                <div className="flex flex-col font-poppins items-start justify-start ml-3.5 md:ml-[0] w-[96%] md:w-full">
                  <Text
                    className="leading-[38.00px] text-lg text-white-A700 w-[97%] sm:w-full"
                    size="txtPoppinsRegular18"
                  >
                    Those people who develop the ability to continuously acquire
                    new and better forms of knowledge that they can apply to
                    their work and to their lives will be the movers and shakers
                    in our society for the indefinite future
                  </Text>
                  <Text
                    className="mt-[15px] text-lg text-white-A700"
                    size="txtPoppinsMedium18"
                  >
                    Brian Tracy
                  </Text>
                  <Img
                    className="h-[33px] md:ml-[0] ml-[276px] mt-8 w-[33px]"
                    src="images/img_vector1.svg"
                    alt="bag"
                  />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-5 md:ml-[0] ml-[59px] md:mt-0 mt-[74px] w-5"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <a
            className="md:ml-[0] ml-[9px] md:mt-0 mt-[72px] text-base text-blue_gray-400"
            size="txtPoppinsSemiBold16"
            onClick={handleClick}
            
          >
            Back/SignUp 
          </a>
          <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[54px] md:mt-0 mt-[196px] w-[34%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPoppinsBold30"
            >
              Login to your Account
            </Text>
            <Text
              className="text-blue_gray-400 text-lg"
              size="txtPoppinsRegular18Bluegray400"
            >
              with your registered Email Address
            </Text>
            <Line className="bg-gray-100 h-px mt-[29px] w-full" />
            <form className="form" onSubmit={handleSubmit}>

            <Text
              className="mt-[27px] text-base text-gray-600"
              size="txtPoppinsMedium16"
            >
              Email address*
            </Text>
            <Input
              name="group161"
              placeholder="Enter email address"
              className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 sm:pl-5 text-blue_gray-400 text-left text-sm w-full"
              wrapClassName="bg-white-A700 mt-3 pl-[34px] pr-3 py-[21px] rounded-[30px] shadow-bs w-full"
              type="email"
              value={email || ''}
              onChange={handleEmailChange}
              required
            ></Input>
            <Text
              className="mt-[23px] text-base text-gray-600"
              size="txtPoppinsMedium16"
            >
              Enter password*
            </Text>
            <div className="bg-white-A700 flex flex-row items-center justify-between mt-[9px] p-5 rounded-[30px] shadow-bs w-full">
            <Input
               type="password"
               value={password || ''}
                onChange={handlePasswordChange}
                required
                className="mb-0.5 ml-4 text-blue_gray-400 text-sm"
                size="txtPoppinsMedium14"
              placeholder="Enter Password">
              </Input>
              <Text
                className="mr-[15px] text-black-900 text-right text-xs"
                size="txtPoppinsRegular12"
              >
                Show
              </Text>
            </div>
            <CheckBox
              className="font-medium leading-[normal] mt-[23px] text-base text-gray-600 text-left"
              inputClassName="mr-[5px]"
              name="remembermypassw_One"
              id="remembermypassw_One"
              label="Remember my password"
            ></CheckBox>
            <Button className="bg-blue_gray-400 cursor-pointer font-medium leading-[normal] min-w-[426px] sm:min-w-full mt-[34px] py-[17px] rounded-[30px] text-[19px] text-center text-white-A700">
              Login
            </Button>
            </form>
           {error && <p className="text-red-400 font-medium text-center">{error}</p>}
            <div className="flex flex-row font-inter items-start justify-between mt-[25px] w-full">
              <Line className="bg-gray-100 h-px my-1.5 w-[41%]" />
              <Text
                className="text-center text-gray-400 text-xs"
                size="txtInterRegular12"
              >
                Or
              </Text>
              <Line className="bg-gray-100 h-px my-1.5 w-[41%]" />
            </div>
            <div
              className="common-pointer bg-white-A700 flex flex-row font-inter gap-16 items-center justify-start mt-6 p-[18px] rounded-[30px] shadow-bs w-full"
              // onClick={() => googleSignIn()}
            >
              <Img
                className="h-6 ml-6 w-6"
                src="images/img_flatcoloriconsgoogle.svg"
                alt="flatcoloriconsg"
              />
              <Text
                className="text-[19px] text-black-900 text-center"
                size="txtInterMedium19"
              >
                Login with Google
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
