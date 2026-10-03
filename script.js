/**
 * PRUDENTIAL BSN TAKAFUL — AGENT PORTAL
 * Perunding Sah: NUR EZZATI BINTI MOHAMMAD SALLEH (014-509 0150)
 * Prudential BSN Takaful
 * Premium Front-End Architecture with Zero Logic Loss.
 */

const NO_WHATSAPP = "60145090150";

// ==========================================
// 1. DATA LENGKAP PELAN TAKAFUL (PRUBSN RASMI)
// ==========================================
const dataPelan = {
  hibah: [
    {
      id: "anugerah-max",
      nama: "Anugerah Max (Hibah Takaful)",
      tags: ["Hibah Takaful / Income Replacement", "Pelan Bajet"],
      kenapa: "Sangat sesuai untuk pasangan muda yang baru mendirikan rumah tangga serta ibu bapa yang mahukan perlindungan kewangan menyeluruh dengan komitmen caruman bulanan yang paling ekonomi.",
      quotePreview: {
        contributionRows: [
          { umur: "18 – 25", caruman: "RM50 – RM60 / bulan" },
          { umur: "26 – 35", caruman: "RM61 – RM75 / bulan" },
          { umur: "36 – 45", caruman: "RM76 – RM85 / bulan" },
          { umur: "46 – 60", caruman: "RM86 – RM100 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Pampasan Kematian & TPD 100% melalui konsep Hibah Takaful" },
          { icon: "✓", label: "Manfaat Kematian Akibat Kemalangan" },
          { icon: "✓", label: "Nilai Tunai terkumpul" },
          { icon: "✓", label: "Lebih 10 pilihan rider tambahan" },
          { icon: "✓", label: "Hibah terus kepada penama" }
        ]
      },
      manfaat: [
        "Pampasan Kematian & TPD 100%",
        "Manfaat Kematian akibat Kemalangan",
        "Nilai Tunai (Cash Value)",
        "Lebih 10 pilihan rider tambahan"
      ]
    },
    {
      id: "warisan-gold",
      nama: "Warisan Gold",
      tags: ["Hibah Takaful / Income Replacement", "Family Protection"],
      kenapa: "Membantu menyediakan dana tunai segera kepada waris untuk meneruskan kehidupan, melunaskan hutang dan melindungi kewangan keluarga.",
      quotePreview: {
        contributionRows: [
          { umur: "18 – 25", caruman: "RM100 / bulan" },
          { umur: "26 – 35", caruman: "RM110 / bulan" },
          { umur: "36 – 45", caruman: "RM120 / bulan" },
          { umur: "46 – 60", caruman: "RM140 / bulan" }
        ],
        benefitTitle: "Contoh Manfaat Perlindungan",
        benefitRows: [
          { icon: "💗", label: "Kematian / TPD", amount: "RM350,000" },
          { icon: "🚑", label: "Kematian Akibat Kemalangan", amount: "RM700,000" },
          { icon: "🚌", label: "Kemalangan Pengangkutan Awam", amount: "RM1,050,000" },
          { icon: "✈️", label: "Kemalangan Di Luar Negara", amount: "RM1,400,000" },
          { icon: "🌊", label: "Kematian Akibat Bencana Alam", amount: "RM2,100,000" }
        ]
      },
      manfaat: [
        "Pampasan Kematian & TPD 100%",
        "Manfaat Gandaan Kemalangan sehingga 600%",
        "Khairat Kematian & Badal Haji RM6,000",
        "Pampasan Penyakit Kritikal"
      ]
    },
    {
      id: "warisan-gold-legacy",
      nama: "Warisan Gold Legacy",
      tags: ["Legacy Planning", "Business Owner"],
      kenapa: "Membantu membina legasi kewangan keluarga melalui hibah bernilai tinggi serta simpanan jangka panjang dengan tempoh bayaran terhad.",
      quotePreview: {
        contributionTitle: "Anggaran Caruman Tahunan",
        contributionRows: [
          { umur: "5 Tahun", caruman: "RM50,000 – RM180,000 setahun" },
          { umur: "10 Tahun", caruman: "RM25,000 – RM100,000 setahun" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Pampasan Kematian & TPD 100%" },
          { icon: "✓", label: "Manfaat Gandaan Kemalangan sehingga 600%" },
          { icon: "✓", label: "Sejuta Kasih Hibah untuk keluarga" },
          { icon: "✓", label: "Nilai tunai & simpanan terkumpul" },
          { icon: "✓", label: "Rider Penyakit Kritikal" },
          { icon: "✓", label: "Hibah terus kepada penama" }
        ],
        suitabilityTitle: "Sesuai Untuk",
        suitabilityRows: [
          "Pemilik perniagaan",
          "Golongan profesional",
          "Individu berpendapatan tinggi",
          "Mereka yang ingin membina legasi keluarga"
        ]
      },
      manfaat: [
        "Hibah bernilai tinggi untuk keluarga",
        "Tempoh bayaran terhad",
        "Nilai tunai & simpanan terkumpul",
        "Rider Penyakit Kritikal"
      ]
    }
  ],
  medical: [
    {
      id: "anugerah-max-rb150",
      nama: "Anugerah Max – Medical Card Plan R&B 150",
      tags: ["Medical Card", "Budget Friendly"],
      kenapa: "Pelan bajet yang memberikan perlindungan asas medical card dengan had tahunan untuk memenuhi kebanyakan keperluan hospitalisasi di Malaysia.",
      quotePreview: {
        contributionRows: [
          { umur: "Kanak-kanak", caruman: "Serendah RM90 / bulan" },
          { umur: "Dewasa", caruman: "Serendah RM113 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Had Tahunan RM150,000" },
          { icon: "✓", label: "Protect Well (In-Patient)" },
          { icon: "✓", label: "Pre & Post Hospitalisation (120 hari sebelum & selepas)" },
          { icon: "✓", label: "Nilai Tunai (Cash Value)" },
          { icon: "✓", label: "Hibah Asas RM10,000" },
          { icon: "✓", label: "10+ Rider Tambahan" }
        ]
      },
      manfaat: [
        "Had Tahunan RM150,000",
        "Protect Well (In-Patient)",
        "Pre & Post Hospitalisation",
        "Hibah Asas RM10,000"
      ]
    },
    {
      id: "anugerah-max-rb200",
      nama: "Anugerah Max – Medical Card Plan R&B 200",
      tags: ["Medical Card", "Family Protection"],
      kenapa: "Perlindungan menyeluruh untuk keluarga dengan had tahunan berganda dan manfaat pesakit luar untuk penyakit berjangkit serta kemalangan.",
      quotePreview: {
        contributionRows: [
          { umur: "Kanak-kanak", caruman: "Serendah RM103 / bulan" },
          { umur: "Dewasa", caruman: "Serendah RM123 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Had Tahunan RM200,000" },
          { icon: "✓", label: "Had Tahunan Tambahan RM200,000" },
          { icon: "✓", label: "Protect Well (In-Patient)" },
          { icon: "✓", label: "Pre & Post Hospitalisation" },
          { icon: "✓", label: "Outpatient Penyakit Berjangkit" },
          { icon: "✓", label: "Outpatient Kemalangan" },
          { icon: "✓", label: "Manfaat Vaksinasi RM300" },
          { icon: "✓", label: "Hibah Asas RM10,000" },
          { icon: "✓", label: "10+ Rider Tambahan" }
        ]
      },
      manfaat: [
        "Had Tahunan RM200,000",
        "Had Tambahan RM200,000",
        "Rawatan Pesakit Luar Penyakit Berjangkit & Kemalangan",
        "Hibah Asas RM10,000"
      ]
    },
    {
      id: "anugerah-max-rb250",
      nama: "Anugerah Max – Medical Card Plan R&B 250",
      tags: ["Medical Card", "Enhanced Protection"],
      kenapa: "Perlindungan premium dengan had tahunan tinggi dan liputan komprehensif termasuk komplikasi kehamilan untuk ketenangan minda sepenuhnya.",
      quotePreview: {
        contributionRows: [
          { umur: "Kanak-kanak", caruman: "Serendah RM120 / bulan" },
          { umur: "Dewasa", caruman: "Serendah RM135 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Had Tahunan RM250,000" },
          { icon: "✓", label: "Had Tahunan Tambahan RM250,000" },
          { icon: "✓", label: "Protect Well (In-Patient)" },
          { icon: "✓", label: "Pre & Post Hospitalisation" },
          { icon: "✓", label: "Outpatient Penyakit Berjangkit" },
          { icon: "✓", label: "Outpatient Kemalangan" },
          { icon: "✓", label: "Manfaat Vaksinasi" },
          { icon: "✓", label: "Komplikasi Kehamilan" },
          { icon: "✓", label: "Nilai Tunai (Cash Value)" },
          { icon: "✓", label: "Hibah Asas RM10,000" },
          { icon: "✓", label: "10+ Rider Tambahan" }
        ]
      },
      manfaat: [
        "Had Tahunan RM250,000",
        "Had Tambahan RM250,000",
        "Komplikasi Kehamilan",
        "Hibah Asas RM10,000"
      ]
    },
    {
      id: "medic-total-care",
      nama: "Anugerah Max – Medic Total Care (Plan 250) + MedicBoost",
      tags: ["Exclusive Medical Card", "Perlindungan Sehingga RM1 Juta"],
      kenapa: "Kombinasi eksklusif yang memberikan boost had tahunan sehingga RM1 juta — pilihan terbaik untuk mereka yang mahukan perlindungan maksimum tanpa had.",
      quotePreview: {
        contributionRows: [
          { umur: "Kanak-kanak", caruman: "Serendah RM140 / bulan" },
          { umur: "Dewasa", caruman: "Serendah RM160 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Had Tahunan RM250,000" },
          { icon: "✓", label: "Had Tahunan Tambahan RM250,000" },
          { icon: "✓", label: "Boost Had Tahunan Sehingga RM1 Juta" },
          { icon: "✓", label: "Protect Well (In-Patient)" },
          { icon: "✓", label: "Pre & Post Hospitalisation" },
          { icon: "✓", label: "Outpatient Penyakit Berjangkit" },
          { icon: "✓", label: "Outpatient Kemalangan" },
          { icon: "✓", label: "Manfaat Vaksinasi" },
          { icon: "✓", label: "Komplikasi Kehamilan" },
          { icon: "✓", label: "Hibah Asas RM10,000" },
          { icon: "✓", label: "10+ Rider Tambahan" }
        ]
      },
      manfaat: [
        "Boost Had Tahunan sehingga RM1 juta",
        "Komplikasi Kehamilan",
        "Protect Well",
        "Hibah Asas RM10,000"
      ]
    },
    {
      id: "health360",
      nama: "Health360",
      tags: ["Premier Medical Card", "Tiada Had Tahunan"],
      kenapa: "Pelan perubatan premier tanpa had tahunan dan had perlindungan yang tinggi — perlindungan tanpa batas untuk anda dan keluarga tercinta.",
      quotePreview: {
        contributionRows: [
          { umur: "Kanak-kanak", caruman: "Serendah RM185 / bulan" },
          { umur: "Dewasa", caruman: "Serendah RM200 / bulan" },
          { umur: "Room & Board", caruman: "Bermula RM200 sehari" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Tiada Had Tahunan" },
          { icon: "✓", label: "Had Perlindungan Yang Tinggi" },
          { icon: "✓", label: "Bonus SVP 2%" },
          { icon: "✓", label: "Protect Well (In-Patient)" },
          { icon: "✓", label: "ICU, Pembedahan, Ambulans & Pemindahan Organ" },
          { icon: "✓", label: "Perlindungan Kanser & Penyakit Buah Pinggang" },
          { icon: "✓", label: "Outpatient Penyakit Berjangkit" },
          { icon: "✓", label: "Outpatient Kanak-kanak" },
          { icon: "✓", label: "Rawatan Kesihatan Mental" },
          { icon: "✓", label: "Penjagaan Kejururawatan Di Rumah" }
        ]
      },
      manfaat: [
        "Tiada Had Tahunan",
        "Had perlindungan yang tinggi",
        "Rawatan pesakit luar kanak-kanak",
        "Hibah Asas RM25,000"
      ]
    },
    {
      id: "pre-birth-medical",
      nama: "Pre Birth + Medical Card",
      tags: ["Pre Birth + Medical", "Perlindungan Ibu & Bayi"],
      kenapa: "Membantu ibu bapa membuat persediaan dari segi kewangan, kesihatan dan emosi sebelum bayi lahir.",
      quotePreview: {
        contributionRows: [
          { umur: "🟢 Basic", caruman: "Serendah RM329 / bulan" },
          { umur: "🔵 Essential", caruman: "Serendah RM369 / bulan" },
          { umur: "🟣 Superior", caruman: "Serendah RM425 / bulan" }
        ],
        comparisonTitle: "Perbandingan Pelan",
        comparisonRows: [
          { label: "Komplikasi Kehamilan", values: ["RM2,500", "RM5,000", "RM8,000"] },
          { label: "Elaun Hospital Harian", values: ["Tiada", "RM100 / hari", "RM100 / hari"] },
          { label: "Pembedahan Caesarean Kecemasan", values: ["Tiada", "Tiada", "RM5,000"] },
          { label: "Kematian Janin", values: ["RM2,500", "RM5,000", "RM8,000"] },
          { label: "Kematian Ibu", values: ["RM10,000", "RM20,000", "RM50,000"] },
          { label: "Kesejahteraan Mental", values: ["Tiada", "Tiada", "RM5,000"] },
          { label: "Kematian Anak", values: ["RM2,500", "RM5,000", "RM8,000"] },
          { label: "ICU / HDU", values: ["RM300 / hari", "RM400 / hari", "RM500 / hari"] },
          { label: "Inkubasi Anak Baru Lahir", values: ["RM100 / hari", "RM200 / hari", "RM300 / hari"] },
          { label: "Jaundice Neonatal / Fototerapi", values: ["RM500", "RM1,000", "RM2,000"] },
          { label: "Keadaan Kongenital", values: ["RM15,000 setahun", "RM30,000 setahun", "RM50,000 setahun"] },
          { label: "Gangguan Perkembangan Kanak-kanak", values: ["Tiada", "Tiada", "RM5,000 setahun"] },
          { label: "Medical Card Annual Limit", values: ["RM1,000,000", "RM1,000,000", "RM1,000,000"] },
          { label: "Lifetime Limit", values: ["Unlimited", "Unlimited", "Unlimited"] },
          { label: "Room & Board", values: ["RM200", "RM200", "RM200"] }
        ],
        benefitRows: []
      },
      manfaat: [
        "Pampasan Kematian Ibu & Bayi",
        "Manfaat Keguguran",
        "Manfaat Komplikasi Kehamilan",
        "Manfaat Elaun Wad"
      ]
    }
  ],
  kritikal: [
    {
      id: "crisis-shield",
      nama: "PruBSN Kritikal Care360",
      subtitle: "CRITICAL ILLNESS PROTECTION",
      tags: ["Critical Illness"],
      kenapa: "Pelan pampasan penyakit kritikal yang membantu menyediakan sokongan kewangan apabila didiagnosis penyakit kritikal, supaya pelanggan boleh fokus kepada rawatan dan proses pemulihan.",
      quotePreview: {
        contributionTitle: "Anggaran Caruman",
        contributionRows: [
          { umur: "Critical Illness Protection", caruman: "Serendah RM50 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Pampasan untuk Penyakit Kritikal Peringkat Awal" },
          { icon: "✓", label: "Pampasan untuk Penyakit Kritikal Peringkat Akhir" },
          { icon: "✓", label: "Perlindungan meningkat secara automatik setiap 5 tahun sehingga tambahan 30%" },
          { icon: "✓", label: "Elaun Pemulihan RM10,000 untuk pembedahan besar atau kemasukan ICU" },
          { icon: "✓", label: "Manfaat Penyakit Terminal dan Kematian" },
          { icon: "✓", label: "Tertakluk kepada terma, syarat dan kelulusan PruBSN Takaful." }
        ]
      },
      manfaat: [
        "Pampasan Penyakit Kritikal Peringkat Awal",
        "Pampasan Penyakit Kritikal Peringkat Akhir",
        "Perlindungan naik automatik setiap 5 tahun sehingga +30%",
        "Elaun Pemulihan RM10,000",
        "Manfaat Penyakit Terminal & Kematian"
      ]
    }
  ],
  wanita: [
    {
      id: "anugerah-wanita",
      nama: "PRUBSN Anggun",
      tags: ["Lady Plan", "Khas Untuk Wanita"],
      kenapa: "Pelan perlindungan khas untuk wanita di setiap peringkat kehidupan, dengan perlindungan penyakit wanita, sokongan mental, ganjaran tunai dan manfaat ibu & bayi.",
      quotePreview: {
        contributionTitle: "Anggaran Caruman",
        contributionRows: [
          { umur: "Lady Plan", caruman: "Serendah RM50 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Penyakit khusus wanita" },
          { icon: "✓", label: "Ganjaran berkahwin, melahirkan anak, haji/umrah & pendidikan" },
          { icon: "✓", label: "Penjagaan mental sehingga RM5,000" },
          { icon: "✓", label: "Mom Care untuk kehamilan, kesuburan & bayi" },
          { icon: "✓", label: "Perlindungan fleksibel mengikut bajet" },
          { icon: "✓", label: "Tertakluk kepada terma & syarat polisi Prudential BSN Takaful Berhad." }
        ]
      },
      manfaat: [
        "Perlindungan penyakit khusus wanita",
        "Ganjaran tunai untuk peristiwa hidup",
        "Sokongan penjagaan mental",
        "Manfaat Mom Care ibu & bayi"
      ]
    }
  ],
  kanak: [
    {
      id: "anugerah-anak",
      nama: "Pre Birth",
      tags: ["Pre Birth Protection", "Perlindungan Ibu & Bayi"],
      kenapa: "Sebagai satu persediaan awal untuk memastikan bayi mendapat perlindungan dan ibu bapa lebih tenang menghadapi sebarang kemungkinan sebelum, semasa, dan selepas kelahiran.",
      quotePreview: {
        contributionTitle: "Anggaran Caruman Bulanan",
        contributionRows: [
          { umur: "🟢 Basic", caruman: "Serendah RM65 / bulan" },
          { umur: "🔵 Essential", caruman: "Serendah RM80 / bulan" },
          { umur: "🟣 Superior", caruman: "Serendah RM100 / bulan" }
        ],
        benefitTitle: "Manfaat Utama",
        benefitRows: [
          { icon: "✓", label: "Pampasan Kematian Ibu & Bayi" },
          { icon: "✓", label: "Manfaat Keguguran" },
          { icon: "✓", label: "Manfaat Komplikasi Kehamilan" },
          { icon: "✓", label: "Manfaat Elaun Wad" },
          { icon: "✓", label: "Manfaat Komplikasi Bayi" },
          { icon: "✓", label: "Simpanan (Saving) Bayi" },
          { icon: "✓", label: "Manfaat Penyakit Tumbesaran Bayi (ADHD, Autisma dan lain-lain)" }
        ]
      },
      manfaat: [
        "Pampasan Kematian Ibu & Bayi",
        "Manfaat Keguguran",
        "Manfaat Komplikasi Kehamilan",
        "Manfaat Elaun Wad"
      ]
    }
  ],
  simpanan: [
    {
      id: "takaful-simpanan",
      nama: "PruBSN AnugerahPlus (Simpanan & Pelaburan Shariah)",
      badge: "PATUH SHARIAH",
      tags: ["Simpanan Terancang", "Dana Persaraan", "Pakej Haji"],
      kenapa: "Gabungan seimbang antara perlindungan takaful dan simpanan pelaburan berasaskan Shariah bagi mencapai matlamat kewangan masa depan.",
      manfaat: [
        "Simpanan terancang untuk matlamat haji, umrah & persaraan",
        "Pilihan dana pelaburan patuh Shariah dipantau pakar",
        "Fleksibiliti pengeluaran tunai apabila diperlukan",
        "Bonus kesetiaan sijil dan pampasan perlindungan"
      ]
    }
  ],
};

dataPelan.hibah.push(
  ...dataPelan.wanita,
  ...dataPelan.kanak,
  ...dataPelan.simpanan
);
delete dataPelan.wanita;
delete dataPelan.kanak;
delete dataPelan.simpanan;

// ==========================================
// 2. FUNGSI WHATSAPP DIRECT DENGAN TEMPLATE
// ==========================================
function formatWhatsAppMessage(mesej) {
  const mesejBersih = String(mesej)
    .replace(/\r\n?/g, "\n")
    .replace(/\uFFFD/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const salam = mesejBersih.match(/Assalamualaikum\b[^\n]*/i)?.[0];
  const isiMesej = salam ? mesejBersih.replace(salam, "").trim() : mesejBersih;

  return [salam || "Assalamualaikum,", isiMesej].filter(Boolean).join("\n\n");
}

function teksWhatsAppBold(value) {
  const valueBersih = String(value ?? "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
  return `*${valueBersih}*`;
}

function bukaWhatsAppDirect(mesej) {
  const url = `https://wa.me/${NO_WHATSAPP}?text=${encodeURIComponent(formatWhatsAppMessage(mesej))}`;
  window.open(url, "_blank");
}

function bukaBantuanProses() {
  const dialog = document.getElementById("process-help-dialog");
  if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
}

function tutupBantuanProses() {
  const dialog = document.getElementById("process-help-dialog");
  if (dialog instanceof HTMLDialogElement && dialog.open) dialog.close();
}

// ==========================================
// 3. PAPARAN KAD PELAN SECARA DINAMIK
// ==========================================
let activeCategory = "hibah";

function paparkanPelan(kategori) {
  activeCategory = kategori;
  const container = document.getElementById("plan-cards-container");
  if (!container) return;
  const kalkulator = document.getElementById("kalkulator");
  if (kalkulator) kalkulator.hidden = kategori !== "hibah";

  const listPelan = dataPelan[kategori] || dataPelan["hibah"];
  const tajukKategori = {
    hibah: "Pilihan Pelan Hibah Takaful",
    medical: "Pilihan Pelan Medical Card",
    kritikal: "Pilihan Pelan Penyakit Kritikal"
  };
  const tajuk = document.getElementById("plan-category-title");
  if (tajuk) tajuk.textContent = teks(tajukKategori[kategori] || tajukKategori.hibah);
  const jadualKos = document.getElementById("medical-costs");
  if (jadualKos) jadualKos.hidden = kategori !== "medical";
  const perbandinganKritikal = document.getElementById("critical-comparison-section");
  if (perbandinganKritikal) perbandinganKritikal.hidden = kategori !== "kritikal";
  const faqContainer = document.getElementById("critical-faq-container");
  if (faqContainer) faqContainer.hidden = kategori !== "kritikal";
  const senarioSection = document.getElementById("senario");
  if (senarioSection) senarioSection.hidden = kategori !== "kritikal";
  if (kategori === "kritikal" && senarioSection) {
    const senarioButton = senarioSection.querySelector(".senario-tab-btn[onclick*=\"'kritikal'\"]");
    pilihSenario("kritikal", senarioButton);
  }
  const hibahJourney = document.getElementById("hibah-category-journey");
  const medicalJourney = document.getElementById("medical-category-journey");
  if (hibahJourney) hibahJourney.hidden = kategori !== "hibah";
  if (medicalJourney) medicalJourney.hidden = kategori !== "medical";

  // Update tabs active state
  document.querySelectorAll(".plan-tab-item").forEach(btn => {
    btn.classList.remove("active");
  });
  const currentTab = document.getElementById(`tab-${kategori}`);
  if (currentTab) currentTab.classList.add("active");

  // Animate render
  container.innerHTML = listPelan.map(pelan => `
    <div class="modern-plan-card plan-explorer-card bg-white p-6 md:p-8 flex flex-col justify-between relative shadow-card transition-all">
      ${pelan.badge ? `
        <div class="mb-4">
          <span class="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FDE8E9] text-[#ED1B24] border border-[#F5C6C8]">
            ${teks(pelan.badge)}
          </span>
        </div>
      ` : ""}

      <div>
        <div class="flex flex-wrap gap-1.5 mb-3">
          ${pelan.tags.map(t => `<span class="plan-card-tag">${teks(t)}</span>`).join("")}
        </div>
        ${pelan.subtitle ? `<p class="plan-card-subtitle">${teks(pelan.subtitle)}</p>` : ""}
        <h3 class="plan-card-title">${teks(pelan.nama)}</h3>

        <div class="plan-card-reason">
          <p class="plan-card-label">${teks("Kenapa Pelan Ini Diperlukan?")}</p>
          <p>${teks(pelan.kenapa)}</p>
        </div>

        <p class="plan-card-label plan-card-benefits-label">${teks("Manfaat Utama")}</p>
        <ul class="plan-card-benefits">
          ${pelan.manfaat.map(m => `
            <li>
              <span aria-hidden="true">✓</span>
              <span>${teks(m)}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="plan-card-actions pt-4 border-t border-[#F0F0F0] space-y-2.5 mt-auto">
        <button onclick="bukaPlanModal('${pelan.nama}')" class="plan-card-quote w-full text-white font-semibold py-3 rounded-full transition text-xs md:text-sm flex items-center justify-center gap-2 btn-magnetic shadow-sm">
          <i class="fas fa-file-invoice text-white/80"></i> ${teks("Semak Sebut Harga Pelan Ini")}
        </button>
      </div>
    </div>
  `).join("");
}

function pilihKategori(kategori) {
  const kategoriUtama = ["medical", "kritikal"].includes(kategori) ? kategori : "hibah";
  paparkanPelan(kategoriUtama);
}

function bukaKategoriPelan(kategori) {
  pilihKategori(kategori);

  const panel = document.getElementById("plan-selection-panel");
  if (panel?.hidden) toggleKategoriPelan();

  document.getElementById("pelan")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bukaKalkulator() {
  pilihKategori("hibah");

  const panel = document.getElementById("plan-selection-panel");
  if (panel?.hidden) toggleKategoriPelan();

  requestAnimationFrame(() => {
    document.getElementById("kalkulator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bukaFaq() {
  pilihKategori("kritikal");

  const panel = document.getElementById("plan-selection-panel");
  if (panel?.hidden) toggleKategoriPelan();

  requestAnimationFrame(() => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bukaSenario() {
  pilihKategori("kritikal");

  const panel = document.getElementById("plan-selection-panel");
  if (panel?.hidden) toggleKategoriPelan();

  requestAnimationFrame(() => {
    document.getElementById("senario")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function toggleKategoriPelan() {
  const panel = document.getElementById("plan-selection-panel");
  const toggle = document.getElementById("category-toggle-btn");
  const label = document.getElementById("category-toggle-label");
  const icon = toggle?.querySelector(".category-toggle-icon");
  if (!panel || !toggle || !label) return;

  const isOpening = panel.hidden;
  panel.hidden = !isOpening;
  toggle.setAttribute("aria-expanded", String(isOpening));
  label.textContent = teks(isOpening ? "Sembunyikan Kategori & Pilihan Pelan" : "Lihat Kategori & Pilihan Pelan");
  if (icon) icon.classList.toggle("is-open", isOpening);
}

// ==========================================
// 4. MODAL SEBUT HARGA PANTAS
// ==========================================
function renderQuotePreview(namaPelan) {
  const container = document.getElementById("plan-quote-preview-content");
  const pelan = Object.values(dataPelan).flat().find(item => item.nama === namaPelan);
  if (!container || !pelan?.quotePreview) return;

  const preview = pelan.quotePreview;
  container.innerHTML = `
    <h4 class="plan-card-label">${teks(preview.contributionTitle || "Anggaran Caruman Bulanan")}</h4>
    <ul class="plan-quote-estimate-list">
      ${preview.contributionRows.map(row => `
        <li><span>${teks(row.umur)}</span><strong>${teks(row.caruman)}</strong></li>
      `).join("")}
    </ul>
    <p class="plan-quote-estimate-note">${teks("Anggaran sahaja. Caruman dan manfaat sebenar tertakluk pada sebut harga rasmi, kelayakan serta terma sijil.")}</p>
    ${preview.comparisonRows?.length ? `
      <h4 class="plan-card-label plan-quote-benefits-title">${teks(preview.comparisonTitle || "Perbandingan Pelan")}</h4>
      <div class="plan-quote-comparison-scroll" role="region" aria-label="${teks(preview.comparisonTitle || "Perbandingan Pelan")}" tabindex="0">
        <table class="plan-quote-comparison">
          <thead>
            <tr>
              <th scope="col">${teks("Manfaat")}</th>
              <th scope="col">${teks("Basic")}</th>
              <th scope="col">${teks("Essential")}</th>
              <th scope="col">${teks("Superior")}</th>
            </tr>
          </thead>
          <tbody>
            ${preview.comparisonRows.map(row => `
              <tr>
                <th scope="row">${teks(row.label)}</th>
                ${row.values.map(value => `<td>${teks(value)}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    ` : ""}
    ${preview.benefitRows.length ? `
      <h4 class="plan-card-label plan-quote-benefits-title">${teks(preview.benefitTitle)}</h4>
      <ul class="plan-card-benefits plan-quote-benefits ${preview.benefitRows.some(row => row.amount) ? "plan-quote-benefit-amounts" : ""}">
        ${preview.benefitRows.map(row => `
          <li>
            <span aria-hidden="true">${row.icon}</span>
            <span>${teks(row.label)}</span>
            ${row.amount ? `<strong>${teks(row.amount)}</strong>` : ""}
          </li>
        `).join("")}
      </ul>
    ` : ""}
    ${preview.suitabilityRows?.length ? `
      <h4 class="plan-card-label plan-quote-suitability-title">${teks(preview.suitabilityTitle || "Sesuai Untuk")}</h4>
      <ul class="plan-quote-suitability-list">
        ${preview.suitabilityRows.map(row => `<li>${teks(row)}</li>`).join("")}
      </ul>
    ` : ""}
  `;
}

function bukaPlanModal(namaPelan) {
  const modal = document.getElementById("planModalBackdrop");
  const modalTitle = document.getElementById("modalPlanTitle");
  const modalPlanInput = document.getElementById("modalPlanNameInput");
  const modalDescription = document.getElementById("modalPlanDescription");
  const preview = document.getElementById("plan-quote-preview");
  const form = document.getElementById("planQuoteForm");
  const pelan = Object.values(dataPelan).flat().find(item => item.nama === namaPelan);
  const hasQuotePreview = Boolean(pelan?.quotePreview);

  if (modalTitle) modalTitle.innerText = teks(namaPelan);
  if (modalPlanInput) modalPlanInput.value = namaPelan;
  if (modalDescription) {
    modalDescription.textContent = teks(hasQuotePreview
      ? "Semak anggaran caruman dan manfaat pelan sebelum meminta sebut harga."
      : "Sila lengkapkan maklumat ringkas untuk penyediaan quotation rasmi.");
  }
  if (preview) preview.hidden = !hasQuotePreview;
  if (form) form.hidden = hasQuotePreview;
  if (hasQuotePreview) renderQuotePreview(namaPelan);

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function teruskanSebutHargaPreview() {
  const preview = document.getElementById("plan-quote-preview");
  const form = document.getElementById("planQuoteForm");
  if (preview) preview.hidden = true;
  if (form) {
    form.hidden = false;
    const modalDescription = document.getElementById("modalPlanDescription");
    if (modalDescription) {
      modalDescription.textContent = teks("Sila lengkapkan maklumat ringkas untuk penyediaan quotation rasmi.");
    }
    document.getElementById("modal-nama")?.focus();
  }
}

function whatsappPelanPreview() {
  const pelan = document.getElementById("modalPlanNameInput")?.value || "pelan Takaful";
  tutupPlanModal();
  bukaWhatsAppDirect(
    `Assalamualaikum Mekja, saya berminat dengan ${pelan}. Boleh bantu saya semak anggaran caruman dan cadangan pelan?`
  );
}

function tutupPlanModal() {
  const modal = document.getElementById("planModalBackdrop");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function hantarModalQuotation(e) {
  e.preventDefault();
  const pelan = document.getElementById("modalPlanNameInput")?.value || "Takaful";
  const nama = document.getElementById("modal-nama")?.value || "Pelanggan";
  const umurInput = document.getElementById("modal-umur");
  const umur = umurInput?.value || "";
  if (!umurInput || !umurInput.reportValidity()) return;
  const rokok = document.querySelector('input[name="modal-rokok"]:checked')?.value || "Tidak Dinyatakan";
  const nota = document.getElementById("modal-nota")?.value || "-";

  const mesej = `\n` +
    `\n\n` +
    `\n` +
    `Pelan diminati: ${teksWhatsAppBold(pelan)}\n\n` +
    `\n` +
    `Nama: ${teksWhatsAppBold(nama)}\n` +
    `Umur: ${teksWhatsAppBold(`${umur} tahun`)}\n` +
    `Status merokok: ${teksWhatsAppBold(rokok)}\n` +
    `Bajet: ${teksWhatsAppBold(nota)}\n\n` +
    `Assalamualaikum Mekja, saya ingin mendapatkan cadangan dan sebut harga untuk pelan ini. Terima kasih.`;

  tutupPlanModal();
  bukaWhatsAppDirect(mesej);
}

// ==========================================
// 5. KALKULATOR TAKAFUL INTERAKTIF
// ==========================================
let calcState = {
  umur: null,
  pelan: "Anugerah Max",
  jantina: "",
  rokok: "Tidak Merokok",
  jumlah: 200000
};

const MIN_CALC_AGE = 18;
const MAX_CALC_AGE = 60;
const calcPlanAmounts = {
  "Anugerah Max": [200000, 300000, 500000, 1000000],
  "Warisan Gold": [350000, 450000, 550000, 1000000]
};
const calcRateTables = {
  "Anugerah Max": {
    "Tidak Merokok": [
      { min: 18, max: 25, rates: [74, 91, 121, 193] },
      { min: 26, max: 30, rates: [88, 107, 143, 228] },
      { min: 31, max: 35, rates: [101, 124, 165, 263] },
      { min: 36, max: 40, rates: [115, 140, 187, 298] },
      { min: 41, max: 45, rates: [135, 165, 220, 350] },
      { min: 46, max: 50, rates: [169, 206, 275, 438] },
      { min: 51, max: 55, rates: [209, 256, 341, 543] },
      { min: 56, max: 60, rates: [257, 314, 418, 665] }
    ],
    "Merokok": [
      { min: 18, max: 25, rates: [89, 109, 145, 231] },
      { min: 26, max: 30, rates: [105, 129, 172, 273] },
      { min: 31, max: 35, rates: [122, 149, 198, 315] },
      { min: 36, max: 40, rates: [138, 168, 225, 357] },
      { min: 41, max: 45, rates: [162, 198, 264, 420] },
      { min: 46, max: 50, rates: [203, 248, 330, 525] },
      { min: 51, max: 55, rates: [251, 307, 409, 651] },
      { min: 56, max: 60, rates: [308, 376, 502, 798] }
    ]
  },
  "Warisan Gold": {
    "Tidak Merokok": [
      { min: 18, max: 25, rates: [100, 120, 140, 275] },
      { min: 26, max: 30, rates: [110, 132, 154, 303] },
      { min: 31, max: 35, rates: [125, 150, 175, 344] },
      { min: 36, max: 40, rates: [145, 174, 203, 399] },
      { min: 41, max: 45, rates: [170, 204, 238, 468] },
      { min: 46, max: 50, rates: [210, 252, 294, 578] },
      { min: 51, max: 55, rates: [260, 312, 364, 715] },
      { min: 56, max: 60, rates: [320, 384, 448, 880] }
    ],
    "Merokok": [
      { min: 18, max: 25, rates: [120, 144, 168, 330] },
      { min: 26, max: 30, rates: [132, 158, 185, 363] },
      { min: 31, max: 35, rates: [150, 180, 210, 413] },
      { min: 36, max: 40, rates: [174, 209, 243, 479] },
      { min: 41, max: 45, rates: [204, 245, 285, 561] },
      { min: 46, max: 50, rates: [252, 302, 353, 693] },
      { min: 51, max: 55, rates: [312, 374, 436, 858] },
      { min: 56, max: 60, rates: [384, 461, 538, 1056] }
    ]
  }
};
const calcFemaleDiscount = { "Anugerah Max": 3, "Warisan Gold": 12 };

function renderCalcAmounts() {
  const container = document.getElementById("calc-amount-options");
  if (!container) return;
  container.innerHTML = calcPlanAmounts[calcState.pelan].map((amount, index) => {
    const selected = amount === calcState.jumlah ? " active" : "";
    const span = index === calcPlanAmounts[calcState.pelan].length - 1 ? " col-span-2 sm:col-span-2" : "";
    return `<button type="button" onclick="setCalcJumlah(${amount}, this)" class="calc-jumlah-pill calc-pill py-2.5 rounded-xl text-xs font-semibold${selected}${span}">RM ${amount.toLocaleString()}</button>`;
  }).join("");
}

function setCalcPlan(pelan, el) {
  if (!calcPlanAmounts[pelan]) return;
  calcState.pelan = pelan;
  if (!calcPlanAmounts[pelan].includes(calcState.jumlah)) {
    calcState.jumlah = calcPlanAmounts[pelan][0];
  }
  document.querySelectorAll(".calc-plan-pill").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");
  renderCalcAmounts();
  kiraAnggaranLive();
}

function setCalcJantina(jantina, el) {
  calcState.jantina = jantina;
  document.querySelectorAll(".calc-gender-pill").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");
  kiraAnggaranLive();
}

function setCalcRokok(val, el) {
  calcState.rokok = val;
  document.querySelectorAll(".calc-rokok-pill").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");
  kiraAnggaranLive();
}

function setCalcJumlah(val, el) {
  const amount = Number(val);
  if (!calcPlanAmounts[calcState.pelan].includes(amount)) return;
  calcState.jumlah = amount;
  document.querySelectorAll(".calc-jumlah-pill").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");
  kiraAnggaranLive();
}

function onUmurChange(val) {
  const umur = val === "" ? NaN : Number(val);
  const input = document.getElementById("calc-umur-input");
  const error = document.getElementById("calc-age-error");
  const isValid = Number.isInteger(umur) && umur >= MIN_CALC_AGE && umur <= MAX_CALC_AGE;

  if (error) {
    error.hidden = val === "" || isValid;
    error.textContent = val !== "" && !isValid
      ? teks("Umur mestilah nombor bulat antara 18 hingga 60 tahun.")
      : "";
  }
  if (input) input.setCustomValidity(val !== "" && !isValid
    ? teks("Umur mestilah nombor bulat antara 18 hingga 60 tahun.")
    : "");

  if (!isValid) {
    calcState.umur = null;
    document.querySelectorAll(".calc-umur-pill").forEach(btn => btn.classList.remove("active"));
    kiraAnggaranLive();
    return;
  }
  calcState.umur = umur;
  document.querySelectorAll(".calc-umur-pill").forEach(btn => btn.classList.remove("active"));
  kiraAnggaranLive();
}

function quickSetUmur(val, el) {
  if (!Number.isInteger(val) || val < MIN_CALC_AGE || val > MAX_CALC_AGE) return;
  calcState.umur = parseInt(val);
  const input = document.getElementById("calc-umur-input");
  if (input) {
    input.value = String(val);
    input.setCustomValidity("");
  }
  const error = document.getElementById("calc-age-error");
  if (error) {
    error.hidden = true;
    error.textContent = "";
  }
  document.querySelectorAll(".calc-umur-pill").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");
  kiraAnggaranLive();
}

function kiraAnggaranLive() {
  const inputUmur = document.getElementById("calc-umur-input");
  if (inputUmur) {
    const enteredAge = inputUmur.value === "" ? NaN : Number(inputUmur.value);
    calcState.umur = Number.isInteger(enteredAge) && enteredAge >= MIN_CALC_AGE && enteredAge <= MAX_CALC_AGE
      ? enteredAge
      : null;
  }

  const displayVal = document.getElementById("calc-result-display");
  const tagUmur = document.getElementById("calc-tag-umur");
  const tagJumlah = document.getElementById("calc-tag-jumlah");
  const tagRokok = document.getElementById("calc-tag-rokok");
  const tagPelan = document.getElementById("calc-tag-pelan");
  const tagJantina = document.getElementById("calc-tag-jantina");

  if (calcState.umur === null || isNaN(calcState.umur) || !calcState.jantina) {
    if (displayVal) displayVal.innerText = "— — —";
    if (tagUmur) {
      tagUmur.innerText = calcState.umur === null
        ? (inputUmur?.value ? teks("Umur mesti 18–60 tahun") : teks("Sila masukkan umur"))
        : `${calcState.umur} ${currentLanguage === "en" ? "Years" : "Tahun"}`;
    }
    if (tagJumlah) tagJumlah.innerText = `RM ${calcState.jumlah.toLocaleString()}`;
    if (tagRokok) tagRokok.innerText = teks(calcState.rokok);
    if (tagPelan) tagPelan.innerText = teks(calcState.pelan);
    if (tagJantina) tagJantina.innerText = calcState.jantina ? teks(calcState.jantina) : teks("Pilih jantina");
    return;
  }

  const umur = calcState.umur;
  const jumlah = calcState.jumlah;
  const ageRateBand = calcRateTables[calcState.pelan][calcState.rokok]
    .find(band => umur >= band.min && umur <= band.max);
  const amountIndex = calcPlanAmounts[calcState.pelan].indexOf(jumlah);
  if (!ageRateBand || amountIndex === -1) {
    if (displayVal) displayVal.innerText = "— — —";
    return;
  }
  const maleRate = ageRateBand.rates[amountIndex];
  const contribution = calcState.jantina === "Perempuan"
    ? maleRate - calcFemaleDiscount[calcState.pelan]
    : maleRate;

  if (displayVal) displayVal.innerText = contribution.toFixed(2);
  if (tagUmur) tagUmur.innerText = `${umur} ${currentLanguage === "en" ? "Years" : "Tahun"}`;
  if (tagJumlah) tagJumlah.innerText = `RM ${jumlah.toLocaleString()}`;
  if (tagRokok) tagRokok.innerText = teks(calcState.rokok);
  if (tagPelan) tagPelan.innerText = teks(calcState.pelan);
  if (tagJantina) tagJantina.innerText = teks(calcState.jantina);
}

function hantarCalcWhatsApp() {
  const input = document.getElementById("calc-umur-input");
  if (calcState.umur === null || isNaN(calcState.umur)
    || calcState.umur < MIN_CALC_AGE || calcState.umur > MAX_CALC_AGE) {
    if (input) {
      input.focus();
      input.classList.add("border-red-400");
      setTimeout(() => input.classList.remove("border-red-400"), 2000);
    }
    alert(teks("Masukkan umur yang sah antara 18 hingga 60 tahun sebelum menghantar."));
    return;
  }
  if (!calcState.jantina) {
    alert(teks("Sila pilih jantina sebelum menghantar."));
    document.querySelector(".calc-gender-pill")?.focus();
    return;
  }
  const displayVal = document.getElementById("calc-result-display")?.innerText || "—";
  const mesej = `\n` +
    `\n\n` +
    `\n` +
    `Pelan: ${teksWhatsAppBold(calcState.pelan)}\n` +
    `Umur: ${teksWhatsAppBold(`${calcState.umur} tahun`)}\n` +
    `Jantina: ${teksWhatsAppBold(calcState.jantina)}\n` +
    `Status merokok: ${teksWhatsAppBold(calcState.rokok)}\n` +
    `Jumlah hibah: ${teksWhatsAppBold(`RM ${calcState.jumlah.toLocaleString()}`)}\n` +
    `Anggaran caruman: ${teksWhatsAppBold(`RM ${displayVal} sebulan`)}\n\n` +
    `\n` +
    `Assalamualaikum Mekja, saya ingin mendapatkan penerangan lanjut dan sebut harga berdasarkan maklumat ini. Terima kasih.`;

  bukaWhatsAppDirect(mesej);
}

// ==========================================
// 6. BORANG SEMAKAN KEPERLUAN TAKAFUL
// ==========================================
function hantarKeperluanWhatsApp(e) {
  e.preventDefault();
  const umur = document.getElementById("req-umur")?.value || "-";
  const sektor = document.getElementById("req-sektor")?.value || "-";
  const gajiInput = document.getElementById("req-gaji");
  const bajetInput = document.getElementById("req-bajet");
  const gaji = Number(gajiInput?.value);
  const bajet = Number(bajetInput?.value);
  const tanggungan = document.getElementById("req-tanggungan")?.value || "-";
  const risiko = document.getElementById("req-risiko")?.value || "-";

  if (!gajiInput?.value || !bajetInput?.value
    || !Number.isFinite(gaji) || gaji < 0
    || !Number.isFinite(bajet) || bajet < 0) {
    document.getElementById(!gajiInput?.value ? "req-gaji" : "req-bajet")?.focus();
    return;
  }

  const mesej = `\n` +
    `Prudential BSN Takaful\n\n` +
    `*Maklumat Pemohon*\n` +
    `Umur: ${teksWhatsAppBold(`${umur} tahun`)}\n` +
    `Sektor pekerjaan: ${teksWhatsAppBold(sektor)}\n` +
    `Gaji bulanan: ${teksWhatsAppBold(`RM ${gaji.toLocaleString("ms-MY")}`)}\n` +
    `Bajet bulanan takaful: ${teksWhatsAppBold(`RM ${bajet.toLocaleString("ms-MY")}`)}\n` +
    `Status tanggungan: ${teksWhatsAppBold(tanggungan)}\n` +
    `Risiko utama: ${teksWhatsAppBold(risiko)}\n\n` +
    `Assalamualaikum Mekja, mohon cadangan pelan yang sesuai dengan situasi saya ini. Terima kasih.`;

  bukaWhatsAppDirect(mesej);
}

// ==========================================
// 7. FLOATING INTERACTIVE CHAT DRAWER
// ==========================================
function toggleChatDrawer() {
  const drawer = document.getElementById("chatAssistantDrawer");
  if (!drawer) return;
  drawer.classList.toggle("hidden");
}

function tutupChatDrawer() {
  const drawer = document.getElementById("chatAssistantDrawer");
  if (drawer) drawer.classList.add("hidden");
}

function sembunyiButangPantas() {
  tutupChatDrawer();
  const widget = document.getElementById("quickActionsWidget");
  const showButton = document.getElementById("quickActionsShowBtn");
  if (widget) widget.hidden = true;
  if (showButton) showButton.style.display = "inline-flex";
}

function paparButangPantas() {
  const widget = document.getElementById("quickActionsWidget");
  const showButton = document.getElementById("quickActionsShowBtn");
  if (widget) widget.hidden = false;
  if (showButton) showButton.style.display = "none";
}

function hantarChatPrompt(soalan) {
  tutupChatDrawer();
  const mesej = `Assalamualaikum Mekja, saya nak bertanya mengenai perkara ini:\n${teksWhatsAppBold(soalan)}\n\nBoleh bantu terangkan?`;
  bukaWhatsAppDirect(mesej);
}

function hantarCustomChat() {
  const input = document.getElementById("customChatInput");
  const soalan = input?.value.trim();
  if (!soalan) {
    if (input) input.focus();
    return;
  }
  tutupChatDrawer();
  const mesej = `Assalamualaikum Mekja, saya ada soalan:\n\n${teksWhatsAppBold(soalan)}`;
  bukaWhatsAppDirect(mesej);
  if (input) input.value = "";
}

// ==========================================
// 8. FAQ ACCORDION INTERACTION
// ==========================================
function toggleFaq(index) {
  const faqItem = document.getElementById(`faq-item-${index}`);
  if (!faqItem) return;

  const isActive = faqItem.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach(item => {
    item.classList.remove("active");
  });

  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// ==========================================
// 9. SENARIO KEHIDUPAN (REAL-LIFE SCENARIOS)
// ==========================================
const dataSenario = {
  wad: {
    tajuk: "Kemasukan Wad & Pembedahan Kecemasan",
    risiko: "Bil pembedahan mengejut boleh mencecah puluhan ribu ringgit. Tanpa perlindungan, wang simpanan bertahun terpaksa dikorbankan.",
    solusiTakaful: "Medical Card Prudential BSN mengeluarkan Surat Jaminan (Guarantee Letter) pantas. Rawatan pakar swasta diteruskan tanpa deposit tunai.",
    pelanBerkaitan: "PruBSN HealthProtect Smart Medical Card"
  },
  kritikal: {
    tajuk: "Penyakit Kritikal & Kehilangan Upaya (TPD)",
    risiko: "Kanser atau serangan jantung memerlukan rehat berpanjangan, menyebabkan punca pendapatan keluarga terhenti serta-merta.",
    solusiTakaful: "Pampasan tunai Hibah & Penyakit Kritikal dibayar sekaligus untuk menampung kos sara hidup dan pemulihan tanpa perlu bekerja tergesa-gesa.",
    pelanBerkaitan: "PruBSN WarisanGold & Kritikal Care360"
  },
  keluarga: {
    tajuk: "Kematian Pencari Nafkah Utama",
    risiko: "Akaun simpanan dan harta beku melalui proses faraid yang mengambil masa berbulan atau bertahun, meninggalkan tanggungan terkapai-kapai.",
    solusiTakaful: "Wang Hibah diserahkan terus kepada penama (isteri/anak) dalam masa singkat tanpa melalui proses mahkamah atau pusaka.",
    pelanBerkaitan: "PruBSN WarisanGold / Anugerah Max"
  }
};

function pilihSenario(senarioKey, el) {
  document.querySelectorAll(".senario-tab-btn").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");

  const data = dataSenario[senarioKey];
  if (!data) return;

  const container = document.getElementById("senario-display-card");
  if (!container) return;

  container.innerHTML = `
    <div class="scenario-detail-grid">
      <div class="scenario-risk">
        <span class="scenario-label scenario-risk-label">
          ${teks("Risiko Nyata")}
        </span>
        <h3>${teks(data.tajuk)}</h3>
        <p class="scenario-risk-description">${teks(data.risiko)}</p>
        <div class="scenario-plan">
          <p>${teks("Pelan Disyorkan:")}</p>
          <strong>${teks(data.pelanBerkaitan)}</strong>
        </div>
      </div>
      <div class="scenario-solution">
        <span class="scenario-label scenario-solution-label">
          ${teks("Solusi & Perlindungan Takaful")}
        </span>
        <p>${teks(data.solusiTakaful)}</p>
        <div class="scenario-solution-action">
          <button onclick="bukaWhatsAppDirect('Assalamualaikum Mekja, saya ingin tahu bagaimana Takaful melindungi situasi: ${data.tajuk}')" class="scenario-whatsapp-btn">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
            ${teks("Rujuk Situasi Ini Bersama Mekja")}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 10. MULTI-LANGUAGE SWITCHER (BM / EN)
// ==========================================
const textTranslations = {
  "Utama": "Home", "Tentang Saya": "About Me", "Produk": "Products",
  "Pilihan Produk": "Product Options", "Senario Sebenar": "Real-Life Scenarios",
  "Kalkulator": "Calculator", "Kalkulator Hibah": "Hibah Calculator",
  "Semak Keperluan": "Needs Assessment", "Rujukan & Info": "Resources & Info",
  "Pautan Pantas Pelan": "Quick Plan Links",
  "Soalan Lazim": "Frequently Asked Questions", "Hubungi Saya": "Contact Me",
  "Chat di WhatsApp": "Chat on WhatsApp",
  "Bantuan — 4 Langkah Mudah Memiliki Sijil Takaful": "Help — 4 Easy Steps to Get Takaful Coverage",
  "Tutup bantuan": "Close help",
  "ASSALAMUALAIKUM & SELAMAT DATANG": "PEACE OF MIND FOR YOUR FUTURE",
  "Perlindungan Hari Ini, ": "Protection Today, ",
  "Ketenangan Esok": "Peace of Mind Tomorrow",
  "Saya sedia membantu anda dan keluarga dengan penyelesaian takaful & insurans yang sesuai dengan\n            keperluan serta matlamat hidup anda.": "I am ready to help you and your family with Takaful and insurance solutions tailored to your needs and life goals.",
  "Hubungi Mekja di WhatsApp": "Chat with Me on WhatsApp",
  "Kenali Saya": "Get to Know Me", "Jom Rancang Masa Depan Bersama ♡": "Let's Plan Your Future Together ♡",
  "Perlindungan Menyeluruh": "Comprehensive Protection",
  "Khidmat Profesional": "Professional Service", "Bersama Sehingga Tuntas": "Here for You Every Step",
  "PERUNDING TAKAFUL BERTAULIAH": "CERTIFIED TAKAFUL CONSULTANT",
  "Saya komited untuk membantu anda membuat keputusan yang tepat demi masa depan yang lebih\n                  baik.": "I am committed to helping you make the right decisions for a better future.",
  "Kenali Saya Lebih Lanjut": "Learn More About Me",
  "PELAN TAKAFUL TERBAIK DI PRUBSN": "PRUBSN'S BEST TAKAFUL PLANS",
  "Pilih Perlindungan Yang Sesuai Untuk Anda & Keluarga": "Choose the Right Protection for You & Your Family",
  "Terokai perlindungan hibah, kad perubatan dan penyakit kritikal, kemudian lihat pilihan pelan dengan lebih lanjut.": "Explore hibah, Medical Card and critical illness protection, then view the plan options in more detail.",
  "PALING POPULAR": "MOST POPULAR", "TANPA HAD SEUMUR HIDUP": "UNLIMITED LIFETIME LIMIT",
  "KHAS WANITA": "DESIGNED FOR WOMEN", "PELAN PENDIDIKAN": "EDUCATION PLAN",
  "Lihat Selanjutnya": "Learn More", "Tidak Pasti Pelan Mana?": "Not Sure Which Plan?",
  "Hubungi Mekja untuk konsultasi percuma & cadangan pelan terbaik mengikut\n              bajet anda.": "Contact me for a free consultation and plan recommendations to suit your budget.",
  "WhatsApp Sekarang": "WhatsApp Now", "Hubungi Sekarang": "Contact Me Now", "TENTANG SAYA": "ABOUT ME",
  "Saya Di Sini Untuk Anda": "I Am Here for You",
  "Nama saya": "My name is", "Penilaian Pelanggan": "Client Rating",
  "Tahun Pengalaman": "Years of Experience", "Keluarga Dibantu": "Families Helped",
  "Seluruh Malaysia": "Across Malaysia", "Hubungi Mekja Sekarang": "Contact Me Now",
  "PRODUK & PERKHIDMATAN": "PRODUCTS & SERVICES",
  "Pilihan Takaful & Insurans Untuk Setiap Fasa Kehidupan": "Takaful & Insurance Options for Every Stage of Life",
  "Daripada melindungi kesihatan sehinggalah masa depan keluarga, kami menyediakan pelbagai produk takaful dan\n            insurans yang fleksibel dan sesuai dengan keperluan anda.": "From health protection to your family's future, we offer a range of flexible Takaful and insurance products to suit your needs.",
  "Lihat Semua Produk": "View All Products",
  "Takaful bukan sekadar perlindungan, tetapi pelaburan untuk masa depan.": "Takaful is more than protection — it is an investment in your future.",
  "Takaful Kesihatan": "Health Takaful", "Takaful Hayat": "Family Takaful",
  "Takaful Keluarga": "Family Protection", "Takaful Pendidikan": "Education Takaful",
  "Takaful Simpanan": "Savings Takaful", "Ketahui Lanjut": "Learn More",
  "Perlindungan bil rawatan dan pembedahan hospital swasta untuk anda dan keluarga tersayang.": "Cover private hospital treatment and surgery costs for you and your loved ones.",
  "Ketenangan minda dan penggantian gaji bagi menjamin kelangsungan masa depan waris tercinta.": "Peace of mind and income replacement to protect your loved ones' future.",
  "Pakej perlindungan menyeluruh satu bumbung yang melindungi pasangan dan anak-anak serentak.": "Comprehensive family protection covering your spouse and children.",
  "Sokong impian pendidikan anak-anak anda seawal kandungan sehingga menara gading.": "Support your children's education journey, from pregnancy through university.",
  "Rancang kewangan persaraan, haji dan umrah dengan pelaburan patuh Shariah dipantau pakar.": "Plan for retirement, Hajj and Umrah with expert-managed Shariah-compliant investments.",
  "PERANCANGAN HIBAH": "HIBAH PLANNING",
  "Mengapa Hibah Penting?": "Why Is Hibah Important?",
  "Jika sesuatu berlaku kepada pencari nafkah, keluarga masih memerlukan kewangan untuk meneruskan kehidupan. Hibah membantu menyediakan manfaat kewangan kepada insan tersayang.": "If something happens to the breadwinner, the family still needs financial support to continue. Hibah can provide a benefit for loved ones.",
  "Lindungi Kewangan Keluarga": "Protect Your Family's Finances",
  "Sediakan manfaat kewangan untuk membantu keluarga menghadapi perkara yang tidak dijangka.": "Provide a financial benefit to help your family face the unexpected.",
  "Gantikan Pendapatan Yang Hilang": "Replace Lost Income",
  "Bantu menyediakan sumber kewangan kepada keluarga jika pencari nafkah meninggal dunia atau mengalami TPD, tertakluk pada terma sijil.": "Help provide financial support if the breadwinner passes away or experiences TPD, subject to certificate terms.",
  "Bantu Selesaikan Komitmen": "Help Manage Financial Commitments",
  "Manfaat hibah boleh membantu keluarga mengurus pinjaman rumah, hutang dan perbelanjaan harian.": "A hibah benefit can help the family manage a mortgage, debts and daily expenses.",
  "Pastikan Keluarga Ada Persediaan": "Help Prepare Your Family",
  "Perancangan awal memberi keluarga sokongan kewangan apabila ia paling diperlukan.": "Planning ahead can provide your family with financial support when it is needed most.",
  "Lihat pilihan pelan Hibah": "Explore Hibah plans",
  "PERSEDIAAN KESIHATAN": "HEALTH PREPARATION",
  "Mengapa Medical Card Penting?": "Why Is a Medical Card Important?",
  "Malang tidak berbau. Apabila berlaku kemalangan atau kecemasan, kos rawatan dan kemasukan hospital boleh menjadi beban kewangan yang besar.": "Accidents and emergencies can happen at any time. Treatment and hospital admission costs can become a significant financial burden.",
  "Malang Tidak Berbau": "Be Ready for the Unexpected",
  "Kemalangan dan kecemasan boleh berlaku pada bila-bila masa.": "Accidents and emergencies can happen at any time.",
  "Perlu Rawatan & Pembedahan": "When Treatment or Surgery Is Needed",
  "Apabila keadaan memerlukan kemasukan ke hospital, kos rawatan boleh meningkat dengan cepat.": "When hospital admission is needed, treatment costs can rise quickly.",
  "Jangan Biarkan Kos Rawatan Menjejaskan Kewangan": "Keep Treatment Costs from Derailing Your Finances",
  "Kos rawatan yang tinggi boleh memberi tekanan kepada kewangan keluarga jika tiada persediaan.": "High treatment costs can put pressure on family finances without preparation.",
  "Lebih Bersedia Dengan Medical Card": "Be More Prepared with a Medical Card",
  "Medical Card membantu mengurus kos rawatan hospital mengikut manfaat, had dan terma pelan yang dipilih.": "A Medical Card can help manage hospital treatment costs, subject to the selected plan's benefits, limits and terms.",
  "Lihat pilihan Medical Card": "Explore Medical Card plans",
  "Pilihan Takaful": "Takaful Options", "Pelan Takaful": "Takaful Plans",
  "PRUDENTIAL BSN TAKAFUL": "PRUDENTIAL BSN TAKAFUL",
  "PELAN TAKAFUL TERBAIK DI ": "BEST TAKAFUL PLANS AT ",
  "Pilih perlindungan yang sesuai untuk diri, keluarga dan masa depan anda.": "Choose the right protection for you, your family and your future.",
  "Lihat Kategori & Pilihan Pelan": "Show Plan Categories & Options",
  "Sembunyikan Kategori & Pilihan Pelan": "Hide Plan Categories & Options",
  "Pilihan Pelan Hibah Takaful": "Hibah Takaful Plan Options",
  "Pilihan Pelan Medical Card": "Medical Card Plan Options",
  "Pilihan Pelan Penyakit Kritikal": "Critical Illness Plan Options",
  "Pilihan Pelan Takaful Wanita": "Women's Takaful Plan Options",
  "Pilihan Pelan Anak & Edu": "Child & Education Plan Options",
  "Pilihan Pelan Simpanan Shariah": "Shariah Savings Plan Options",
  "Pilihan Pelan Microtakaful": "Microtakaful Plan Options",
  "Klik kategori di bawah untuk menyemak butiran manfaat dan mendapatkan sebut harga percuma:": "Select a category below to view benefits and get a free quote:",
  "Penyakit Kritikal": "Critical Illness", "Takaful Wanita": "Women's Takaful",
  "Pelan Anak & Edu": "Child & Education Plan", "Simpanan Shariah": "Shariah Savings",
  "Kurang pasti pelan mana yang sesuai dengan bajet\n                bulanan anda?": "Not sure which plan suits your monthly budget?",
  "Mekja boleh bantu buat simulasi cadangan suai padan mengikut\n                kemampuan sebenar anda.": "I can help create a tailored recommendation based on what you can afford.",
  "Tanya Sekarang": "Ask Now", "KETAHUI KEPERLUAN ANDA": "UNDERSTAND YOUR NEEDS",
  "Takaful Bukan Kemewahan, Tetapi Payung Kewangan Sebelum Hujan Tiba.": "Takaful Is Not a Luxury, but a Financial Umbrella for a Rainy Day.",
  "Kesihatan dan rezeki boleh berubah sekelip mata. Berikut perbezaan ketara apabila anda bersedia dengan pelan\n            perlindungan terancang:": "Health and circumstances can change in an instant. Here's the difference a planned protection strategy can make:",
  "Tanpa Perlindungan Takaful": "Without Takaful Protection",
  "Bersama Prudential BSN Takaful": "With Prudential BSN Takaful",
  "Simpanan Licin:": "Drained Savings:", "Beban Waris:": "Burden on Your Family:",
  "Akaun Dibekukan:": "Frozen Accounts:", "Medical Card Cashless:": "Cashless Medical Card:",
  "Hibah Tunai Segera:": "Immediate Hibah Payout:", "Ketenangan Fikiran:": "Peace of Mind:",
  "UJIAN HIDUP & PERLINDUNGAN": "LIFE'S CHALLENGES & PROTECTION",
  "Bagaimana Takaful Membantu?": "How Does Takaful Help?",
  "Pilih salah satu senario di bawah untuk melihat bagaimana pelan takaful bertindak melindungi anda:": "Choose a scenario below to see how Takaful can protect you:",
  "🏥 Kemasukan Wad Hospital": "🏥 Hospital Admission",
  "⚠️ Sakit Kritikal & Hilang Upaya": "⚠️ Critical Illness & Disability",
  "🕊️ Kematian Pencari Nafkah": "🕊️ Loss of a Breadwinner",
  "LANGKAH DEMI LANGKAH": "STEP BY STEP", "4 Langkah Mudah Memiliki Sijil Takaful": "4 Easy Steps to Get Takaful Coverage",
  "Proses permohonan 100% digital, pantas, dan dibimbing rapi oleh perunding bertauliah.": "A fast, fully digital application guided by a certified consultant.",
  "Konsultasi Percuma": "Free Consultation",
  "Bincangkan keperluan perlindungan dan kemampuan caruman bulanan anda secara santai di WhatsApp.": "Discuss your protection needs and monthly contribution budget on WhatsApp.",
  "Pilih Sebut Harga": "Choose a Quote",
  "Terima cadangan quotation rasmi mengikut umur dan profil risiko anda tanpa sebarang komitmen paksaan.": "Receive a formal quote based on your age and risk profile, with no obligation.",
  "Daftar Digital": "Digital Registration",
  "Pengesahan permohonan melalui sistem e-Application Prudential yang selamat terus dari telefon anda.": "Complete your application securely through Prudential's e-Application system on your phone.",
  "Sijil Aktif & Terjamin": "Your Certificate Is Active",
  "Sijil takaful berkuat kuasa serta-merta setelah diluluskan dan e-Polisi dihantar ke e-mel anda.": "Your Takaful certificate takes effect upon approval, and your e-policy is sent by email.",
  "KALKULATOR PINTAR": "SMART CALCULATOR",
  "Anggaran Caruman Hibah Pantas": "Quick Hibah Contribution Estimate",
  "Pilih pelan, umur dan jumlah perlindungan untuk melihat anggaran ilustrasi caruman bulanan.": "Choose a plan, age and coverage amount to view an illustrative monthly contribution estimate.",
  "Pilihan Pelan Hibah": "Hibah Plan Selection",
  "Anggaran sahaja. Caruman sebenar bergantung pada maklumat dan kelulusan permohonan.": "Estimates only. Actual contributions depend on application details and approval.",
  "Semak anggaran caruman dan manfaat pelan sebelum meminta sebut harga.": "Review the estimated contributions and plan benefits before requesting a quote.",
  "Contoh Manfaat Perlindungan": "Example Protection Benefits",
  "Anggaran Caruman Tahunan": "Estimated Annual Contribution",
  "Anggaran Caruman": "Estimated Contribution",
  "Sesuai Untuk": "Suitable For",
  "Ringkasan anggaran pelan": "Plan estimate summary",
  "Anggaran sahaja. Caruman dan manfaat sebenar tertakluk pada sebut harga rasmi, kelayakan serta terma sijil.": "Estimates only. Actual contributions and benefits are subject to the official quote, eligibility and certificate terms.",
  "5 Tahun": "5 Years",
  "10 Tahun": "10 Years",
  "18 – 25": "18 – 25",
  "26 – 35": "26 – 35",
  "36 – 45": "36 – 45",
  "46 – 60": "46 – 60",
  "RM50 – RM60 / bulan": "RM50 – RM60 / month",
  "RM61 – RM75 / bulan": "RM61 – RM75 / month",
  "RM76 – RM85 / bulan": "RM76 – RM85 / month",
  "RM86 – RM100 / bulan": "RM86 – RM100 / month",
  "RM100 / bulan": "RM100 / month",
  "RM110 / bulan": "RM110 / month",
  "RM120 / bulan": "RM120 / month",
  "RM140 / bulan": "RM140 / month",
  "RM50,000 – RM180,000 setahun": "RM50,000 – RM180,000 per year",
  "RM25,000 – RM100,000 setahun": "RM25,000 – RM100,000 per year",
  "Sejuta Kasih Hibah untuk keluarga": "Sejuta Kasih Hibah for your family",
  "Nilai tunai & simpanan terkumpul": "Accumulated cash value and savings",
  "Pemilik perniagaan": "Business owners",
  "Golongan profesional": "Professionals",
  "Individu berpendapatan tinggi": "High-income individuals",
  "Mereka yang ingin membina legasi keluarga": "Those who want to build a family legacy",
  "Critical Illness Protection": "Critical Illness Protection",
  "Serendah RM50 / bulan": "From RM50 / month",
  "Pampasan untuk Penyakit Kritikal Peringkat Awal": "Benefit for early-stage critical illness",
  "Pampasan untuk Penyakit Kritikal Peringkat Akhir": "Benefit for late-stage critical illness",
  "Perlindungan meningkat secara automatik setiap 5 tahun sehingga tambahan 30%": "Coverage automatically increases every 5 years by up to an additional 30%",
  "Elaun Pemulihan RM10,000 untuk pembedahan besar atau kemasukan ICU": "RM10,000 recovery allowance for major surgery or ICU admission",
  "Manfaat Penyakit Terminal dan Kematian": "Terminal illness and death benefit",
  "Tertakluk kepada terma, syarat dan kelulusan PruBSN Takaful.": "Subject to PruBSN Takaful terms, conditions and approval.",
  "Lady Plan": "Lady Plan",
  "Penyakit khusus wanita": "Women's specific illnesses",
  "Ganjaran berkahwin, melahirkan anak, haji/umrah & pendidikan": "Rewards for marriage, childbirth, Hajj/Umrah and education",
  "Penjagaan mental sehingga RM5,000": "Mental wellness support up to RM5,000",
  "Mom Care untuk kehamilan, kesuburan & bayi": "Mom Care for pregnancy, fertility and baby",
  "Perlindungan fleksibel mengikut bajet": "Flexible coverage to suit your budget",
  "Tertakluk kepada terma & syarat polisi Prudential BSN Takaful Berhad.": "Subject to the terms and conditions of the Prudential BSN Takaful Berhad policy.",
  "🟢 Basic": "🟢 Basic",
  "🔵 Essential": "🔵 Essential",
  "🟣 Superior": "🟣 Superior",
  "Serendah RM65 / bulan": "From RM65 / month",
  "Serendah RM80 / bulan": "From RM80 / month",
  "Serendah RM100 / bulan": "From RM100 / month",
  "Manfaat Komplikasi Bayi": "Baby complication benefit",
  "Simpanan (Saving) Bayi": "Baby savings",
  "Manfaat Penyakit Tumbesaran Bayi (ADHD, Autisma dan lain-lain)": "Benefits for developmental conditions (ADHD, autism and others)",
  "Kematian / TPD": "Death / TPD",
  "Kematian Akibat Kemalangan": "Accidental Death",
  "Kemalangan Pengangkutan Awam": "Public Transport Accident",
  "Kemalangan Di Luar Negara": "Overseas Accident",
  "Kematian Akibat Bencana Alam": "Death Due to Natural Disaster",
  "Pampasan Kematian & TPD 100% melalui konsep Hibah Takaful": "100% Death & TPD benefit through the Hibah Takaful concept",
  "Manfaat Kematian Akibat Kemalangan": "Accidental Death Benefit",
  "Nilai Tunai terkumpul": "Accumulated Cash Value",
  "Hibah terus kepada penama": "Hibah paid directly to the named beneficiary",
  "WhatsApp Mekja": "WhatsApp Mekja",
  "Teruskan untuk sebut harga": "Continue to get a quote",
  "Ini merupakan anggaran awal sahaja. Caruman sebenar bergantung pada umur, jantina, pekerjaan, status kesihatan, status merokok dan keputusan underwriting Prudential BSN.": "This is an initial estimate only. Actual contributions depend on age, gender, occupation, health status, smoking status and Prudential BSN underwriting decisions.",
  "Anggaran Caruman Bulanan": "Estimated Monthly Contribution", "Sila masukkan umur": "Please enter your age",
  "Umur mestilah nombor bulat antara 18 hingga 60 tahun.": "Age must be a whole number between 18 and 60.",
  "Umur mesti 18–60 tahun": "Age must be 18–60 years",
  "Masukkan umur yang sah antara 18 hingga 60 tahun sebelum menghantar.": "Enter a valid age between 18 and 60 before submitting.",
  "Pilih jantina": "Select gender",
  "Sila pilih jantina sebelum menghantar.": "Please select a gender before submitting.",
  "Dapatkan Sebut Harga Rasmi Percuma": "Get a Free Official Quote",
  "*Anggaran kasar bergantung kepada pengunderaitan kesihatan\n              rasmi.": "*This is an estimate and is subject to formal medical underwriting.",
  "Umur Anda": "Your Age", "Pilih atau taip umur": "Select or enter your age",
  "Masukkan umur anda (contoh: 25)": "Enter your age (e.g. 25)", "Status Merokok /": "Smoking /",
  "Tidak Merokok": "Non-smoker", "Merokok / Vape": "Smoker / Vape",
  "Jumlah Perlindungan": "Coverage Amount", "Jumlah Perlindungan Hibah": "Hibah Coverage Amount",
  "Hantar Maklumat Ini Untuk Quotation Rasmi": "Send These Details for an Official Quote",
  "ANALISIS KEPERLUAN": "NEEDS ASSESSMENT",
  "Semak Kelayakan & Kesesuaian Pelan": "Check Your Eligibility & Plan Suitability",
  "Umur Anda": "Your Age", "Sektor Pekerjaan": "Employment Sector",
  "Gaji Bulanan (RM)": "Monthly Income (RM)",
  "Bajet Bulanan Takaful (RM)": "Monthly Takaful Budget (RM)",
  "Contoh: 3500": "e.g. 3500", "Contoh: 200": "e.g. 200",
  "Status Tanggungan": "Dependent Status", "Risiko Terbesar Anda": "Your Biggest Risk",
  "Pilih status tanggungan": "Select your dependent status",
  "Bujang": "Single", "Berkahwin": "Married",
  "Berkahwin & Ada Anak": "Married with Children",
  "Ada Komitmen Rumah": "Has a Home Loan",
  "Pemilik Perniagaan": "Business Owner",
  "Pilih risiko utama": "Select your main risk",
  "Kos Hospital Swasta Mahal": "High Private Hospital Costs",
  "Keluarga Tiada Dana Jika Saya Tiada": "No Financial Support for My Family if I Am Gone",
  "Penyakit Kritikal": "Critical Illness",
  "Hutang Rumah / Komitmen Bulanan": "Home Loan / Monthly Commitments",
  "Pendidikan Anak": "Children's Education",
  "Perancangan Legasi": "Legacy Planning",
  "Hantar & Semak Kelayakan Bersama Mekja": "Submit & Check Your Eligibility",
  "Maklumat anda dilindungi dan hanya digunakan untuk penyediaan sebut harga Takaful.": "Your information is protected and used only to prepare a Takaful quote.",
  "Pengiktirafan": "Recognition",
  "Pencapaian & Pengiktirafan Prudential BSN Takaful": "Prudential BSN Takaful Achievements & Recognition",
  "Lihat pengiktirafan dan pencapaian yang menjadi sebahagian daripada perjalanan kami.": "Explore the recognition and achievements that are part of our journey.",
  "Pengiktirafan Prudential BSN Takaful": "Prudential BSN Takaful recognition",
  "Pilih gambar pengiktirafan": "Choose a recognition image",
  "Gambar pengiktirafan sebelumnya": "Previous recognition image",
  "Gambar pengiktirafan seterusnya": "Next recognition image",
  "Lihat gambar pengiktirafan 1": "View recognition image 1",
  "Lihat gambar pengiktirafan 2": "View recognition image 2",
  "VISI PERLINDUNGAN": "OUR VISION FOR PROTECTION",
  "Perancangan Hari Ini, Ketenangan Esok": "Plan Today, Enjoy Peace of Mind Tomorrow",
  "SOALAN LAZIM": "FREQUENTLY ASKED QUESTIONS",
  "Jawapan Kepada Keraguan Anda": "Answers to Your Questions",
  "Semua jawapan ringkas, telus dan tidak berselindung di sebalik istilah sukar.": "Clear, honest answers without confusing jargon.",
  "Apa beza Takaful dengan Insurans Konvensional?": "What is the difference between Takaful and conventional insurance?",
  "Berapa lama tempoh menunggu (waiting period) sebelum Medical Card boleh diguna?": "How long is the waiting period before I can use my Medical Card?",
  "Saya sudah ada Medical Card syarikat tempat bekerja, perlu lagi ke kad peribadi?": "I have a company Medical Card. Do I still need personal coverage?",
  "Jika bajet saya terhad, berapa caruman paling minimum boleh saya mula?": "If my budget is limited, what is the minimum contribution I can start with?",
  "Bagaimana proses tuntutan (claim) jika saya sakit atau kemasukan wad?": "How do I make a claim if I become ill or am admitted to hospital?",
  "HUBUNGI AGENSI RASMI": "CONTACT OUR OFFICIAL AGENCY",
  "Lokasi Agensi & Perunding Anda": "Your Agency & Consultant",
  "Alamat Pejabat Agensi:": "Agency Office Address:",
  "Telefon / WhatsApp:": "Phone / WhatsApp:", "WhatsApp Rasmi:": "Official WhatsApp:",
  "Klik untuk Mesej Mekja": "Message Mekja",
  "Saya sedia membantu anda ♡": "I'm here to help ♡",
  "Hubungi untuk konsultasi percuma": "Contact me for a free consultation",
  "Lokasi": "Location", "Hantar ke WhatsApp": "Send to WhatsApp",
  "Permintaan Sebut Harga": "Quote Request", "Sila lengkapkan maklumat ringkas untuk penyediaan quotation rasmi.": "Please complete these details to prepare your official quote.",
  "Nama Anda": "Your Name", "Status Merokok": "Smoking Status",
  "Catatan / Bajet Bulanan (Jika ada)": "Notes / Monthly Budget (if any)",
  "Hantar Ke WhatsApp Mekja": "Send to Mekja on WhatsApp",
  "PERUNDING BERTAULIAH": "CERTIFIED CONSULTANT",
  "SEBUT HARGA PERCUMA": "FREE QUOTE", "Dapatkan Sebut Harga Percuma": "Get a Free Quote",
  "Sebut Harga Percuma": "Free Quote",
  "4.9 / 5": "4.9 / 5",
  "Kuantan &middot; Seluruh Malaysia": "Kuantan · Nationwide",
  "Ketenangan minda dan penggantian gaji bagi menjamin kelangsungan masa depan waris tercinta.": "Peace of mind and income replacement to protect your loved ones' future.",
  "Perlindungan kanser wanita, komplikasi kehamilan & ganjaran pencapaian hidup.": "Protection against women's cancers, pregnancy complications and life milestones.",
  "Pelan Pendidikan Anak — Sokong impian pendidikan anak seawal kandungan sehingga menara gading.": "Children's education plan — support their dreams from pregnancy through university.",
  "PruBSN WarisanGold (Hibah Berganda)": "PruBSN WarisanGold (Double Hibah)",
  "PruBSN HealthProtect (Smart Medical Card)": "PruBSN HealthProtect (Smart Medical Card)",
  "PruBSN Kritikal Care360 (Penyakit Kritikal)": "PruBSN Kritikal Care360 (Critical Illness)",
  "PruBSN Anggun (Takaful Wanita & Kehamilan)": "PruBSN Anggun (Women's & Pregnancy Takaful)",
  "PruBSN SmartLink (Pelan Anak & Edu-Protect)": "PruBSN SmartLink (Child & Education Plan)",
  "PruBSN AnugerahPlus (Simpanan & Pelaburan Shariah)": "PruBSN AnugerahPlus (Shariah Savings & Investment)",
  "PruBSN Microtakaful (Pelan Mampu Milik)": "PruBSN Microtakaful (Affordable Plan)",
  "PELAN BAJET": "BUDGET PLAN", "PALING POPULAR": "MOST POPULAR",
  "LEGASI & BISNES": "LEGACY & BUSINESS", "TANPA HAD SEUMUR HIDUP": "UNLIMITED LIFETIME LIMIT",
  "PERLINDUNGAN UTAMA": "CORE PROTECTION", "KHAS WANITA": "FOR WOMEN",
  "DARI DALAM KANDUNGAN": "FROM PREGNANCY", "PATUH SHARIAH": "SHARIAH-COMPLIANT",
  "BAJET RENDAH": "LOW-COST PLAN",
  "Direka khas untuk pasangan muda dan ibu bapa baharu yang mahukan perlindungan kewangan menyeluruh dengan caruman bulanan yang paling ekonomi.": "Designed for young couples and new parents seeking comprehensive financial protection with affordable monthly contributions.",
  "Menyediakan dana tunai segera kepada waris tanpa melalui proses pusaka rumit untuk melunaskan baki hutang dan memastikan kelangsungan hidup anak isteri.": "Provides immediate cash to beneficiaries without lengthy estate procedures, helping settle debts and support your family.",
  "Membina legasi harta kekayaan keluarga melalui hibah bernilai tinggi serta simpanan terkumpul dengan tempoh bayaran caruman terhad (5, 10, atau 20 tahun).": "Build a family legacy with high-value hibah and accumulated savings, with limited contribution terms of 5, 10 or 20 years.",
  "Menampung 100% kos rawatan dan pembedahan di hospital pakar swasta dengan kemasukan segera tanpa deposit (Guarantee Letter pantas).": "Covers treatment and surgery at private specialist hospitals, with cashless admission through a fast Guarantee Letter.",
  "Menyediakan pampasan tunai pukal terus ke akaun anda sekiranya disahkan menghidap penyakit kritikal untuk menampung kos sara hidup semasa tidak berkeupayaan bekerja.": "Provides a lump-sum cash benefit if you are diagnosed with a critical illness, helping cover living costs while you are unable to work.",
  "Pelan istimewa direka khas memahami fasa hidup wanita — melindungi daripada risiko kanser wanita, komplikasi kehamilan, dan rawatan khas organ reproduktif.": "A plan designed for women's life stages, covering women's cancers, pregnancy complications and reproductive health treatment.",
  "Memastikan kesihatan dan masa depan pendidikan anak terjamin seawal 13 minggu kehamilan sehingga alam dewasa.": "Protects your child's health and education from as early as 13 weeks of pregnancy through adulthood.",
  "Gabungan seimbang antara perlindungan takaful dan simpanan pelaburan berasaskan Shariah bagi mencapai matlamat kewangan masa depan.": "Combines Takaful protection with Shariah-based investment savings to help achieve future financial goals.",
  "Pelan perlindungan asas dengan caruman sangat rendah sesuai untuk golongan B40 dan pekerja gig yang ingin memulakan langkah pertama perlindungan.": "An affordable basic protection plan for lower-income households and gig workers taking their first step towards coverage.",
  "Pampasan Kematian & Hilang Upaya Kekal (TPD) 100%": "100% Death & Total Permanent Disability (TPD) benefit",
  "Manfaat Tambahan Kematian Akibat Kemalangan": "Additional accidental death benefit",
  "Mempunyai Nilai Tunai Terkumpul (Cash Value)": "Includes accumulated cash value",
  "Pilihan lebih 10 rider tambahan fleksibel": "Over 10 flexible optional riders",
  "Pampasan Kematian & TPD sehingga RM1,000,000+": "Death & TPD benefit up to RM1,000,000+",
  "Manfaat Gandaan Kemalangan sehingga 600%": "Accidental death benefit of up to 600%",
  "Khairat Kematian Segera & Badal Haji RM6,000": "Immediate funeral benefit & RM6,000 Badal Hajj benefit",
  "Pilihan Pampasan Penyakit Kritikal Komprehensif": "Comprehensive critical illness benefit options",
  "Hibah bernilai tinggi eksklusif untuk waris": "High-value hibah exclusively for beneficiaries",
  "Tempoh caruman terhad, perlindungan sehingga umur 100": "Limited contribution term, with coverage up to age 100",
  "Nilai tunai & dividen simpanan pelaburan terkumpul": "Accumulated cash value and investment savings dividends",
  "Perlindungan aset perniagaan & pemegang taruh": "Business asset and stakeholder protection",
  "Tiada Had Seumur Hidup (Unlimited Lifetime Limit)": "No lifetime limit",
  "Kemasukan Hospital Pakar Tanpa Tunai (Cashless)": "Cashless admission to specialist hospitals",
  "Elaun Tunai Harian Wad Hospital Swasta & Kerajaan": "Daily hospital cash allowance at private and public hospitals",
  "Aplikasi Digital Kad Perubatan di telefon pintar": "Digital Medical Card app for your smartphone",
  "Pampasan Tunai Pukal sehingga 43 jenis Penyakit Kritikal": "Lump-sum benefit for up to 43 critical illnesses",
  "Peringkat Awal hingga Akhir (Early to Late Stage)": "Coverage from early to late stages",
  "Pengecualian caruman bulanan (Waiver of Contribution) jika diuji": "Monthly contribution waiver if you are diagnosed",
  "Pengeluaran tunai tanpa perlu mengemukakan resit hospital": "Cash benefit with no hospital receipts required",
  "Perlindungan Kanser Khusus Wanita & Sistem Reproduktif": "Coverage for women's cancers and reproductive system",
  "Pampasan Komplikasi Kehamilan & Keabnormalan Bayi": "Benefit for pregnancy complications and congenital conditions",
  "Ganjaran Tunai Pencapaian Hidup (Perkahwinan, Kelahiran)": "Cash rewards for life milestones (marriage, childbirth)",
  "Rawatan pembinaan semula payudara & wajah akibat kemalangan": "Breast and facial reconstructive surgery after an accident",
  "Perlindungan bermula seawal 13 minggu dalam kandungan": "Coverage from as early as 13 weeks of pregnancy",
  "Medical Card Komprehensif Tanpa Had untuk anak": "Comprehensive unlimited Medical Card for your child",
  "Penyelamat Caruman (Payer Waiver) jika ibu bapa diuji": "Contribution waiver if a parent is diagnosed",
  "Simpanan terkumpul untuk dana masuk kolej / universiti": "Savings for college or university",
  "Simpanan terancang untuk matlamat haji, umrah & persaraan": "Planned savings for Hajj, Umrah and retirement",
  "Pilihan dana pelaburan patuh Shariah dipantau pakar": "Expert-managed Shariah-compliant investment funds",
  "Fleksibiliti pengeluaran tunai apabila diperlukan": "Flexible cash withdrawals when needed",
  "Bonus kesetiaan sijil dan pampasan perlindungan": "Certificate loyalty bonus and protection benefits",
  "Caruman bermula serendah RM20/bulan": "Contributions start from RM20/month",
  "Perlindungan asas kematian & TPD": "Basic death and TPD protection",
  "Proses permohonan mudah & pantas": "Simple and fast application process",
  "Sesuai untuk semua golongan pendapatan": "Suitable for all income levels",
  "Daripada serendah RM50 - RM80/bulan": "From as little as RM50–RM80/month",
  "Caruman mengikut umur & pilihan dana hibah": "Contribution depends on age and selected hibah amount",
  "Pelan premium fleksibel jangka panjang": "Flexible long-term contribution plan",
  "Perlindungan kesihatan terbaik seisi keluarga": "Quality health protection for the whole family",
  "Perlindungan tunai kecemasan diri & keluarga": "Emergency cash protection for you and your family",
  "Ketenangan wanita bekerjaya dan suri rumah": "Peace of mind for working women and homemakers",
  "Hadiah perlindungan terhebat untuk masa depan anak": "A meaningful protection gift for your child's future",
  "Bina simpanan sambil dilindungi": "Build your savings while staying protected",
  "Bermula serendah RM20/bulan": "From just RM20/month",
  "Kemasukan Wad & Pembedahan Kecemasan": "Hospital Admission & Emergency Surgery",
  "Bil pembedahan mengejut boleh mencecah puluhan ribu ringgit. Tanpa perlindungan, wang simpanan bertahun terpaksa dikorbankan.": "Emergency surgery can cost tens of thousands. Without coverage, years of savings may be wiped out.",
  "Medical Card Prudential BSN mengeluarkan Surat Jaminan (Guarantee Letter) pantas. Rawatan pakar swasta diteruskan tanpa deposit tunai.": "A Prudential BSN Medical Card can provide a fast Guarantee Letter, allowing private specialist treatment without a cash deposit.",
  "PruBSN HealthProtect Smart Medical Card": "PruBSN HealthProtect Smart Medical Card",
  "Penyakit Kritikal & Kehilangan Upaya (TPD)": "Critical Illness & Total Permanent Disability (TPD)",
  "Kanser atau serangan jantung memerlukan rehat berpanjangan, menyebabkan punca pendapatan keluarga terhenti serta-merta.": "Cancer or a heart attack may require extended recovery, immediately affecting your family's income.",
  "Pampasan tunai Hibah & Penyakit Kritikal dibayar sekaligus untuk menampung kos sara hidup dan pemulihan tanpa perlu bekerja tergesa-gesa.": "A lump-sum hibah and critical illness benefit can help cover living and recovery costs without rushing back to work.",
  "PruBSN WarisanGold & Kritikal Care360": "PruBSN WarisanGold & Kritikal Care360",
  "Kematian Pencari Nafkah Utama": "Loss of the Main Breadwinner",
  "Akaun simpanan dan harta beku melalui proses faraid yang mengambil masa berbulan atau bertahun, meninggalkan tanggungan terkapai-kapai.": "Savings and assets may be frozen during lengthy estate distribution, leaving dependents without immediate support.",
  "Wang Hibah diserahkan terus kepada penama (isteri/anak) dalam masa singkat tanpa melalui proses mahkamah atau pusaka.": "Hibah funds are paid directly to nominated beneficiaries, such as a spouse or children, without lengthy court or estate procedures.",
  "PruBSN WarisanGold / Anugerah Max": "PruBSN WarisanGold / Anugerah Max",
  "Risiko Nyata": "The Risk", "Pelan Disyorkan:": "Recommended Plan:",
  "Solusi & Perlindungan Takaful": "Takaful Protection & Solution",
  "Rujuk Situasi Ini Bersama Mekja": "Discuss This Situation with Mekja",
  "Kenapa Pelan Ini Diperlukan?": "Why Do You Need This Plan?",
  "Manfaat Utama": "Key Benefits", "Cadangan Komitmen:": "Estimated Contribution:",
  "Semak Sebut Harga Pelan Ini": "Get a Quote for This Plan",
  "Tanya Mekja di WhatsApp": "Ask Mekja on WhatsApp",
  "Anugerah Max – Medical Card Plan R&B 150": "Anugerah Max – Medical Card Plan R&B 150",
  "Anugerah Max – Medical Card Plan R&B 200": "Anugerah Max – Medical Card Plan R&B 200",
  "Anugerah Max – Medical Card Plan R&B 250": "Anugerah Max – Medical Card Plan R&B 250",
  "Anugerah Max – Medic Total Care (Plan 250) + MedicBoost": "Anugerah Max – Medic Total Care (Plan 250) + MedicBoost",
  "Health360": "Health360",
  "Pre Birth + Medical Card": "Pre Birth + Medical Card",
  "Budget Friendly": "Budget Friendly",
  "Family Protection": "Family Protection",
  "Enhanced Protection": "Enhanced Protection",
  "Exclusive Medical Card": "Exclusive Medical Card",
  "Perlindungan Sehingga RM1 Juta": "Up to RM1 Million Coverage",
  "Premier Medical Card": "Premier Medical Card",
  "Tiada Had Tahunan": "No Annual Limit",
  "Pre Birth + Medical": "Pre Birth + Medical",
  "Pelan bajet yang memberikan perlindungan asas medical card dengan had tahunan untuk memenuhi kebanyakan keperluan hospitalisasi di Malaysia.": "A budget plan offering essential Medical Card coverage with an annual limit for most hospitalisation needs in Malaysia.",
  "Perlindungan menyeluruh untuk keluarga dengan had tahunan berganda dan manfaat pesakit luar untuk penyakit berjangkit serta kemalangan.": "Comprehensive family protection with a doubled annual limit and outpatient benefits for infectious diseases and accidents.",
  "Perlindungan premium dengan had tahunan tinggi dan liputan komprehensif termasuk komplikasi kehamilan untuk ketenangan minda sepenuhnya.": "Premium protection with a high annual limit and comprehensive coverage, including pregnancy complications, for added peace of mind.",
  "Kombinasi eksklusif yang memberikan boost had tahunan sehingga RM1 juta — pilihan terbaik untuk mereka yang mahukan perlindungan maksimum tanpa had.": "An exclusive combination that boosts the annual limit up to RM1 million, for those seeking maximum coverage.",
  "Pelan perubatan premier tanpa had tahunan dan had perlindungan yang tinggi — perlindungan tanpa batas untuk anda dan keluarga tercinta.": "A premier medical plan with no annual limit and a high coverage limit for you and your family.",
  "Membantu ibu bapa membuat persediaan dari segi kewangan, kesihatan dan emosi sebelum bayi lahir.": "Helps parents prepare financially, physically and emotionally before their baby arrives.",
  "Had Tahunan RM150,000": "RM150,000 Annual Limit",
  "Protect Well (In-Patient)": "Protect Well (In-Patient)",
  "Pre & Post Hospitalisation": "Pre- and Post-Hospitalisation",
  "Hibah Asas RM10,000": "RM10,000 Basic Hibah",
  "Had Tahunan RM200,000": "RM200,000 Annual Limit",
  "Had Tambahan RM200,000": "RM200,000 Additional Limit",
  "Rawatan Pesakit Luar Penyakit Berjangkit & Kemalangan": "Outpatient Treatment for Infectious Diseases & Accidents",
  "Had Tahunan RM250,000": "RM250,000 Annual Limit",
  "Had Tambahan RM250,000": "RM250,000 Additional Limit",
  "Komplikasi Kehamilan": "Pregnancy Complications",
  "Boost Had Tahunan sehingga RM1 juta": "Annual Limit Boost up to RM1 million",
  "Protect Well": "Protect Well",
  "Had perlindungan yang tinggi": "High Coverage Limit",
  "Rawatan pesakit luar kanak-kanak": "Children's Outpatient Treatment",
  "Hibah Asas RM25,000": "RM25,000 Basic Hibah",
  "Kos Rawatan Swasta & Kepentingan Medical Card": "Private Treatment Costs & the Importance of a Medical Card",
  "Kos rawatan hospital swasta boleh mencecah puluhan hingga ratusan ribu ringgit. Medical Card membantu mengurangkan beban kewangan apabila rawatan diperlukan.": "Private hospital treatment can cost tens or hundreds of thousands of ringgit. A Medical Card can help reduce the financial burden when treatment is needed.",
  "Kos rawatan:": "Treatment cost:",
  "Jenis Penyakit Kritikal": "Critical Illness",
  "Rawatan Utama Swasta": "Typical Private Treatment",
  "Kos Rawatan Utama": "Estimated Treatment Cost",
  "Kanser (Tahap Komprehensif)": "Cancer (Comprehensive Treatment)",
  "Serangan Jantung & Pintasan Arteri": "Heart Attack & Coronary Artery Bypass",
  "Penyakit Strok (Cerebrovascular)": "Stroke (Cerebrovascular Disease)",
  "Kegagalan Buah Pinggang (Kidney Failure)": "Kidney Failure",
  "Tumor Otak Benigna (Brain Tumor)": "Benign Brain Tumour",
  "Penyakit Hati Kronik (End-stage Liver)": "Chronic Liver Disease (End-Stage)",
  "Kelecuran Parah Tahap Ketiga (Major Burns)": "Third-Degree Major Burns",
  "Bedah Mastektomi": "Mastectomy",
  "Kemoterapi": "Chemotherapy",
  "Imunoterapi": "Immunotherapy",
  "Pembedahan Pintasan": "Bypass Surgery",
  "Coronary Bypass Surgery": "Coronary Bypass Surgery",
  "Kemasukan Wad ICU Akut": "Acute ICU Admission",
  "Imbasan Otak": "Brain Imaging",
  "Rawatan Dialisis Darah": "Haemodialysis",
  "Transplan Organ": "Organ Transplant",
  "Pembedahan Craniotomy": "Craniotomy",
  "Rawatan Terapi Radiasi Stereotaktik": "Stereotactic Radiation Therapy",
  "Rawatan ICU Kegagalan Fungsi Hati": "ICU Treatment for Liver Failure",
  "Pembedahan Pemindahan Hati": "Liver Transplant Surgery",
  "Bedah Graft Kulit (Skin Grafting)": "Skin Grafting",
  "Penjagaan Steril Wad Isolasi ICU": "Sterile Isolation ICU Care",
  "Anggaran kos rawatan adalah untuk rujukan umum sahaja dan boleh berbeza mengikut hospital, keadaan pesakit serta rawatan yang diperlukan.": "Treatment costs are general estimates only and may vary by hospital, patient condition and required treatment.",
  "Anugerah Max (Hibah Takaful)": "Anugerah Max (Hibah Takaful)",
  "Warisan Gold": "Warisan Gold",
  "Warisan Gold Legacy": "Warisan Gold Legacy",
  "Pre Birth": "Pre Birth",
  "PRUBSN Anggun": "PRUBSN Anggun",
  "PruBSN Kritikal Care360": "PruBSN Kritikal Care360",
  "CRITICAL ILLNESS PROTECTION": "CRITICAL ILLNESS PROTECTION",
  "Hibah Takaful / Income Replacement": "Hibah Takaful / Income Replacement",
  "Pelan Bajet": "Budget Plan",
  "Legacy Planning": "Legacy Planning",
  "Business Owner": "Business Owner",
  "Lady Plan": "Lady Plan",
  "Khas Untuk Wanita": "For Women",
  "Pre Birth Protection": "Pre Birth Protection",
  "Perlindungan Ibu & Bayi": "Mother & Baby Protection",
  "Critical Illness": "Critical Illness",
  "Sangat sesuai untuk pasangan muda yang baru mendirikan rumah tangga serta ibu bapa yang mahukan perlindungan kewangan menyeluruh dengan komitmen caruman bulanan yang paling ekonomi.": "Ideal for young couples starting a family and parents seeking comprehensive financial protection with affordable monthly contributions.",
  "Membantu menyediakan dana tunai segera kepada waris untuk meneruskan kehidupan, melunaskan hutang dan melindungi kewangan keluarga.": "Provides beneficiaries with immediate funds to continue their lives, settle debts and protect the family's finances.",
  "Membantu membina legasi kewangan keluarga melalui hibah bernilai tinggi serta simpanan jangka panjang dengan tempoh bayaran terhad.": "Helps build a family legacy through high-value hibah and long-term savings with a limited payment term.",
  "Sebagai satu persediaan awal untuk memastikan bayi mendapat perlindungan dan ibu bapa lebih tenang menghadapi sebarang kemungkinan sebelum, semasa, dan selepas kelahiran.": "An early safeguard to help protect the baby and give parents peace of mind before, during and after birth.",
  "Pelan perlindungan khas untuk wanita di setiap peringkat kehidupan, dengan perlindungan penyakit wanita, sokongan mental, ganjaran tunai dan manfaat ibu & bayi.": "Special protection for women at every life stage, including women's illness coverage, mental health support, cash rewards and mother-and-baby benefits.",
  "Pelan pampasan penyakit kritikal yang membantu menyediakan sokongan kewangan apabila didiagnosis penyakit kritikal, supaya pelanggan boleh fokus kepada rawatan dan proses pemulihan.": "A critical illness benefit plan that provides financial support after diagnosis, so you can focus on treatment and recovery.",
  "Pampasan Kematian & TPD 100%": "100% Death & TPD benefit",
  "Manfaat Kematian akibat Kemalangan": "Accidental Death Benefit",
  "Nilai Tunai (Cash Value)": "Cash Value",
  "Lebih 10 pilihan rider tambahan": "More than 10 optional riders",
  "Khairat Kematian & Badal Haji RM6,000": "RM6,000 Funeral & Badal Hajj benefit",
  "Pampasan Penyakit Kritikal": "Critical Illness Benefit",
  "Hibah bernilai tinggi untuk keluarga": "High-value hibah for your family",
  "Tempoh bayaran terhad": "Limited payment term",
  "Nilai tunai & simpanan terkumpul": "Cash value & accumulated savings",
  "Rider Penyakit Kritikal": "Critical Illness Rider",
  "Pampasan Penyakit Kritikal Peringkat Awal": "Early-Stage Critical Illness Benefit",
  "Pampasan Penyakit Kritikal Peringkat Akhir": "Late-Stage Critical Illness Benefit",
  "Perlindungan naik automatik setiap 5 tahun sehingga +30%": "Automatic coverage increase every 5 years, up to +30%",
  "Elaun Pemulihan RM10,000": "RM10,000 Recovery Allowance",
  "Manfaat Penyakit Terminal & Kematian": "Terminal Illness & Death Benefit",
  "Perlindungan penyakit khusus wanita": "Coverage for women's specific illnesses",
  "Ganjaran tunai untuk peristiwa hidup": "Cash rewards for life events",
  "Sokongan penjagaan mental": "Mental health support",
  "Manfaat Mom Care ibu & bayi": "Mom Care benefits for mother & baby",
  "Pampasan Kematian Ibu & Bayi": "Death Benefit for Mother & Baby",
  "Manfaat Keguguran": "Miscarriage Benefit",
  "Manfaat Komplikasi Kehamilan": "Pregnancy Complications Benefit",
  "Manfaat Elaun Wad": "Hospital Allowance Benefit",
  "Perkhidmatan konsultasi disediakan secara bersemuka (face-to-face) di kawasan Pantai Timur & Lembah\n            Klang, atau secara 100% dalam talian (online) di seluruh Malaysia.": "Consultations are available in person across the East Coast and Klang Valley, or fully online throughout Malaysia.",
  "Klik untuk Mesej Mekja": "Click to Message Mekja",
  "Dapatkan cadangan perlindungan yang sesuai dengan\n              keperluan dan bajet anda.": "Get protection recommendations tailored to your needs and budget.",
  "Sila lengkapkan maklumat ringkas untuk penyediaan quotation rasmi.": "Please complete these details to prepare your official quote.",
  "Taip soalan anda di sini...": "Type your question here...",
  "Chat di WhatsApp": "Chat on WhatsApp", "Semak Polisi Sedia Ada": "Review an Existing Policy",
  "Hantar": "Send", "Seterusnya": "Next", "Kembali": "Back",
  "Langkah 01: Pilih Pelan Anda": "Step 01: Choose Your Plan",
  "Pilih kategori perlindungan yang anda minati:": "Choose the type of coverage you are interested in:",
  "Hibah Takaful": "Hibah Takaful",
  "Perlindungan kewangan & hibah untuk waris tersayang": "Financial protection and hibah for your loved ones",
  "Perlindungan hospital & rawatan perubatan untuk anda dan keluarga": "Hospital and medical coverage for you and your family",
  "Langkah 02: Maklumat Peribadi": "Step 02: Personal Details",
  "Maklumat ini akan membantu kami menyediakan cadangan yang tepat untuk anda.": "This information helps us prepare a suitable recommendation for you.",
  "Langkah 03: Maklumat Hubungan": "Step 03: Contact Details",
  "Nama Penuh": "Full Name", "Jantina": "Gender", "Lelaki": "Male",
  "Perempuan": "Female", "Pekerjaan": "Occupation",
  "Langkah 03: Maklumat Hubungan & Bajet": "Step 03: Contact Details & Budget",
  "Kami akan menghubungi anda melalui WhatsApp dengan cadangan sebut harga.": "We will contact you on WhatsApp with a quote recommendation.",
  "Nombor WhatsApp": "WhatsApp Number", "Emel (Pilihan)": "Email (Optional)",
  "Anggaran Bajet Bulanan": "Estimated Monthly Budget",
  "Dapatkan Sebut Harga via WhatsApp": "Get a Quote via WhatsApp",
  "Contoh: Ahmad Firdaus": "Example: John Smith",
  "Masukkan Umur Anda": "Enter Your Age", "Contoh: Eksekutif Swasta": "Example: Private Sector Executive",
  "Sila masukkan umur anda terlebih dahulu sebelum menghantar.": "Please enter your age before submitting.",
  "Sila pilih pelan yang diminati terlebih dahulu.": "Please select a plan first.",
  "Sila lengkapkan Nama dan Umur anda.": "Please enter your name and age.",
  "Sila masukkan nombor WhatsApp yang sah (9 hingga 15 digit).": "Please enter a valid WhatsApp number (9 to 15 digits).",
  "Sila masukkan alamat emel yang sah atau kosongkan ruangan emel.": "Please enter a valid email address or leave the email field blank.",
  "Perkhidmatan yang sangat profesional, mesra dan mudah difahami. Mekja sentiasa memberi penerangan dengan jelas dan membantu saya memilih pelan yang sesuai dengan keperluan keluarga kami.": "Very professional, friendly and easy to understand. Mekja always explains things clearly and helped me choose a plan that suits my family's needs.",
  "Proses permohonan medical card dan hibah anak-anak sangat pantas! Tak perlu pening dengan istilah rumit, Mekja terangkan satu persatu sehingga saya yakin dan tenang.": "The application for the Medical Card and my children's hibah was very quick! Mekja explained everything clearly, so I felt confident and at ease.",
  "Tuntutan wad anak saya diuruskan dengan amat lancar melalui e-Medical Card tanpa deposit tunai. Sokongan after-sales dari Mekja memang terbaik dan boleh dipercayai!": "My child's hospital claim was handled smoothly through the e-Medical Card with no cash deposit. Mekja's after-sales support is excellent and trustworthy!",
  "Puan Aisyah": "Ms Aisyah", "Encik Razak": "Mr Razak",
  "Risiko Nyata": "The Risk", "Pelan Disyorkan:": "Recommended Plan:",
  "Tahun": "Years", "Pelanggan": "Customer", "Kuantan, Pahang": "Kuantan, Pahang",
  "Takaful Hayat": "Life Takaful", "Penggantian Gaji": "Income Replacement",
  "Keluarga Muda": "Young Families", "Hibah Utama": "Primary Hibah",
  "Pelindung Komitmen": "Commitment Protection", "Dana Waris": "Beneficiary Fund",
  "High Net Worth": "High Net Worth",
  "Pampasan Tinggi": "High Benefits", "Medical Card": "Medical Card",
  "Keluarga & Individu": "Families & Individuals", "Wad Swasta": "Private Hospital",
  "Penyakit Kritikal": "Critical Illness", "Pampasan Tunai": "Cash Benefit",
  "Kesihatan Wanita": "Women's Health", "Ibu & Kehamilan": "Maternity & Pregnancy",
  "Kanser": "Cancer", "Kanak-kanak": "Children", "Simpanan Belajar": "Education Savings",
  "Medical Card Bayi": "Baby Medical Card", "Simpanan Terancang": "Planned Savings",
  "Dana Persaraan": "Retirement Fund", "Pakej Haji": "Hajj Plan",
  "Mampu Milik": "Affordable", "B40": "Lower-Income Group", "Perlindungan Asas": "Basic Protection",
  "Daripada melindungi kesihatan sehinggalah masa depan keluarga, kami menyediakan pelbagai produk takaful dan insurans yang fleksibel dan sesuai dengan keperluan anda.": "From health protection to your family's future, we offer a range of flexible Takaful and insurance products to suit your needs.",
  "Kesihatan dan rezeki boleh berubah sekelip mata. Berikut perbezaan ketara apabila anda bersedia dengan pelan perlindungan terancang:": "Health and circumstances can change in an instant. Here's the difference a planned protection strategy can make:",
  "Kos rawatan pakar swasta (RM20k - RM100k+) terpaksa dibayar tunai daripada akaun kecemasan.": "Private specialist treatment (RM20k–RM100k+) may have to be paid from your emergency savings.",
  "Jika ketua keluarga tiada, baki hutang rumah dan komitmen sara hidup tetap perlu diteruskan oleh pasangan.": "If the breadwinner is no longer there, the spouse still has to manage the mortgage and household expenses.",
  "Wang simpanan bank melalui proses pusaka berbulan-bulan sebelum boleh diagihkan kepada anak isteri.": "Bank savings may be tied up in estate proceedings for months before reaching the family.",
  "Surat Jaminan (GL) dikeluarkan terus ke hospital swasta tanpa deposit wang sendiri.": "A Guarantee Letter (GL) is sent directly to the private hospital, without an upfront deposit.",
  "Pampasan diserahkan 100% terus kepada penama dalam masa pantas tanpa potongan hutang.": "The full benefit is paid promptly to the nominee, without deductions for debts.",
  "Masa depan pelajaran anak dan kelangsungan sara hidup keluarga kekal dilindungi.": "Your children's education and your family's livelihood remain protected.",
  "Perlindungan kemalangan berkuat kuasa serta-merta sejurus sijil diluluskan. Untuk penyakit biasa, tempoh menunggu adalah 30 hari. Bagi penyakit spesifik (seperti darah tinggi, batu karang, kanser tertentu), tempoh menunggu adalah 120 hari. Sebab itu penting mengambil perlindungan semasa masih sihat.": "Accident coverage starts as soon as the certificate is approved. The waiting period is 30 days for common illnesses and 120 days for specified illnesses (such as hypertension, kidney stones and certain cancers). This is why it is important to get covered while you are healthy.",
  "Sangat digalakkan mempunyai pelan peribadi. Kad syarikat hanya sah selagi anda bekerja di syarikat tersebut. Sekiranya anda bertukar kerja, diberhentikan, bersara, atau menghidap penyakit kronik yang memaksa anda berhenti kerja, anda mungkin tidak lagi boleh memohon kad baharu kerana sudah ada rekod kesihatan sedia ada.": "A personal plan is strongly recommended. Company coverage usually ends when you leave your job. If you change jobs, are laid off, retire or develop a chronic illness, you may be unable to apply for new coverage due to your medical history.",
  "Anda boleh bermula dengan pelan Hibah Bajet (seperti PruBSN Anugerah Max) daripada serendah RM50 - RM80 sebulan bergantung kepada umur. Prinsip terbaik adalah memiliki sedikit perlindungan daripada tiada langsung, dan boleh ditambah baik apabila pendapatan meningkat kelak.": "You can start with a budget hibah plan (such as PruBSN Anugerah Max) from RM50–RM80 per month, depending on age. Some protection is better than none, and you can increase it as your income grows.",
  "Hanya tunjukkan e-Medical Card di kaunter pendaftaran hospital panel. Pihak hospital akan berhubung terus dengan Prudential BSN untuk kelulusan Guarantee Letter (GL). Mekja juga akan memantau dan membantu urusan anda sepanjang proses rawatan.": "Show your e-Medical Card at a panel hospital's registration counter. The hospital will contact Prudential BSN for a Guarantee Letter (GL). Mekja will also support you throughout your treatment.",
  "Takaful berasaskan konsep tolong-menolong (Ta'awun) dan patuh Shariah sepenuhnya tanpa unsur riba (faedah), gharar (ketidakpastian), dan maisir (perjudian). Dana caruman dimasukkan ke dalam Tabarru' untuk saling membantu peserta yang ditimpa musibah.": "Takaful is based on mutual assistance (Ta'awun) and is Shariah-compliant, avoiding riba (interest), gharar (uncertainty) and maisir (gambling). Contributions go into a Tabarru' fund to help participants facing hardship.",
  "Perkhidmatan konsultasi disediakan secara bersemuka (face-to-face) di kawasan Pantai Timur & Lembah Klang, atau secara 100% dalam talian (online) di seluruh Malaysia.": "Consultations are available in person across the East Coast and Klang Valley, or fully online throughout Malaysia.",
  "Hak Cipta Terpelihara.": "All rights reserved.",
  "Dikawal selia oleh Bank Negara Malaysia (BNM) · Ahli PIDM.": "Regulated by Bank Negara Malaysia (BNM) · PIDM member.",
  "Dasar Privasi": "Privacy Policy", "Terma & Syarat": "Terms & Conditions",
  "Tanya Mekja": "Ask Mekja", "Sedia Membantu": "Ready to Help",
  "Soalan & Bantuan Pantas:": "Quick Questions & Help:",
  "Tutup Chat": "Close Chat", "Tutup Modal": "Close Modal", "Tutup Popup": "Close Popup",
  "Sembunyikan butang pantas": "Hide quick buttons", "Paparkan butang pantas": "Show quick buttons",
  "Hantar ke WhatsApp": "Send to WhatsApp",
  "Assalamualaikum & Salam Sejahtera! Saya Mekja. Ada apa-apa yang boleh saya bantu anda fahami tentang perlindungan Takaful hari ini?": "Hello and welcome! I'm Mekja. How can I help you understand Takaful protection today?",
  "Saya nak tahu tentang": "I'd like to learn about",
  "Saya cari": "I'm looking for",
  "Berapa": "What is the",
  "anggaran caruman bulanan": "estimated monthly contribution",
  "jimat?": "that I can afford?",
  "Pelan": "Plan", "Anak & Simpanan Pendidikan": "Children & Education Savings",
  "Bantu": "Help me", "semak polisi sedia ada": "review my existing policy",
  "saya": "for me",
  "Tentang Mekja": "About Mekja",
  "TENTANG MEKJA": "ABOUT MEKJA",
  "Saya ": "I am ",
  ", seorang perunding takaful bertauliah dari agensi Prudential BSN Takaful di Malaysia. Saya berpengalaman luas dalam membimbing individu, pasangan muda, dan keluarga merancang perlindungan kewangan yang sesuai dengan fasa kehidupan mereka.": ", a certified Takaful consultant with a Prudential BSN Takaful agency in Malaysia. I have extensive experience guiding individuals, young couples and families in planning financial protection suited to their stage of life.",
  "Prinsip saya mudah: ": "My principle is simple: ",
  "Ketelusan, kefahaman dan keutamaan kepada klien": "Transparency, understanding and putting clients first",
  ". Anda berhak memahami setiap manfaat polisi secara jelas tanpa diselubungi istilah sukar atau tekanan jualan.": ". You deserve to clearly understand every policy benefit without confusing jargon or sales pressure.",
  "Isi maklumat asas di bawah untuk membolehkan Mekja menyediakan cadangan pelan yang paling berbaloi untuk anda:": "Enter your basic details below so Mekja can recommend a plan that offers value for your needs:",
  "Hibah Berganda — Persediaan kewangan keluarga apabila berlaku kehilangan pencari nafkah. Pampasan terus kepada penama.": "Double Hibah — Financial preparation for your family in the event of the loss of a breadwinner. Benefits are paid to the nominee.",
  "Kad Perubatan — Rawatan hospital swasta tanpa membebankan simpanan keluarga. Kemasukan cashless tanpa deposit.": "Medical Card — Private hospital treatment without placing a burden on family savings, with cashless admission and no deposit.",
  "Pampasan tunai apabila didiagnosis penyakit kritikal — sehingga 43 jenis penyakit dilindungi.": "Cash benefit upon diagnosis of a critical illness, with coverage for up to 43 illnesses.",
  "PruBSN Medical Card (Kad Perubatan)": "PruBSN Medical Card",
  "Nama saya": "My name is",
  "Mekja Di Sini Untuk Anda": "Mekja Is Here for You",
  "PERANCANGAN HIBAH": "HIBAH PLANNING",
  "PERSEDIAAN KESIHATAN": "HEALTH PREPARATION",
  "EKSPLORASI TERPERINCI": "DETAILED PLAN EXPLORATION",
  "Panggilan": "Call",
  "Emel": "Email",
  "Hantar Pertanyaan": "Send an Enquiry",
  "Lokasi": "Location",
  "Sila hubungi saya melalui saluran kegemaran anda:": "Please contact me through your preferred channel:",
  "Mudah Dihubungi": "Easy to Reach",
  "Chat Sekarang": "Chat Now",
  "Perundingan melalui WhatsApp": "Consultation via WhatsApp",
  "Buka lokasi di Google Maps": "Open location in Google Maps",
  "Lihat lokasi agensi": "View agency location",
  "Jom Rancang Masa Depan Bersama Mekja ♡": "Let's Plan Your Future with Mekja ♡",
  "Ingat Takaful Ingat Mekja ♡": "Think Takaful, Think Mekja ♡",
  "© 2026 Prudential BSN Takaful · Nur Ezzati Binti Mohammad Salleh. Hak Cipta Terpelihara.": "© 2026 Prudential BSN Takaful · Nur Ezzati Binti Mohammad Salleh. All rights reserved.",
  "Akademi MDA Elite Club PruBSN Takaful": "Akademi MDA Elite Club PruBSN Takaful",
  "Pilih atau taip umur": "Select or enter your age",
  "25 Thn": "25 Years",
  "30 Thn": "30 Years",
  "40 Thn": "40 Years",
  "55 Thn": "55 Years",
  "/bulan": "/month",
  "Tahun Pengalaman": "Years of Experience",
  "Keluarga Dibantu": "Families Helped",
  "Nama Pelan": "Plan Name",
  "Anda layak memahami setiap manfaat polisi secara jelas tanpa diselubungi istilah sukar atau tekanan jualan.": "You deserve to clearly understand every policy benefit without confusing jargon or sales pressure.",
  "Jika sesuatu berlaku kepada pencari nafkah, keluarga masih memerlukan kewangan untuk meneruskan kehidupan. Hibah membantu menyediakan manfaat kewangan kepada insan tersayang.": "If something happens to the breadwinner, the family still needs financial support to continue. Hibah can provide a benefit for loved ones.",
  "Malang tidak berbau. Apabila berlaku kemalangan atau kecemasan, kos rawatan dan kemasukan hospital boleh menjadi beban kewangan yang besar.": "Accidents and emergencies can happen at any time. Treatment and hospital admission costs can become a significant financial burden.",
  "Pilih salah satu senario di bawah untuk melihat bagaimana pelan takaful bertindak melindungi anda:": "Choose a scenario below to see how a Takaful plan can protect you:",
  "Kesihatan dan rezeki boleh berubah sekelip mata. Berikut perbezaan ketara apabila anda bersedia dengan pelan perlindungan terancang:": "Health and circumstances can change in an instant. Here's how a planned protection strategy can make a difference:",
  "Kos rawatan pakar swasta (RM20k - RM100k+) terpaksa dibayar tunai daripada akaun kecemasan.": "Private specialist treatment (RM20k–RM100k+) may have to be paid from your emergency savings.",
  "Jika ketua keluarga tiada, baki hutang rumah dan komitmen sara hidup tetap perlu diteruskan oleh pasangan.": "If the breadwinner is no longer there, the spouse still has to manage the mortgage and household expenses.",
  "Wang simpanan bank melalui proses pusaka berbulan-bulan sebelum boleh diagihkan kepada anak isteri.": "Bank savings may be tied up in estate proceedings for months before reaching the family.",
  "Surat Jaminan (GL) dikeluarkan terus ke hospital swasta tanpa deposit wang sendiri.": "A Guarantee Letter (GL) is sent directly to the private hospital, without an upfront deposit.",
  "Pampasan diserahkan 100% terus kepada penama dalam masa pantas tanpa potongan hutang.": "The full benefit is paid promptly to the nominee, without deductions for debts.",
  "Masa depan pelajaran anak dan kelangsungan sara hidup keluarga kekal dilindungi.": "Your children's education and your family's livelihood remain protected.",
  "Simpanan Licin": "Drained Savings",
  "Beban Waris": "Burden on Your Family",
  "Akaun Dibekukan": "Frozen Accounts",
  "Hibah Tunai Segera": "Immediate Hibah Payout",
  "Ketenangan Fikiran": "Peace of Mind",
  "Medical Card Cashless": "Cashless Medical Card",
  "Kos rawatan:": "Treatment cost:",
  "Anggaran kos rawatan adalah untuk rujukan umum sahaja dan boleh berbeza mengikut hospital, keadaan pesakit serta rawatan yang diperlukan.": "Treatment costs are general estimates for reference only and may vary by hospital, patient condition and required treatment.",
  "Nama Anda": "Your Name",
  "Umur mesti 18–60 tahun": "Age must be 18–60 years",
  "Sila masukkan umur anda terlebih dahulu sebelum menghantar.": "Please enter your age before submitting.",
  "Sila masukkan nombor WhatsApp yang sah (9 hingga 15 digit).": "Please enter a valid WhatsApp number (9 to 15 digits).",
  "Sila masukkan alamat emel yang sah atau kosongkan ruangan emel.": "Please enter a valid email address or leave the email field blank.",
  "Pilih risiko utama": "Select your main concern",
  "Sektor Pekerjaan": "Employment Sector",
  "Simpanan Licin:": "Drained Savings:",
  "Beban Waris:": "Burden on Your Family:",
  "Akaun Dibekukan:": "Frozen Accounts:",
  "Masa depan pelajaran anak dan kelangsungan sara hidup keluarga kekal dilindungi.": "Your children's education and your family's livelihood remain protected.",
  "Nur Ezzati Binti Mohammad Salleh": "Nur Ezzati Binti Mohammad Salleh",
  "Prudential BSN Takaful": "Prudential BSN Takaful",
  "PruBSN WarisanGold (Hibah Berganda)": "PruBSN WarisanGold (Double Hibah)",
  "PruBSN Kritikal Care360 (Critical Illness)": "PruBSN Kritikal Care360 (Critical Illness)",
  "Kenali Mekja": "Get to Know Mekja",
  "Hubungi Mekja": "Contact Mekja",
  "Lihat Kategori & Pilihan Pelan": "Show Plan Categories & Options",
  "Sembunyikan Kategori & Pilihan Pelan": "Hide Plan Categories & Options",
  "Mekja sedia membantu anda untuk membuat keputusan yang tepat demi masa depan yang lebih baik.": "Mekja is here to help you make informed decisions for a better future.",
  "PruBSN Takaful — NUR EZZATI BINTI MOHAMMAD SALLEH | Perunding Bertauliah Prudential BSN Takaful": "PruBSN Takaful — NUR EZZATI BINTI MOHAMMAD SALLEH | Certified Prudential BSN Takaful Consultant",
  "Bantuan — 4 Langkah Mudah Memiliki Sijil Takaful": "Help — 4 Easy Steps to Get Takaful Coverage",
  "Laman Utama PruBSN Takaful": "PruBSN Takaful Home",
  "Buka Chat Pembantu Takaful": "Open the Takaful Chat Assistant",
  "Paparkan butang pantas": "Show quick buttons",
  "Sembunyikan butang pantas": "Hide quick buttons",
  "Testimoni Sebelum": "Previous testimonial",
  "Testimoni Seterusnya": "Next testimonial",
  "Peta Akademi MDA Elite Club PruBSN Takaful, Kuantan": "Map to Akademi MDA Elite Club PruBSN Takaful, Kuantan",
  "Pengiktirafan Takaful Star Awards 2026: Pengendali Takaful Terbaik Takaful Keluarga (Perniagaan Agensi), 13 tahun berturut-turut.": "Takaful Star Awards 2026 recognition: Best Takaful Operator for Family Takaful (Agency Business), for 13 consecutive years.",
  "Takaful Star Awards 2026: setiap kemenangan melambangkan keyakinan rakyat Malaysia untuk terus dilindungi bersama PruBSN.": "Takaful Star Awards 2026: every win represents Malaysians' confidence in continuing to be protected with PruBSN.",
  "Maklumat agensi dan lokasi": "Agency and location details",
  "Pautan pantas kategori pelan": "Quick plan category links",
  "Toggle Navigation": "Toggle navigation",
  "Masukkan umur anda (contoh: 25)": "Enter your age (e.g. 25)",
  "Masukkan Umur Anda (18–60)": "Enter your age (18–60)",
  "Contoh: Bajet RM150/bulan untuk keluarga": "e.g. RM150/month budget for your family",
  "Contoh: Swasta, Kerajaan, Sendiri": "e.g. Private sector, Government, Self-employed",
  "Contoh: 3500": "e.g. 3500",
  "Contoh: 200": "e.g. 200",
  "Pilih status tanggungan": "Select dependent status",
  "Bujang": "Single",
  "Berkahwin": "Married",
  "Berkahwin & Ada Anak": "Married with children",
  "Ada Komitmen Rumah": "Has a home loan",
  "Pemilik Perniagaan": "Business owner",
  "Pilih risiko utama": "Select your main concern",
  "Kos Hospital Swasta Mahal": "High private hospital costs",
  "Keluarga Tiada Dana Jika Saya Tiada": "My family would have no financial support if I were gone",
  "Hutang Rumah / Komitmen Bulanan": "Home loan / monthly commitments",
  "Pendidikan Anak": "Children's education",
  "Perancangan Legasi": "Legacy planning",
  "Kuantan · Seluruh Malaysia": "Kuantan · Nationwide",
  "Isi maklumat asas di bawah untuk membolehkan Mekja menyediakan cadangan pelan yang paling berbaloi untuk anda:": "Enter your basic details below so Mekja can recommend a plan that offers value for your needs:",
  "Sila masukkan umur anda terlebih dahulu sebelum menghantar.": "Please enter your age before submitting.",
  "Sila lengkapkan Nama dan umur yang sah antara 18 hingga 60 tahun.": "Please enter your name and a valid age between 18 and 60.",
  "Mekja boleh bantu buat simulasi cadangan suai padan mengikut kemampuan sebenar anda.": "Mekja can create a tailored recommendation based on what you can afford.",
  "Kurang pasti pelan mana yang sesuai dengan bajet bulanan anda?": "Not sure which plan suits your monthly budget?",
  "Tidak pasti pelan mana yang sesuai dengan bajet bulanan anda?": "Not sure which plan suits your monthly budget?",
  "Buka lokasi di Google Maps": "Open location in Google Maps",
  "Lihat lokasi agensi": "View agency location",
  "RM 200,000": "RM 200,000",
  "— — —": "— — —",
  "/bulan": "/month",
  "Sebut Harga Percuma": "Free Quote",
  "Mesej Mekja": "Message Mekja",
  "Hantar ke WhatsApp": "Send to WhatsApp",
  "Maklumat anda dilindungi dan hanya digunakan untuk penyediaan sebut harga Takaful.": "Your information is protected and used only to prepare a Takaful quote.",
  "Anggaran kos rawatan adalah untuk rujukan umum sahaja dan boleh berbeza mengikut hospital, keadaan pesakit serta rawatan yang diperlukan.": "Treatment costs are general estimates for reference only and may vary by hospital, patient condition and required treatment.",
  "Kos rawatan:": "Treatment cost:",
  "Perlindungan Harini, ": "Protection Today, ",
  "yang bergantung pada anda.": "who depend on you.",
  "Tenang demi mereka": "Peace of mind for those",
  "\u201cMekja sedia membantu anda untuk membuat keputusan yang tepat demi masa depan yang lebih baik.\u201d": "Mekja is here to help you make informed decisions for a better future.",
  "Status Merokok / Vape": "Smoking / Vape Status",
  "Akademi MDA Elite Club PruBSN Takaful": "Akademi MDA Elite Club PruBSN Takaful",
  "Dikawal selia oleh Bank Negara Malaysia (BNM) · Ahli PIDM.": "Regulated by Bank Negara Malaysia (BNM) · PIDM member.",
  "Hibah Berganda — Persediaan kewangan keluarga apabila berlaku kehilangan pencari nafkah. Pampasan terus kepada penama.": "Double Hibah — Financial preparation for your family in the event of the loss of a breadwinner. Benefits are paid to the nominee.",
  "Pampasan Kematian & TPD 100%": "100% Death & TPD benefit",
  "Manfaat Kematian akibat Kemalangan": "Accidental Death Benefit",
  "Manfaat Gandaan Kemalangan sehingga 600%": "Accidental death benefit of up to 600%",
  "Khairat Kematian & Badal Haji RM6,000": "RM6,000 Funeral & Badal Hajj benefit",
  "Had Tahunan RM150,000": "RM150,000 Annual Limit",
  "Had Tahunan RM200,000": "RM200,000 Annual Limit",
  "Had Tambahan RM200,000": "RM200,000 Additional Limit",
  "Had Tahunan Tambahan RM200,000": "RM200,000 Additional Annual Limit",
  "Had Tahunan RM250,000": "RM250,000 Annual Limit",
  "Had Tambahan RM250,000": "RM250,000 Additional Limit",
  "Had Tahunan Tambahan RM250,000": "RM250,000 Additional Annual Limit",
  "Boost Had Tahunan sehingga RM1 juta": "Annual Limit Boost up to RM1 million",
  "Boost Had Tahunan Sehingga RM1 Juta": "Annual Limit Boost up to RM1 million",
  "Tiada Had Tahunan": "No Annual Limit",
  "Hibah Asas RM10,000": "RM10,000 Basic Hibah",
  "Hibah Asas RM25,000": "RM25,000 Basic Hibah",
  "Protect Well (In-Patient)": "Protect Well (In-Patient)",
  "Pre & Post Hospitalisation (120 hari sebelum & selepas)": "Pre- and Post-Hospitalisation (120 days before and after)",
  "Pre & Post Hospitalisation": "Pre- and Post-Hospitalisation",
  "Nilai Tunai (Cash Value)": "Cash Value",
  "10+ Rider Tambahan": "10+ Additional Riders",
  "Outpatient Penyakit Berjangkit": "Infectious Disease Outpatient Treatment",
  "Outpatient Kemalangan": "Accident Outpatient Treatment",
  "Manfaat Vaksinasi RM300": "RM300 Vaccination Benefit",
  "Manfaat Vaksinasi": "Vaccination Benefit",
  "Komplikasi Kehamilan": "Pregnancy Complications",
  "Had Perlindungan Yang Tinggi": "High Coverage Limit",
  "Bonus SVP 2%": "2% SVP Bonus",
  "ICU, Pembedahan, Ambulans & Pemindahan Organ": "ICU, Surgery, Ambulance & Organ Transplant",
  "Perlindungan Kanser & Penyakit Buah Pinggang": "Cancer & Kidney Disease Coverage",
  "Outpatient Kanak-kanak": "Children's Outpatient Treatment",
  "Rawatan Kesihatan Mental": "Mental Health Treatment",
  "Penjagaan Kejururawatan Di Rumah": "Home Nursing Care",
  "Dewasa": "Adults",
  "Serendah RM90 / bulan": "From RM90 / month",
  "Serendah RM103 / bulan": "From RM103 / month",
  "Serendah RM113 / bulan": "From RM113 / month",
  "Serendah RM120 / bulan": "From RM120 / month",
  "Serendah RM123 / bulan": "From RM123 / month",
  "Serendah RM135 / bulan": "From RM135 / month",
  "Serendah RM140 / bulan": "From RM140 / month",
  "Serendah RM160 / bulan": "From RM160 / month",
  "Serendah RM185 / bulan": "From RM185 / month",
  "Serendah RM200 / bulan": "From RM200 / month",
  "Room & Board": "Room & Board",
  "Bermula RM200 sehari": "Starting from RM200 per day",
  "Serendah RM329 / bulan": "From RM329 / month",
  "Serendah RM369 / bulan": "From RM369 / month",
  "Serendah RM425 / bulan": "From RM425 / month",
  "Perbandingan Pelan": "Plan Comparison",
  "Manfaat": "Benefit",
  "Basic": "Basic",
  "Essential": "Essential",
  "Superior": "Superior",
  "Elaun Hospital Harian": "Daily Hospital Allowance",
  "Pembedahan Caesarean Kecemasan": "Emergency Caesarean Section",
  "Kematian Janin": "Fetal Death",
  "Kematian Ibu": "Maternal Death",
  "Kesejahteraan Mental": "Mental Wellness",
  "Kematian Anak": "Child Death",
  "ICU / HDU": "ICU / HDU",
  "Inkubasi Anak Baru Lahir": "Newborn Incubation",
  "Jaundice Neonatal / Fototerapi": "Neonatal Jaundice / Phototherapy",
  "Keadaan Kongenital": "Congenital Conditions",
  "Gangguan Perkembangan Kanak-kanak": "Child Developmental Disorders",
  "Medical Card Annual Limit": "Medical Card Annual Limit",
  "Lifetime Limit": "Lifetime Limit",
  "RM100 / hari": "RM100 / day",
  "RM300 / hari": "RM300 / day",
  "RM400 / hari": "RM400 / day",
  "RM500 / hari": "RM500 / day",
  "RM200 / hari": "RM200 / day",
  "RM15,000 setahun": "RM15,000 per year",
  "RM30,000 setahun": "RM30,000 per year",
  "RM50,000 setahun": "RM50,000 per year",
  "RM5,000 setahun": "RM5,000 per year",
  "Tiada": "None",
  "Unlimited": "Unlimited",
  "Perlindungan hospital & rawatan perubatan untuk anda dan keluarga": "Hospital and medical coverage for you and your family",
  "Takaful bukan sekadar perlindungan, tetapi pelaburan untuk masa depan.": "Takaful is more than protection — it is an investment in your future.",
  "Lindungi Kewangan Keluarga": "Protect Your Family's Finances",
  "Sediakan manfaat kewangan untuk membantu keluarga menghadapi perkara yang tidak dijangka.": "Provide a financial benefit to help your family face the unexpected.",
  "Gantikan Pendapatan Yang Hilang": "Replace Lost Income",
  "Bantu menyediakan sumber kewangan kepada keluarga jika pencari nafkah meninggal dunia atau mengalami TPD, tertakluk pada terma sijil.": "Help provide financial support if the breadwinner passes away or experiences TPD, subject to certificate terms.",
  "Bantu Selesaikan Komitmen": "Help Manage Financial Commitments",
  "Manfaat hibah boleh membantu keluarga mengurus pinjaman rumah, hutang dan perbelanjaan harian.": "A hibah benefit can help the family manage a mortgage, debts and daily expenses.",
  "Pastikan Keluarga Ada Persediaan": "Help Prepare Your Family",
  "Perancangan awal memberi keluarga sokongan kewangan apabila ia paling diperlukan.": "Planning ahead can provide your family with financial support when it is needed most.",
  "Malang Tidak Berbau": "Be Ready for the Unexpected",
  "Kemalangan dan kecemasan boleh berlaku pada bila-bila masa.": "Accidents and emergencies can happen at any time.",
  "Perlu Rawatan & Pembedahan": "When Treatment or Surgery Is Needed",
  "Apabila keadaan memerlukan kemasukan ke hospital, kos rawatan boleh meningkat dengan cepat.": "When hospital admission is needed, treatment costs can rise quickly.",
  "Jangan Biarkan Kos Rawatan Menjejaskan Kewangan": "Keep Treatment Costs from Derailing Your Finances",
  "Kos rawatan yang tinggi boleh memberi tekanan kepada kewangan keluarga jika tiada persediaan.": "High treatment costs can put pressure on family finances without preparation.",
  "Lebih Bersedia Dengan Medical Card": "Be More Prepared with a Medical Card",
  "Medical Card membantu mengurus kos rawatan hospital mengikut manfaat, had dan terma pelan yang dipilih.": "A Medical Card can help manage hospital treatment costs, subject to the selected plan's benefits, limits and terms."
};

const normalizedTextTranslations = Object.fromEntries(
  Object.entries(textTranslations).map(([malay, english]) => [
    malay.trim().replace(/\s+/g, " "),
    english
  ])
);
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = "ms";

function teks(value) {
  return currentLanguage === "en"
    ? (normalizedTextTranslations[String(value).trim().replace(/\s+/g, " ")] || value)
    : value;
}

function terjemahNodTeks(root, lang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue || "");
    const original = originalTextNodes.get(node) || "";
    const normalized = original.trim().replace(/\s+/g, " ");
    const translated = normalizedTextTranslations[normalized];
    if (translated && lang === "en") {
      const leadingWhitespace = original.match(/^\s*/)?.[0] || "";
      const trailingWhitespace = original.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leadingWhitespace}${translated.trim()}${trailingWhitespace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function terjemahAtribut(root, lang) {
  root.querySelectorAll("[placeholder], [title], [aria-label], img[alt]").forEach(element => {
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      ["placeholder", "title", "aria-label", "alt"].forEach(attribute => {
        const value = element.getAttribute(attribute);
        if (value !== null) originals[attribute] = value;
      });
      originalAttributes.set(element, originals);
    }
    Object.entries(originals).forEach(([attribute, original]) => {
      const translated = normalizedTextTranslations[original.trim().replace(/\s+/g, " ")];
      element.setAttribute(attribute, lang === "en" ? translated || original : original);
    });
  });
}

function setLanguage(lang) {
  if (lang !== "ms" && lang !== "en") return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  terjemahNodTeks(document.body, lang);
  terjemahAtribut(document.body, lang);
  document.title = teks("PruBSN Takaful — NUR EZZATI BINTI MOHAMMAD SALLEH | Perunding Bertauliah Prudential BSN Takaful");

  const btnBm = document.getElementById("btn-bm");
  const btnEn = document.getElementById("btn-en");
  if (btnBm) {
    btnBm.className = lang === "ms"
      ? "bg-[#ED1B24] text-white px-2.5 py-1 rounded-full transition-all"
      : "text-[#777] px-2.5 py-1 hover:text-[#222] transition-all";
    btnBm.setAttribute("aria-pressed", String(lang === "ms"));
  }
  if (btnEn) {
    btnEn.className = lang === "en"
      ? "bg-[#ED1B24] text-white px-2.5 py-1 rounded-full transition-all"
      : "text-[#777] px-2.5 py-1 hover:text-[#222] transition-all";
    btnEn.setAttribute("aria-pressed", String(lang === "en"));
  }

  paparkanPelan(activeCategory);
  const activeScenario = document.querySelector(".senario-tab-btn.active");
  const scenarioKey = activeScenario?.getAttribute("onclick")?.match(/pilihSenario\('([^']+)'/)?.[1] || "wad";
  pilihSenario(scenarioKey, activeScenario);
  kiraAnggaranLive();

  const planPanel = document.getElementById("plan-selection-panel");
  const categoryToggleLabel = document.getElementById("category-toggle-label");
  if (categoryToggleLabel) {
    categoryToggleLabel.textContent = teks(
      planPanel?.hidden
        ? "Lihat Kategori & Pilihan Pelan"
        : "Sembunyikan Kategori & Pilihan Pelan"
    );
  }

  const planTitleInput = document.getElementById("modalPlanNameInput");
  const planTitle = document.getElementById("modalPlanTitle");
  if (planTitle && planTitleInput?.value) {
    planTitle.textContent = teks(planTitleInput.value);
  }
  const quotePreview = document.getElementById("plan-quote-preview");
  if (quotePreview && !quotePreview.hidden && planTitleInput?.value) {
    renderQuotePreview(planTitleInput.value);
  }
}

// ==========================================
// 11. MOBILE MENU TOGGLE
// ==========================================
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
  if (!menu) return;

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    if (icon) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  } else {
    menu.classList.add("hidden");
    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  }
}

// ==========================================
// 13. PROMO POPUP MODAL (AUTO-OPEN)
// ==========================================
let promoStep = 1;
let promoData = {
  pelan: '',
  nama: '',
  umur: '',
  jantina: '',
  pekerjaan: '',
  whatsapp: '',
  emel: ''
};

function bukaPromoPopup() {
  const modal = document.getElementById("promoModalBackdrop");
  if (modal) {
    promoStep = 1;
    renderPromoStep();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    sessionStorage.setItem("promoPopupShown", "true");
  }
}

function tutupPromoPopup() {
  const modal = document.getElementById("promoModalBackdrop");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  // Show reopen button
  const reopenBtn = document.getElementById("promoReopenBtn");
  if (reopenBtn) reopenBtn.style.display = "inline-flex";
}

function pilihPromoPeran(pelan, card) {
  promoData.pelan = pelan;
  document.querySelectorAll('.promo-plan-card').forEach(card => card.classList.remove('selected'));
  if (card) card.classList.add('selected');
}

function pilihPromoGender(jantina, button) {
  promoData.jantina = jantina;
  document.querySelectorAll('.promo-gender-btn').forEach(btn => btn.classList.remove('selected'));
  if (button) button.classList.add('selected');
}

function promoNextStep() {
  if (promoStep === 1) {
    if (!promoData.pelan) {
      alert(teks("Sila pilih pelan yang diminati terlebih dahulu."));
      return;
    }
    promoStep = 2;
  } else if (promoStep === 2) {
    // Collect form data
    const nama = document.getElementById("promo-nama")?.value.trim();
    const umur = document.getElementById("promo-umur")?.value.trim();
    const pekerjaan = document.getElementById("promo-pekerjaan")?.value.trim();
    const umurNumber = Number(umur);

    if (!nama || !umur || !Number.isInteger(umurNumber) || umurNumber < 18 || umurNumber > 60) {
      alert(teks("Sila lengkapkan Nama dan umur yang sah antara 18 hingga 60 tahun."));
      return;
    }
    promoData.nama = nama;
    promoData.umur = umur;
    promoData.pekerjaan = pekerjaan || "-";
    promoStep = 3;
  }
  renderPromoStep();
}

function promoPrevStep() {
  if (promoStep > 1) {
    promoStep--;
    renderPromoStep();
  }
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;");
}

function renderPromoStep() {
  const body = document.getElementById("promoModalBody");
  if (!body) return;

  // Update step indicators
  document.querySelectorAll('.promo-step-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'completed');
    if (i + 1 === promoStep) dot.classList.add('active');
    else if (i + 1 < promoStep) dot.classList.add('completed');
  });

  if (promoStep === 1) {
    body.innerHTML = `
      <h4 class="font-serif text-lg font-bold text-[#222] mb-1">Langkah 01: Pilih Pelan Anda</h4>
      <p class="text-xs text-[#777] mb-5">Pilih kategori perlindungan yang anda minati:</p>
      <div class="space-y-3">
        <div class="promo-plan-card flex items-center gap-4 ${promoData.pelan === 'Hibah Takaful' ? 'selected' : ''}" onclick="pilihPromoPeran('Hibah Takaful', this)">
          <div class="promo-plan-icon"><i class="fas fa-hand-holding-heart" aria-hidden="true"></i></div>
          <div>
            <h5 class="font-bold text-sm text-[#222]">Hibah Takaful</h5>
            <p class="text-xs text-[#777]">Perlindungan kewangan & hibah untuk waris tersayang</p>
          </div>
        </div>
        <div class="promo-plan-card flex items-center gap-4 ${promoData.pelan === 'Medical Card' ? 'selected' : ''}" onclick="pilihPromoPeran('Medical Card', this)">
          <div class="promo-plan-icon"><i class="fas fa-id-card" aria-hidden="true"></i></div>
          <div>
            <h5 class="font-bold text-sm text-[#222]">Medical Card</h5>
            <p class="text-xs text-[#777]">Perlindungan hospital & rawatan perubatan untuk anda dan keluarga</p>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <button onclick="promoNextStep()" class="w-full btn-forest-primary justify-center py-3 text-sm">
          Seterusnya <i class="fas fa-arrow-right text-xs ml-1"></i>
        </button>
      </div>
    `;
  } else if (promoStep === 2) {
    body.innerHTML = `
      <h4 class="font-serif text-lg font-bold text-[#222] mb-1">Langkah 02: Maklumat Peribadi</h4>
      <p class="text-xs text-[#777] mb-5">Maklumat ini akan membantu kami menyediakan cadangan yang tepat untuk anda.</p>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Nama Penuh <span class="text-red-500">*</span></label>
          <input type="text" id="promo-nama" value="${escapeHtmlAttribute(promoData.nama)}" placeholder="Contoh: Ahmad Firdaus" class="promo-input">
        </div>
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Umur <span class="text-red-500">*</span></label>
          <input type="number" id="promo-umur" value="${escapeHtmlAttribute(promoData.umur)}" placeholder="Umur 18 hingga 60 tahun" min="18" max="60" step="1" class="promo-input">
        </div>
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Jantina</label>
          <div class="flex gap-3">
            <button type="button" class="promo-gender-btn ${promoData.jantina === 'Lelaki' ? 'selected' : ''}" onclick="pilihPromoGender('Lelaki', this)"><i class="fas fa-mars mr-1"></i> Lelaki</button>
            <button type="button" class="promo-gender-btn ${promoData.jantina === 'Perempuan' ? 'selected' : ''}" onclick="pilihPromoGender('Perempuan', this)"><i class="fas fa-venus mr-1"></i> Perempuan</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Pekerjaan</label>
          <input type="text" id="promo-pekerjaan" value="${escapeHtmlAttribute(promoData.pekerjaan !== '-' ? promoData.pekerjaan : '')}" placeholder="Contoh: Eksekutif Swasta" class="promo-input">
        </div>
      </div>
      <div class="flex gap-3 pt-5">
        <button onclick="promoPrevStep()" class="flex-1 bg-[#F0F1F3] text-[#444] font-semibold py-3 rounded-full hover:bg-[#E0E0E0] transition text-sm flex items-center justify-center gap-2">
          <i class="fas fa-arrow-left text-xs"></i> Kembali
        </button>
        <button onclick="promoNextStep()" class="flex-[2] btn-forest-primary justify-center py-3 text-sm">
          Seterusnya <i class="fas fa-arrow-right text-xs ml-1"></i>
        </button>
      </div>
    `;
  } else if (promoStep === 3) {
    body.innerHTML = `
      <h4 class="font-serif text-lg font-bold text-[#222] mb-1">Langkah 03: Maklumat Hubungan</h4>
      <p class="text-xs text-[#777] mb-5">Kami akan menghubungi anda melalui WhatsApp dengan cadangan sebut harga.</p>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Nombor WhatsApp <span class="text-red-500">*</span></label>
          <input type="tel" id="promo-whatsapp" value="${escapeHtmlAttribute(promoData.whatsapp)}" placeholder="Contoh: 0123456789" inputmode="tel" autocomplete="tel" class="promo-input">
        </div>
        <div>
          <label class="block text-xs font-bold text-[#222] uppercase tracking-wider mb-1.5">Emel (Pilihan)</label>
          <input type="email" id="promo-emel" value="${escapeHtmlAttribute(promoData.emel)}" placeholder="Contoh: ahmad@email.com" autocomplete="email" class="promo-input">
        </div>
      </div>
      <div class="flex gap-3 pt-5">
        <button onclick="promoPrevStep()" class="flex-1 bg-[#F0F1F3] text-[#444] font-semibold py-3 rounded-full hover:bg-[#E0E0E0] transition text-sm flex items-center justify-center gap-2">
          <i class="fas fa-arrow-left text-xs"></i> Kembali
        </button>
        <button onclick="hantarPromoWhatsApp()" class="flex-[2] btn-forest-primary justify-center py-3 text-sm">
          <i class="fab fa-whatsapp text-base"></i> Dapatkan Sebut Harga via WhatsApp
        </button>
      </div>
    `;
  }

  terjemahNodTeks(body, currentLanguage);
  terjemahAtribut(body, currentLanguage);
}

function hantarPromoWhatsApp() {
  const whatsapp = document.getElementById("promo-whatsapp")?.value?.trim();
  const emel = document.getElementById("promo-emel")?.value?.trim();
  const emelInput = document.getElementById("promo-emel");
  const bilanganDigit = whatsapp?.replace(/\D/g, "").length || 0;

  if (!whatsapp || bilanganDigit < 9 || bilanganDigit > 15) {
    alert(teks("Sila masukkan nombor WhatsApp yang sah (9 hingga 15 digit)."));
    return;
  }
  if (emelInput instanceof HTMLInputElement && !emelInput.validity.valid) {
    alert(teks("Sila masukkan alamat emel yang sah atau kosongkan ruangan emel."));
    return;
  }

  promoData.whatsapp = whatsapp;
  promoData.emel = emel || '-';

  const mesej = `\n` +
    `Prudential BSN Takaful. Berikut adalah maklumat saya: \n\n` +
    `\n` +
    ` Pelan diminati: ${teksWhatsAppBold(promoData.pelan)}\n\n` +
    `\n` +
    ` Nama: ${teksWhatsAppBold(promoData.nama)}\n` +
    ` Umur: ${teksWhatsAppBold(`${promoData.umur} tahun`)}\n` +
    ` Jantina: ${teksWhatsAppBold(promoData.jantina || "Tidak dinyatakan")}\n` +
    ` Pekerjaan: ${teksWhatsAppBold(promoData.pekerjaan)}\n\n` +
    `\n` +
    ` Nombor WhatsApp: ${teksWhatsAppBold(promoData.whatsapp)}\n` +
    ` Emel: ${teksWhatsAppBold(promoData.emel)}\n\n` +
    `Assalamualaikum Mekja, mohon cadangan pelan dan sebut harga yang sesuai bagi`;

  tutupPromoPopup();
  sessionStorage.setItem('promoPopupShown', 'true');
  bukaWhatsAppDirect(mesej);
}

// ==========================================
// 14. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const recognitionGallery = document.querySelector(".recognition-gallery");
  const recognitionSlides = Array.from(document.querySelectorAll(".recognition-card"));
  const recognitionDots = Array.from(document.querySelectorAll(".recognition-dot"));
  if (recognitionGallery && recognitionSlides.length && recognitionDots.length) {
    let activeRecognitionSlide = 0;
    let recognitionScrollPending = false;

    const showRecognitionSlide = index => {
      activeRecognitionSlide = (index + recognitionSlides.length) % recognitionSlides.length;
      recognitionGallery.scrollTo({
        left: recognitionSlides[activeRecognitionSlide].offsetLeft,
        behavior: "smooth"
      });
      recognitionDots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeRecognitionSlide;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-current", String(isActive));
      });
    };

    document.querySelectorAll("[data-recognition-direction]").forEach(button => {
      button.addEventListener("click", () => {
        showRecognitionSlide(activeRecognitionSlide + Number(button.dataset.recognitionDirection));
      });
    });
    recognitionDots.forEach((dot, index) => {
      dot.addEventListener("click", () => showRecognitionSlide(index));
    });
    recognitionGallery.addEventListener("scroll", () => {
      if (recognitionScrollPending) return;
      recognitionScrollPending = true;
      requestAnimationFrame(() => {
        const slideWidth = recognitionGallery.clientWidth;
        if (slideWidth > 0) {
          const visibleSlide = Math.round(recognitionGallery.scrollLeft / slideWidth);
          if (visibleSlide !== activeRecognitionSlide) {
            activeRecognitionSlide = visibleSlide;
            recognitionDots.forEach((dot, dotIndex) => {
              const isActive = dotIndex === activeRecognitionSlide;
              dot.classList.toggle("active", isActive);
              dot.setAttribute("aria-current", String(isActive));
            });
          }
        }
        recognitionScrollPending = false;
      });
    }, { passive: true });
  }

  const criticalComparison = document.getElementById("critical-comparison-section");
  const criticalComparisonContainer = document.getElementById("critical-comparison-container");
  if (criticalComparison && criticalComparisonContainer) {
    criticalComparisonContainer.append(criticalComparison);
  }
  const faqSection = document.getElementById("faq");
  const criticalFaqContainer = document.getElementById("critical-faq-container");
  if (faqSection && criticalFaqContainer) criticalFaqContainer.append(faqSection);

  const journeyContainer = document.getElementById("category-journey-container");
  const journeyWrapper = document.querySelector(".protection-journeys");
  if (journeyContainer && journeyWrapper) {
    journeyContainer.append(
      ...journeyWrapper.querySelectorAll(".protection-journey")
    );
    journeyWrapper.remove();
  }

  const kalkulator = document.getElementById("kalkulator");
  const calculatorContainer = document.getElementById("hibah-calculator-container");
  if (kalkulator && calculatorContainer) calculatorContainer.append(kalkulator);

  paparkanPelan("hibah");
  renderCalcAmounts();
  kiraAnggaranLive();
  pilihSenario("wad", document.querySelector(".senario-tab-btn"));

  const navLinks = Array.from(document.querySelectorAll(".portal-header .nav-link"));
  const mobileNavLinks = Array.from(document.querySelectorAll("#mobile-menu a[href]"));
  const allNavLinks = [...navLinks, ...mobileNavLinks];
  const navTargets = navLinks.map(link => ({
    href: link.getAttribute("href"),
    target: document.querySelector(link.getAttribute("href"))
  }));
  const header = document.querySelector(".portal-header");
  let navUpdatePending = false;

  const updateActiveNavigation = () => {
    const threshold = (header instanceof HTMLElement ? header.offsetHeight : 0) + 72;
    let activeHref = navTargets[0]?.href || "#top";

    if (window.scrollY > 0) {
      navTargets.forEach(({ href, target }) => {
        if (target instanceof HTMLElement
          && !target.closest("[hidden]")
          && target.getBoundingClientRect().top <= threshold) {
          activeHref = href || activeHref;
        }
      });
    }

    allNavLinks.forEach(link => {
      if (link.dataset.planCategory) {
        const selectedCategory = document.querySelector(".plan-tab-item.active")?.id.replace("tab-", "");
        link.classList.toggle("active", activeHref === "#pelan" && link.dataset.planCategory === selectedCategory);
        return;
      }

      link.classList.toggle("active", link.getAttribute("href") === activeHref);
    });
  };

  const scheduleNavigationUpdate = () => {
    if (navUpdatePending) return;
    navUpdatePending = true;
    requestAnimationFrame(() => {
      updateActiveNavigation();
      navUpdatePending = false;
    });
  };

  window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
  window.addEventListener("resize", scheduleNavigationUpdate);
  updateActiveNavigation();

  const counters = document.querySelectorAll(".stat-counter[data-target]");
  const animateCounter = counter => {
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";
    const duration = 1400;
    const startTime = performance.now();

    const update = now => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(target * easedProgress)}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 });
    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(counter => {
      counter.textContent = `${counter.dataset.target || 0}${counter.dataset.suffix || ""}`;
    });
  }

  allNavLinks.forEach(link => link.addEventListener("click", scheduleNavigationUpdate));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      tutupBantuanProses();
      tutupPromoPopup();
      tutupPlanModal();
    }
  });

  // Auto-open promo popup after 1.5 seconds (only once per session)
  if (!sessionStorage.getItem('promoPopupShown')) {
    setTimeout(() => {
      bukaPromoPopup();
    }, 1500);
  } else {
    // Show reopen button if already shown
    const reopenBtn = document.getElementById("promoReopenBtn");
    if (reopenBtn) reopenBtn.style.display = "inline-flex";
  }
});