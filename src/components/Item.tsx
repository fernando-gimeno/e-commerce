import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  image: string;
  old_price: number;
  new_price: number;
}

export const Item = ({ id, name, image, old_price, new_price }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"
          to={`product/${id}`}
        ><MdSearch className="h-6 w-6 text-secondary-500 hover:text-secondary-600 hover:rotate-12 hover:scale-125 transition-all duration-300" /></Link>
        <img className="w-full block object-cover group-hover:scale-110 transition-all duration-700" src={image} alt="product image" />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-5">
          <div className="bold-18 text-secondary-500">$U {new_price}</div>
          <div className="regular-14 text-gray-20 line-through">$U {old_price}</div>
        </div>
      </div>
    </div>
  );
};
