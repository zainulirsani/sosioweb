"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const normaPenjelasanData = [
  {
    title: "Pengertian Norma Sosial",
    content: "Norma sosial adalah patokan perilaku manusia dalam kehidupan bermasyarakat. Fungsinya adalah untuk memberi batasan berupa perintah atau larangan dalam berperilaku, memaksa individu untuk menyesuaikan diri dengan nilai yang berlaku di masyarakat dan menjaga solidaritas antaranggota masyarakat. Oleh karena fungsi-fungsi tersebut, maka sosialisasi norma memiliki peran yang penting dalam mewujudkan ketertiban sosial.",
    imageSrc: "/norma-sosial/penjelasan.jpg", // Placeholder image
    imageAlt: "Ilustrasi Pengertian Norma Sosial",
    layout: "image-right",
    textColSpan: 3,
    imageColSpan: 2,
  },
  {
    title: "Jenis Norma Berdasarkan Tingkat Daya Ikatnya",
    content: [
      {
        subtitle: "Usage",
        description: "Merupakan suatu bentuk perbuatan atau cara melakukan sesuatu. Norma ini memiliki sanksi yang lemah. Artinya, jika melanggar tidak apa-apa, palingan hanya mendapatkan celaan dari masyarakat.",
      },
      {
        subtitle: "Folkways",
        description: "Folkways merupakan norma yang berasal dari dan mengatur interaksi kasual dan muncul dari pengulangan dan rutinitas. Folkways disebut juga sebagai norma kebiasaan. Sebagai contoh, menghormati orang yang lebih tua dengan cara cium tangan ketika bertemu.",
      },
      {
        subtitle: "Mores",
        description: "Dalam sosiologi disebut sebagai tata kelakuan atau kesusilaan. Tata kelakukan adalah kebiasaan masyarakat yang telah menjadi norma pengatur. Sebagai contoh, kita memanggil orang tua dengan sebutan ibu atau bapak, tidak langsung namanya.",
      },
      {
        subtitle: "Custom",
        description: "Custom diidentikkan dengan adat-istiadat. Norma sosial ini memiliki ikatan paling kuat dibanding empat norma sebelumnya. Anggota masyarakat yang melanggar adat akan mendapat sanksi keras. Sebagai contoh, nembung (melamar) sebagai salah satu adat dari perkawinan di suatu desa.",
      },
    ],
    imageSrc: "/norma-sosial/norma-1.png", // Placeholder image
    imageAlt: "Ilustrasi Jenis Norma Berdasarkan Daya Ikat",
    layout: "image-left",
    textColSpan: 3,
    imageColSpan: 2,
  },
  {
    title: "Jenis-jenis Norma Sosial Berdasarkan Aspek dalam Masyarakat",
    content: [
      {
        subtitle: "Norma Agama",
        description: "Merupakan norma yang berfungsi sebagai petunjuk dan pegangan hidup bagi umat manusia yang berasal dari Tuhan yang berisikan perintah dan larangan.",
      },
      {
        subtitle: "Norma Hukum",
        description: "Adalah suatu rangkaian aturan yang ditunjukkan kepada anggota masyarakat yang berisi ketentuan, perintah, kewajiban, dan larangan, agar dalam masyarakat tercipta suatu ketertiban dan keadilan yang biasanya dibuat oleh lembaga tertentu.",
      },
      {
        subtitle: "Norma Kesusilaan",
        description: "Adalah peraturan sosial yang berasal dari hati nurani yang menghasilkan akhlak sehingga seseorang dapat membedakan apa yang dianggap baik dan apa yang dianggap buruk",
      },
      {
        subtitle: "Norma Kesopanan",
        description: "Adalah petunjuk hidup yang mengatur bagaimana seseorang harus bertingkah laku dalam masyarakat. Sebagai contoh: meludah di depan orang, menyerobot antrean, membuang sampah sembarangan, dan lainlain.",
      },
      {
        subtitle: "Norma Kebiasaan",
        description: "Adalah sekumpulan peraturan yang dibuat bersama secara sadar atau tidak menjadi sebuah kebiasaan. Sebagai contoh: menengok teman yang sakit, melayat, menghadiri undangan pernikahan, dan lain-lain.",
      },
    ],
    imageSrc: "/norma-sosial/norma-2.png", // Placeholder image
    imageAlt: "Ilustrasi Jenis Norma Berdasarkan Aspek",
    layout: "image-right",
    textColSpan: 3,
    imageColSpan: 2,
  },
]

