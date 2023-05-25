import React from "react";

const Contact = () => {
  return (
    <section className="bg-black">
      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 py-9 max-w-5xl ml-auto w-full flex items-center">
            <div className="w-full">
              <h3 className="text-white font-josefin">000 (123) 456 7890</h3>
              <p className="text-gray-100 opacity-50 font-light">
                A small river named Duden
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-white font-josefin">198 West 21th Street</h3>
              <p className="text-gray-100 opacity-50 font-light">
                Suite 721 New York NY 10016
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-white font-josefin">Open Monday-Friday</h3>
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
  );
};

export default Contact;
