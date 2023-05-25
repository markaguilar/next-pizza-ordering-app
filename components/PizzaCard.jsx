import React from "react";
import Image from "@node_modules/next/image";

const PizzaCard = ({
  pizzaImage,
  pizzaName,
  pizzaDescription,
  unitPrice,
  id,
}) => {
  return (
    <div
      className={`flex ${id > 3 ? `flex-row-reverse` : `flex-auto`}`}
      key={id}
    >
      <Image
        // fill={true}
        width={200}
        height={200}
        src={pizzaImage}
        alt="pizza"
        className="flex-1"
      />
      <div className="flex-1 relative h-full w-full z-20">
        <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>
        <div className="relative z-10 p-6">
          <p className="text-xl text-white font-josefin mb-2">{pizzaName}</p>
          <p className="text-primary-gray text-[15px] font-light leading-8 mb-4 min-h-[180px]">
            {pizzaDescription}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-primary-yellow">${unitPrice}</p>
            <button className="border text-white py-1.5 px-4 hover:border-primary-yellow hover:bg-primary-yellow hover:text-black01">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
