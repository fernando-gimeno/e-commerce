// popular
import p1_img from "../assets/product_1.png";
import p2_img from "../assets/product_2.png";
import p3_img from "../assets/product_3.png";
import p4_img from "../assets/product_4.png";

// latest
import p5_img from "../assets/product_12.png";
import p6_img from "../assets/product_35.png";
import p7_img from "../assets/product_14.png";
import p8_img from "../assets/product_8.png";
import p9_img from "../assets/product_15.png";
import p10_img from "../assets/product_2.png";
import p11_img from "../assets/product_17.png";
import p12_img from "../assets/product_28.png";

// Footer
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import {
  FooterContactInfo,
  FooterLinks,
  Latest,
  Popular,
  Socials,
} from "../interfaces";

export const POPULAR: Popular[] = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
];

export const LATEST: Latest[] = [
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p5_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 6,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p7_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p8_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 9,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p9_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p11_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 12,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p12_img,
    new_price: 100.0,
    old_price: 150.0,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS: FooterLinks[] = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Exchange Policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO: FooterContactInfo = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@shoppee.com" },
  ],
};

export const SOCIALS: Socials = {
  title: "Social",
  links: [facebook, instagram, twitter, youtube, linkedin],
};
