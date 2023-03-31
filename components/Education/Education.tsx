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

const educationContent = [
  {
    title: "Master of Science in Marketing",
    institution: "Universidad Adolfo Ibáñez",
    date: "Graduado en 2020",
  },
  {
    title: "Ingeniero Comercial",
    institution: "Universidad Adolfo Ibáñez",
    date: "Graduado en 2020",
  }
];

export const Education = () => {
  return (
    <div className="py-12 bg-gray-900 rounded-lg">
      <div className="max-w-5xl sm:mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`${roboto.className} text-3xl font-bold text-white mb-8`}>Educación</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {educationContent.map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg">
              <h2 className={`${inter.className} text-lg font-bold text-white mb-2`}>{item.title}</h2>
              <h3 className={`${inter.className} text-gray-400 text-sm mb-2`}>{item.institution}</h3>
              <p className={`${inter.className} text-gray-400 text-sm`}>{`Graduado en ${item.date}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
