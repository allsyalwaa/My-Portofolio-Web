import Button from "../ui/Button";

import Profile from "../../assets/profile.svg";
import GapSec from "../ui/GapSec";

export default function SecHero() {
  return (
    <section className="my-12">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl font-bold">Front-End Developer</h2>
            <h1 className="mt-4 text-4xl font-bold text-black">
              I&apos;m{" "}
              <span className="text-5xl font-bold leading-normal text-primary underline">
                Zulfia Dwi Al Syalwa
              </span>
            </h1>
            <p className="mt-4 text-lg text-black">
              My aim is to build engaging and responsive user interfaces,
              enhancing web experiences to be more intuitive and enjoyable for
              users.
            </p>
            <Button variant="secondary" className={"my-6 flex items-center"}>
              My Portofolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14m6-6l-6 6m-6-6l6 6"
                />
              </svg>
            </Button>
          </div>
          <div>
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
      <GapSec />
    </section>
  );
}
