import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-neutral main-height luxurious">
      <div className="hidden bg-transparent w-[50%] md:flex flex-col justify-center items-center gap-4">
        <h1 className="text-[7rem] text-accent">Teddy Pascual</h1>
        <h4 className="text-3xl text-accent mb-4">Full-Stack Developer</h4>
        <button className="btn btn-secondary text-white w-[55%] rounded-full text-lg">
          Download Resume
        </button>
      </div>
      <div className="bg-[#ACB5B3] w-[50%] overflow-hidden hidden md:block">
        <img
          src="/profile.JPG"
          alt="Teddy Pascual"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </main>
  );
}
