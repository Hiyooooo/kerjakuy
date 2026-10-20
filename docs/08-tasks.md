# 08. Rencana Tugas Implementasi KerjaKuy

Dokumen ini adalah rencana kerja bertahap (*task breakdown*) untuk membangun landing page KerjaKuy sesuai dengan aturan di `AGENTS.md`, `06-anti-slop.md`, `02-design-system.md`, `07-image-plan.md`, `04-modules.md`, `03-page-structure.md`, `05-seo-og-quality.md`, dan `01-brief.md`.

---

## Ringkasan Progres & Milestone

| Fase | Deskripsi | Status |
|---|---|---|
| **Fase 0** | Inventarisasi Dokumen & Kurasi Foto WebP | **Selesai** |
| **Fase 1** | Inisialisasi Proyek Next.js & Konfigurasi Stack | **Selesai** |
| **Fase 2** | Fondasi Design System, Token CSS, & Tailwind | **Selesai** |
| **Fase 3** | Fungsi Logika Demo Murni & Unit Test (Vitest) | **Selesai** |
| **Fase 4** | Komponen UI, Mockup, & Interaktivitas Demo | **Selesai** |
| **Fase 5** | Perakitan 13 Section Halaman & Copywriting Presisi | **Selesai** |
| **Fase 6** | SEO, Metadata Presisi, OpenGraph, & Structured Data | **Selesai** |
| **Fase 7** | Audit Anti-Slop, Aksesibilitas, Responsivitas, & Build | **Selesai** |
| **Fase 8** | Verifikasi Akhir & Laporan Keputusan Pemilik | **Selesai** |

---

## Rincian Tugas Tiap Fase

### Fase 0: Inventarisasi & Aset Gambar (SELESAI)
- [x] Baca dan pahami seluruh dokumen `AGENTS.md` dan `docs/01` s/d `docs/07`.
- [x] Periksa dan kurasi 7 foto lokal (P01 s/d P07) sesuai kriteria suasana kerja santai Asia Tenggara.
- [x] Verifikasi versi landscape untuk `kerjakuy-team-flow.jpg` (P05).
- [x] Konversi ke-7 foto ke format `.webp` berkualitas ~78, strip EXIF, ukuran < 220 KB (total 593 KB).
- [x] Hapus file `.jpg` mentah dan buat `public/images/CREDITS.md`.

---

### Fase 1: Inisialisasi Proyek & Konfigurasi Stack (SELESAI)
- [x] Inisialisasi Next.js 14/15 App Router dengan TypeScript, Tailwind CSS, dan struktur `src/`.
- [x] Pasang dependensi yang diwajibkan:
  - `lucide-react` (ikon resmi, stroke 1.5)
  - `clsx` dan `tailwind-merge` (manajemen class name)
  - `vitest` (pengujian unit test fungsi murni)
- [x] Konfigurasi font Google di `src/app/layout.tsx`:
  - `Manrope` (heading / display)
  - `Nunito Sans` (body / UI / kontrol)
  - Subset Latin, swap display, mapping CSS variables font.
- [x] Bersihkan file default Next.js yang tidak diperlukan (boilerplate SVG/CSS).

---

### Fase 2: Fondasi Design System & Token Warna (SELESAI)
- [x] Konfigurasi CSS variables pada `src/app/globals.css`:
  - `--color-coral: #FB7185` (fill CTA & sorotan)
  - `--color-amber: #F59E0B` (fill chip & tanggal)
  - `--color-ink: #2B2423` (teks utama & teks di atas coral/amber)
  - `--color-muted: #655B58` (teks sekunder)
  - `--color-coral-ink: #BE123C` (teks coral di atas latar terang)
  - `--color-amber-ink: #874400` (teks amber di atas latar terang)
  - `--color-paper: #FFF8F3` (bidang cream)
  - `--color-white: #FFFFFF` (kartu & ruang UI)
  - `--color-line: #E9D9D2` (pemisah dekoratif)
  - `--color-control: #8C5B52` (garis kontrol dan outline fokus)
  - `--color-success: #26734D`, `--color-danger: #B42318`
