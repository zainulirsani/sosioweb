"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProfilPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Haniza Febriani",
      role: "E1S02310044",
      // contribution: "Mengorganisir proyek dan mengarahkan pengembangan konten utama",
      image: "/haniza.png",
    },
    {
      id: 2,
      name: "NADIA SYIFA UNNUFUS",
      role: "E1S02310069",
      // contribution: "Melakukan riset mendalam dan mengedit semua konten materi pembelajaran Nilai Sosial",
      image: "/nadia.png",
    },
    {
      id: 3,
      name: "Musahidin",
      role: "E1S02310067",
      // contribution: "Melakukan riset mendalam dan mengedit semua konten materi pembelajaran",
      image: "/musa.png",
    },
    {
      id: 4,
      name: "HIRMA HAERUNNISA",
      role: "E1S02310045",
      // contribution: "#",
      image: "/hirma.png",
    },
    {
      id: 5,
      name: "Zahra",
      role: "E1S02310045",
      // contribution: "#",
      image: "/zahra.png",
    },
    {
      id: 6,
      name: "Aziz",
      role: "E1S02310045",
      // contribution: "#",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <div style={{ backgroundColor: "var(--bg-100)" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
              style={{ backgroundColor: "var(--accent-100)", color: "var(--bg-100)" }}
            >
              Tentang Kami
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
            <span className="text-balance">Profil Kelompok Kami</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-200)" }}>
            Kami adalah tim yang berdedikasi untuk membuat materi pembelajaran sosiologi yang komprehensif, mudah
            dipahami, dan menarik bagi semua kalangan pelajar
          </p>
        </div>

        {/* Team Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative h-full cursor-pointer"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div
                className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 transform"
                style={{ backgroundColor: "var(--bg-200)" }}
              >
                {/* Background Gradient Accent */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-[--accent-100] to-[--accent-200]`}
                />

                {/* Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Profile Picture Avatar */}
                  <div className="mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden transform transition-all duration-500 group-hover:scale-110">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="grow">
                    <h3
                      className="text-2xl font-bold mb-2 transition-colors duration-500"
                      style={{ color: "var(--primary-100)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-bold mb-4 transition-colors duration-500"
                      style={{ color: "var(--accent-100)" }}
                    >
                      {member.role}
                    </p>
                    {/* <p
                      className="text-sm leading-relaxed transition-colors duration-500"
                      style={{ color: "var(--text-200)" }}
                    >
                      {member.contribution}
                    </p> */}
                  </div>

                  {/* Hover Bottom Accent */}
                  <div
                    className={`mt-6 pt-6 border-t transition-all duration-500 ${hoveredId === member.id ? "opacity-100" : "opacity-0"}`}
                    style={{ borderColor: "var(--accent-100)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--accent-100)" }}
                      />
                      <span className="text-xs font-semibold" style={{ color: "var(--text-200)" }}>
                        Tim Sosiologi Kami
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Border - Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${hoveredId === member.id ? "ring-2 ring-[--accent-100]" : "ring-1 ring-[--bg-300]"}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Team Stats */}
        {/* <div className="mt-20 pt-12 border-t" style={{ borderColor: "var(--bg-300)" }}>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                6
              </div>
              <p className="text-sm mt-2" style={{ color: "var(--text-200)" }}>
                Anggota Tim
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                100%
              </div>
              <p className="text-sm mt-2" style={{ color: "var(--text-200)" }}>
                Dedikasi
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                1
              </div>
              <p className="text-sm mt-2" style={{ color: "var(--text-200)" }}>
                Visi Bersama
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
