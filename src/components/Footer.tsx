import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link className="mb-10 bold-20" to="/">
            Shoppee
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <h4 className="bold-18 whitespace-nowrap">Learn More</h4>
              <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Categories</Link>
                </li>
                <li>
                  <Link to="/">Exchange</Link>
                </li>
                <li>
                  <Link to="/">Policy</Link>
                </li>
                <li>
                  <Link to="/">Order Now</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="bold-18 whitespace-nowrap">Our Community</h4>
              <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">Special Offers</Link>
                </li>
                <li>
                  <Link to="/">Customer Reviews</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">Contact Us</h4>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  <li>
                    <Link to="/" className="flex gap-4 md:flex-col lg:flex-row">
                      <p>Contact Number:</p>
                      <p className="medium-14">+598 92 443 542</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-4 md:flex-col lg:flex-row">
                      <p>Email Address:</p>
                      <p className="medium-14">fernandogimeno.ief@gmail.com</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-5">
                <ul className="flex gap-4 regular-14 text-gray-20">
                  <li>
                    <Link to="/">
                      <FaFacebook className="h-6 w-6 hover:text-blue-600 transition-colors duration-300" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram className="h-6 w-6 hover:text-pink-600 transition-colors duration-300" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaXTwitter className="h-6 w-6 hover:text-black transition-colors duration-300" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30">
          &copy;2024 Shoppee | All rights reserved.
        </p>
      </div>
    </footer>
  );
};
