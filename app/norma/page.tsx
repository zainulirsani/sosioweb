export default function NormaPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-100)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 70% width */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
              Memahami Norma Sosial
            </h1>

            <div className="space-y-6" style={{ color: "var(--text-200)" }}>
              <p>
                Norma sosial adalah aturan perilaku yang diterima secara luas oleh masyarakat. Norma ini memandu anggota
                masyarakat tentang apa yang dianggap sebagai perilaku yang sesuai atau tidak sesuai dalam berbagai
                situasi sosial. Norma-norma ini berkembang dari nilai-nilai budaya dan menjadi bagian integral dari
                struktur sosial.
              </p>

              <p>
                Terdapat beberapa jenis norma sosial yang berbeda. Folkway adalah norma-norma yang kurang ketat tentang
                cara kita berinteraksi dengan orang lain, seperti cara berpakaian atau etika makan. Mores adalah
                norma-norma yang lebih serius terkait dengan moralitas dan nilai inti masyarakat. Taboos adalah larangan
                yang sangat ketat terhadap perilaku tertentu yang dianggap sangat tidak pantas.
              </p>

              <p>
                Norma sosial berfungsi untuk mempertahankan ketertiban sosial, memfasilitasi interaksi yang lancar, dan
                memperkuat nilai-nilai budaya. Ketika individu mematuhi norma-norma ini, masyarakat dapat berfungsi
                dengan lebih harmonis dan efisien. Namun, norma juga dapat berubah seiring waktu ketika masyarakat
                berkembang dan nilai-nilainya bertransformasi.
              </p>

              <p>
                Sosialisasi adalah proses melalui mana individu belajar norma-norma sosial. Keluarga, sekolah, kelompok
                teman sebaya, dan media massa semua berkontribusi pada proses sosialisasi ini. Melalui pengamatan dan
                interaksi, individu menginternalisasi norma-norma ini dan membuat mereka bagian dari perilaku mereka
                yang normal.
              </p>

              <p>
                Penting untuk dicatat bahwa norma-norma sosial bukanlah universal. Apa yang dianggap sebagai perilaku
                yang tepat dalam satu budaya mungkin dianggap tidak tepat dalam budaya lain. Pemahaman tentang
                norma-norma lokal adalah kunci untuk navigasi sosial yang sukses dalam berbagai konteks budaya.
              </p>
            </div>
          </div>

          {/* Sidebar - 30% width */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {/* Infographic Placeholder */}
              <div
                className="mb-8 p-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-200)", minHeight: "400px" }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4" style={{ color: "var(--primary-100)" }}>
                    📊
                  </div>
                  <p style={{ color: "var(--text-200)" }} className="font-semibold">
                    Infografis: Jenis-Jenis Norma Sosial
                  </p>
                </div>
              </div>

              {/* Video Placeholder */}
              <div
                className="p-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-200)", minHeight: "250px" }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4" style={{ color: "var(--accent-100)" }}>
                    ▶️
                  </div>
                  <p style={{ color: "var(--text-200)" }} className="font-semibold">
                    Video: Pengenalan Norma Sosial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
