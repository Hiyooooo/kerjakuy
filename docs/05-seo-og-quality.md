# 05. SEO, OpenGraph, dan Kualitas

## 1. Metadata persis dari brief

Tetapkan metadata ini tanpa mengubah huruf, spasi, atau tanda baca:

| Field | Nilai | Panjang terhitung |
|---|---|---:|
| Title | `KerjaKuy - Software HRIS Simpel & Asyik untuk Tim Kreatif` | 57 karakter |
| Description | `Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.` | 103 karakter |

Panjang dihitung dengan skrip JavaScript `.length`; semua karakter pada dua string ini berada di Basic Multilingual Plane. Simpan sebagai sumber tunggal, misalnya `src/lib/site.ts`, dan gunakan juga untuk metadata OpenGraph dan Twitter.

## 2. Implementasi metadata

Untuk implementasi Next.js, gunakan `metadata` atau `generateMetadata` di App Router. Tetapkan `metadataBase` dari domain resmi. `https://kerjakuy.example` hanya nilai sementara dan tidak boleh menjadi canonical produksi.

```ts
export const site = {
  name: "KerjaKuy",
  title: "KerjaKuy - Software HRIS Simpel & Asyik untuk Tim Kreatif",
  description:
    "Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.",
  url: "https://kerjakuy.example", // PLACEHOLDER: ganti sebelum rilis
  locale: "id_ID",
  ogImage: "/images/og-kerjakuy.png",
};
```

Metadata minimum: `title`, `description`, canonical, `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image`, `og:locale=id_ID`, Twitter `summary_large_image`, `robots`, favicon, `themeColor`, dan `viewport`. Set canonical ke URL final, bukan URL preview. Situs staging harus `noindex,nofollow`.

## 3. OpenGraph image

- Ukuran wajib 1200×630 px, format PNG atau WebP; buat satu komposisi khusus KerjaKuy.
- Gunakan paper background, bentuk bubble yang merujuk ke demo izin, wordmark orisinal, dan teks pendek “HR harian untuk tim fleksibel”. Jangan masukkan klaim tiga detik ke gambar sebelum diverifikasi.
- Gunakan teks ink gelap pada aksen coral/amber, jangan gunakan putih di atas dua warna itu.
- Rendering tidak boleh mengunduh font saat build. Sediakan font lokal dengan lisensi yang sesuai untuk route gambar; bila belum tersedia, gunakan fallback lokal sistem dan catat.
- Hindari menampilkan foto orang pada OG; gunakan bentuk UI dan karakter kecil buatan sendiri. Jangan menaruh metadata kontak atau foto yang tidak berizin.
- Uji crop saat platform mengambil area tengah, dimensi hasil, ukuran file maksimal 300 KB, dan keterbacaan saat thumbnail.

## 4. Structured data

Render satu JSON-LD `@graph` yang konsisten dengan halaman:

1. `Organization`: nama KerjaKuy, URL final, logo orisinal saat disetujui, dan kontak hanya setelah pemilik menyediakannya.
2. `WebSite`: nama, URL canonical, dan `inLanguage: id-ID`.
3. `SoftwareApplication`: `name`, `applicationCategory: BusinessApplication`, `operatingSystem: Web`, `description`, serta `featureList` yang memuat seluruh sub-fitur di `04-modules.md`.
4. `FAQPage`: pertanyaan dan jawaban yang sama persis dengan FAQ di `03-page-structure.md`; jangan membuat versi kedua yang berbeda.

Jangan menambahkan `offers` selama harga belum disetujui. Jangan membuat `aggregateRating`, `review`, jumlah pengguna, atau pernyataan kepatuhan. Escape data terstruktur dengan cara yang aman; jangan menaruh string pengguna mentah.

## 5. Indexing, aksesibilitas, dan performa

