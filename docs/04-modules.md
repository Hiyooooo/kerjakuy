# 04. Modul dan Demo Lokal

## 1. Aturan demo bersama

Semua tampilan ialah showcase statis/interaktif lokal. Jangan membuat network request, akses kamera, geolokasi, notifikasi nyata, pembayaran, atau unduhan sungguhan. Setiap state hasil harus menyebut “simulasi” atau “data ilustrasi”. Pisahkan fungsi murni dari komponen. Kontrol harus keyboard accessible, memiliki label, dan mengumumkan perubahan hasil melalui `aria-live="polite"`. Saat reduced-motion aktif, tampilkan state akhir tanpa transisi.

Data contoh memakai Alya/Bima, kota Bandung/Jakarta, rupiah, dan waktu WIB. Nama dan angka diberi label **data ilustrasi**.

## 2. Mockup hero: ringkasan izin

| Elemen | Data dan perilaku |
|---|---|
| Kartu | “Alya · data ilustrasi”, jenis “Cuti healing”, satu tanggal terpilih |
| Status awal | “Belum dikirim” |
| Visual pendamping | Kalender kecil, 3 titik tahap, bubble karakter Kuy |
| Interaksi | Tombol `Lihat demo izin` membawa fokus ke demo Perizinan; tidak mengirim data |
| A11y | Heading jelas, label status teks, karakter dekoratif `aria-hidden` |
| Klaim | `KLAIM` durasi tiga detik belum terverifikasi; lihat `03-page-structure.md` §4 |

## 3. Absensi

**Ikon:** `Fingerprint`  
**H3:** Absen fleksibel, mood tetap kebaca  
**Deskripsi:** Catat masuk dan pulang sesuai shift, pilih mode kerja, lalu bagikan mood harian secara opsional.

| Sub-fitur wajib | Cara membingkai untuk KerjaKuy |
|---|---|
| Clock-in/out | Fokus demo: check-in WFA dan check-out lokal |
| GPS geofencing | Tampilkan sebagai opsi kebijakan; demo tidak meminta lokasi atau memvalidasi koordinat |
| Shift kerja | Chip shift ilustratif: “Fleksibel · 09.00–17.00 WIB” |
| Rekap kehadiran real-time | Daftar ringkas berlabel “contoh rekap”, tanpa data orang nyata |
| Mood harian | Pilih “Fokus”, “Butuh kopi”, atau “Energi penuh”; opsional dan tidak menilai kinerja |

**Elemen UI:** mode kerja select (WFA/kantor/remote), jam masuk, tombol clock-in/out, mood buttons, status hari ini, teks kecil “data ilustrasi”.

**Langkah interaksi:** (1) pilih mode, (2) tekan “Mulai hari”, (3) pilih mood opsional. Tombol berubah menjadi “Check-in tercatat di simulasi”; tekan lagi untuk status check-out. Reset mengembalikan awal.

**State:** awal, checked-in, mood-selected, checked-out. Jika tombol ditekan lagi setelah check-out, jangan tambah durasi tanpa reset. Umumkan setiap perubahan melalui live region.

**Rumus murni:** `workedMinutes(start, end, breakMinutes) = max(0, minutes(end) - minutes(start) - breakMinutes)`. Fungsi contoh ini hanya menerima shift pada hari yang sama; tolak waktu tidak valid, pulang sebelum/bersamaan dengan masuk, dan break negatif. Bila produk harus mendukung shift lintas tengah malam, sepakati aturan terpisah dan tambahkan test vector.

| Masuk | Pulang | Istirahat | Hasil |
|---|---|---:|---:|
| 09:05 | 17:10 | 60 menit | 425 menit = 7 jam 5 menit |
| 09:00 | 17:00 | 60 menit | 420 menit = 7 jam |
| 09:00 | 12:00 | 0 menit | 180 menit = 3 jam |

## 4. Gaji

**Ikon:** `Wallet`  
**H3:** Slip gaji yang enak dibaca  
**Deskripsi:** Lihat pendapatan, potongan, reimbursement, dan kanal notifikasi dalam susunan yang gampang dipindai.

| Sub-fitur wajib | Cara membingkai untuk KerjaKuy |
|---|---|
| Kalkulasi otomatis | Total pada data simulasi dihitung fungsi murni di bawah |
| PPh 21 | Nominal contoh statis; bukan perhitungan pajak resmi |
| BPJS | Nominal contoh statis; tarif dan dasar hitung menunggu keputusan pemilik |
| Slip gaji digital | Kartu slip dengan total, rincian, dan label “contoh” |
| Reimbursement | Baris biaya transport contoh; tampilkan terpisah dari gaji pokok |
| Notifikasi gajian | Tombol kanal WhatsApp/email hanya mengubah pilihan lokal; tidak mengirim pesan |

