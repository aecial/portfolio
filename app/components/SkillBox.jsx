import React from "react";

const SkillBox = ({ src, title }) => {
  return (
    <div className="h-20 w-20  p-2 flex flex-col justify-center items-center overflow-hidden rounded-sm hover:scale-125 ease-in-out">
      <div className="h-[75%] w-full">
        <img
          src={`/skills/${src}`}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="h-[25%] w-full text-center text-sm text-primary">
        {title}
      </div>
    </div>
  );
};

export default SkillBox;
