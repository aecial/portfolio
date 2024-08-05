import React from "react";
import PageTitle from "../components/PageTitle";

const contact = () => {
  const socials = [
    { src: "gmail.svg", link: "" },
    { src: "phone.svg", link: "" },
    { src: "fb.svg", link: "" },
    { src: "linked.svg", link: "" },
  ];
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle
        title={"Need a Web Solution That Works as Uniquely as Your Business?"}
      />
      <PageTitle title={"Let's Make it Happen!"} />

      <form
        action="https://api.web3forms.com/submit"
        method="post"
        className="flex flex-col gap-8 mt-4"
      >
        <input
          type="hidden"
          name="access_key"
          value="2780ec3c-c5f2-427f-8030-8b995aef6bfb"
        />
        <input
          type="text"
          placeholder="example@gmail.com"
          className="mx-auto mt-4 input input-bordered border-primary text-primary placeholder:text-primary focus:border-primary w-full max-w-xs"
        />
        <label className="form-control mt-4">
          <div className="label w-full max-w-xs mx-auto">
            <span className="label-text mx-auto">
              What process do you wish to improve with web solutions in your
              business?
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 w-full max-w-xs mx-auto"
            placeholder=""
          ></textarea>
        </label>
      </form>

      <button className="btn btn-primary w-full max-w-xs mx-auto">
        Submit
      </button>
      <div className="divider divider-primary"></div>
      <h3 className="text-2xl text-center luxurious text-primary">
        My Socials
      </h3>
      <div className="flex justify-center items-center w-full gap-8 pb-2 lg:pb-0">
        {socials.map((social) => {
          return (
            <a href={social.link} key={social.src}>
              <img
                src={`/icons/${social.src}`}
                alt={social.src}
                width={75}
                height={75}
                className="hover:scale-125"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default contact;