**Elemen UI dan data dummy:** periode “Oktober · data ilustrasi”; gaji pokok Rp7.500.000; tunjangan Rp1.000.000; lembur Rp250.000; reimbursement Rp180.000; contoh PPh 21 Rp250.000; contoh BPJS Rp150.000. Label setiap potongan sebagai angka demo.

**Langkah interaksi:** buka rincian slip, pilih WhatsApp atau Email, ubah kanal, lalu reset. Beri teks “Notifikasi tidak dikirim pada demo ini”.

**Fungsi murni:** `takeHome = base + allowance + overtime + reimbursement - pph21Example - bpjsExample`.

| Gaji pokok | Tunjangan | Lembur | Reimbursement | PPh 21 contoh | BPJS contoh | Total demo |
|---:|---:|---:|---:|---:|---:|---:|
| Rp7.500.000 | Rp1.000.000 | Rp250.000 | Rp180.000 | Rp250.000 | Rp150.000 | **Rp8.530.000** |
| Rp6.000.000 | Rp0 | Rp0 | Rp0 | Rp0 | Rp0 | **Rp6.000.000** |

**Penyederhanaan wajib:** (a) PPh 21 dan BPJS adalah nominal input ilustratif, bukan tarif atau kalkulasi sesuai hukum; (b) demo memasukkan reimbursement ke total transfer contoh, sementara perlakuan nyata mengikuti kebijakan dan sistem perusahaan. Komentar kode harus menyebut (a) dan (b). Jangan gunakan angka ini untuk estimasi payroll nyata.

## 5. Perizinan

**Ikon:** `CalendarCheck`  
**H3:** Minta izin tanpa keliling cari form  
**Deskripsi:** Pilih jenis izin, tanggal, lalu tinjau permintaan sebelum HR memberi keputusan.

| Sub-fitur wajib | Cara membingkai untuk KerjaKuy |
|---|---|
| Workflow approval cuti | Sorotan demo utama: draf → tinjau → status menunggu (simulasi) |
| Izin sakit | Pilihan jenis izin; jangan meminta dokumen medis pada demo |
| Lembur | Tampilkan sebagai jenis pengajuan/rekap sesuai kebijakan, tanpa menghitung upah resmi |
| Transparansi sisa cuti | Tampilkan saldo ilustratif dan perubahan setelah simulasi pengajuan tahunan |
| Fokus tema | Cuti healing, ulang tahun, darurat; kebijakan perusahaan dapat berbeda |

**Elemen UI dan data:** Alya, sisa cuti tahunan 12 hari, jenis izin (healing/tahunan, ulang tahun, darurat, sakit, lembur), pilihan tanggal, kolom catatan opsional, preview. Hanya jenis “tahunan/healing” mengurangi saldo pada contoh; ulang tahun/darurat/sakit/lembur mengikuti kebijakan dan tidak mengubah saldo pada default simulasi.

**Langkah interaksi:** (1) pilih jenis, (2) pilih tanggal dan isi catatan opsional, (3) tinjau lalu tekan “Kirim simulasi”. Tampilkan “Permintaan contoh masuk ke status menunggu persetujuan. Tidak ada data yang dikirim.” Tombol reset mengembalikan draf.

**Rumus murni:** `remaining = max(0, openingBalance - approvedAnnualDays - requestedAnnualDays)`. Perhitungan hanya untuk contoh jenis cuti tahunan yang telah disetujui. Jenis cuti lain memakai aturan yang diputuskan perusahaan.

| Saldo awal | Cuti tahunan sebelumnya disetujui | Pengajuan tahunan ini disetujui | Sisa |
|---:|---:|---:|---:|
| 12 hari | 3 hari | 2 hari | **7 hari** |
| 12 hari | 0 hari | 0 hari | **12 hari** |
| 12 hari | 12 hari | 1 hari | **0 hari** (dibatasi minimum nol) |

**A11y dan motion:** tombol kategori berupa radio berlabel; tanggal punya label; stepper memberi nama tahap; live region mengumumkan hasil. Jangan mengandalkan timer animasi untuk membuktikan klaim tiga detik. Dengan reduced-motion, update langsung ke hasil akhir.

## 6. Exam

