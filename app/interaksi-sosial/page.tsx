export default function InteraksiSosialPage() {
  const interactionForms = [
    {
      id: 1,
      title: "Kerjasama",
      description: "Bentuk interaksi di mana individu bekerja bersama menuju tujuan bersama",
      icon: "🤝",
    },
    {
      id: 2,
      title: "Konflik",
      description: "Perbedaan kepentingan yang mengarah pada pertentangan antar pihak",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Kompetisi",
      description: "Perjuangan untuk mendapatkan sumber daya atau prestise yang terbatas",
      icon: "🏆",
    },
    {
      id: 4,
      title: "Akomodasi",
      description: "Usaha untuk mengurangi ketegangan dan mencapai keseimbangan",
      icon: "⚖️",
    },
  ]

  return (
    <div className="bg-linear-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section 1: Definition */}
        <section className="mb-16">
          <div className="p-8 rounded-lg" style={{ backgroundColor: "var(--bg-200)" }}>
            <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--primary-100)" }}>
              Apa itu Interaksi Sosial?
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-200)" }}>
              Interaksi sosial adalah hubungan sosial yang dinamis yang melibatkan hubungan antar individu, antar
              kelompok, atau antara individu dan kelompok. Interaksi sosial adalah dasar dari semua aktivitas sosial dan
              membentuk fondasi struktur sosial. Melalui interaksi, individu saling berkomunikasi, berbagi pengalaman,
              dan secara bersama-sama menciptakan makna sosial.
            </p>
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
                <div className="text-5xl mb-4">{form.icon}</div>
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
