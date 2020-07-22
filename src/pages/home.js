/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import FadeIn from 'react-fade-in';

import { Main } from './styled';
import heart from '../assets/heart.svg';

export default function Home() {
   const [fname, setFname] = useState('');
   const [sname, setSname] = useState('');
   const [visibility, setVisibility] = useState(true);

   const url = 'https://love-calculator.p.rapidapi.com/getPercentage';
   const host = 'love-calculator.p.rapidapi.com';
   const key = '2f0b23188bmsh5618995da04a1bdp1b48b4jsnba258c2a60e3';

   const handleClick = async () => {
      try {
         if (fname && sname) {
            document.querySelector('main form h2 strong').innerHTML = '0';
            setVisibility(!visibility);

            const response = await axios.get(url, {
               params: { fname, sname },
               headers: { 'x-rapidapi-host': host, 'x-rapidapi-key': key },
            });

            calculator(response.data);
         }
      } catch (e) {
         console.log('cai no erro');
      }
   };

   const calculator = ({ percentage }) => {
      const h2 = document.querySelector('main form h2 strong');
      let count = 0;

      const time = setInterval(() => {
         count += 1;
         h2.innerHTML = count;

         if (count >= percentage) clearInterval(time);
      }, 25);
   };

   const handleChangeInputFname = e => {
      setFname(e.target.value);
   };

   const handleChangeInputSname = e => {
      setSname(e.target.value);
   };

   const handleClickBack = () => {
      setVisibility(!visibility);
      setFname('');
      setSname('');
   };

   const handleKeyUp = e => {
      if (e.keyCode === 13) {
         handleClick();
      }
   };

   return (
      <Main visibility={visibility ? 1 : 0}>
         <form>
            <FadeIn delay="250" className="FadeIn">
               <img src={heart} alt="heartImg" />
               <h1>Calculador de compatibilidade</h1>

               <input
                  type="search"
                  value={fname}
                  onChange={handleChangeInputFname}
                  placeholder="Seu nome"
                  onKeyUp={e => handleKeyUp(e)}
               />

               <input
                  type="search"
                  value={sname}
                  onChange={handleChangeInputSname}
                  placeholder="Nome da pessoa"
                  onKeyUp={e => handleKeyUp(e)}
               />

               <button id="calc" onClick={handleClick} type="button">
                  Calcular
               </button>

               <h2>
                  <strong>0</strong>%
               </h2>

               <button id="back" onClick={handleClickBack} type="button">
                  Voltar
               </button>
            </FadeIn>
         </form>
      </Main>
   );
}