**Ikon:** `ClipboardCheck`  
**H3:** Kenalan dengan budaya lewat kuis singkat  
**Deskripsi:** Coba kuis onboarding dan trivia mingguan dengan hasil contoh yang tidak dipakai untuk keputusan kerja.

| Sub-fitur wajib | Cara membingkai untuk KerjaKuy |
|---|---|
| Assessment rekrutmen online | Tersedia sebagai kategori pelengkap; tidak diaktifkan pada demo onboarding |
| Evaluasi kinerja | Jelaskan sebagai alur perusahaan yang perlu kebijakan dan konteks |
| Uji kompetensi | Dapat ditampilkan sebagai kuis materi, bukan sertifikasi resmi |
| Proctoring | Sebut sebagai kemampuan yang perlu verifikasi; jangan akses kamera atau tampilkan sebagai aktif |
| Fokus tema | Kuis onboarding lima soal dan trivia budaya mingguan |

**Data demo:** lima butir pilihan ganda tentang jam fokus, peminjaman alat, aturan pantry, cara mengajukan izin, dan lokasi panduan. Tandai jawaban benar pada fixture tes; jangan tampilkan kunci sebelum jawaban dikirim. Data fiktif dan tidak merepresentasikan kebijakan kantor nyata.

**Langkah interaksi:** pilih jawaban tiap pertanyaan, tekan “Lihat hasil simulasi”, tampilkan skor dan penjelasan singkat, reset untuk mencoba lagi. Tidak ada leaderboard publik atau kamera.

**Rumus murni:** `scorePercent = round(correct / total * 100)`. Untuk total nol kembalikan nol dan jangan membagi dengan nol.

| Jawaban benar | Jumlah soal | Skor |
|---:|---:|---:|
| 4 | 5 | **80%** |
| 5 | 5 | **100%** |
| 0 | 5 | **0%** |

**A11y:** kelompok opsi radio dengan legend, urutan fokus sesuai nomor soal, hasil dibacakan live, dan skor selalu disertai jumlah jawaban benar.

## 7. Library

**Ikon:** `BookOpen`  
**H3:** Wiki kantor yang nggak bikin nyasar  
**Deskripsi:** Cari panduan seragam, pantry, SOP, arsip dokumen, dan materi belajar dari satu daftar.

| Sub-fitur wajib | Cara membingkai untuk KerjaKuy |
|---|---|
| Knowledge base SOP | Artikel “Cara mengajukan izin” dan “Pantry bersama” sebagai contoh |
| Arsip dokumen perusahaan | Kategori contoh tanpa mengunduh dokumen sungguhan |
| Modul e-learning | Materi onboarding dengan progres lokal |
| Fokus tema | Seragam, aturan pantry, jadwal kegiatan kantor, dan trivia |

**Data demo:** empat artikel fiktif: “Panduan seragam”, “Aturan pantry”, “Cara mengajukan izin”, “Agenda tim”. Progres modul contoh 3 dari 4 bagian.

**Langkah interaksi:** ketik pencarian, pilih salah satu kategori, buka hasil, lalu tekan “Tandai selesai”. Simpan state hanya selama halaman aktif dan jelaskan bahwa tidak ada dokumen yang diunduh.

**Rumus murni:** `progressPercent = total === 0 ? 0 : round(completed / total * 100)`, dengan hasil dibatasi 0–100.

| Selesai | Total bagian | Progres |
|---:|---:|---:|
| 3 | 4 | **75%** |
| 4 | 4 | **100%** |
| 0 | 4 | **0%** |

## 8. Alur antar modul

Perlihatkan alur konseptual **Library → Perizinan → Absensi → Gaji**: karyawan menemukan aturan, mengajukan izin, HR meninjau, jadwal contoh menampilkan hasil persetujuan, dan slip demo memperlihatkan komponen yang mengikuti kebijakan. Exam menambah jalur **Library → Exam** untuk kuis onboarding. Jangan menyebut alur ini integrasi aktif sampai pemilik membuktikannya.

## 9. Verifikasi akhir agent pembangun

- Absensi `09:05–17:10`, istirahat 60 menit → `425 menit`, ditampilkan `7j 5m`.
- Perizinan saldo 12, cuti disetujui 3 dan pengajuan tahunan disetujui 2 → `7 hari`.
- Gaji dengan angka tabel utama → `Rp8.530.000`.
- Exam 4 benar dari 5 → `80%`.
- Library 3 bagian selesai dari 4 → `75%`.
- Memilih tombol notifikasi tidak mengirim pesan; mengajukan izin tidak menghubungi HR; mode WFA tidak meminta geolokasi.

