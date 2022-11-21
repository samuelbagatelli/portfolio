import React, { useState } from 'react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export default function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  console.log(name);

  return (
    <section>
      <h2 className="text-teal-300 font-oswald text-6xl pb-8" id="contact">
        Entre em contato!
      </h2>
      <div className="flex justify-center for-all-a ml-14 mb-4">
        <a href="https://www.linkedin.com/in/samuel-bagatelli/" target="_blank" rel="noreferrer">
          <BsLinkedin className="bg-neutral-900 opacity-80 rounded-xl p-2 transition hover:bg-neutral-200 hover:text-black text-5xl" />
        </a>
        <a href="https://github.com/samuelbagatelli" target="_blank" rel="noreferrer">
          <AiFillGithub className="bg-neutral-900 opacity-80 rounded-xl p-2 transition hover:bg-neutral-200 hover:text-black text-5xl" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5527995158607" target="_blank" rel="noreferrer">
          <BsWhatsapp className="bg-neutral-900 opacity-80 rounded-xl p-2 transition hover:bg-neutral-200 hover:text-black text-5xl" />
        </a>
      </div>
      <form 
        action="https://formsubmit.co/65815e7a0ba4cad7d14c7c4085345374" 
        method="POST"
        className="flex flex-col items-center"
      >
        <input 
          type="text" 
          placeholder="Nome" 
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Assunto" 
          name="subject"
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
          required
        />
        <textarea 
          name="message" 
          cols="30" rows="10" 
          placeholder="Conteúdo"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          required
        />
        <button 
          type="submit"
          className="my-5 border border-teal-300 px-8 py-2 text-teal-300 transition hover:bg-teal-300 hover:text-black"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}