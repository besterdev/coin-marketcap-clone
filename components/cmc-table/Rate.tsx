import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";

type rateProps = {
  isIncrement: boolean;
  rate: string;
};

const Rate = ({ isIncrement, rate }: rateProps) => {
  return (
    <div className="rate flex items-center">
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p
        className={isIncrement ? "ml-2 text-[#17C784]" : "ml-2 text-[#EA3943]"}
      >
        {rate}
      </p>
    </div>
  );
};

export default Rate;
