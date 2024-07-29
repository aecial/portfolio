import React from "react";
import PageTitle from "../components/PageTitle";

const journey = () => {
  return (
    <div className="main-height flex flex-col p-8 gap-4">
      <PageTitle title={"My Journey"} />
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-primary">2020 - 2024</time>
            <div className="text-lg font-black text-primary">BSIT Student</div>
            <p className="text-primary italic ">Tarlac State University</p>- Led
            a team to develop An online platform for agricultural produce
            auctions that addresses current agricultural problems as a study and
            a web application for the University
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-primary">
              February 2024 - May 2024
            </time>
            <div className="text-lg font-bold luxurious text-primary">
              Full-Stack Developer Intern
            </div>
            <p className="text-primary italic">
              Local Government Unit of Gerona, Tarlac - Internship
            </p>
            - Collaborated in a team to develop the Civil Registry Information
            System, enhancing data management efficiency.
            <br />- Developed a Queueing System to improve customer service and
            workflow
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic"></time>
            <div className="text-2xl font-black text-primary mb-4">
              Be part of my Journey?
            </div>
            <h2 className="text-lg text-center">
              You can{" "}
              <a
                href="/PascualResume.pdf"
                className="underline cursor-pointer text-primary"
                download
              >
                download
              </a>{" "}
              my Resume <div className="divider">AND</div> send an email to my
              gmail:{" "}
              <a
                href="mailto:teddylayson2000@gmail.com"
                className="underline cursor-pointer text-primary"
              >
                teddylayson2000@gmail.com
              </a>
            </h2>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default journey;
