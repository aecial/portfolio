const about = () => {
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <h1 className="text-4xl text-center text-primary luxurious">About Me</h1>
      <div className="flex flex-col lg:flex-row h-full gap-8">
        <div className="w-full lg:w-[50%]  text-white flex justify-center items-center">
          <h3 className="text-3xl text-left lg:text-justify p-2 lg:p-4 indent-4 lg:indent-8 bg-primary rounded-sm">
            I am a dedicated and proactive Full-Stack Web Developer with
            hands-on experience in both front-end and back-end technologies with
            a focus on building innovative software solutions.
          </h3>
        </div>
        <div className="w-full lg:w-[50%] flex ">
          <div className="flex flex-col w-full gap-4 pb-4 lg:pb-0">
            <div className="w-full  lg:flex lg:flex-row-reverse lg:pr-20">
              <img
                src="/p1.jpg"
                alt="Teddy Pascual"
                className="w-full lg:w-auto h-44 object-cover object-center rounded-lg"
              />
            </div>
            <div className="lg:pl-20">
              <img
                src="/p2.jpg"
                alt="Teddy Pascual"
                className="w-full lg:w-auto h-44 object-cover object-center rounded-lg"
              />
            </div>
            <div className="w-full lg:flex lg:flex-row-reverse lg:pr-20">
              <img
                src="/p3.jpg"
                alt="Teddy Pascual"
                className="w-full lg:w-[293.333px] h-44 object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