- [x] Mapping variabel CSS ke dalam `tailwind.config.ts`.
- [x] Terapkan aturan ketat WCAG AA:
  - Dilarang memakai teks putih di atas tombol coral/amber (wajib teks `--color-ink`).
  - Outline fokus 3px `--color-control` dengan offset yang jelas pada keyboard navigation.
- [x] Konfigurasi utilitas border-radius bervariasi:
  - Kontrol/input: `10px`
  - Chip: `14px`
  - Kartu: `22px`
  - Bubble percakapan utama: `32px`

---

### Fase 3: Logika Murni Demo & Pengujian Vitest (SELESAI)
Buat file `src/lib/calculations.ts` dan test suite `tests/calculations.test.ts` untuk memastikan test vectors di `docs/04-modules.md` tervalidasi 100%:
- [x] **Absensi (`workedMinutes`)**:
  - Rumus: `max(0, minutes(end) - minutes(start) - breakMinutes)`.
  - Test vector: `09:05–17:10`, istirahat 60m → `425 menit` (7 jam 5 menit).
  - Test vector: `09:00–17:00`, istirahat 60m → `420 menit` (7 jam).
  - Penanganan batas (waktu tidak valid, pulang sebelum masuk, shift hari yang sama).
- [x] **Perizinan (`calculateRemainingLeave`)**:
  - Rumus: `max(0, openingBalance - approvedAnnualDays - requestedAnnualDays)`.
  - Test vector: Saldo 12, disetujui 3, diajukan 2 → `7 hari`.
  - Hanya jenis cuti tahunan/healing yang memotong saldo pada simulasi default.
- [x] **Gaji (`calculateTakeHomePay`)**:
  - Rumus: `base + allowance + overtime + reimbursement - pph21 - bpjs`.
  - Test vector: `7.500.000 + 1.000.000 + 250.000 + 180.000 - 250.000 - 150.000` = **Rp8.530.000**.
  - Komentar kode penanda `KLAIM` bahwa angka adalah contoh ilustrasi, bukan perhitungan resmi.
- [x] **Exam (`calculateExamScore`)**:
  - Rumus: `total === 0 ? 0 : round(correct / total * 100)`.
  - Test vector: 4 benar dari 5 soal → `80%`.
- [x] **Library (`calculateProgress`)**:
  - Rumus: `total === 0 ? 0 : round(completed / total * 100)`.
  - Test vector: 3 selesai dari 4 bagian → `75%`.
- [x] Jalankan `npm run test` / `npx vitest run` dan pastikan semua lulus hijau.

---

### Fase 4: Komponen UI & Demo Interaktif Lokal (SELESAI)
Setiap komponen demo murni berjalan di sisi klien (lokal), tanpa panggilan jaringan, dan mengumumkan hasil via `aria-live="polite"`:
- [x] `PhotoSlot.tsx`: Pembungkus `next/image` lokal dengan rasio tetap, sizes responsif, lazy-loading (kecuali P01 Hero), dan keterangan ilustrasi.
- [x] `KuyAvatar.tsx` / `KuyBadge.tsx`: Karakter kecil Kuy buatan kode dan penanda status.
- [x] `Button.tsx`: Tombol primer (fill coral + teks ink), sekunder (outline control), aksesibel, target sentuh minimal 44x44 px.
- [x] `HeroMockup.tsx`: Kartu pengajuan cuti Alya (data ilustrasi), kalender mini, tombol menuju `#simulasi`.
- [x] `LeaveDemo.tsx` (Perizinan):
  - Stepper 3 langkah: (1) Pilih jenis izin (healing, ulang tahun, darurat, sakit, lembur), (2) Pilih tanggal & catatan, (3) Tinjau & kirim simulasi.
  - Tampilan sisa cuti transparan dan status *"Menunggu persetujuan (simulasi)"*.
