import _ from "lodash";
import Image, { StaticImageData } from "next/image";
import React from "react";

import RightArrow from "../assets/svg/rightArrow";
import TrendingCardRow from "./TrendingCardRow";

type trendingCardProps = {
  icon: StaticImageData;
  title: string;
  trendingData: object;
};

type trendingCardRow = {
  number: number;
  icon: string;
  name: string;
  symbol: string;
  isIncrement: boolean;
  rate: string;
};

const TrendingCard = ({ icon, title, trendingData }: trendingCardProps) => {
  return (
    <div className="w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3">
      <div className="flex items-center justify-between">
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <div className="text-[#6188FF] flex items-center cursor-pointer whitespace-nowrap justify-between">
          More <RightArrow />
        </div>
      </div>
      <br />
      {_.map(trendingData, (item: trendingCardRow, index) => (
        <TrendingCardRow
          key={index}
          number={item.number}
          symbol={item.symbol}
          name={item.name}
          icon={item.icon}
          isIncrement={item.isIncrement}
          rate={item.rate}
        />
      ))}
    </div>
  );
};

export default TrendingCard;
