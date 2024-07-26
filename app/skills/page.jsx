import React from "react";
import PageTitle from "../components/PageTitle";
import SkillTitle from "../components/SkillTitle";
import SkillBoxContainer from "../components/SkillBoxContainer";

const skills = () => {
  const frontEnd = [
    { src: "html.jpg", title: "HTML" },
    { src: "css.jpg", title: "CSS" },
    { src: "javascript.jpg", title: "Javascript" },
    { src: "bootstrap.jpg", title: "Bootstrap" },
    { src: "tailwind.jpg", title: "Tailwind" },
    { src: "react.jpg", title: "React.js" },
    { src: "next.jpg", title: "Next.js" },
  ];
  const backEnd = [
    { src: "node.jpg", title: "Node.js" },
    { src: "express.jpg", title: "Express.js" },
    { src: "php.jpg", title: "PHP" },
    { src: "laravel.jpg", title: "Laravel" },
  ];
  const databases = [
    { src: "mysql.jpg", title: "MySQL" },
    { src: "prisma.jpg", title: "Prisma" },
  ];
  const others = [
    { src: "git.jpg", title: "Git" },
    { src: "github.jpg", title: "Github" },
    { src: "socket.jpg", title: "Websocket" },
  ];
  console.log(frontEnd);
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle title={"My Skills"} />
      <SkillTitle skill={"Front-End"} />
      <SkillBoxContainer skills={frontEnd} />
      <SkillTitle skill={"Back-End"} />
      <SkillBoxContainer skills={backEnd} />
      <SkillTitle skill={"Databases"} />
      <SkillBoxContainer skills={databases} />
      <SkillTitle skill={"Others"} />
      <SkillBoxContainer skills={others} />
    </div>
  );
};

export default skills;
