/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function CardSkills({ image }) {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-white p-4">
      <img className="h-24" src={image} alt="" />
      <NavLink
        to="/"
        className="mt-4 text-center font-medium text-primary underline"
      >
        View Details
      </NavLink>
    </div>
  );
}
