import React from 'react';
import IAmHere from '../images/i-am-here.jpg';

export default function About() {
  return (
    <section>
      <h2 className="text-teal-300 font-oswald text-6xl pb-8">
        Um pouco sobre mim
      </h2>
      <div className="flex items-center">
        <p className="w-7/12 ml-4 pb-20">
        Me chamo Samuel Bagatelli, tenho 19 anos de idade e sou um desenvolvedor FullStack.
        Sempre fui apaixonado por tecnologia, desde pequeno, e recentemente descobri a programação, e essa nova forma de resolver problemas. Decerto me apaixonei por esse mundo de códigos e algorítimos, e hoje quero levar às pessoas soluções dinâmicas, de uso fácil e com código limpo.
          <br />
          <br />
        Sou apaixonado por aprender, gosto muito de ler e passar um bom tempo com as pessoas e descobrir novas culturas e formas de pensar.
        </p>
        <img src={IAmHere} alt="Via láctea com símbolo de localização" className="w-96 ml-36 pb-9" />
      </div>
    </section>
  );
}