// src/components/ui/Navbar.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";

/**
 * Responsive Navbar with logo and links
 */
export function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
    return (
        <nav className="w-full flex items-center justify-between py-4 px-8 bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
            {/* Logo */}
            <div className="flex lg:hidden items-center gap-2">
                <Image src="/images/wsco-logo.jpeg" alt="Logo" width={40} height={40} />
            </div>
            {/* Desktop nav */}
            <div className="hidden lg:flex flex-1 justify-start">
                <ul className="flex gap-12 text-base font-medium items-center">
                    <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                    <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                    <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
            </div>
            {/* Right icons and button */}
            <div className="hidden lg:flex items-center gap-6 ml-8">
                {/* intentionally left minimal */}
            </div>
            {/* Mobile menu button */}
            <button
                className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
            >
                <Menu className="w-7 h-7 text-primary" />
            </button>
            {/* Sidebar overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}
            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 min-h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "hidden"} lg:hidden`}
                aria-hidden={!sidebarOpen}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <Image src="/images/wsco-logo.jpeg" alt="Logo" width={40} height={40} />
                    <button
                        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-7 h-7 text-primary" />
                    </button>
                </div>
                <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
                    <a href="#" className="hover:text-accent transition-colors" onClick={() => setSidebarOpen(false)}>Home</a>
                    <a href="#about" className="hover:text-accent transition-colors" onClick={() => setSidebarOpen(false)}>About Us</a>
                    <a href="#services" className="hover:text-accent transition-colors" onClick={() => setSidebarOpen(false)}>Services</a>
                    <a href="#projects" className="hover:text-accent transition-colors" onClick={() => setSidebarOpen(false)}>Projects</a>
                    <a href="#contact" className="hover:text-accent transition-colors" onClick={() => setSidebarOpen(false)}>Contact</a>
                </nav>
            </aside>
        </nav>
    );
}
