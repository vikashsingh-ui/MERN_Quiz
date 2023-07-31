import React from "react";

const TruncatedText = ({ text, maxLength }) => {
  const trimmedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <span>{trimmedText}</span>;
};

export default TruncatedText;
