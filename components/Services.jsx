import React from "react";

const Services = () => {
  return (
    <section className="relative bg-[url('/images/food.png')]">
      {/*<div className="absolute w-full h-full bg-primary-yellow opacity-0 " />*/}
      <div className="py-24 pb-32">
        <h3 className="text-center text-3xl uppercase mb-8 font-josefin">
          Our Services
        </h3>
        <p className="text-primary-brown text-center max-w-xl mx-auto opacity-80 leading-7">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 text-center mt-20">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex justify-center items-center mb-5 border border-[#5c3d03] w-[100px] h-[100px] rounded-md transition ease-in-out duration-200 hover:rotate-45 hover:bg-[#f8b500] hover:border-none">
                <span className="flaticon-diet text-[60px] text-primary-brown opacity-100 z-10 hover:text-white"></span>
              </div>
            </div>
            <h3 className="text-xl mb-5 uppercase font-josefin">
              Healthy Foods
            </h3>
            <p className="text-primary-brown opacity-80 leading-7">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex justify-center items-center mb-5 border border-[#5c3d03] w-[100px] h-[100px] rounded-md transition ease-in-out duration-200 hover:rotate-45 hover:bg-[#f8b500] hover:border-none">
                <span className="flaticon-bicycle text-[60px] text-primary-brown opacity-100 z-10 hover:text-white"></span>
              </div>
            </div>
            <h3 className="text-xl mb-5 uppercase font-josefin">
              Fastest Delivery
            </h3>
            <p className="text-primary-brown opacity-80 leading-7">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex justify-center items-center mb-5 border border-[#5c3d03] w-[100px] h-[100px] rounded-md transition ease-in-out duration-200 hover:rotate-45 hover:bg-[#f8b500] hover:border-none">
                <span className="flaticon-pizza-1 text-[60px] text-primary-brown opacity-100 z-10 hover:text-white"></span>
              </div>
            </div>
            <h3 className="text-xl mb-5 uppercase">Original Recipes</h3>
            <p className="text-primary-brown opacity-80 leading-7">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
