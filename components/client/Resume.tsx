'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'
import Clarity from '@microsoft/clarity'

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Remove this handler and update href once you have a real PDF in /public/
    e.preventDefault();
    Clarity?.event('resume_click');
  }

  return (
    <section className="py-10 px-6" ref={sectionRef}>
      <div className="max-w-sm mx-auto rv">
        <div className="glass gb rounded-3xl p-8 text-center">
          <div className="sl mb-3">Resume</div>
          <h3 className="font-bold text-white text-xl mb-2">Download My CV</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(237,224,240,.42)' }}>
            Full overview of experience &amp; skills.
          </p>
          <a
            href="/tanveer-h-resume.pdf"
            download="tanveer-h-resume.pdf"
            onClick={handleClick}
            className="btn-p inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
