import React from "react";

type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="font-semibold">{text}</label>;
};

export default Label;
