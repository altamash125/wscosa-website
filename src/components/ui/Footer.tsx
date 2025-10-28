// src/components/ui/Footer.tsx
import { SITE_NAME, SERVICES, CONTACT } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#1f1b1a] text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + newsletter */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">W</div>
            <div className="text-white font-semibold">{SITE_NAME}</div>
          </div>
          <p className="text-sm text-gray-400 mb-4">Subscribe us and get latest news, tips and updates to your inbox</p>
          <form className="flex items-center gap-2">
            <input aria-label="Email" type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded bg-[#2a2625] text-white placeholder:text-gray-500" />
            <button className="bg-amber-600 p-2 rounded text-white" aria-label="Subscribe">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>

          <div className="flex items-center gap-3 mt-6">
          <a 
    className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center hover:bg-[#0A66C2] transition-colors" 
    href="https://www.linkedin.com/" 
    target="_blank" 
    aria-label="linkedin"
  >
    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11 20H5V9h3v11zm-1.5-12.6c-1 0-1.8-.8-1.8-1.8S5.5 3.8 6.5 3.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM20 20h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8V20h-3V9h3v1.5c.4-.6 1.1-1.5 2.8-1.5 2 0 3.8 1.3 3.8 4.3V20z"/>
    </svg>
  </a>
             <a 
    className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center hover:bg-[#1DA1F2] transition-colors" 
    href="https://twitter.com/" 
    target="_blank" 
    aria-label="twitter"
  >
    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.73 1.05 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.89a4.27 4.27 0 001.33 5.7 4.3 4.3 0 01-1.94-.54v.06a4.28 4.28 0 003.43 4.19 4.24 4.24 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.38-.01-.57A8.7 8.7 0 0022.46 6z"/>
    </svg>
  </a>
             <a 
    className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] transition-colors" 
    href="https://www.instagram.com/" 
    target="_blank" 
    aria-label="instagram"
  >
    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2C5.57 4 4 5.57 4 7.5v9C4 18.43 5.57 20 7.5 20h9c1.93 0 3.5-1.57 3.5-3.5v-9C20 5.57 18.43 4 16.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.8-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/>
    </svg>
  </a>
            <a 
    className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center hover:bg-[#1877F2] transition-colors" 
    href="https://facebook.com/" 
    target="_blank" 
    aria-label="facebook"
  >
    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v7A10 10 0 0022 12z"/>
    </svg>
  </a>
          </div>
        </div>

        {/* Services list */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link href="#" className="hover:text-amber-300">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Other Link</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="#about" className="hover:text-amber-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-amber-300">Our projects</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center">📧</span>
              <div>
                <div className="text-white text-sm">{CONTACT.emails[0]}</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center">📞</span>
              <div>
                <div className="text-white text-sm">{CONTACT.phones[0]}</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#2a2625] flex items-center justify-center">📍</span>
              <div>
                <div className="text-white text-sm">{CONTACT.location}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2a2625]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} {SITE_NAME} All Rights Reserved</div>
      </div>
    </footer>
  );
}
