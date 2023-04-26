import React from 'react';

import DogImg from "../assets/img/dogs/dog-contact.png"

const Contact = () => {
  return (
    <section className="bg-yellow-secondary pt-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* IMAGE */}
          <div className="order-1 lg:-order-1 lg:mt-16">
            <img className="-mb-[12px]" src={DogImg} />
          </div>
          {/* TEXT */}
          <div className="flex flex-col justify-center items-center">
            <div className="text-orange font-semibold mb-3">Contact</div>
            <div className="text-4xl text-blue font-extrabold">+ 1 000 10 84 000</div>
            <div className="text-blue mb-7">Opening Hours: Mon - Sun: 10am - 6pm</div>
            <button className="btn">Get an appointment</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;