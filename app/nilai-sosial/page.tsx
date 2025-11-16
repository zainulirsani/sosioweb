"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Data yang sudah dibersihkan dan diorganisir dari konten sebelumnya
const penjelasanData = [
  {
    title: "Definisi Nilai Sosial",
    content: "Nilai sosial merupakan seperangkat ukuran, patokan, atau prinsip yang dijadikan pedoman oleh masyarakat dalam menilai tindakan, perilaku, serta sikap individu maupun kelompok. Nilai ini lahir dari pengalaman bersama, tradisi yang diwariskan, serta keyakinan-keyakinan yang telah berkembang dan dibenarkan oleh masyarakat secara turun-temurun. Melalui nilai sosial, masyarakat dapat membedakan mana tindakan yang dianggap benar atau salah, pantas atau tidak pantas, baik atau buruk, serta luhur atau tercela. Nilai sosial berfungsi sebagai kompas moral yang mengarahkan cara berpikir, bertindak, dan berinteraksi antaranggota masyarakat. Nilai ini tidak bersifat statis, tetapi terus berkembang sesuai perubahan budaya, lingkungan, dan kebutuhan sosial. Dengan demikian, nilai sosial bukan hanya menjadi dasar dalam menjaga ketertiban dan keharmonisan, tetapi juga menjadi landasan dalam pembentukan karakter, identitas, serta integritas sosial suatu komunitas.",
    imageSrc: "/nilai-sosial/definisi.jpg",
    imageAlt: "Ilustrasi Konsep Nilai Sosial",
    layout: "image-right",
  },
  {
    title: "Ciri-ciri Nilai Sosial",
    content: [
      "Nilai merupakan sesuatu yang abstrak, yang ada dalam pikiran atau perasaan manusia.",
      "Nilai tidak dibawa sejak lahir melainkan dipelajari manusia.",
      "Nilai merupakan ciptaan masyarakat yang tercipta melalui interaksi warga masyarakat.",
      "Nilai sosial dapat diteruskan atau dipindahkan diantara individu, satu kelompok ke kelompok lain maupun satu masyarakat ke masyarakat lain.",
      "Sistem nilai dapat berbeda-beda antara satu individu dengan individu lain, antara satu masyarakat dengan masyarakat lain.",
      "Tiap nilai dapat memberikan pengaruh berbeda terhadap individu maupun masyarakat secara keseluruhan.",
    ],
    imageSrc: "/nilai-sosial/ciri-ciri.png",
    imageAlt: "Ilustrasi Ciri-ciri Nilai Sosial",
    layout: "image-left",
  },
  {
    title: "Fungsi Nilai Sosial",
    content: "Nilai sosial memegang peranan sentral dalam dinamika masyarakat, salah satunya sebagai pengatur hubungan sosial yang fundamental. Dengan menyediakan standar bersama tentang apa yang dianggap baik, benar, dan penting, nilai bertindak sebagai pedoman yang mengarahkan individu dalam berinteraksi, sehingga mengurangi potensi konflik dan menciptakan keteraturan sosial. Ketika nilai-nilai ini—seperti gotong royong atau kejujuran—dianut dan dipraktikkan secara kolektif, nilai secara otomatis bertransformasi menjadi pembentuk solidaritas yang kuat, menumbuhkan rasa kebersamaan, identitas kelompok, dan ikatan emosional di antara anggota masyarakat. Namun, nilai tidaklah kaku; seiring berjalannya waktu, pergeseran kesadaran atau munculnya gagasan baru dapat membuat nilai-nilai lama dipertanyakan dan nilai baru diadopsi, menjadikannya sebagai pendorong perubahan sosial yang dinamis, yang mampu mengarahkan masyarakat menuju tatanan atau cara hidup yang baru.",
    imageSrc: "/nilai-sosial/fungsi.jpg",
    imageAlt: "Ilustrasi Fungsi Nilai Sosial",
    layout: "image-right",
  },
  {
    title: "Klasifikasi Nilai Sosial",
    content: "Nilai sosial merupakan sebuah konsep abstrak namun fundamental, yang berwujud keyakinan, prinsip, atau standar yang secara kolektif dianggap penting, berharga, dan benar oleh suatu masyarakat. Nilai-nilai ini tidak hanya ada, tetapi berfungsi secara aktif sebagai pedoman atau kompas moral yang memengaruhi cara individu berpikir, merasakan, berperilaku, berinteraksi dengan orang lain, dan pada akhirnya, membuat keputusan dalam kehidupan sehari-hari. Untuk dapat menganalisis dan memahami kompleksitas kehidupan sosial serta bagaimana nilai-nilai tersebut secara konkret memengaruhi tatanan masyarakat, para sosiolog mengklasifikasikan nilai sosial. Secara umum, klasifikasi ini dapat dibagi menjadi dua kategori utama. Pertama, adalah klasifikasi berdasarkan jenisnya, yang merupakan pembagian nilai dari sudut pandang kepentingan atau pemenuhan kebutuhan manusia; klasifikasi ini membedah nilai berdasarkan substansinya, misalnya membedakan antara nilai yang berfokus pada pemenuhan kebutuhan kebendaan (material), nilai yang esensial untuk aktivitas hidup (vital), dan nilai yang menyangkut kebutuhan batin (rohani). Kedua, adalah klasifikasi berdasarkan ciri-cirinya, yang lebih berfokus pada bagaimana nilai tersebut dianut, diinternalisasi, dan diterapkan dalam praktik sosial di masyarakat, di mana pembagian ini melihat pada intensitas atau kedalaman nilai tersebut dipegang (seperti nilai yang mendarah daging) serta seberapa luas cakupan penerapannya (seperti nilai yang dominan).",
    imageSrc: "/nilai-sosial/klasifikasi.png",
    imageAlt: "Ilustrasi Klasifikasi Nilai Sosial",
    layout: "image-left",
  },
  {
    title: "Jenis-Jenis Nilai Sosial",
    content: "Nilai sosial dapat diklasifikasikan berdasarkan jenisnya menjadi tiga kategori utama. Pertama adalah Nilai Material, yaitu nilai yang berfokus pada pemenuhan kebutuhan fisik dan kebendaan, seperti kepemilikan rumah, kendaraan, atau pakaian, yang penting untuk memenuhi kebutuhan dasar dan rasa nyaman. Kedua adalah Nilai Vital, yang mencakup segala sesuatu yang esensial bagi individu agar dapat berfungsi secara efektif dalam masyarakat, contohnya kesehatan fisik dan mental, pendidikan, keterampilan, dan akses ke pekerjaan yang layak. Ketiga, Nilai Rohani, yang merupakan nilai-nilai yang berkaitan dengan kebutuhan batin dan spiritual manusia, seperti keyakinan agama, moralitas, keindahan (estetika), dan pencarian makna hidup.",
    imageSrc: "/nilai-sosial/jenis.jpg",
    imageAlt: "Ilustrasi Jenis-Jenis Nilai Sosial",
    layout: "image-right",
  },
  {
    title: "Sumber Nilai Sosial",
    content: "Nilai sosial bersumber dari tiga ranah utama yang saling berkaitan. Pertama, nilai bersumber dari Tuhan (Teonomis), yang bersifat absolut, sakral, dan diturunkan melalui wahyu atau kitab suci, seperti nilai keadilan atau kejujuran. Kedua, nilai bersumber dari Masyarakat (Sosiologis), yang merupakan konstruksi sosial hasil kesepakatan bersama, bersifat relatif tergantung konteks budaya, dan dipelajari melalui sosialisasi, contohnya adat gotong royong atau sopan santun. Ketiga, nilai dapat bersumber dari Manusia (Individual/Humanistis), di mana individu menggunakan akal budi dan hati nuraninya untuk menentukan apa yang baik bagi dirinya secara subjektif dan otonom, seperti pilihan etis pribadi atau nilai integritas.",
    imageSrc: "/nilai-sosial/sumber.jpg",
    imageAlt: "Ilustrasi Jenis-Jenis Nilai Sosial",
    layout: "image-left",
  },
];

export default function NilaiSosialPage() {
  const [activeTab, setActiveTab] = useState("penjelasan")

  const tabs = [
    { id: "penjelasan", label: "Penjelasan" },
    { id: "video", label: "Video" },
  ]

  return (
    <div style={{ backgroundColor: "var(--bg-100)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "var(--primary-100)" }}>
          Nilai Sosial
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
              {penjelasanData.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: "var(--text-100)" }}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start text-justify">
                      <div className={`md:col-span-3 ${item.layout === 'image-left' ? 'md:order-last' : ''}`} style={{ color: "var(--text-200)" }}>
                        {Array.isArray(item.content) ? (
                          <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            {item.content.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{item.content}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
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

          {/* Video Tab */}
          {activeTab === "video" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-100)" }}>
                Studi Kasus Video: Contoh Nilai Sosial dalam Masyarakat
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/W4oYGYxbeHs?si=_FfwKtsPxjWAeMhh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="mt-4 max-w-4xl mx-auto" style={{ color: "var(--text-200)" }}>
                Analisis mendalam tentang contoh-contoh nyata nilai sosial dan dampaknya terhadap struktur sosial.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
