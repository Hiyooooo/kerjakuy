# 06. Aturan Anti-Slop

## 1. Visual yang dilarang

- Jangan memakai gradien, glow, efek kaca, blur dekoratif, latar grid/dot, atau bentuk blob bertumpuk tanpa tujuan yang tertulis.
- Jangan membuat semua section berupa judul tengah lalu grid kartu kembar. Variasikan ritme: hero split, panel izin lebar, slip gaji, kuis, daftar Library, diagram alur, dan foto editorial.
- Jangan membuat semua sudut menjadi pill. Radius besar untuk bubble dan kartu, lebih kecil untuk form dan kontrol.
- Jangan memakai emoji sebagai pengganti ikon atau foto. Ikon hanya `lucide-react`.
- Jangan mengubah karakter Kuy menjadi maskot besar yang muncul pada setiap kartu.
- Jangan mengganti tujuh slot foto suasana kerja dengan ilustrasi vektor atau gambar AI. Karakter Kuy hanya ornamen identitas kecil, bukan pengganti foto kontekstual.
- Jangan membuat panel produk yang hanya berisi skeleton tanpa data; mockup harus punya rincian dan state nyata di sisi klien.

## 2. Klaim, logo, dan merek

- Jangan tampilkan logo perusahaan, institusi, bank, sertifikasi, atau klien yang tidak berizin.
- Jangan tampilkan testimoni, jumlah perusahaan, persentase produktivitas, angka keamanan, atau harga yang tidak diberikan pemilik.
- Tandai komentar kode `KLAIM` untuk waktu pengajuan tiga detik, kalkulasi payroll, fitur lokasi, pengiriman notifikasi, proctoring, dan otomasi antar-modul sampai diverifikasi.
- Jangan menampilkan foto sebagai pelanggan, karyawan, atau testimoni KerjaKuy. Pasang label “Foto ilustrasi”.

| Hindari wording | Gunakan setelah verifikasi atau tulis dengan batas jelas |
|---|---|
| “PPh 21 dan BPJS selalu akurat” | “Contoh slip ini tidak menggantikan perhitungan payroll perusahaan” |
| “Pasti disetujui dalam 3 detik” | “Demo memperlihatkan tiga langkah pengajuan; keputusan tetap mengikuti HR” |
| “Absen WFA tanpa pengawasan” | “Metode kehadiran mengikuti kebijakan yang disepakati perusahaan” |
| “WhatsApp/email otomatis terkirim” | “Contoh menunjukkan pilihan kanal; pengiriman nyata perlu dikonfirmasi” |
| “Data 100% aman” | Jangan membuat klaim keamanan tanpa bukti dan persetujuan pemilik |
| “Terintegrasi langsung ke semua payroll” | Sebut hanya alur yang sudah diuji dan disetujui pemilik |

## 3. Copy yang dihindari dan diwajibkan

**Jangan gunakan:** “revolusioner”, “terdepan”, “seamless”, “game-changer”, jargon tanpa penjelasan, kalimat korporat generik, tanda seru, atau em dash pada halaman.

**Gunakan:** kata kerja jelas, micro-copy ramah, label status dengan arti langsung, contoh yang spesifik terhadap kerja WFA, cuti, gajian, kuis, dan panduan kantor. Nyatakan batas demo dekat aksi yang disimulasikan.

## 4. Kode yang dilarang

- Jangan kirim form, pesan, nominal, lokasi, atau jawaban ke jaringan. Jangan meminta izin kamera atau geolokasi.
- Jangan hotlink gambar; jangan memasukkan gambar orang hasil AI atau foto berlisensi tak jelas.
- Jangan letakkan rumus payroll, cuti, kuis, atau progres di dalam komponen presentasi; fungsi harus murni dan diuji.
- Jangan gunakan teks placeholder seperti “Lorem ipsum”, angka dummy tanpa label, atau `href="#"`.
- Jangan memakai animasi looping, `transition: all`, atau gerak yang menghalangi fokus dan pembacaan.
- Jangan menyisipkan informasi pengguna ke HTML sebagai markup mentah.

## 5. Penanda desain yang disengaja

- Gunakan coral/amber hanya pada tindakan penting, status terpilih, dan elemen bubble yang bermakna.
- Gunakan panel Perizinan sebagai tanda tangan visual: tiga tahap, tanggal yang dipilih, status menunggu, dan catatan bahwa hasil bersifat simulasi.
- Gunakan variasi panel yang berasal dari bentuk konten, bukan ornamen acak.
- Pakai satu karakter Kuy kecil dan wordmark buatan sendiri; jangan menyerupai merek lain.
- Pakai foto dokumenter alami untuk konteks manusia dan tempat, lalu UI buatan kode untuk bukti cara kerja produk.

## 6. Uji anti-slop

Jawab ya/tidak sebelum menyerahkan UI:

1. Apakah setiap bubble menjelaskan percakapan atau status tertentu?
2. Apakah mockup Perizinan jelas bisa dicoba dan tetap menyatakan bahwa data tidak terkirim?
3. Apakah foto menunjukkan konteks kerja nyata tanpa pose korporat klise?
4. Apakah karakter Kuy muncul secukupnya dan tidak mengambil alih informasi?
5. Apakah ritme tiap modul berbeda mengikuti isi modulnya?
6. Apakah teks coral dan amber memakai varian gelap yang terbaca pada latar terang?
7. Apakah klaim yang belum diverifikasi ditandai serta tidak tampil sebagai fakta?
8. Apakah mood check-in dinyatakan opsional dan tidak menilai produktivitas?
9. Apakah kontrol dan hasil demo bisa dipahami dengan keyboard dan pembaca layar?
10. Apakah layout masih khas KerjaKuy bila wordmark diganti, lewat bubble tiga tahap dan bahasa yang akrab?

Jawaban “tidak” pada pertanyaan 2, 6, 7, atau 9 harus diperbaiki sebelum rilis. Tinjau jawaban lain dan catat alasan bila dipertahankan.

## 7. Audit otomatis

Jalankan dari root proyek sesudah implementasi. Periksa hasil `rg` secara manual sebelum memperbaiki agar nama file pengecualian tidak salah dinilai.

```powershell
# Harus tanpa hasil dalam copy halaman: em dash, tanda seru, dan klise yang dilarang.
rg -n "—|!|revolusioner|terdepan|seamless|game-changer|Lorem ipsum" src/app src/components

# Harus tanpa hasil: gradien, animasi looping, dan link kosong.
rg -n 'gradient|animate-infinite|infinite|href="#"' src/app src/components

# Semua foto di manifest dan source harus lokal, bukan hotlink.
rg -n "https?://.*\.(jpg|jpeg|png|webp|avif)" src public

# Placeholder klaim wajib ditemukan dan ditinjau.
rg -n "KLAIM|placeholder|TODO pemilik" src docs
```

Pengecualian sah: tanda `!` dalam sintaks TypeScript/JS bukan copy; em dash yang tampil pada isi docs tidak termasuk pencarian `src/app src/components`; string `https://` pada metadata domain placeholder tidak dianggap foto hotlink; kata placeholder di dokumen dan komentar memang harus ditemukan. Jangan hapus pengecualian tersebut dari audit tanpa meninjau konteks.

