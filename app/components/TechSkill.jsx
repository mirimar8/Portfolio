import React from "react";
import Image from "next/image";

const TechSkill = ({ src, alt, title, className }) => {
  return (
    <div
      className={`rounded-xl text-white bg-gradient-to-br from-[#DC2424] to-[#4A569D] p-1 
    grid col-span-2 row-span-2 ${className}`}
    >
      <div className="rounded-xl bg-[#252526] py-3 flex flex-col items-center w-32 h-24 ">
        <Image className="w-auto h-auto" src={src} alt={alt} width={40} height={40} />
        <p className="pt-2 text-xs text-center font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default TechSkill;
