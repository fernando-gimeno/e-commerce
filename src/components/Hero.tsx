import { MdOutlineLocalOffer, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="mt-20 flex flex-col justify-center items-center bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12">
      <div className="max_padd_container">
        <h1 className="h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          magnam odio consectetur obcaecati ex atque esse aut deleniti quo
          pariatur alias, quisquam vel accusantium architecto reiciendis magni?
          Aut, dignissimos recusandae!
        </p>
        <div className="flexStart items-center gap-x-4 my-10 ">
          <div className="regular-24 flexCenter gap-x-3">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink className="btn_dark_rounded flexCenter" to={""}>Shop now</NavLink>
          <NavLink className="btn_dark_rounded flexCenter gap-x-2" to={""}><MdOutlineLocalOffer className="text-2xl" /> Offer</NavLink>
        </div>
      </div>
    </section>
  );
};
