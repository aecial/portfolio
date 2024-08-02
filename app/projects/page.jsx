import React from "react";
import PageTitle from "../components/PageTitle";
import ProjectContainer from "../components/ProjectContainer";

const projects = () => {
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle title={"My Projects"} />
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center items-center pb-4">
        <ProjectContainer
          src={"/projects/p2.jpg"}
          projectTitle={"Queueing System"}
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
          features={[
            "Real-time Ticket Updates",
            "Ticket Transferring",
            "Role-based Access",
            "Reporting",
          ]}
          demo={true}
        />
        <ProjectContainer
          src={"/projects/p4.jpg"}
          projectTitle={"Civil Registry Information System"}
          projectDescription={"CRIS for LGU Gerona"}
          technologies={[
            "html",
            "css",
            "javascript",
            "bootstrap",
            "php",
            "mysql",
          ]}
          features={[
            "Printing of Civil Registry Form",
            "Data Visualization and Reporting",
            "Searching and Filtering",
          ]}
          demo={true}
        />
        <ProjectContainer
          src={"/projects/p3.jpg"}
          projectTitle={"Agrikultur'App"}
          projectDescription={"Online Agricultural Produce Auction Platform"}
          technologies={[
            "html",
            "css",
            "javascript",
            "bootstrap",
            "laravel",
            "mysql",
          ]}
          features={[
            "Real-time Auction",
            "Admin-Controlled Registration Verification",
            "Produce Pricing Guidelines",
          ]}
          site={true}
        />
        <ProjectContainer
          src={"/projects/p1.jpg"}
          projectTitle={"Miralles Resort"}
          projectDescription={"Website for Miralles Resort SEO optimized"}
          technologies={["html", "css", "javascript", "tailwind"]}
          features={[
            "SEO Optimized",
            "Whole Page Carousel",
            "Photo Viewer / Gallery",
          ]}
          site={true}
          siteLink={"https://www.mirallesresort.com/"}
        />

        <ProjectContainer
          src={"/projects/p5.jpg"}
          projectTitle={"POS"}
          projectDescription={"Web-based Point of Sales System"}
          technologies={[
            "html",
            "css",
            "javascript",
            "tailwind",
            "php",
            "mysql",
          ]}
          features={[
            "Role-based Access",
            "Real-Time Visual Updates",
            "Total Income Reporting with Data Visualization",
          ]}
          demo={true}
        />
      </div>
    </div>
  );
};

export default projects;
