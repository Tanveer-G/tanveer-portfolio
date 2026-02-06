'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GradientBtnLayout from '../Buttons/GradientBtnLayout'


export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden ">

      {/* Main hero */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-3 text-sm text-[var(--text-main)] mb-4">
              <span className="text-indigo-300">+</span>
              <span>Welcome to my creative realm</span>
            </div>

            <h1 id="hero-heading" className="h1-gradient font-display font-extrabold text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-tight">
              FRONTEND DEVELOPER
            </h1>

            <p className="mt-6 text-[18px] max-w-xl text-[var(--text-main)]">
              Hi, I am <strong>Tanveer</strong> — <span className="text-[var(--grad-1-mid)]">Web Developer</span> with a passion for creating beautiful and responsive <strong>Web Apps.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
             <GradientBtnLayout borderGradient={`linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)`} > <Link href="#work" className="p-5 py-20 h-16">VIEW MY WORK</Link></GradientBtnLayout>
              <Link href="/contact" className="btn-outline">CONTACT NOW!</Link>
            </div>

          
          </div>

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-[300px] sm:w-[360px] md:w-[420px] rounded-xl overflow-hidden portrait-shadow">
              <Image
                src="/myself.png"
                alt="Tanveer portrait"
                width={840}
                height={1120}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
              />
            </div>
          </div>
        </div>
    </section>
  )
}
