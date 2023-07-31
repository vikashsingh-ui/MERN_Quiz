import React from "react";
import { Img, Text } from "components";
import { useNavigate } from 'react-router-dom'; // Only useNavigate is needed, useLocation is not used in this component
import { toast } from 'react-toastify';

const Sidebar = () => {
  const navigate = useNavigate();

  const API_BASE_URL = 'http://localhost:5000';

  const handleLogout = async () => {
    try {
      const token = localStorage.token; // Get the JWT token from local storage
      console.log(token)
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Clear authentication data from local storage or session storage if necessary
      localStorage.removeItem('token');
      toast('LogOut successful!')
      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const featureNotAvailable = () => {
    toast.error('Feature Not Available.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }



  return (
    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] w-[64%] md:w-full">
      <div className="flex flex-row gap-7 items-start justify-start w-[79%] md:w-full">
        <Img
          className="h-[25px] w-[25px]"
          src="images/img_bxbxsupport.svg"
          alt="bxbxsupport"
        />
        <a onClick={featureNotAvailable}  className="text-gray-600 cursor-pointer text-xl">
          <Text size="txtPoppinsSemiBold20">Support</Text>
        </a>
      </div>
      <div className="flex flex-row gap-[29px] items-start justify-start mt-[43px] w-full">
        <Img
          className="h-[25px] mt-1 w-[25px]"
          src="images/img_cinotification.svg"
          alt="cinotification"
        />
        <Text className="text-gray-600 cursor-pointer text-xl" onClick={featureNotAvailable} size="txtPoppinsSemiBold20">
          Notification
        </Text>
      </div>
      <div className="flex flex-row gap-[29px] items-start justify-start ml-0.5 md:ml-[0] mt-[610px] w-[76%] md:w-full">
        <Img
          className="h-[25px] w-[25px]"
          src="images/img_rilogoutboxfill.svg"
          alt="rilogoutboxfill"
        />
        <a  className="text-gray-600 text-l cursor-pointer">
          <Text className="cursor-pointer" size="txtPoppinsSemiBold20" onClick={handleLogout}>Log Out</Text>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
