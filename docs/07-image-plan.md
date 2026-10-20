# 07. Rencana Foto dan Visual

## 1. Prinsip

Pilih foto untuk menjelaskan ritme kerja audiens KerjaKuy, bukan sebagai pengisi ruang. Pertahankan satu gaya dokumenter yang hangat, natural, dan konsisten. Foto tidak membuktikan penggunaan produk, hasil kerja, atau hubungan pelanggan. UI, diagram, ikon, wordmark, dan karakter kecil Kuy dibuat dengan kode; aset-aset itu tidak menggantikan foto orang/tempat kerja yang diwajibkan.

## 2. Peta visual setiap section

| Section | Foto / visual | Aturan |
|---|---|---|
| Navigasi | Wordmark buatan sendiri | Tanpa logo pihak lain |
| Hero | P01 + mockup izin | Foto menjadi konteks, demo tetap menjadi fokus |
| Masalah/manfaat | Diagram bubble pesan ke ringkasan | Tidak memakai percakapan nyata |
| Demo Perizinan | P02 pada panel samping atau latar; form dibuat kode | Label demo lokal terlihat |
| Absensi | P03 + panel check-in buatan kode | Tidak meminta GPS atau kamera |
| Gaji | Mockup slip gaji buatan kode | Semua angka berlabel ilustrasi |
| Exam | Kuis buatan kode | Tanpa webcam atau wajah |
| Library | Pencarian/katalog buatan kode | Tanpa dokumen perusahaan nyata |
| Cara kerja | P05 + diagram lima tahap | Tandai alur sebagai contoh |
| Untuk tim | P04 dan P06 | Satu foto per konteks berbeda |
| FAQ | Accordion | Fokus terlihat dan keyboard support |
| Penutup | P07 | Teks diletakkan di luar area wajah |
| Footer | Wordmark dan teks | Sertakan “Foto ilustrasi” |

Tidak ada section yang boleh melewati satu layar penuh tanpa foto, mockup, diagram, atau demo yang bermakna.

## 3. Slot foto

| ID | Berkas | Section | Rasio & ukuran sumber | Subjek dan suasana | Kata kunci pencarian (Inggris + Indonesia) | Hindari | Alt (Indonesia) | Catatan komposisi |
|---|---|---|---|---|---|---|---|---|
| P01 | `public/images/kerjakuy-hero.webp` | Hero | 4:3; sumber min. 1600×1200 | Pekerja kreatif Asia Tenggara bekerja tenang di meja fleksibel, candid | `Southeast Asian creative freelancer working naturally`, `pekerja kreatif Asia Tenggara bekerja santai` | Senyum ke kamera, logo di laptop, ruang mewah | “Pekerja kreatif menyusun catatan di meja kerja fleksibel” | Subjek di kanan foto; ruang kosong kiri atas |
| P02 | `public/images/kerjakuy-leave.webp` | Sorotan Perizinan | 3:2; min. 1500×1000 | Karyawan melihat kalender kerja di ruang kantor sederhana | `natural coworking calendar planning Southeast Asia`, `karyawan mengatur jadwal di coworking` | Layar aplikasi terbaca, kalender berisi data pribadi | “Karyawan meninjau jadwal kerja di ruang bersama” | Ruang kosong di sisi kiri untuk panel demo |
| P03 | `public/images/kerjakuy-wfa.webp` | Absensi | 4:3; min. 1600×1200 | Satu orang bekerja dari rumah atau ruang kerja bersama yang realistis | `Southeast Asian remote worker natural daylight`, `pekerja remote Indonesia cahaya alami` | Pose menunjuk layar, logo perangkat, meja terlalu staged | “Pekerja remote menggunakan laptop di ruang terang” | Subjek di sisi kiri agar UI berada di kanan |
| P04 | `public/images/kerjakuy-agency.webp` | Untuk tim: agensi | 3:2; min. 1500×1000 | Desainer atau editor menyiapkan materi di studio kecil | `small creative studio Southeast Asia candid`, `studio agensi kreatif kecil Indonesia` | Logo agensi, papan dengan tulisan terbaca | “Pekerja kreatif menyiapkan materi di studio kecil” | Frame medium; konteks ruang tampak |
| P05 | `public/images/kerjakuy-team-flow.webp` | Cara kerja | 16:9; min. 1920×1080 | Dua rekan membahas agenda di meja tanpa pose promosi | `coworkers discussing work naturally Southeast Asia`, `rekan kerja membahas agenda secara natural` | Jabat tangan, tertawa menatap laptop, papan kaca | “Dua rekan menyusun agenda kerja bersama” | Sediakan ruang netral di sisi kanan untuk diagram |
| P06 | `public/images/kerjakuy-small-business.webp` | Untuk tim: UMKM/coworking | 3:2; min. 1500×1000 | Pemilik usaha kecil mengatur pesanan atau jadwal operasional | `small business owner working Southeast Asia documentary`, `pemilik UMKM bekerja natural Indonesia` | Merek pada produk, uang tunai sebagai klaim, pose testimoni | “Pemilik usaha kecil mengatur aktivitas harian” | Foto berbeda konteks dari studio dan WFA |
| P07 | `public/images/kerjakuy-closing.webp` | CTA penutup | 16:9; min. 1920×1080 | Tim kecil merapikan ruang atau menutup agenda kerja | `small team workspace end of day Southeast Asia`, `tim kecil merapikan ruang kerja Indonesia` | Tim tertawa menatap kamera, seragam, banner | “Tim kecil merapikan ruang kerja setelah beraktivitas” | Sisakan ruang kiri untuk CTA; hindari teks di atas wajah |

