import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsBold19: "font-bold font-poppins",
  txtPoppinsBold30: "font-bold font-poppins",
  txtPoppinsBold33: "font-bold font-poppins",
  txtPoppinsExtraBold30: "font-extrabold font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular33: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtGayathriBold96: "font-bold font-gayathri",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtInterMedium19: "font-inter font-medium",
  txtPoppinsBold29: "font-bold font-poppins",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular18Bluegray400: "font-normal font-poppins",
  txtPoppinsRegular19: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold23: "font-poppins font-semibold",
  txtInterRegular12: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
