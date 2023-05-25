import Welcome from "@components/Welcome";

("use-client");
import Image from "next/image";

// components
import Contact from "@components/Contact";
import Services from "@components/Services";
import PizzaMeals from "@components/PizzaMeals";

export default function Home() {
  const pizzaMealsList = [
    {
      id: 1,
      image: "/images/pizza-1.jpg",
      name: "Italian Pizza",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.94,
    },
    {
      id: 2,
      image: "/images/pizza-2.jpg",
      name: "Greek Pizza",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.91,
    },
    {
      id: 3,
      image: "/images/pizza-3.jpg",
      name: "Caucasian Pizza",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.96,
    },
    {
      id: 4,
      image: "/images/pizza-4.jpg",
      name: "American Pizza",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.97,
    },
    {
      id: 5,
      image: "/images/pizza-5.jpg",
      name: "Tomatoe Pie",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.95,
    },
    {
      id: 6,
      image: "/images/pizza-6.jpg",
      name: "Margherita",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
      unitPrice: 2.9,
    },
  ];

  return (
    <main>
      <section className="relative bg-[url('/images/bg_1.jpg')] h-[690px] bg-cover bg-no-repeat bg-center">
        <div className="absolute bg-black w-full h-full z-10 opacity-50" />
        <div className="relative grid grid-cols-2 gap-8 place-content-center mx-auto px-4 w-full h-full z-20">
          <div className="w-full h-full">
            <div className="text-white text-right flex flex-col justify-center gap-8 h-full">
              <div>
                <h2 className="text-3xl font-nothing text-primary-yellow">
                  Delicious
                </h2>
                <h3 className="text-[40px] font-josefin uppercase">
                  italian cuizine
                </h3>
              </div>
              <p className="text-lg max-w-xl mx-auto mr-0">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
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
      <Contact />
      <Welcome />
      <Services />
      <PizzaMeals data={pizzaMealsList} />
    </main>
  );
}
