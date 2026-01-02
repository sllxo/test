'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsDiscord } from 'react-icons/bs'
import { FiTerminal } from 'react-icons/fi'

export default function Home() {
  const [themeIcon, setThemeIcon] = useState('🌐')

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center text-white">
      {/* Background Gradient Blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-950 blur-2xl opacity-50 z-0" />

      {/* Top Icon Toggle */}
      <div className="absolute top-6 flex justify-center w-full z-10">
        <button
          className="bg-[#1e1e2f] rounded-full p-2 border border-white/10 flex gap-1 items-center"
          onClick={() => setThemeIcon((prev) => (prev === '🌐' ? '💬' : '🌐'))}
        >
          <span>{themeIcon}</span>
          <BsDiscord className="text-white text-lg" />
        </button>
      </div>

      {/* Center Content */}
      <div className="z-10 text-center flex flex-col items-center">
        <Image
          src="/slit.png"
          alt="Slit Bot"
          width={150}
          height={150}
          className="rounded-2xl shadow-lg mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Slit</h1>

        <div className="flex gap-4">
          <a
            href="#"
            className="bg-primary hover:bg-indigo-600 text-white py-2 px-5 rounded-lg flex items-center gap-2 transition"
          >
            <BsDiscord />
            Add to Discord
          </a>

          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 text-white py-2 px-5 rounded-lg flex items-center gap-2 transition border border-white/10"
          >
            <FiTerminal />
            View Commands
          </a>
        </div>
      </div>
    </main>
  )
}
