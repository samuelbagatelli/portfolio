import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [hambMenu, setHambMenu] = useState(true);

  return (
    <header className="fixed flex one-hundred-percent justify-between my-2">
      <a href="#home">
        <AiOutlineHome className="text-5xl text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black correction" />
      </a>
      {
        !hambMenu
        && <div className="flex flex-col bg-neutral-900 full-left opacity-90 rounded-lg transition">
          <a className="hamb-menu mb-1">Home</a>
          <a className="hamb-menu mb-1">Projetos</a>
          <a className="hamb-menu mb-1">Sobre</a>
          <a className="hamb-menu">Contato</a>
        </div>
      }
      <button
        onClick={() => setHambMenu(!hambMenu)}
      >
        {
          hambMenu
            ? <GiHamburgerMenu className="text-5xl text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black float-right" />
            : <AiOutlineClose className="text-5xl mb-40 text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black float-right" />
        }
      </button>
    </header>
  );
}