import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav>
      <div className="container fixed left-0 right-0 top-4">
        <div className="flex h-16 items-center justify-between rounded-full bg-primary px-4">
          <NavLink to="/">
            <img className="ml-4" src={Logo} alt="ZS" />
          </NavLink>

          <ul
            ref={sidebarRef}
            className={`text-secondary items-center justify-center gap-6 text-white ${isOpen ? "fixed right-0 top-0 z-10 flex h-screen w-1/3 flex-col items-start justify-start gap-4 bg-primary px-10 py-14 text-white" : "hidden"} md:flex`}
          >
            <li className={`text-md font-semibold ${isOpen ? "block" : ""}`}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={`text-md font-semibold ${isOpen ? "block" : ""}`}>
              <NavLink to="/">About</NavLink>
            </li>
            <li className={`text-md font-semibold ${isOpen ? "block" : ""}`}>
              <NavLink to="/">Skills</NavLink>
            </li>
            <li className={`text-md font-semibold ${isOpen ? "block" : ""}`}>
              <NavLink to="/">Projects</NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">Contact Me</Button>
              </NavLink>
            </li>
          </ul>

          <div className={`${isOpen ? "block" : "hidden"}`}>
            <NavLink to="/">
              <Button variant="primary">Contact Me</Button>
            </NavLink>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`text-secondary z-20 block text-white md:hidden ${
              isOpen ? "hidden" : "relative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
