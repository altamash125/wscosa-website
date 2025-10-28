// src/components/layout/ContactSection.tsx
"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in touch" />

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-8">
          <div className="bg-white p-6 rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
            <p className="mb-3"><strong>Location:</strong> {CONTACT.location}</p>

            <div className="mb-3">
              <strong>Phone</strong>
              <ul className="mt-2 space-y-1">
                {CONTACT.phones.map((p) => (
                  <li key={p}>
                    <a className="text-accent hover:underline" href={`tel:${p.replace(/\s+/g, "")}`}>{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Email</strong>
              <ul className="mt-2 space-y-1">
                {CONTACT.emails.map((e) => (
                  <li key={e}>
                    <a className="text-accent hover:underline" href={`mailto:${e}`}>{e}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="bg-white p-6 rounded shadow-sm grid gap-4">
            <input className="border border-gray-200 rounded p-3" placeholder="Your name" aria-label="Your name" />
            <input className="border border-gray-200 rounded p-3" placeholder="Email" aria-label="Email" />
            <input className="border border-gray-200 rounded p-3" placeholder="Subject" aria-label="Subject" />
            <textarea className="border border-gray-200 rounded p-3" rows={6} placeholder="Message" aria-label="Message" />
            <button type="submit" className="bg-accent text-white px-6 py-3 rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
