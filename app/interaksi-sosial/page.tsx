"use client"

import Image from "next/image"
import { useState } from "react"

export default function InteraksiSosialPage() {
  const [selectedVideo, setSelectedVideo] = useState(0)

  const interactionForms = [
    {
      id: 1,
      title: "Kerjasama",
      description: "Bentuk interaksi di mana individu bekerja bersama menuju tujuan bersama",
      image: "/intraksi-sosial/kerjasama.jpg",
    },
    {
      id: 2,
      title: "Konflik",
      description: "Perbedaan kepentingan yang mengarah pada pertentangan antar pihak",
      image: "/intraksi-sosial/konflik.jpg",
    },
    {
      id: 3,
      title: "Kompetisi",
      description: "Perjuangan untuk mendapatkan sumber daya atau prestise yang terbatas",
      image: "/intraksi-sosial/kompetisi.jpg",
    },
    {
      id: 4,
      title: "Akomodasi",
      description: "Usaha untuk mengurangi ketegangan dan mencapai keseimbangan",
      image: "/intraksi-sosial/akomodasi.jpg",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "MATERI INTAKSI SOSIAL KELAS 10 PEMEBELAJARAN INOVATIV BERBASIS VIDEO GRAFIS",
      videoId: "LwzFAfTkisc",
      thumbnail: `https://img.youtube.com/vi/LwzFAfTkisc/maxresdefault.jpg`,
      duration: "3:15",
      description: "Video pembelajaran interaksi sosial yang interaktif dan mudah dipahami",
    },
    {
      id: 2,
      title: "MATERI INTRAKSI SOSIAL KELAS 10 PART 2",
      videoId: "5QR7_9s7Q94",
      thumbnail: `https://img.youtube.com/vi/5QR7_9s7Q94/maxresdefault.jpg`,
      duration: "2:37",
      description: "Penjelasan komprehensif tentang interaksi sosial dalam masyarakat",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "var(--bg-100)" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--accent-100)" }}
        />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--primary-100)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Section 1: Definition */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "var(--bg-200)" }}>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
                Apa itu Interaksi Sosial?
              </h1>
              <p className="text-lg mb-2 leading-relaxed text-justify" style={{ color: "var(--text-200)" }}>
                Interaksi sosial adalah konsep inti dalam sosiologi, yang didefinisikan sebagai suatu proses timbal balik (mutualistik) di mana satu individu atau kelompok mempengaruhi tingkah laku individu atau kelompok lain. Agar bisa disebut sebagai interaksi, proses ini harus memiliki maksud atau tujuan tertentu, serta memerlukan dua syarat utama: adanya kontak dan komunikasi. Kontak tidak harus selalu berarti sentuhan fisik; bisa juga berupa kontak mata atau saling memandang. Sementara itu, komunikasi adalah proses penyampaian pesan yang bisa terjadi secara verbal (lisan) maupun non-verbal (melalui gerak tubuh atau gestur).
              </p>
              <p className="text-lg my-2 leading-relaxed text-justify" style={{ color: "var(--text-200)" }}>
                Setiap interaksi yang terjadi pasti akan membawa dampak terhadap perilaku orang lain, yang sekaligus menunjukkan kelebihan (manfaat) dari berinteraksi. Secara mendasar, interaksi sosial sangat penting untuk meningkatkan kesejahteraan emosional seseorang, membuat kita merasa terhubung dan didukung. Proses ini juga menjadi cara utama untuk memfasilitasi pertukaran informasi dan pengalaman, yang membantu kita belajar dan memahami dunia. Pada akhirnya, interaksi yang rutin akan memperkuat hubungan sosial (seperti ikatan keluarga dan pertemanan) serta memainkan peran krusial dalam pembentukan identitas, baik identitas individu maupun identitas kelompok.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img
                src="/intraksi-sosial/poster.jpg"
                alt="Ilustrasi Interaksi Sosial"
                style={{ width: '400px', height: '600px' }}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Forms of Interaction Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary-100)" }}>
            Bentuk-Bentuk Interaksi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interactionForms.map((form) => (
              <div key={form.id} className="p-8 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--bg-200)" }}>
                <Image
                  src={form.image}
                  alt={form.title}
                  width={96}
                  height={96}
                  className="object-contain mx-auto mb-4 shadow-md rounded-lg"
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--primary-100)" }}>
                  {form.title}
                </h3>
                <p style={{ color: "var(--text-200)" }}>{form.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Video Selector */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--primary-100)" }}>
              Pilih Video Pembelajaran
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-200)" }}>
              Klik pada video di bawah ini untuk menontonnya
            </p>
          </div>

          {/* Main Video Player */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: "var(--bg-200)" }}>
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  key={videos[selectedVideo].videoId}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[selectedVideo].videoId}?autoplay=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--primary-100)" }}>
                  {videos[selectedVideo].title}
                </h3>
                <p className="text-base" style={{ color: "var(--text-200)" }}>
                  {videos[selectedVideo].description}
                </p>
              </div>
            </div>
          </div>

          {/* Video Selection Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "var(--primary-100)" }}>
              Video Lainnya
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(index)}
                  className="group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--bg-200)",
                    border: selectedVideo === index
                      ? "4px solid var(--accent-100)"
                      : "1px solid var(--bg-300)",
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "var(--accent-100)" }}>
                        <svg className="w-6 h-6 ml-1" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-bold bg-black bg-opacity-75 text-white">
                      {video.duration}
                    </div>

                    {/* Active Indicator */}
                    {selectedVideo === index && (
                      <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{ backgroundColor: "var(--accent-100)", color: "white" }}>
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Sedang Diputar
                      </div>
                    )}
                  </div>

                  {/* Video Title */}
                  <div className="p-3 text-left">
                    <h4 className={`text-sm font-semibold line-clamp-2 transition-colors duration-300 ${selectedVideo === index ? 'text-[var(--accent-100)]' : 'text-[var(--primary-100)]'}`}>
                      {video.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
