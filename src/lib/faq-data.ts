export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Apakah KerjaKuy bisa dipakai saat WFA?",
    answer:
      "Halaman ini menampilkan alur check-in fleksibel sebagai konsep produk. Kebijakan lokasi dan fitur yang tersedia perlu dikonfirmasi dengan pemilik KerjaKuy sebelum digunakan.",
  },
  {
    question: "Apakah cuti healing dan cuti ulang tahun otomatis disetujui?",
    answer:
      "Tidak. Pengajuan perlu ditinjau oleh pihak yang berwenang sesuai kebijakan perusahaan.",
  },
  {
    question: "Apakah pengajuan izin benar-benar hanya butuh 3 detik?",
    answer:
      "Angka tersebut menunggu verifikasi pada alur produk yang sebenarnya. Demo di halaman hanya memperlihatkan tiga langkah lokal.",
  },
  {
    question: "Apakah WhatsApp atau email benar-benar mengirim notifikasi gajian?",
    answer:
      "Contoh pada halaman hanya menunjukkan pilihan kanal. Pengiriman nyata dan dukungan kanal harus dikonfirmasi sebelum dipublikasikan.",
  },
  {
    question: "Apakah perhitungan PPh 21 dan BPJS pada contoh ini resmi?",
    answer:
      "Bukan. Nominal pada demo adalah angka ilustrasi untuk menjelaskan susunan slip, bukan kalkulasi legal atau payroll.",
  },
  {
    question: "Apakah kuis Exam memantau kamera karyawan?",
    answer:
      "Demo tidak mengakses kamera atau perangkat. Setiap metode pemantauan nyata memerlukan penjelasan, persetujuan, dan verifikasi fitur.",
  },
  {
    question: "Apakah panduan di Library bisa diubah oleh perusahaan?",
    answer:
      "Library diperlihatkan sebagai tempat menyimpan panduan. Cara pengelolaan dan hak akses perlu dikonfirmasi sesuai produk yang tersedia.",
  },
];