- [x] `AttendanceDemo.tsx` (Absensi):
  - Pilihan mode kerja (WFA/Kantor/Remote), tombol check-in/out simulasi, pemilihan mood harian ("Fokus", "Butuh kopi", "Energi penuh"), teks bahwa mood tidak menilai kinerja.
- [x] `SalaryDemo.tsx` (Gaji):
  - Kartu struk slip gaji digital vertikal, rincian komponen pendapatan & potongan, tombol kanal notifikasi (WhatsApp/Email) yang hanya mengubah state lokal.
- [x] `ExamDemo.tsx` (Exam):
  - 5 butir soal pilihan ganda onboarding/budaya, pemilihan opsi dengan keyboard/radio, tombol periksa hasil, kalkulasi skor persentase.
- [x] `LibraryDemo.tsx` (Library):
  - Pencarian panduan kantor, filter kategori (SOP, Pantry, Seragam, Agenda), detail ringkas, tombol tandai selesai, dan indikator progres.

---

### Fase 5: Perakitan 13 Section Halaman & Copywriting Presisi (SELESAI)
Susun halaman utama `src/app/page.tsx` sesuai urutan di `docs/03-page-structure.md`.
**Aturan Copy**: Wajib Bahasa Indonesia natural, **tanpa tanda seru (`!`)**, **tanpa em dash (`—`)**, tanpa buzzwords klise:
- [x] **Section 1: Navbar (`top`)**:
  - Wordmark KerjaKuy, menu anchor (`#masalah`, `#simulasi`, `#fitur`, `#cara-kerja`, `#faq`), tombol CTA *"Lihat simulasi"*.
  - Dukungan menu mobile keyboard accessible.
- [x] **Section 2: Hero (`hero`)**:
  - H1: *HR tanpa ribet. Karyawan happy. Bisnis melesat.*
  - Foto P01 (`kerjakuy-hero.webp`) + HeroMockup.
  - CTA utama *"Lihat simulasi"* (1) → `#simulasi`, CTA sekunder *"Kenalan dengan fitur"* → `#fitur`.
- [x] **Section 3: Manfaat (`masalah`)**:
  - Judul: *HR sehari-hari nggak harus terasa seperti cari chat lama*.
  - 3 transformasi bubble percakapan menjadi ringkasan rapi.
  - CTA *"Lihat simulasi"* (2) → `#simulasi`.
- [x] **Section 4: Sorotan Perizinan (`simulasi`)**:
  - Judul: *Cuti healing, ulang tahun, atau darurat? Ajukan dalam 3 detik.*
  - Komentar `KLAIM` terkait klaim 3 detik.
  - Demo interaktif `LeaveDemo` + Foto P02 (`kerjakuy-leave.webp`).
- [x] **Section 5: Sorotan Absensi (`absensi`)**:
  - Judul: *Lagi WFA? Check-in tetap terasa dekat*.
  - Demo interaktif `AttendanceDemo` + Foto P03 (`kerjakuy-wfa.webp`).
  - CTA *"Lihat simulasi"* (3) → `#simulasi`.
- [x] **Section 6: Sorotan Gaji (`gaji`)**:
  - Judul: *Slip gaji yang kebaca tanpa perlu tebak-tebakan*.
  - Demo interaktif `SalaryDemo` struk vertikal.
- [x] **Section 7: Sorotan Exam (`exam`)**:
  - Judul: *Hari pertama bisa mulai dengan kuis yang ringan*.
  - Demo interaktif `ExamDemo`.
- [x] **Section 8: Sorotan Library (`library`)**:
  - Judul: *Jawaban soal kantor ada di satu tempat*.
  - Demo interaktif `LibraryDemo`.
- [x] **Section 9: Alur Cara Kerja Antar Modul (`cara-kerja`)**:
  - Judul: *Dari pengajuan sampai jadwal yang ikut tertata*.
  - Diagram 5 langkah (Library → Perizinan → Absensi → Gaji, dan Library → Exam) + Foto P05 (`kerjakuy-team-flow.webp`).
  - CTA *"Lihat simulasi"* (4) → `#simulasi`.
