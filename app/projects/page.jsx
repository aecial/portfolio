import React from "react";
import PageTitle from "../components/PageTitle";
import ProjectContainer from "../components/ProjectContainer";

const projects = () => {
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle title={"My Projects"} />
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center items-center pb-4">
        <ProjectContainer
          src={"/projects/p1.jpg"}
          projectTitle={"Miralles Resort"}
          projectDescription={"Website for Miralles Resort SEO optimized"}
          technologies={["html", "css", "javascript", "tailwind"]}
          site={true}
          siteLink={"https://www.mirallesresort.com/"}
        />
        <ProjectContainer
          src={"/projects/p2.jpg"}
          projectTitle={"LGU-Gerona Queueing System"}
          projectDescription={"Queueing System for LGU Gerona"}
          technologies={[
            "html",
            "css",
            "javascript",
            "tailwind",
            "react",
            "express",
            "mysql",
          ]}
          demo={true}
        />
      </div>
    </div>
  );
};

export default projects;