- Tambahkan `sitemap.xml` berisi URL produksi yang disetujui dan `robots.txt` yang mengizinkan crawl production serta mengecualikan preview.
- Gunakan landmark `header`, `nav`, `main`, section dengan heading berurutan, dan `footer`; hanya satu H1.
- Pastikan teks alternatif mendeskripsikan foto, sementara karakter dekoratif dan mockup dekoratif dapat diabaikan pembaca layar. Beri nama aksesibel pada kontrol demo.
- Target Lighthouse mobile minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO; CLS < 0.05.
- Optimasi foto lokal ke WebP/AVIF, sekitar 220 KB atau kurang per foto; jumlah foto yang dimuat di atas lipatan maksimal 600 KB. Gunakan ukuran intrinsik, `sizes`, lazy-load untuk non-LCP, dan prioritas hanya bagi gambar LCP.
- Gunakan font dengan subset dan `display: swap`; hindari font atau aset jaringan dalam render OG.
- Hormati WCAG 2.2 AA: kontras, fokus, keyboard, reflow 200%, label, nama status, dan target sentuh.

## 6. Checklist final agent pembangun

### Format dan konten

- [ ] Title 57 karakter dan description 103 karakter sama persis dengan brief.
- [ ] Copy berbahasa Indonesia, tanpa tanda seru atau em dash pada halaman.
- [ ] CTA utama tampil sekurangnya lima kali dan menuju `#simulasi`.
- [ ] Tidak ada harga, testimoni, logo klien, angka hasil, atau sertifikasi yang belum disahkan.
- [ ] Klaim tiga detik ditandai dan diverifikasi atau diganti.

### Lima modul dan angka

- [ ] Absensi: clock-in/out, GPS geofencing, shift, rekap real-time, dan mood WFA.
- [ ] Gaji: kalkulasi otomatis, PPh 21, BPJS, slip digital, reimbursement, kanal notifikasi sebagai demo.
- [ ] Perizinan: approval cuti, izin sakit, lembur, saldo, serta healing/ulang tahun/darurat.
- [ ] Exam: assessment rekrutmen online, evaluasi kinerja, uji kompetensi, proctoring, kuis onboarding/trivia.
- [ ] Library: SOP, arsip, e-learning, panduan kantor.
- [ ] Vektor hitung di `04-modules.md` tepat dan konsisten.

### Gambar

- [ ] Tujuh slot foto asli direncanakan; foto tidak hotlink.
- [ ] Setiap foto dilihat sebelum dipilih, dilisensikan, dioptimasi, dan dicatat di `public/images/CREDITS.md`.
- [ ] Semua foto punya dimensi, `alt`, `sizes`, crop, dan status sumber yang jelas.
- [ ] Label “Foto ilustrasi” dekat grup foto dan di footer; tak ada foto disajikan sebagai pelanggan.
- [ ] OG image unik, lokal, 1200×630 px; fallback blok netral menjaga build tetap jalan.

### Desain, aksesibilitas, dan teknis

- [ ] Teks ink digunakan di atas coral/amber; pasangan putih pada aksen dilarang.
- [ ] Tiap section punya visual dan pola layout berubah sesuai isi.
- [ ] Semua kontrol keyboard accessible, fokus terlihat, live region tepat, reduced-motion berfungsi.
- [ ] Tampilan dicek pada 375, 768, 1024, dan 1440 px tanpa overflow.
- [ ] Metadata, canonical, OG, Twitter, JSON-LD, sitemap, robots, icon dan theme color berfungsi.
- [ ] Lighthouse dan CLS memenuhi target; tidak ada klaim palsu dalam structured data.

## 7. Format laporan agent pembangun

Laporkan: bagian selesai, asumsi, sumber dan lisensi setiap foto, slot foto yang masih blocker, hasil verifikasi angka/metadata/kontras, klaim yang masih menunggu pemilik, performa dan aksesibilitas, serta keputusan pemilik yang masih diperlukan. Jangan menyebut angka sebagai terverifikasi bila belum dihitung.

