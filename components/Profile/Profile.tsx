import React from 'react'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});



export const Profile = () => {
  return (
    <div>
  <h1 className={`${roboto.className} text-5xl p-10 font-semibold text-white`}>
    Hola! , mi nombre es Víctor Cárdenas
  </h1>
  <h1 className={`text-4xl p-6 font-medium text-white text-center`}>
    Soy  desarrollador fullstack
  </h1>
</div>

  )
}
