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



export const Experience = () => {
  return (
    <div>
    <h1 className={`${roboto.className} text-2xl text-white`}>Experiencia</h1>
    <h1 className={`${inter.className} text-white text-xl`}>Ecommerce Deploy & Analytics</h1>
    <h1 className={`${inter.className} text-white text-xl`}>IOS/Android Apps
    </h1>
    <h1 className={`${inter.className} text-white text-xl`}>Chrome Extensions
    </h1>
    </div>
  )
}
