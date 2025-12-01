"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProfilPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const teamMembers = [
    {
      id: 1,
      name: "Haniza Febriani",
      nim: "E1S02310044",
      image: "/haniza.png",
      instagram: "https://www.instagram.com/hanizafebriani_/",
    },
    {
      id: 2,
      name: "NADIA SYIFA UNNUFUS",
      nim: "E1S02310069",
      image: "/nadia.png",
      instagram: "https://www.instagram.com/nadiasyifaa.__",
    },
    {
      id: 3,
      name: "Musahidin",
      nim: "E1S02310067",
      image: "/musa.png",
      instagram: "https://www.instagram.com/musa_hidin23",
    },
    {
      id: 4,
      name: "HIRMA HAERUNNISA",
      nim: "E1S02310045",
      image: "/hirma.png",
      instagram: "https://www.instagram.com/_.iirmaa",
    },
    {
      id: 5,
      name: "Mutiara azzahra kasih",
      nim: "E1S02310045",
      image: "/zahra.png",
      instagram: "https://www.instagram.com/mtrazhrksh_",
    },
    {
      id: 6,
      name: "M Aziz almasani Wijaya",
      nim: "E1S02310045",
      image: "/aziz.png",
      instagram: "https://www.instagram.com/ajzzz_wjn/",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "var(--bg-100)" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--accent-100)" }}
        />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--primary-100)" }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--accent-100)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-6 animate-fade-in">
            <div className="relative">
              <span
                className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--accent-100)",
                  color: "var(--bg-100)",
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
                Tentang Kami
              </span>
              <div
                className="absolute -inset-1 rounded-full opacity-20 blur-md -z-10"
                style={{ backgroundColor: "var(--accent-100)" }}
              />
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
            style={{ color: "var(--primary-100)" }}
          >
            <span className="inline-block animate-slide-up">Profil Kelompok</span>
            <br />
            <span
              className="inline-block bg-gradient-to-r from-[var(--accent-100)] to-[var(--primary-100)] bg-clip-text text-transparent animate-slide-up-delay"
            >
              Kami
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-delay"
            style={{ color: "var(--text-200)" }}
          >
            Kami adalah tim yang berdedikasi untuk membuat materi pembelajaran sosiologi yang{" "}
            <span className="font-semibold" style={{ color: "var(--primary-100)" }}>
              komprehensif
            </span>
            ,{" "}
            <span className="font-semibold" style={{ color: "var(--primary-100)" }}>
              mudah dipahami
            </span>
            , dan{" "}
            <span className="font-semibold" style={{ color: "var(--primary-100)" }}>
              menarik
            </span>{" "}
            bagi semua kalangan pelajar
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, index) => (
              <a key={member.id} href={member.instagram} target="_blank" rel="noopener noreferrer">
                <div
                  className="group relative h-full cursor-pointer"
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Card Container with Glassmorphism */}
                  <div
                    className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{
                      backgroundColor: "var(--bg-200)",
                      boxShadow: hoveredId === member.id
                        ? "0 20px 40px -10px rgba(0,0,0,0.15)"
                        : "0 10px 25px -5px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, rgba(var(--accent-rgb), 0.08) 0%, rgba(var(--primary-rgb), 0.08) 100%)`,
                      }}
                    />

                    {/* Top Border Accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ backgroundColor: "var(--accent-100)" }}
                    />

                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Profile Picture with Enhanced Styling */}
                      <div className="mb-6 relative">
                        <div className="relative inline-block">
                          {/* Animated Ring */}
                          <div
                            className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
                            style={{
                              background: `conic-gradient(from 0deg, var(--accent-100), var(--primary-100), var(--accent-100))`,
                            }}
                          />

                          {/* Avatar Container */}
                          <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-br from-[var(--accent-100)] to-[var(--primary-100)] transform transition-all duration-500 group-hover:scale-110">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="flex-grow">
                        <h3
                          className="text-xl font-bold mb-2 transition-all duration-300 group-hover:translate-x-1"
                          style={{ color: "var(--primary-100)" }}
                        >
                          {member.name}
                        </h3>

                        <div className="inline-flex items-center gap-2 mb-3">
                          <div
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "var(--accent-100)" }}
                          />
                          <p
                            className="text-sm font-semibold tracking-wide"
                            style={{ color: "var(--accent-100)" }}
                          >
                            {member.nim}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div
                        className="mt-4 pt-4 border-t transition-all duration-500"
                        style={{
                          borderColor: hoveredId === member.id ? "var(--accent-100)" : "var(--bg-300)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: "var(--accent-100)" }}
                            />
                            <span
                              className="text-xs font-semibold uppercase tracking-wider"
                              style={{ color: "var(--text-200)" }}
                            >
                              Tim Sosiologi
                            </span>
                          </div>

                          {/* Arrow Icon */}
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                            style={{
                              backgroundColor: hoveredId === member.id ? "var(--accent-100)" : "var(--bg-300)",
                            }}
                          >
                            <svg
                              className="w-3 h-3 transition-colors duration-300"
                              style={{
                                stroke: hoveredId === member.id ? "var(--bg-100)" : "var(--text-200)",
                              }}
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Border */}
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
                      style={{
                        border: hoveredId === member.id ? "2px solid var(--accent-100)" : "1px solid var(--bg-300)",
                      }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        {/* <div className="mt-24 pt-16 border-t" style={{ borderColor: "var(--bg-300)" }}>
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: "6", label: "Anggota Tim", icon: "👥" },
              { value: "100%", label: "Dedikasi", icon: "💯" },
              { value: "1", label: "Visi Bersama", icon: "🎯" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-default"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div
                  className="text-4xl md:text-5xl font-extrabold mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{ color: "var(--primary-100)" }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-sm md:text-base font-medium uppercase tracking-wider"
                  style={{ color: "var(--text-200)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }

        .animate-slide-up-delay {
          animation: slideUp 0.6s ease-out 0.2s both;
        }

        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
      `}</style>
    </div>
  )
}
