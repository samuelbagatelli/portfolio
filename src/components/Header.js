import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [hambMenu, setHambMenu] = useState(true);

  return (
    <header className="fixed flex one-hundred-percent justify-between my-2">
      <a href="#home">
        <AiOutlineHome className="text-5xl text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black" />
      </a>
      <button
        onClick={() => setHambMenu(!hambMenu)}
      >
        {
          hambMenu
            ? <GiHamburgerMenu className="text-5xl text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black float-right" />
            : <AiOutlineClose className="text-5xl text-white bg-neutral-900 opacity-80 transition rounded p-2 hover:bg-neutral-200 hover:text-black float-right" />
        }
      </button>
    </header>
  );
}