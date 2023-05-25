import React from "react";
import PizzaCard from "@components/PizzaCard";

const PizzaMeals = ({ data }) => {
  return (
    <section className="py-[105px]">
      <div className="text-white text-center mb-20">
        <h3 className=" text-3xl uppercase mb-6 font-josefin">
          hot pizza meals
        </h3>
        <p className="text-primary-gray leading-7 max-w-2xl mx-auto mb-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3">
        {data.map((pizza) => {
          return (
            <PizzaCard
              id={pizza.id}
              pizzaImage={pizza.image}
              pizzaName={pizza.name}
              pizzaDescription={pizza.description}
              unitPrice={pizza.unitPrice}
            />
          );
        })}
      </div>
      <div className="pt-[105px]">
        <div className="text-white text-center mb-20">
          <h3 className=" text-3xl uppercase mb-6 font-josefin">
            our menu pricing
          </h3>
          <p className="text-primary-gray leading-7 max-w-2xl mx-auto mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PizzaMeals;
