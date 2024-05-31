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

import CardSkills from "../ui/CardSkills";
import CardTools from "../ui/CardTools";

export default function SecSkills() {
  return (
    <section className="my-12 bg-primary">
      <div className="container py-8">
        <h1 className="text-center text-2xl font-bold text-white">
          - My Skills -
        </h1>

        <div className="mt-8 grid grid-cols-4 gap-8">
          <CardSkills image={html} />
          <CardSkills image={css} />
          <CardSkills image={sass} />
          <CardSkills image={bootstrap} />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 px-32">
          <CardSkills image={tailwind} />
          <CardSkills image={react} />
          <CardSkills image={javascript} />
        </div>

        <h1 className="mt-10 text-center text-2xl font-bold text-white">
          - My Tools -
        </h1>
        <div className="mt-8 grid grid-cols-6 gap-8">
          <CardTools image={figma} />
          <CardTools image={vscode} />
          <CardTools image={github} />
          <CardTools image={nodejs} />
          <CardTools image={npm} />
          <CardTools image={vite} />
        </div>
      </div>
    </section>
  );
}
