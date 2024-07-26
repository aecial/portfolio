import React from "react";

const SkillTitle = ({ skill }) => {
  return (
    <h3 className="text-3xl text-center lg:text-start text-primary luxurious">
      {skill}
    </h3>
  );
};

export default SkillTitle;
