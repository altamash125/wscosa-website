// src/components/ui/Header.tsx
"use client";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-white py-3 px-4 md:px-8 hidden lg:flex items-center justify-between border-b">
      <div className="flex items-center gap-4">
        <Image src="/images/wsco-logo.jpeg" alt={`${SITE_NAME} Logo`} width={56} height={56} className="object-contain" />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-amber-600" />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Location</div>
            <div className="text-gray-500">{CONTACT.location}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-amber-600" />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Call Us</div>
            <div className="text-gray-500">{CONTACT.phones[0]}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-600" />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Working Hours</div>
            <div className="text-gray-500">Office Hour: 09:00am - 04:00pm</div>
          </div>
        </div>

        <div>
          <Link href="#contact" className="bg-amber-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-700">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
