/**
 * Sumber kebenaran tunggal untuk metadata, SEO, dan OpenGraph KerjaKuy.
 * Nilai title dan description diambil persis dari brief (docs/05-seo-og-quality.md).
 */

export const site = {
  name: "KerjaKuy",
  // 57 karakter persis
  title: "KerjaKuy - Software HRIS Simpel & Asyik untuk Tim Kreatif",
  // 103 karakter persis
  description:
    "Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.",
  url: "https://kerjakuy.example", // PLACEHOLDER: Diganti domain resmi saat rilis
  locale: "id_ID",
  ogImage: "/opengraph-image",
  themeColor: "#FB7185",
  modules: [
    "Absensi fleksibel WFA dan mood harian",
    "Slip gaji digital dan notifikasi gajian",
    "Workflow perizinan cuti healing, ulang tahun, dan lembur",
    "Kuis onboarding dan trivia tim",
    "Wiki kantor dan knowledge base SOP",
  ],
};
