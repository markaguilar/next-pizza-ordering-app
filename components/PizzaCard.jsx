import React from "react";
import Image from "@node_modules/next/image";

const PizzaCard = ({ pizzaImage }) => {
  return (
    <div className="flex">
      <div className="h-full w-1/2">
        <Image
          // fill={true}
          width={400}
          height={400}
          src={pizzaImage}
          alt="pizza"
        />
      </div>
      <div className="h-auto w-1/2 bg-black opacity-20">
        <p>{pizzaName}</p>
      </div>
    </div>
  );
};

export default PizzaCard;
