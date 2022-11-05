import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <header className="flex justify-between m-2 sticky" name="header">
      <a href="#header">
        <AiOutlineHome className="text-5xl text-white bg-neutral-900 rounded p-2 hover:bg-neutral-200 hover:text-black" />
      </a>
      <GiHamburgerMenu className="text-5xl text-white bg-neutral-900 rounded p-2 hover:bg-neutral-200 hover:text-black" />
    </header>
  );
}