export default function NormaPage() {
  const [activeTab, setActiveTab] = useState("penjelasan")

  const tabs = [
    { id: "penjelasan", label: "Penjelasan" },
    { id: "infografis", label: "Infografis" },
    { id: "video", label: "Video" },
  ]

  return (
    <div className="bg-linear-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "var(--primary-100)" }}>
          Memahami Norma Sosial
        </h1>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b" style={{ borderColor: "var(--bg-300)" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-3 font-semibold transition-colors border-b-2"
              style={{
                color: activeTab === tab.id ? "var(--primary-100)" : "var(--text-200)",
                borderColor: activeTab === tab.id ? "var(--primary-100)" : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Penjelasan Tab */}
          {activeTab === "penjelasan" && (
            <div className="space-y-8">
              {normaPenjelasanData.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: "var(--text-100)" }}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start text-justify">
                      <div className={`md:col-span-${item.textColSpan} ${item.layout === 'image-left' ? 'md:order-last' : ''}`} style={{ color: "var(--text-200)" }}>
                        {Array.isArray(item.content) ? (
                          <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            {item.content.map((point, i) => (
                              <li key={i}>
                                <span className="font-semibold">{point.subtitle}:</span> {point.description}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{item.content}</p>
                        )}
                      </div>
                      <div className={`md:col-span-${item.imageColSpan}`}>
                        <a href={item.imageSrc} target="_blank" rel="noopener noreferrer" className="block group">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Infografis Tab */}
          {activeTab === "infografis" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary-100)" }}>
                  Infografis Norma Sosial
                </h2>
                <p className="text-base" style={{ color: "var(--text-200)" }}>
                  Visualisasi lengkap tentang norma sosial
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Infographic 1 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: "var(--bg-200)" }}>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-center" style={{ color: "var(--primary-100)" }}>
                      Definisi dan Jenis Norma Berdasarkan Tingkat Daya Ikatnya
                    </h3>

                    {/* Image Container */}
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ backgroundColor: "white" }}>
                      <img
                        src="/norma-sosial/norma-3.png"
                        alt="Infografis Definisi dan Fungsi Norma Sosial"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "900px" }}
                      />
                    </div>

                    <p className="mt-4 text-sm text-center leading-relaxed" style={{ color: "var(--text-200)" }}>
                      Visualisasi pengertian dan tingkatan norma sosial berdasarkan kekuatan daya ikatnya dalam masyarakat
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300" style={{ border: "1px solid var(--bg-300)" }} />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ border: "2px solid var(--primary-100)" }} />
                </div>

                {/* Infographic 2 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: "var(--bg-200)" }}>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-center" style={{ color: "var(--primary-100)" }}>
                      Jenis-jenis Norma Sosial Berdasarkan Aspek dalam Masyarakat
                    </h3>

                    {/* Image Container */}
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ backgroundColor: "white" }}>
                      <img
                        src="/norma-sosial/norma-4.png"
                        alt="Infografis Jenis-Jenis Norma Sosial"
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: "900px" }}
                      />
                    </div>

                    <p className="mt-4 text-sm text-center leading-relaxed" style={{ color: "var(--text-200)" }}>
                      Diagram dan penjelasan detail tentang berbagai jenis norma sosial berdasarkan aspeknya
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300" style={{ border: "1px solid var(--bg-300)" }} />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ border: "2px solid var(--primary-100)" }} />
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: "var(--bg-200)" }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--accent-100)" }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: "var(--primary-100)" }}>
                      Informasi
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-200)" }}>
                      Infografis di atas menampilkan informasi lengkap tentang norma sosial dalam format visual yang mudah dipahami. Anda dapat memperbesar halaman browser untuk melihat detail lebih jelas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Tab */}
          {activeTab === "video" && (
            <div className="p-4 rounded-lg" style={{ backgroundColor: "var(--bg-200)" }}>
              <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: "var(--text-100)" }}>
                Video: Pengenalan Norma Sosial
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/trbKUgyZuEI?si=V21XIE9eg1afkotb"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                </div>
              </div>
              <p className="mt-4 text-sm text-center" style={{ color: "var(--text-200)" }}>
                Penjelasan komprehensif tentang pengertian, jenis, dan fungsi norma sosial.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

