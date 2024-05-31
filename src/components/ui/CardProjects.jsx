/* eslint-disable react/prop-types */
import Button from "./Button";
import CardKeyword from "./CardKeyword";

export default function CardProjects({ image, text, desc }) {
  return (
    <div className="mt-6 rounded-[48px] border-[3px] border-primary p-8">
      <div className="grid grid-cols-2 items-center gap-8">
        <img src={image} alt="" />
        <div>
          <div className="flex items-start gap-6">
            <CardKeyword text={"UI Development"} />
            <CardKeyword text={"Web Design"} />
            <CardKeyword text={"Responsive Design"} />
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-normal">{text}</h1>
          <p className="mt-4 text-lg">{desc}</p>
          <Button className="mt-8" variant="white">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
