# 03. Struktur Halaman dan Copy

## 1. Peta section

| No. | Section / ID | Latar | Visual utama | Slot foto |
|---:|---|---|---|---|
| 1 | Navigasi `top` | White | Wordmark, link, CTA | - |
| 2 | Hero `hero` | Paper | Mockup pengajuan izin dengan bubble tanggal | P01 |
| 3 | Manfaat `masalah` | White | Potongan tiga percakapan HR menjadi satu ringkasan | - |
| 4 | Perizinan `simulasi` | Coral tint | Demo form tiga langkah dan hasil lokal | P02 |
| 5 | Absensi `absensi` | White | Foto kerja fleksibel berdampingan dengan check-in UI | P03 |
| 6 | Gaji `gaji` | Paper | Slip gaji digital sebagai kartu struk yang mudah dibaca | - |
| 7 | Exam `exam` | White | Potongan kuis onboarding 4 dari 5 | - |
| 8 | Library `library` | Amber tint | Daftar panduan kantor serta pencarian | - |
| 9 | Alur `cara-kerja` | White | Diagram hubungan izin, jadwal, kehadiran, dan slip | P05 |
| 10 | Tim yang cocok `untuk-tim` | Paper | Foto konteks agensi, coworking, dan usaha kecil | P04, P06 |
| 11 | FAQ `faq` | White | Accordion yang dapat dikendalikan keyboard | - |
| 12 | Penutup `kontak` | Coral tint | Foto diskusi kerja yang natural, CTA dan kontak placeholder | P07 |
| 13 | Footer `footer` | Ink | Wordmark, tautan, catatan foto ilustrasi | - |

Setiap section memiliki satu visual yang terlihat tanpa harus mengandalkan kumpulan kartu identik. Gunakan foto sesuai `docs/07-image-plan.md`; sebelum aset siap, slot dapat memakai blok netral token dengan dimensi yang sama.

## 2. Copy navigasi dan hero

**Wordmark:** KerjaKuy

**Menu:** Fitur · Cara kerja · Untuk tim · FAQ

**CTA navigasi:** Lihat simulasi → `#simulasi`

**Label hero:** HR harian untuk tim fleksibel

# HR tanpa ribet. Karyawan happy. Bisnis melesat.

Kelola absen WFA, pengajuan cuti, gajian, kuis tim, dan panduan kantor dalam pengalaman yang lebih gampang diikuti.

- Tombol utama: **Lihat simulasi** → `#simulasi`
- Tombol sekunder: **Kenalan dengan fitur** → `#fitur`
- Micro-copy: *Data pada tampilan ini hanya contoh. Simulasinya berjalan di halaman ini.*

**Arahan visual:** tampilkan kartu permintaan cuti dan kalender sederhana, nama “Alya” dengan label “data ilustrasi”, serta karakter Kuy kecil di ujung bubble. Foto P01 menjadi konteks suasana kerja, bukan bukti pelanggan.

## 3. Copy masalah dan manfaat

### HR sehari-hari nggak harus terasa seperti cari chat lama

Cuti masuk lewat pesan, jadwal berubah, lalu pertanyaan soal aturan pantry muncul lagi. KerjaKuy menaruh alur dan informasinya dalam satu pengalaman yang gampang dipahami tim.

**Tiga penanda manfaat:**

- **Permintaan lebih jelas:** pilih jenis izin, tanggal, lalu tinjau pengajuan.
- **Kerja fleksibel tetap tercatat:** check-in dan mood harian tampil berdampingan.
- **Info kantor gampang dicari:** panduan yang sering ditanyakan punya rumah sendiri.

**CTA:** **Lihat simulasi** → `#simulasi`

**Visual:** tiga bubble pesan ilustratif berubah menjadi satu ringkasan permintaan. Jangan tampilkan nama atau percakapan pribadi nyata.

## 4. Sorotan Perizinan

### Cuti healing, ulang tahun, atau darurat? Ajukan dalam 3 detik.

Pilih jenis izin, tentukan tanggal, lalu tinjau sebelum mengirim. HR tetap memeriksa pengajuan sesuai aturan tim.

