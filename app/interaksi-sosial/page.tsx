import Image from "next/image"

export default function InteraksiSosialPage() {
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

  return (
    <div className="bg-linear-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section 1: Definition */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg" style={{ backgroundColor: "var(--bg-200)" }}>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
                Apa itu Interaksi Sosial?
              </h1>
              <p className="text-lg mb-2 leading-relaxed text-justify" style={{ color: "var(--text-200)" }}>
                Interaksi sosial adalah konsep inti dalam sosiologi, yang didefinisikan sebagai suatu proses timbal balik (mutualistik) di mana satu individu atau kelompok mempengaruhi tingkah laku individu atau kelompok lain. Agar bisa disebut sebagai interaksi, proses ini harus memiliki maksud atau tujuan tertentu, serta memerlukan dua syarat utama: adanya kontak dan komunikasi. Kontak tidak harus selalu berarti sentuhan fisik; bisa juga berupa kontak mata atau saling memandang. Sementara itu, komunikasi adalah proses penyampaian pesan yang bisa terjadi secara verbal (lisan) maupun non-verbal (melalui gerak tubuh atau gestur).
              </p>
              <p className="text-lg my-2 leading-relaxed text-justify" style={{ color: "var(--text-200)" }}>
                Setiap interaksi yang terjadi pasti akan membawa dampak terhadap perilaku orang lain, yang sekaligus menunjukkan kelebihan (manfaat) dari berinteraksi. Secara mendasar, interaksi sosial sangat penting untuk meningkatkan kesejahteraan emosional seseorang, membuat kita merasa terhubung dan didukung. Proses ini juga menjadi cara utama untuk memfasilitasi pertukaran informasi dan pengalaman, yang membantu kita belajar dan memahami dunia. Pada akhirnya, interaksi yang rutin akan memperkuat hubungan sosial (seperti ikatan keluarga dan pertemanan) serta memainkan peran krusial dalam pembentukan identitas, baik identitas individu maupun identitas kelompok.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img
                src="/intraksi-sosial/poster.jpg" // Replace with actual image for definition section
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
              <div key={form.id} className="p-8 rounded-lg text-center" style={{ backgroundColor: "var(--bg-200)" }}>
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

        {/* Section 3: Video Analysis */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary-100)" }}>
            Analisis Video
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ushsEHIzvTY?modestbranding=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-center" style={{ color: "var(--text-200)" }}>
              Saksikan contoh-contoh nyata berbagai bentuk interaksi sosial dan pahami dinamikanya dalam konteks
              masyarakat modern.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
