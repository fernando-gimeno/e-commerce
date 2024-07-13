import { Item } from ".";
import { POPULAR } from "../data/data";

export const Popular = () => {
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Popular Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-secondary-500 to-transparent mb-16" />
        {/* Container */}
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
