import React from "react";
import PageTitle from "../components/PageTitle";
import ProjectContainer from "../components/ProjectContainer";

const projects = () => {
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle title={"My Projects"} />
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center items-center pb-4">
        <ProjectContainer
          src={"/p1.jpg"}
          projectTitle={"Agrikultur'App"}
          projectDescription={"Agricultural Online Produce Auction Platform"}
          technologies={["html", "css", "javascript", "bootstrap", "laravel"]}
          demo={true}
          site={true}
        />
        <ProjectContainer
          src={"/p1.jpg"}
          projectTitle={"Agrikultur'App"}
          projectDescription={"Agricultural Online Produce Auction Platform"}
          technologies={["html", "css", "javascript", "bootstrap", "laravel"]}
        />
        <ProjectContainer
          src={"/p1.jpg"}
          projectTitle={"Agrikultur'App"}
          projectDescription={"Agricultural Online Produce Auction Platform"}
          technologies={["html", "css", "javascript", "bootstrap", "laravel"]}
        />
        <ProjectContainer
          src={"/p1.jpg"}
          projectTitle={"Agrikultur'App"}
          projectDescription={"Agricultural Online Produce Auction Platform"}
          technologies={["html", "css", "javascript", "bootstrap", "laravel"]}
        />
      </div>
    </div>
  );
};

export default projects;
