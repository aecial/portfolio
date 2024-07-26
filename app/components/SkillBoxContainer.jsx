import SkillBox from "./SkillBox";

const SkillBoxContainer = ({ skills }) => {
  return (
    <>
      <div className="w-full lg:w-[60%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-2 lg:gap-0  justify-items-center">
          {skills.map((skill) => (
            <SkillBox key={skill.title} src={skill.src} title={skill.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillBoxContainer;