- [x] **Section 10: Untuk Tim Seperti Apa (`untuk-tim`)**:
  - Judul: *Cocok untuk ritme kerja yang nggak selalu sama*.
  - 4 pilar tim (Agensi kreatif, coworking space, UMKM modern, startup fleksibel) + Foto P04 (`kerjakuy-agency.webp`) & P06 (`kerjakuy-small-business.webp`).
- [x] **Section 11: FAQ (`faq`)**:
  - 7 pertanyaan spesifik dari dokumen, komponen accordion yang ramah keyboard.
- [x] **Section 12: Penutup (`kontak`)**:
  - Judul: *Biar urusan HR lebih ringan buat semua*.
  - Foto P07 (`kerjakuy-closing.webp`).
  - CTA utama *"Lihat simulasi"* (5) → `#simulasi`, CTA sekunder kontak placeholder.
- [x] **Section 13: Footer (`footer`)**:
  - Wordmark KerjaKuy, deskripsi, tautan navigasi, disclaimer *"Foto ilustrasi"*, hak cipta.

---

### Fase 6: SEO, OpenGraph, & Structured Data (SELESAI)
- [x] Buat sumber metadata tunggal di `src/lib/site.ts`:
  - `title`: `KerjaKuy - Software HRIS Simpel & Asyik untuk Tim Kreatif` (persis 57 karakter).
  - `description`: `Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.` (persis 103 karakter).
- [x] Buat `src/app/opengraph-image.tsx` (1200×630 px) berbasis App Router:
  - Latar paper, elemen bubble, wordmark KerjaKuy, teks ink, tanpa unduhan font eksternal saat runtime.
- [x] Implementasikan JSON-LD `@graph` pada layout:
  - `Organization`, `WebSite`, `SoftwareApplication` (dengan list 5 modul lengkap), `FAQPage` (7 pertanyaan persis).
- [x] Buat `src/app/sitemap.ts` dan `src/app/robots.ts`.
- [x] Tambahkan `public/favicon.svg` berbasis wordmark/karakter KerjaKuy.

---

### Fase 7: Audit Otomatis Anti-Slop, Aksesibilitas, & Build (SELESAI)
- [x] Jalankan audit regex teks anti-slop:
  ```powershell
  # 1. Tanpa em dash, tanpa tanda seru, tanpa buzzwords
  rg -n "—|!|revolusioner|terdepan|seamless|game-changer|Lorem ipsum" src/app src/components

  # 2. Tanpa gradien sembarangan, tanpa infinite animation, tanpa link kosong
  rg -n 'gradient|animate-infinite|infinite|href="#"' src/app src/components

  # 3. Semua foto lokal, tanpa hotlink eksternal
  rg -n "https?://.*\.(jpg|jpeg|png|webp|avif)" src public

  # 4. Verifikasi penanda KLAIM
  rg -n "KLAIM" src docs
  ```
- [x] Uji responsivitas pada resolusi 375px, 768px, 1024px, dan 1440px (bebas overflow horizontal).
- [x] Verifikasi kontras WCAG AA di seluruh elemen teks.
- [x] Uji aksesibilitas keyboard: navigasi Tab, Enter/Space, focus ring terlihat jelas.
- [x] Uji `prefers-reduced-motion`.
- [x] Jalankan `npm run build` dan pastikan build sukses tanpa error/warning.

---

### Fase 8: Laporan Akhir & Keputusan Pemilik (SELESAI)
- [x] Tulis laporan hasil kerja sesuai format `docs/05-seo-og-quality.md` §7.
- [x] Dokumentasikan status checklist Definition of Done.
- [x] Rangkum hal-hal yang membutuhkan keputusan pemilik sebelum rilis publik (placeholder email, domain canonical, verifikasi klaim 3 detik, dan tarif resmi pajak/BPJS).
