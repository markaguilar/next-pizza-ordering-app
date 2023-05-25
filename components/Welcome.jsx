import React from "react";

const Welcome = () => {
  return (
    <section className="relative w-full grid grid-cols-2">
      <div className="bg-[url('/images/about.jpg')] bg-center bg-cover bg-no-repeat w-full h-full"></div>
      <div className="w-full h-full p-[76px]">
        <h2 className="mb-8 text-white text-3xl uppercase font-josefin">
          Welcome to{" "}
          <span className="flaticon-pizza text-primary-yellow">Pizza</span> A
          Restaurant
        </h2>
        <div>
          <p className="text-[#808080] leading-8">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            word "and" and the Little Blind Text should turn around and return
            to its own, safe country. But nothing the copy said could convince
            her and so it didn’t take long until a few insidious Copy Writers
            ambushed her, made her drunk with Longe and Parole and dragged her
            into their agency, where they abused her for their.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
