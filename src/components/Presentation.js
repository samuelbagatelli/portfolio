import React from 'react';

export default function Presentation() {
  return (
    <section className="py-20 pt-28" id="home">
      <h1 className="font-oswald font-bold text-7xl pb-12">
        Olá,
        <br />
        me chamo Samuel,
        <br />
        sou um desenvolvedor
        <br />
        FullStack
      </h1>
      <a href="#contact">
        <button className="border border-teal-300 px-8 py-2 text-teal-300 transition hover:bg-teal-300 hover:text-black">
          Entre em contato!
        </button>
      </a>
    </section>
  );
}