## 4. Kriteria pilihan foto

Semua kandidat harus memenuhi:

- Gaya dokumenter alami dan cahaya yang masuk akal.
- Konteks Indonesia/Asia Tenggara diutamakan; pakaian dan tempat kerja realistis.
- Palet hangat atau netral yang selaras dengan coral, amber, paper, dan ink.
- Tanpa logo/merek, teks terbaca, lambang instansi, layar UI produk lain, pasien, atau anak yang dapat dikenali.
- Hindari jabat tangan, tim tertawa sambil menatap laptop, pose menunjuk papan kaca, serta senyum korporat yang dipaksakan.
- Jangan pasangkan wajah foto dengan nama/jabatan seolah orang tersebut adalah karyawan atau pelanggan KerjaKuy.

## 5. Cara mendapatkan foto saat implementasi

Ikuti urutan ini sebelum menaruh gambar ke halaman:

1. Periksa akses jaringan dan sumber lisensi. Jika pemilik menyediakan foto dan izin tertulis, prioritaskan aset tersebut. Jika tidak, gunakan sumber foto bebas komersial dengan syarat lisensi yang dipahami.
2. Untuk setiap slot, kumpulkan tiga kandidat. Buka dan lihat gambar penuh, bukan hanya judul atau thumbnail. Tolak kandidat yang melanggar kriteria §4.
3. Pilih satu kandidat per slot dan unduh ke `public/images/`. Jangan hotlink.
4. Isi `public/images/CREDITS.md` dengan ID, judul foto, nama fotografer, URL halaman sumber, lisensi, tanggal unduh, dan catatan orang/model release yang terlihat. Simpan bukti lisensi sesuai kebutuhan proyek.
5. Pangkas mengikuti rasio slot, ekspor WebP/AVIF kualitas sekitar 78, buang metadata EXIF/lokasi, target sekitar 220 KB atau kurang per foto dan maksimal 600 KB untuk foto yang dimuat di atas lipatan.
6. Verifikasi dimensi, crop, `alt`, `sizes`, CLS, dan tampilan pada lebar 375, 768, 1024, serta 1440 px.

Format tabel `CREDITS.md`:

| ID | Judul | Fotografer | URL halaman sumber | Lisensi | Tanggal unduh | Catatan release/orang |
|---|---|---|---|---|---|---|

## 6. Integrasi aset dan kondisi blocker

- Buat manifest lokal `{ id, src, alt, width, height }` dan komponen `PhotoSlot` berbasis `next/image`.
- Gunakan `fill` hanya dalam kontainer dengan rasio eksplisit dan `sizes` yang benar. Lazy-load foto non-LCP; hanya foto LCP yang boleh diprioritaskan.
- Jangan tambahkan host eksternal untuk foto di konfigurasi. Semua aset yang dipakai harus lokal.
- Tambahkan `width`/`height` atau rasio sebelum foto tersedia agar tidak terjadi layout shift.
- Bila jaringan atau lisensi menghalangi, pertahankan slot sebagai blok netral token berasio tetap. Jangan membuat pengganti AI atau vektor. Catat **BLOCKER** dengan ID slot yang kosong, kata kunci pencarian, dan permintaan agar pemilik menyediakan foto/izin.
- Dalam tugas ini hanya dokumen yang dibuat, sehingga belum ada foto yang dipilih atau diunduh. Tujuh slot di atas menjadi blocker implementasi sampai foto lokal berlisensi dan kreditnya tersedia.

## 7. Checklist gambar

- [ ] Tujuh slot memiliki masing-masing tiga kandidat yang telah dilihat sebelum dipilih.
- [ ] Setiap aset final memiliki lisensi dan baris kredit.
- [ ] Foto tersimpan lokal, teroptimasi, tanpa metadata lokasi, dan tidak hotlink.
- [ ] `alt`, `sizes`, rasio, lazy-load, serta prioritas LCP diverifikasi.
- [ ] Label “Foto ilustrasi” tampil dekat kumpulan foto dan di footer.
- [ ] Tidak ada foto yang dipasangkan dengan identitas pelanggan/karyawan fiktif.
- [ ] Slot yang masih kosong memakai blok netral dan dilaporkan sebagai blocker.

