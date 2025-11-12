"use client"

import { useState } from "react"

export default function ProfilPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Nama Anggota 1",
      role: "Ketua Kelompok",
      contribution: "Mengorganisir proyek dan mengarahkan pengembangan konten utama",
      color: "from-blue-500 to-cyan-500",
      icon: "👑",
    },
    {
      id: 2,
      name: "Nama Anggota 2",
      role: "Desainer & Developer",
      contribution: "Merancang antarmuka dan mengimplementasikan struktur teknis website",
      color: "from-purple-500 to-pink-500",
      icon: "🎨",
    },
    {
      id: 3,
      name: "Nama Anggota 3",
      role: "Peneliti & Editor",
      contribution: "Melakukan riset mendalam dan mengedit semua konten materi pembelajaran",
      color: "from-green-500 to-emerald-500",
      icon: "📚",
    },
    {
      id: 4,
      name: "Nama Anggota 4",
      role: "Multimedia Specialist",
      contribution: "Mengumpulkan dan mengintegrasikan infografis, video, dan media pembelajaran",
      color: "from-orange-500 to-red-500",
      icon: "🎬",
    },
    {
      id: 5,
      name: "Nama Anggota 5",
      role: "Content Writer",
      contribution: "Menulis dan mengembangkan semua materi pembelajaran sosiologi dengan detail",
      color: "from-indigo-500 to-blue-500",
      icon: "✍️",
    },
    {
      id: 6,
      name: "Nama Anggota 6",
      role: "Quality Assurance",
      contribution: "Memastikan kualitas konten dan pengalaman pengguna website yang optimal",
      color: "from-pink-500 to-rose-500",
      icon: "✨",
    },
  ]

  return (
    <div style={{ backgroundColor: "var(--bg-100)" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
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
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${member.color}`}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Avatar */}
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transform transition-all duration-500 group-hover:scale-110 bg-gradient-to-br ${member.color}`}
                    >
                      {member.icon}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-grow">
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
                    <p
                      className="text-sm leading-relaxed transition-colors duration-500"
                      style={{ color: "var(--text-200)" }}
                    >
                      {member.contribution}
                    </p>
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
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${hoveredId === member.id ? "ring-2" : "ring-1"}`}
                  style={{
                    ringColor: hoveredId === member.id ? "var(--accent-100)" : "var(--bg-300)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Team Stats */}
        <div className="mt-20 pt-12 border-t" style={{ borderColor: "var(--bg-300)" }}>
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
        </div>
      </div>
    </div>
  )
}
