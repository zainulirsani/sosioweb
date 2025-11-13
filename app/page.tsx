"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react"

export default function BerandaPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const topics = [
    {
      id: "norma",
      title: "Norma Sosial",
      description: "Pelajari aturan dan standar perilaku yang mengatur interaksi dalam masyarakat",
      href: "/norma",
      icon: BookOpen,
      gradient: "from-blue-500 to-blue-600",
      delay: "delay-0",
    },
    {
      id: "deviasi",
      title: "Deviasi Sosial",
      description: "Pahami penyimpangan sosial dan dampaknya terhadap struktur masyarakat",
      href: "/deviasi",
      icon: Lightbulb,
      gradient: "from-cyan-500 to-blue-500",
      delay: "delay-100",
    },
    {
      id: "interaksi",
      title: "Interaksi Sosial",
      description: "Eksplorasi dinamika dan bentuk-bentuk interaksi dalam kehidupan sehari-hari",
      href: "/interaksi-sosial",
      icon: Users,
      gradient: "from-pink-400 to-cyan-400",
      delay: "delay-200",
    },
  ]

  return (
    <div style={{ backgroundColor: "var(--bg-100)" }}>
      {/* Hero Section - Modern Gradient Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-8 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center z-10">
          <div className="mb-6 inline-block">
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{ backgroundColor: "var(--bg-300)", color: "var(--primary-100)" }}
            >
              Platform Pembelajaran Sosiologi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text-100)" }}>
            Pahami Masyarakat,
            <br />
            <span style={{ color: "var(--accent-100)" }}>Ubah Perspektif</span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-200)" }}
          >
            Jelajahi konsep sosiologi yang mendalam melalui materi interaktif dan engaging. Temukan pemahaman baru
            tentang norma, deviasi, dan interaksi sosial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#topics"
              className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "var(--primary-100)", color: "white" }}
            >
              Mulai Belajar <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/profil"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 hover:shadow-lg hover:scale-105"
              style={{ borderColor: "var(--primary-100)", color: "var(--primary-100)" }}
            >
              Tentang Kami
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                5
              </div>
              <p className="text-sm text-gray-600 mt-1">Topik Utama</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                20+
              </div>
              <p className="text-sm text-gray-600 mt-1">Materi Lengkap</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-100)" }}>
                100%
              </div>
              <p className="text-sm text-gray-600 mt-1">Gratis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics Section with Enhanced Cards */}
      <section id="topics" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-100)" }}>
              Materi Pembelajaran
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: "var(--accent-100)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic) => {
              const Icon = topic.icon
              return (
                <Link
                  key={topic.id}
                  href={topic.href}
                  onMouseEnter={() => setHoveredCard(topic.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`h-full p-8 rounded-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${topic.delay}`}
                    style={{
                      backgroundColor: hoveredCard === topic.id ? "var(--bg-300)" : "var(--bg-200)",
                      border: "1px solid rgba(0, 102, 217, 0.1)",
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3
                      className="text-2xl font-bold mb-3 transition-colors duration-300"
                      style={{ color: "var(--text-100)" }}
                    >
                      {topic.title}
                    </h3>

                    <p
                      className="mb-6 leading-relaxed transition-colors duration-300"
                      style={{ color: "var(--text-200)" }}
                    >
                      {topic.description}
                    </p>

                    <div
                      className="font-semibold flex items-center gap-2 transition-all duration-300"
                      style={{ color: "var(--primary-100)" }}
                    >
                      Pelajari Selengkapnya
                      <ArrowRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          hoveredCard === topic.id ? "translate-x-2" : ""
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-300)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "var(--text-100)" }}>
            Mengapa Memilih Platform Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Materi Terstruktur",
                description: "Konten yang disusun sistematis dari konsep dasar hingga advanced",
              },
              {
                title: "Interaktif & Engaging",
                description: "Visualisasi dan studi kasus yang membuat pembelajaran lebih menarik",
              },
              {
                title: "Mudah Diakses",
                description: "Platform yang user-friendly dapat diakses kapan saja dari mana saja",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-xl" style={{ backgroundColor: "var(--bg-200)" }}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 font-bold text-white"
                  style={{ backgroundColor: "var(--primary-100)" }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-100)" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "var(--text-200)" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--text-100)" }}>
            Siap untuk Mulai?
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--text-200)" }}>
            Jangan lewatkan kesempatan untuk memperdalam pemahaman sosiologi Anda bersama platform terbaik.
          </p>
          <Link
            href="#topics"
            className="inline-block px-10 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "var(--accent-100)" }}
          >
            Jelajahi Semua Materi
          </Link>
        </div>
      </section>
    </div>
  )
}
