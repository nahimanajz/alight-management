"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
    count: number;
    title: string;
    imgUrl: string;
}

const CardActivity: React.FC<CardProps> = ({count, title, imgUrl}) => {
  return (
    <div className="h-full w-full rounded-[8px] pb-4 bg-white dark:border-strokedark dark:bg-boxdark z-0">
      <div className="absolute left w-[86px] h-[92px] flex justify-center items-center rounded-[30px] rounded-[8px] border-[1px] bg-[#F3F8FF]">
        <span className="h-[36px] w-[22px] text-center text-[#24px] font-semibold leading-[36px] text-[#071C50]">
          {count}
        </span>
      </div>
      <div className="flex space-x-[20px] px-6 items-center h-[167px] w-full mt-8">
        <span className="text-base leading-[24px] text-slate-600 mt-12 dark:text-white">{title}</span>

        <Image
          src={imgUrl}
          width={95}
          height={73}
          alt={title}
        />
      </div>
    </div>
  );
};

export default CardActivity;