`KLAIM`: angka “3 detik” berasal dari brief dan belum terverifikasi. Sebelum publish, ukur alur pada perangkat serta koneksi yang disepakati. Bila belum lolos, ganti copy publik menjadi “Ajukan izin dalam tiga langkah”. Tambahkan komentar `KLAIM` di dekat sumber copy.

- **CTA utama:** Coba demo izin → `#simulasi`
- Micro-copy demo: *Simulasi lokal. Tidak ada pengajuan yang dikirim ke HR.*
- Label status: *Belum dikirim*, *Menunggu persetujuan (simulasi)*

**Visual:** form tiga bagian yang bisa dipilih tanpa mengetik banyak: jenis izin, tanggal, tinjau. Sajikan preview hasil di bubble terpisah.

## 5. Sorotan Absensi

### Lagi WFA? Check-in tetap terasa dekat

Pilih mode kerja, catat jam masuk, lalu kirim mood singkat untuk memulai hari.

- Mode: WFA · Kantor · Remote
- Mood contoh: Fokus · Butuh kopi · Energi penuh
- Micro-copy: *Mood ini contoh dan tidak menilai kinerja.*
- CTA: **Lihat simulasi** → `#simulasi`

**Visual:** foto P03 di samping panel clock-in. Jangan meminta GPS atau menyiratkan kamera menyala. Tampilkan geofencing sebagai kemampuan opsional sesuai kebijakan, bukan sebagai pelacakan aktif.

## 6. Sorotan Gaji

### Slip gaji yang kebaca tanpa perlu tebak-tebakan

Ringkasan nominal, potongan, dan reimbursement ditata per baris. Notifikasi gajian dapat ditampilkan melalui kanal WhatsApp atau email sesuai konfigurasi perusahaan.

- Contoh chip: *Jadwal gajian · 25 setiap bulan* (data ilustrasi)
- Micro-copy: *Contoh angka bukan perhitungan pajak atau payroll resmi.*
- CTA: **Lihat simulasi** → `#simulasi`

**Visual:** slip vertikal dengan total dan komponen yang dapat diluaskan. Tombol kanal notifikasi pada demo hanya mengubah state lokal.

## 7. Sorotan Exam

### Hari pertama bisa mulai dengan kuis yang ringan

Kenalkan kebiasaan tim lewat kuis onboarding dan trivia mingguan. Hasil contoh membantu memperlihatkan pemahaman, bukan menentukan nilai karyawan.

- Micro-copy: *Nilai demo ini tidak dipakai untuk keputusan kerja.*
- CTA: **Lihat simulasi** → `#simulasi`

**Visual:** satu pertanyaan onboarding, jawaban pilihan, dan hasil dengan label teks. Jangan menampilkan webcam, wajah, atau klaim proctoring aktif.

## 8. Sorotan Library

### Jawaban soal kantor ada di satu tempat

Cari panduan seragam, aturan pantry, SOP, arsip dokumen, dan materi belajar tanpa mengulang pertanyaan yang sama.

- Contoh kategori: Hari pertama · Pantry · Seragam · SOP · Belajar
- Micro-copy: *Isi panduan pada contoh ini bersifat ilustratif.*
- CTA: **Lihat simulasi** → `#simulasi`

**Visual:** daftar pencarian dengan satu hasil terpilih dan status progres materi.

## 9. Cara kerja dan alur antar modul

### Dari pengajuan sampai jadwal yang ikut tertata

1. Karyawan melihat aturan cuti di Library.
2. Karyawan mengajukan izin di Perizinan.
3. HR meninjau dan memberi keputusan sesuai kebijakan.
4. Jadwal di Absensi memperlihatkan izin yang disetujui.
5. Gaji dapat menampilkan komponen terkait sesuai aturan perusahaan.

**Catatan:** diagram ini menjelaskan hubungan produk yang diharapkan. Otomasi antar modul harus diverifikasi sebelum dinyatakan aktif.

**CTA:** **Lihat simulasi** → `#simulasi`

**Visual:** diagram alur lima tahap dengan label “contoh alur”. Foto P05 menunjukkan suasana diskusi kerja natural.

## 10. Untuk tim seperti apa

