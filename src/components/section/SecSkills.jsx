import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import sass from "../../assets/sass.svg";
import bootstrap from "../../assets/bootstrap.svg";
import tailwind from "../../assets/tailwindcss.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import figma from "../../assets/figma.svg";
import vscode from "../../assets/vscode.svg";
import github from "../../assets/github.svg";
import nodejs from "../../assets/nodejs.svg";
import npm from "../../assets/npm.svg";
import vite from "../../assets/vite.svg";

import CardLogo from "../ui/CardLogo";

export default function SecSkills() {
  return (
    <section className="my-12 bg-primary">
      <div className="container py-8">
        <h1 className="text-center text-2xl font-bold text-white">
          - My Skills -
        </h1>

        <div className="mt-8 grid grid-cols-4 gap-8">
          <CardLogo image={html} />
          <CardLogo image={css} />
          <CardLogo image={sass} />
          <CardLogo image={bootstrap} />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 px-32">
          <CardLogo image={tailwind} />
          <CardLogo image={react} />
          <CardLogo image={javascript} />
        </div>

        <h1 className="mt-10 text-center text-2xl font-bold text-white">
          - My Tools -
        </h1>
        <div className="mt-8 grid grid-cols-6 gap-8">
          <CardLogo image={figma} />
          <CardLogo image={vscode} />
          <CardLogo image={github} />
          <CardLogo image={nodejs} />
          <CardLogo image={npm} />
          <CardLogo image={vite} />
        </div>
      </div>
    </section>
  );
}
