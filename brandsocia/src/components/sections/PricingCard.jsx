// components/PricingCard.jsx
"use client";
import React from "react";

const CheckIcon = () => (
  <svg
    version="1.0"
    preserveAspectRatio="xMidYMid meet"
    height="16"
    width="16"
    viewBox="0 0 30 30.000001"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "rgb(102, 78, 255)" }}
  >
    <g>
      <path
        fillRule="nonzero"
        d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 
           L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 
           L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 
           L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 
           C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 
           L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 
           C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z"
        fill="#664eff"
      />
    </g>
  </svg>
);

const PricingCard = () => {
  return (
    <div className="w-[190px] bg-[#00ffa0] p-4 rounded-2xl border-[0.5vmin] border-[#05060f] shadow-[0.4rem_0.4rem_#05060f] text-black overflow-hidden">
      <div className="flex flex-col h-full gap-2">
        <p className="text-[#05060f] text-[1.3rem] font-bold leading-tight">
          Starter
        </p>

        <div className="flex text-[#05060f] text-[1.8rem] font-bold leading-tight items-baseline">
          <p className="flex items-center">
            $<span className="text-[1.8rem]">0</span>
          </p>
          <div className="ml-1 text-sm">/mo</div>
        </div>

        <div className="opacity-80 text-sm">free forever</div>

        <ul className="flex flex-col gap-2 mt-2">
          {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map(
            (item, idx) => (
              <li key={idx} className="flex items-center gap-1 text-sm">
                <CheckIcon />
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