### Cocok untuk ritme kerja yang nggak selalu sama

- **Agensi kreatif:** jadwal produksi dan lokasi tim bisa berganti.
- **Coworking space:** kebutuhan informasi anggota dan tim operasional beragam.
- **UMKM modern:** satu pemilik sering mengurus banyak hal sekaligus.
- **Startup fleksibel:** anggota tim bekerja remote, WFA, dan sesekali di kantor.

**CTA:** **Lihat simulasi** → `#simulasi`

**Visual:** susun foto P04 dan P06 dalam satu komposisi editorial dengan keterangan “Foto ilustrasi”. Jangan gunakan logo perusahaan atau seragam beridentitas.

## 11. FAQ

### Yang sering ditanyain

**Apakah KerjaKuy bisa dipakai saat WFA?**

Halaman ini menampilkan alur check-in fleksibel sebagai konsep produk. Kebijakan lokasi dan fitur yang tersedia perlu dikonfirmasi dengan pemilik KerjaKuy sebelum digunakan.

**Apakah cuti healing dan cuti ulang tahun otomatis disetujui?**

Tidak. Pengajuan perlu ditinjau oleh pihak yang berwenang sesuai kebijakan perusahaan.

**Apakah pengajuan izin benar-benar hanya butuh 3 detik?**

Angka tersebut menunggu verifikasi pada alur produk yang sebenarnya. Demo di halaman hanya memperlihatkan tiga langkah lokal.

**Apakah WhatsApp atau email benar-benar mengirim notifikasi gajian?**

Contoh pada halaman hanya menunjukkan pilihan kanal. Pengiriman nyata dan dukungan kanal harus dikonfirmasi sebelum dipublikasikan.

**Apakah perhitungan PPh 21 dan BPJS pada contoh ini resmi?**

Bukan. Nominal pada demo adalah angka ilustrasi untuk menjelaskan susunan slip, bukan kalkulasi legal atau payroll.

**Apakah kuis Exam memantau kamera karyawan?**

Demo tidak mengakses kamera atau perangkat. Setiap metode pemantauan nyata memerlukan penjelasan, persetujuan, dan verifikasi fitur.

**Apakah panduan di Library bisa diubah oleh perusahaan?**

Library diperlihatkan sebagai tempat menyimpan panduan. Cara pengelolaan dan hak akses perlu dikonfirmasi sesuai produk yang tersedia.

## 12. CTA penutup dan footer

### Biar urusan HR lebih ringan buat semua

Mulai dari alur izin, lanjutkan ke jadwal, lalu lihat fitur lain yang cocok untuk timmu.

- Tombol utama: **Lihat simulasi** → `#simulasi`
- Tombol sekunder: **Hubungi tim KerjaKuy** → alamat kontak resmi harus disediakan pemilik sebelum tautan diaktifkan.
- Micro-copy: *Foto pada halaman adalah foto ilustrasi, bukan pelanggan KerjaKuy.*

**Footer:**

- KerjaKuy · HR harian yang lebih gampang diikuti.
- Tautan: Fitur · Cara kerja · FAQ · Kontak · Kebijakan Privasi.
- Kontak: placeholder; jangan publish sebelum diganti.
- Hak cipta: `© [tahun berjalan] KerjaKuy. Hak cipta dilindungi.`
- Catatan foto: “Foto ilustrasi”.

## 13. Aturan copy dan data dummy

- Judul section maksimal 70 karakter; deskripsi maksimal 150 karakter; CTA maksimal 24 karakter.
- Copy publik tanpa tanda seru dan em dash. Jangan memakai angka statistik, testimoni, logo, atau klaim sebagai fakta tanpa bukti.
- Semua demo menggunakan nama fiktif yang diberi label “data ilustrasi”, nominal IDR, waktu WIB, dan tanggal yang ditampilkan relatif atau konsisten dengan waktu demo.
- Nama contoh: Alya dan Bima; kota contoh: Bandung dan Jakarta. Jangan mengaitkan foto wajah dengan nama tersebut.
- Tandai klaim yang belum diverifikasi dengan `KLAIM` di dokumen dan komentar kode.

