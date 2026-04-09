import { SITE } from '@/lib/data/constants'

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-black text-xl gt">{SITE.name}</span>

        <div className="flex gap-7 text-sm font-medium" style={{ color: 'rgba(237,224,240, .7)' }}>
          {/* Replace # with your real profile URLs */}
          <a href={SITE.linkedin} className="hover:text-r1 transition-colors" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SITE.github} className="hover:text-r1 transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${SITE.email}`}  className="hover:text-r1 transition-colors" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>

        <p className="text-xs" style={{ color: 'rgba(237,224,240, .5)' }}>
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  )
}