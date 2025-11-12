"use client"

import { useState } from "react"

export default function DeviasiPage() {
  const [activeTab, setActiveTab] = useState("penjelasan")

  const tabs = [
    { id: "penjelasan", label: "Penjelasan" },
    { id: "infografis", label: "Infografis" },
    { id: "video", label: "Studi Kasus Video" },
  ]

  return (
    <div style={{ backgroundColor: "var(--bg-100)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--primary-100)" }}>
          Deviasi Sosial
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
            <div className="space-y-6" style={{ color: "var(--text-200)" }}>
              <p>
                Deviasi sosial mengacu pada perilaku yang menyimpang dari norma-norma sosial yang diterima dalam
                masyarakat. Ini bukan selalu merupakan hal yang negatif atau berbahaya; deviasi dapat mencakup perilaku
                yang dipandang secara positif (seperti inovasi dan kepemimpinan) atau negatif (seperti kejahatan dan
                kekerasan).
              </p>

              <p>
                Penting untuk memahami bahwa apa yang dianggap deviasi bergantung pada konteks budaya dan waktu.
                Perilaku yang dianggap deviasi di satu budaya atau periode waktu mungkin diterima atau bahkan didorong
                di tempat lain. Dengan demikian, deviasi adalah konsep sosial yang relatif, bukan absolut.
              </p>

              <p>
                Teori-teori sosiologis yang berbeda menawarkan penjelasan tentang penyebab deviasi. Strain Theory
                menyarankan bahwa deviasi terjadi ketika ada ketegangan antara tujuan budaya dan sarana yang tersedia
                untuk mencapainya. Labeling Theory menunjukkan bahwa deviasi diproduksi melalui proses di mana
                masyarakat membuat aturan dan menerapkan label kepada mereka yang melanggar aturan tersebut.
              </p>

              <p>
                Control Theory berpendapat bahwa deviasi adalah hasil dari ikatan sosial yang lemah. Ketika individu
                memiliki koneksi yang kuat dengan masyarakat, mereka kurang cenderung melakukan penyimpangan.
                Sebaliknya, individu dengan ikatan sosial yang lemah memiliki lebih sedikit alasan untuk mematuhi
                norma-norma sosial.
              </p>

              <p>
                Pemahaman tentang deviasi sosial sangat penting bagi sosiologi karena membantu kita memahami bagaimana
                norma-norma dipertahankan dan bagaimana perubahan sosial terjadi. Mempelajari penyimpangan juga
                memberikan wawasan tentang proses sosialisasi dan kontrol sosial dalam masyarakat.
              </p>
            </div>
          )}

          {/* Infografis Tab */}
          {activeTab === "infografis" && (
            <div
              className="p-16 rounded-lg flex items-center justify-center text-center"
              style={{ backgroundColor: "var(--bg-200)", minHeight: "500px" }}
            >
              <div>
                <div className="text-7xl mb-6" style={{ color: "var(--primary-100)" }}>
                  📈
                </div>
                <p className="text-2xl font-semibold" style={{ color: "var(--text-100)" }}>
                  Infografis: Teori-Teori Deviasi Sosial
                </p>
                <p className="mt-4" style={{ color: "var(--text-200)" }}>
                  Visualisasi berbagai perspektif teoritis tentang penyebab dan jenis-jenis deviasi sosial
                </p>
              </div>
            </div>
          )}

          {/* Video Tab */}
          {activeTab === "video" && (
            <div
              className="p-16 rounded-lg flex items-center justify-center text-center"
              style={{ backgroundColor: "var(--bg-200)", minHeight: "500px" }}
            >
              <div>
                <div className="text-7xl mb-6" style={{ color: "var(--accent-100)" }}>
                  🎬
                </div>
                <p className="text-2xl font-semibold" style={{ color: "var(--text-100)" }}>
                  Studi Kasus Video: Contoh Deviasi dalam Masyarakat
                </p>
                <p className="mt-4" style={{ color: "var(--text-200)" }}>
                  Analisis mendalam tentang contoh-contoh nyata deviasi sosial dan dampaknya terhadap struktur sosial
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
