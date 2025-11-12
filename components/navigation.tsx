"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("beranda")

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
          <div className="flex items-center gap-8">
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
        </div>
      </div>
    </nav>
  )
}
