import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import BlogsApiLogo from '../images/blogs api-logos.jpeg';
import StoreManagerLogo from '../images/store manager-logos.jpeg';
import StarwarsLogo from '../images/starwars planet search-logos.jpeg';
import RecipesApp from '../images/recipes app.jpg';
import MicroModal from 'react-micro-modal';

export default function Portfolio() {
  return (
    <section className="py-20">
      <h2 className="text-teal-300 font-oswald text-6xl pb-8">
        Meus Projetos
      </h2>
      <p className="w-7/12 ml-4 pb-20">
        Esses são alguns dos projetos que eu fiz estando na trybe, e adaptações pessoais dos mesmos. Atualmente estou aprendendo TypeScript, PostgreSQL e MongoDB!
        <br />
        Interessado em ver eles funcionando, sinta-se a vontade para clicar em qualquer um!
      </p>
      <section className="flex m-auto justify-around w-3/4 h-auto">
        <ul className="w-full m-auto">
          <li>
            <MicroModal trigger={(open) => <img src={StarwarsLogo} alt="Logo gerada do projeto store manager" className="w-80 rounded cursor-pointer" onClick={open} />}>
              {(close) => (
                <div className="relative block modal-animate-opacity">
                  <h3 className="font-oswald text-black text-2xl left-0 pb-8">
                    StarWars Planet Search
                  </h3>
                  <p className="font-oswald text-black pb-14">
                    Um projeto feito com ReactJS utilizando ContextAPI e Hooks de uma aplicação para procurar planetas do universo de Star Wars, utilizando filtros e validações!
                  </p>
                  <a href="https://github.com/samuelbagatelli/starwars-planets-search" target="_blank" className="bg-black rounded p-4 mx-1/2 text-xl font-oswald" rel="noreferrer">
                    Acesse o repositório!
                  </a>
                  <GrFormClose onClick={close} className="cursor-pointer text-3xl teste absolute bottom-93 left-95" />
                </div>
              )}
            </MicroModal>
          </li>
          <li>
            <MicroModal trigger={(open) => <img src={RecipesApp} alt="Logo gerada do projeto store manager" className="w-80 rounded cursor-pointer" onClick={open} />}>
              {(close) => (
                <div className="relative block modal-animate-opacity">
                  <h3 className="font-oswald text-red text-2xl left-0 pb-8">
                    Recipes App
                  </h3>
                  <p className="font-oswald text-black pb-14">
                    Um projeto em grupo, feito com <a href="https://github.com/vinicius-shk" target="_blank" className="text-red underline" rel="noreferrer">Vinícius Shkromada</a>, <a href="https://github.com/AllanSantos61" target="_blank" className="text-red underline" rel="noreferrer">Allan Santos</a> e <a href="https://github.com/AlecMMedeiros" target="_blank" className="text-red underline" rel="noreferrer">Alecsandro Medeiros</a>.
                    <br />
                    Nesse projeto utilizamos os modelos de produção Scrum e metodologias ágeis. O objetivo era produzir uma aplicação responsiva e de uso intuitivo de um aplicativo de receitas.
                  </p>
                  <a href="https://github.com/samuelbagatelli/recipes-app" target="_blank" className="bg-red rounded p-4 mx-1/2 text-xl font-oswald" rel="noreferrer">
                    Acesse o repositório!
                  </a>
                  <GrFormClose onClick={close} className="cursor-pointer text-3xl teste absolute bottom-93 left-95" />
                </div>
              )}
            </MicroModal>
          </li>
          <li>
            <MicroModal trigger={(open) => <img src={BlogsApiLogo} alt="Logo gerada do projeto store manager" className="w-80 rounded cursor-pointer" onClick={open} />}>
              {(close) => (
                <div className="relative block modal-animate-opacity">
                  <h3 className="font-oswald text-teal-400 text-2xl left-0 pb-8">
                    Blogs API
                  </h3>
                  <p className="font-oswald text-black pb-14">
                    Um projeto de construção de uma API utilizando o Sequelize para realizar a comunicação entre o banco de dados e a aplicação.
                    <br />
                    O banco de dados utilizado foi MySQL e a API foi construida utilizando Node.js e Express.js.
                  </p>
                  <a href="https://github.com/samuelbagatelli/store-manager" target="_blank" className="bg-teal-400 rounded p-4 mx-1/2 text-xl font-oswald" rel="noreferrer">
                    Acesse o repositório!
                  </a>
                  <GrFormClose onClick={close} className="cursor-pointer text-3xl teste absolute bottom-93 left-95" />
                </div>
              )}
            </MicroModal>
          </li>
          <li>
            <MicroModal trigger={(open) => <img src={StoreManagerLogo} alt="Logo gerada do projeto store manager" className="w-80 rounded cursor-pointer" onClick={open} />}>
              {(close) => (
                <div className="relative block modal-animate-opacity">
                  <h3 className="font-oswald text-orange-400 text-2xl left-0 pb-8">
                    Store Manager
                  </h3>
                  <p className="font-oswald text-black pb-14">
                    Um projeto de construção de API com Node.js e Express.js!
                    <br />
                    O banco de dados utilizado foi MySQL e a biblioteca de comunicação entre JavaScript e o banco de dados foi a mysql2.
                  </p>
                  <a href="https://github.com/samuelbagatelli/store-manager" target="_blank" className="bg-orange-400 rounded p-4 mx-1/2 text-xl font-oswald" rel="noreferrer">
                    Acesse o repositório!
                  </a>
                  <GrFormClose onClick={close} className="cursor-pointer text-3xl teste absolute bottom-93 left-95" />
                </div>
              )}
            </MicroModal>
          </li>
        </ul>
      </section>
    </section>
  );
}