import Button from "../ui/Button";
import Percentage from "../ui/Percentage";

export default function SecAbout() {
  return (
    <section className="container my-12">
      <div>
        <h1 className="text-center text-2xl font-bold">- About Me -</h1>
        <h1 className="mt-5 text-center text-5xl font-bold text-primary">
          Who I am
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-12">
          <div>
            <p className="text-lg">
              I am Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula est id risus malesuada, at dictum libero
              blandit. Integer feugiat metus et urna fermentum, vel consectetur
              magna faucibus. Sed scelerisque, urna a consectetur dictum, risus
              justo efficitur libero, eget congue enim arcu nec sapien. Nulla
              facilisi. Mauris a nunc et nunc fermentum{" "}
            </p>
          </div>
          <div className="rounded-xl border-[2px] border-black p-6">
            <h1 className="text-2xl font-bold">Front-End Developer</h1>
            <Percentage text="Web Design" />
            <Percentage text="UI Development" />
            <Percentage text="Responsive Design" />
          </div>
        </div>
        <Button variant="white" className="mx-auto mt-8">
          Download CV
        </Button>
      </div>
    </section>
  );
}
