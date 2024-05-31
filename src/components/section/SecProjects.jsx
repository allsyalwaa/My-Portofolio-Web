import CardProjects from "../ui/CardProjects";
import Studymap from "../../assets/studymap.svg";
import Trackit from "../../assets/trackit.svg";

import CardKeyword from "../ui/CardKeyword";
import Button from "../ui/Button";

export default function SecProjects() {
  return (
    <section className="container my-12">
      <div>
        <h1 className="text-center text-2xl font-bold">- My Projects -</h1>

        <CardProjects
          image={Studymap}
          text={"StudyMap - Online Free Course Website"}
          desc={
            "With access to our online courses, you can learn anytime and anywhere. This flexibility allows you to tailor your learning to your own schedule."
          }
        />
        <div className="mt-6 rounded-[48px] border-[3px] border-primary p-8">
          <div className="grid grid-cols-2 items-center gap-8">
            <div>
              <div className="flex items-start gap-6">
                <CardKeyword text={"UI Development"} />
                <CardKeyword text={"Web Design"} />
                <CardKeyword text={"Responsive Design"} />
              </div>
              <h1 className="mt-8 text-4xl font-bold leading-normal">
                TrackIt - Activity Management Website
              </h1>
              <p className="mt-4 text-lg">
                TrackIt is your all-in-one web solution for effortlessly
                managing all your daily activities. Stay organized and
                productive with TrackIt - Everything in One Place!
              </p>
              <Button className="mt-8" variant="white">
                View Details
              </Button>
            </div>
            <img src={Trackit} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
