import React from 'react'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', ],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
});



export const About = () => {
  return (
    <div>

    <h2 className={`${roboto.className} text-2xl text-white`}>Sobre mí</h2>
    <h2 className={`${inter.className} text-white text-xl`}>Ingeniero Comercial</h2>
    <h2 className={`${inter.className} text-white text-xl`}>FullStack Developer</h2>
    </div>
  )
}
