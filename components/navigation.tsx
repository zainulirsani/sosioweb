"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("beranda")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Beranda", id: "beranda" },
    { href: "/norma", label: "Norma", id: "norma" },
    { href: "/deviasi", label: "Deviasi", id: "deviasi" },
    { href: "/interaksi-sosial", label: "Interaksi Sosial", id: "interaksi" },
    { href: "/profil", label: "Profil", id: "profil" },
  ]

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "var(--primary-100)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold" style={{ color: "var(--bg-100)" }}>
            Sosiologi
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--bg-100)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: "var(--bg-100)" }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: "var(--primary-100)" }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id)
                  setIsMenuOpen(false)
                }}
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{ color: "var(--bg-100)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
