import Image from "next/image";
import PizzaCard from "@components/PizzaCard";

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('/images/bg_1.jpg')] h-[690px] bg-cover bg-no-repeat bg-center">
        <div className="absolute bg-black w-full h-full z-10 opacity-50" />
        <div className="relative grid grid-cols-2 gap-8 place-content-center mx-auto px-4 w-full h-full z-20">
          <div className="w-full h-full">
            <div className="text-white text-right flex flex-col justify-center gap-8 h-full">
              <div>
                <h2 className="text-2xl">Delicious</h2>
                <h3 className="text-[40px]">italian cuizine</h3>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the{" "}
              </p>
              <div className="flex flex-wrap justify-end gap-3 w-full ">
                <button className="py-4 px-6 text-black01 border border-primary-yellow bg-primary-yellow hover:border-primary-yellow hover:bg-transparent hover:text-primary-yellow">
                  Order Now
                </button>
                <button className="py-4 px-6 border hover:bg-primary-yellow hover:text-black01 hover:border-primary-yellow">
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              width={540}
              height={540}
              src="/images/bg_1.png"
              alt="pizza"
              className="translate ease-in-out duration-300"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 py-9 max-w-3xl ml-auto w-full flex items-center">
              <div className="w-full">
                <h3 className="text-white">000 (123) 456 7890</h3>
                <p className="text-gray-100 opacity-50 font-light">
                  A small river named Duden
                </p>
              </div>
              <div className="w-full">
                <h3 className="text-white">198 West 21th Street</h3>
                <p className="text-gray-100 opacity-50 font-light">
                  Suite 721 New York NY 10016
                </p>
              </div>
              <div className="w-full">
                <h3 className="text-white">Open Monday-Friday</h3>
                <p className="text-gray-100 opacity-50 font-light">
                  8:00am - 9:00pm
                </p>
              </div>
            </div>
            <div className="flex gap-4 h-full bg-primary-yellow">
              <ul className="flex gap-6 items-center pl-12">
                <li className="ftco-animate text-2xl">
                  <a href="#">
                    <span className="icon-twitter text-white"></span>
                  </a>
                </li>
                <li className="ftco-animate text-2xl">
                  <a href="#">
                    <span className="icon-facebook text-white"></span>
                  </a>
                </li>
                <li className="ftco-animate text-2xl">
                  <a href="#">
                    <span className="icon-instagram text-white"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="relative w-full grid grid-cols-2">
        <div className="bg-[url('/images/about.jpg')] bg-center bg-cover bg-no-repeat w-full h-full"></div>
        <div className="w-full h-full p-[76px]">
          <h2 className="mb-8 text-white text-3xl uppercase">
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
      <section className="relative bg-[url('/images/food.png')]">
        {/*<div className="absolute w-full h-full bg-primary-yellow opacity-0 " />*/}
        <div className="py-24 pb-32">
          <h3 className="text-center text-3xl uppercase mb-8">Our Services</h3>
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
              <h3 className="text-xl mb-5 uppercase">Healthy Foods</h3>
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
              <h3 className="text-xl mb-5 uppercase">Fastest Delivery</h3>
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
      <section className="py-[105px]">
        <div className="text-white text-center mb-20">
          <h3 className=" text-3xl uppercase mb-6">hot pizza meals</h3>
          <p className="text-primary-gray leading-7 max-w-2xl mx-auto mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <PizzaCard pizzaImage="/images/pizza-1.jpg" pizzaName="" />
        </div>
      </section>
    </main>
  );
}
