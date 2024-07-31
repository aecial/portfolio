import SkillBox from "../components/SkillBox";
const ProjectContainer = ({
  projectTitle,
  projectDescription,
  technologies,
  src,
  demo,
  demoLink,
  site,
  siteLink,
}) => {
  return (
    <div className="bg-primary w-full h-80 lg:w-[30rem] lg:h-96 p-2 flex flex-col gap-2 rounded-sm">
      <div className="lg:flex lg:flex-col flex-col-reverse">
        <h1 className="hidden lg:block text-2xl text-neutral text-center luxurious mb-2">
          {projectTitle}
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="bg-neutral w-full h-32 lg:h-36 overflow-hidden">
            <img src={src} alt={src} className="h-full w-full object-cover" />
          </div>
          <h1 className="lg:hidden text-2xl text-neutral text-center luxurious mb-2">
            {projectTitle}
          </h1>
          <div className="bg-neutral lg:w-60 lg:flex lg:justify-center lg:items-center text-primary px-2 rounded-sm">
            {projectDescription}
          </div>
        </div>
      </div>
      <h2 className="hidden lg:block text-xl text-neutral luxurious">
        Technologies Used:
      </h2>
      <div className="hidden lg:flex">
        {technologies.map((tech) => {
          return (
            <SkillBox
              key={tech}
              src={`/${tech}.jpg`}
              title={`${tech}`}
              color={"neutral"}
            />
          );
        })}
      </div>

      <div className="flex justify-between">
        {!demo || !site ? <span></span> : ""}
        {demo && (
          <a
            href={demoLink}
            className="btn btn-neutral text-primary rounded-full"
          >
            Demo
          </a>
        )}

        {site && (
          <a
            href={siteLink}
            className="btn btn-neutral text-primary rounded-full"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
