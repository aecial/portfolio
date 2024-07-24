import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-neutral main-height-mobile lg:main-height luxurious">
      {/* Web */}
      <div className="hidden bg-transparent w-[50%] lg:flex flex-col justify-center items-center gap-4">
        <h1 className="text-[7rem] text-accent">Teddy Pascual</h1>
        <h4 className="text-3xl text-accent mb-4">Full-Stack Developer</h4>
        <button className="btn btn-secondary text-neutral w-[55%] rounded-full text-lg">
          Download Resume
        </button>
      </div>
      <div className="bg-[#ACB5B3] w-[50%] overflow-hidden hidden lg:block">
        <img
          src="/profile.JPG"
          alt="Teddy Pascual"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Web */}
      <div className="lg:hidden flex flex-col justify-center items-center w-full">
        <img
          src="/profile.JPG"
          alt="Teddy Pascual"
          className="w-44 h-64 object-cover object-center rounded-lg"
        />
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-4xl text-accent">Teddy Pascual</h1>
          <h4 className="text-xl text-accent mb-4">Full-Stack Developer</h4>
          <button className="btn btn-secondary text-neutral w-[85%] rounded-full text-lg">
            Download Resume
          </button>
        </div>
      </div>
    </main>
  );
}
