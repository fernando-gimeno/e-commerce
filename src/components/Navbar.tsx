import { MdChildCare, MdHomeFilled, MdMan, MdWoman } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface Props {
  containerStyles?: string;
}

export const Navbar = ({ containerStyles }: Props) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink className={({ isActive }) => (isActive ? "active_link" : "")} to="/">
        <div className="flexCenter gap-x-1">
          <MdHomeFilled /> Home
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active_link" : "")}
        to="/mens"
      >
        <div className="flexCenter gap-x-1">
          <MdMan /> Mens
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active_link" : "")}
        to="/womens"
      >
        <div className="flexCenter gap-x-1">
          <MdWoman /> Womens
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active_link" : "")}
        to="/kids"
      >
        <div className="flexCenter gap-x-1">
          <MdChildCare /> Kids
        </div>
      </NavLink>
    </nav>
  );
};
