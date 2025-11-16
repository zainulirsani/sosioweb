import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/norma", label: "Norma" },
    { href: "/nilai-sosial", label: "Nilai Sosial" },
    { href: "/interaksi-sosial", label: "Interaksi Sosial" },
    { href: "/profil", label: "Profil" },
  ]

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Instagram },
  ]

  return (
    <footer className="py-12" style={{ backgroundColor: "var(--bg-200)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold" style={{ color: "var(--text-100)" }}>
            Sosiologi
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium transition-colors hover:text-gray-400"
                style={{ color: "var(--text-200)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link key={index} href={social.href} className="hover:opacity-80" style={{ color: "var(--text-200)" }}>
                  <Icon size={24} />
                </Link>
              )
            })}
          </div>
        </div> */}
        <div className="mt-8 border-t pt-8 text-center text-sm" style={{ borderColor: "var(--border-color)" }}>
          <p style={{ color: "var(--text-200)" }}>© 2025 Sosiologi Kelompok X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
