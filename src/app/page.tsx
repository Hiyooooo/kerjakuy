import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Fingerprint,
  Wallet,
  ClipboardCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Clock,
  ShieldCheck,
  Users,
  Compass,
  Store,
  Laptop,
} from "lucide-react";
import { getSiteConfig } from "@/lib/api";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { KuyBadge } from "@/components/ui/KuyCharacter";
import { HeroMockup } from "@/components/mockups/HeroMockup";
import { LeaveDemo } from "@/components/demo/LeaveDemo";
import { AttendanceDemo } from "@/components/demo/AttendanceDemo";
import { SalaryDemo } from "@/components/demo/SalaryDemo";
import { ExamDemo } from "@/components/demo/ExamDemo";
import { LibraryDemo } from "@/components/demo/LibraryDemo";
import { FaqSection } from "@/components/sections/FaqSection";

export default async function Home() {
  const config = await getSiteConfig();

  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper text-ink selection:bg-coral selection:text-ink">
      <Navbar logoUrl={config.branding.logo_url} siteName={config.site.name} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 2: HERO */}
        {/* ========================================================================= */}
        <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Kolom Kiri: Copywriting & CTA */}
              <div className="lg:col-span-7 space-y-6">
                <KuyBadge>HR harian untuk tim fleksibel</KuyBadge>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-ink leading-[1.05]">
                  {config.hero.headline}
                </h1>

                <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                  {config.hero.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  {/* CTA WhatsApp Utama dari Admin Panel */}
                  <Button
                    variant="primary"
                    size="lg"
                    href={config.cta.whatsapp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {config.hero.cta_text}
                  </Button>
                  {/* CTA Simulasi */}
                  <Button variant="secondary" size="lg" href="#simulasi">
                    Lihat simulasi
                  </Button>
                </div>

                <p className="text-xs text-muted italic">
                  Data pada tampilan ini hanya contoh. Simulasinya berjalan di halaman ini.
                </p>
              </div>

              {/* Kolom Kanan: Foto P01 & Mockup Hero */}
              <div className="lg:col-span-5 relative flex flex-col gap-6">
                <HeroMockup />
                <div className="hidden sm:block">
                  <PhotoSlot
                    id="P01"
                    src="/images/kerjakuy-hero.webp"
                    alt="Pekerja kreatif menyusun catatan di meja kerja fleksibel"
                    aspectRatio="4/3"
                    priority={true}
                    className="shadow-sm border border-line"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: MASALAH & MANFAAT */}
        {/* ========================================================================= */}
        <section id="masalah" className="py-20 md:py-28 bg-white border-y border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Rutinitas Kerja yang Lebih Rapi
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
                HR sehari-hari nggak harus terasa seperti cari chat lama
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Cuti masuk lewat pesan, jadwal berubah, lalu pertanyaan soal aturan pantry muncul lagi. KerjaKuy menaruh alur dan informasinya dalam satu pengalaman yang gampang dipahami tim.
              </p>
            </div>

            {/* Transformasi 3 Bubble */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-card bg-paper p-6 border-2 border-line hover:border-control transition-colors">
                <div className="w-10 h-10 rounded-full bg-coral/20 text-coral-ink flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  Permintaan lebih jelas
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Pilih jenis izin, tentukan tanggal, lalu tinjau pengajuan tanpa bolak-balik bertanya ke banyak pihak.
                </p>
              </div>

              <div className="rounded-card bg-paper p-6 border-2 border-line hover:border-control transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber/20 text-amber-ink flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  Kerja fleksibel tetap tercatat
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Check-in jam masuk dan mood harian tampil berdampingan, menjaga ritme tim tanpa membebani rutinitas.
                </p>
              </div>

              <div className="rounded-card bg-paper p-6 border-2 border-line hover:border-control transition-colors">
                <div className="w-10 h-10 rounded-full bg-success/20 text-success flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  Info kantor gampang dicari
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Panduan seragam, aturan pantry, dan jadwal bulanan punya rumah sendiri di Library wiki terpadu.
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* CTA 2 */}
              <Button variant="primary" size="md" href="#simulasi">
                Lihat simulasi
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: SOROTAN PERIZINAN (BINTANG UTAMA DEMO) */}
        {/* ========================================================================= */}
        <section id="simulasi" className="py-20 md:py-28 bg-[#FFF4F0]">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Demo Unggulan KerjaKuy
              </span>
              {/* KLAIM: Angka 3 detik berasal dari brief dan menunggu verifikasi pada alur produk nyata */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
                Cuti healing, ulang tahun, atau darurat? Ajukan dalam 3 detik.
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Pilih jenis izin, tentukan tanggal, lalu tinjau sebelum mengirim. HR tetap memeriksa pengajuan sesuai aturan tim.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <LeaveDemo />
              </div>

              <div className="lg:col-span-4 space-y-4">
                <PhotoSlot
                  id="P02"
                  src="/images/kerjakuy-leave.webp"
                  alt="Karyawan meninjau jadwal kerja di ruang bersama"
                  aspectRatio="3/2"
                  className="shadow-sm border border-line"
                />
                <div className="rounded-card bg-white p-5 border border-line text-xs space-y-2">
                  <h4 className="font-bold text-ink">Catatan Kebijakan Demo</h4>
                  <p className="text-muted leading-relaxed">
                    Hanya jenis cuti healing/tahunan yang memotong saldo cuti tahunan pada simulasi ini. Izin sakit, ulang tahun, darurat, dan lembur mengikuti aturan yang disepakati oleh perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: SOROTAN ABSENSI (DI BAWAH FITUR) */}
        {/* ========================================================================= */}
        <section id="fitur" className="py-20 md:py-28 bg-white border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Modul 1: Absensi
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-3">
                Lagi WFA? Check-in tetap terasa dekat
              </h3>
              <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                Pilih mode kerja, catat jam masuk, lalu kirim mood singkat untuk memulai hari.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <PhotoSlot
                  id="P03"
                  src="/images/kerjakuy-wfa.webp"
                  alt="Pekerja remote menggunakan laptop di ruang terang"
                  aspectRatio="4/3"
                  className="shadow-sm border border-line"
                />
              </div>
              <div className="lg:col-span-7">
                <AttendanceDemo />
              </div>
            </div>

            <div className="mt-10 text-center">
              {/* CTA 3 */}
              <Button variant="secondary" size="md" href="#simulasi">
                Lihat simulasi
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: SOROTAN GAJI */}
        {/* ========================================================================= */}
        <section id="gaji" className="py-20 md:py-28 bg-paper border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-ink block mb-2">
                Modul 2: Gaji
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-3">
                Slip gaji yang kebaca tanpa perlu tebak-tebakan
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Ringkasan nominal, potongan, dan reimbursement ditata per baris. Notifikasi gajian dapat ditampilkan melalui kanal WhatsApp atau email sesuai konfigurasi perusahaan.
              </p>
            </div>

            <SalaryDemo />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: SOROTAN EXAM */}
        {/* ========================================================================= */}
        <section id="exam" className="py-20 md:py-28 bg-white border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Modul 3: Exam
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-3">
                Hari pertama bisa mulai dengan kuis yang ringan
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Kenalkan kebiasaan tim lewat kuis onboarding dan trivia mingguan. Hasil contoh membantu memperlihatkan pemahaman, bukan menentukan nilai karyawan.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ExamDemo />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: SOROTAN LIBRARY */}
        {/* ========================================================================= */}
        <section id="library" className="py-20 md:py-28 bg-[#FFFBF0] border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-ink block mb-2">
                Modul 4: Library
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-3">
                Jawaban soal kantor ada di satu tempat
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Cari panduan seragam, aturan pantry, SOP, arsip dokumen, dan materi belajar tanpa mengulang pertanyaan yang sama.
              </p>
            </div>

            <LibraryDemo />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: ALUR CARA KERJA ANTAR MODUL */}
        {/* ========================================================================= */}
        <section id="cara-kerja" className="py-20 md:py-28 bg-white border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Alur Kerja Terpadu
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
                Dari pengajuan sampai jadwal yang ikut tertata
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Hubungan konseptual antar modul KerjaKuy membantu seluruh proses HR berlangsung transparan dan saling mendukung.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-6 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Karyawan melihat aturan cuti di Library",
                    desc: "Pedoman kuota dan syarat izin dibaca langsung di wiki tim.",
                  },
                  {
                    step: "2",
                    title: "Karyawan mengajukan izin di Perizinan",
                    desc: "Pilih tanggal dan jenis cuti dalam alur singkat tanpa form kertas.",
                  },
                  {
                    step: "3",
                    title: "HR meninjau dan memberi keputusan sesuai kebijakan",
                    desc: "Pemberitahuan masuk ke pihak berwenang untuk disetujui.",
                  },
                  {
                    step: "4",
                    title: "Jadwal di Absensi memperlihatkan izin yang disetujui",
                    desc: "Kalender shift otomatis menandai hari libur karyawan terkait.",
                  },
                  {
                    step: "5",
                    title: "Gaji dapat menampilkan komponen terkait sesuai aturan",
                    desc: "Perhitungan jam kerja dan kompensasi berjalan transparan di slip.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3.5 p-3.5 rounded-card bg-paper border border-line"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral text-ink font-extrabold text-xs shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-ink">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-6">
                <PhotoSlot
                  id="P05"
                  src="/images/kerjakuy-team-flow.webp"
                  alt="Dua rekan menyusun agenda kerja bersama"
                  aspectRatio="16/9"
                  className="shadow-sm border border-line"
                />
              </div>
            </div>

            <div className="text-center">
              {/* CTA 4 */}
              <Button variant="primary" size="md" href="#simulasi">
                Lihat simulasi
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: UNTUK TIM SEPERTI APA */}
        {/* ========================================================================= */}
        <section id="untuk-tim" className="py-20 md:py-28 bg-paper border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Kesesuaian Ritme
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
                Cocok untuk ritme kerja yang nggak selalu sama
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Setiap jenis tim punya kebutuhan fleksibilitasnya sendiri tanpa birokrasi korporat yang kaku.
              </p>
            </div>

            {/* 4 Pilar Tim */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              <div className="rounded-card bg-white p-5 border border-line">
                <Laptop className="w-6 h-6 text-coral-ink mb-3" />
                <h3 className="font-display font-bold text-base text-ink mb-1.5">
                  Agensi kreatif
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Jadwal produksi, rotasi studio, dan lokasi kerja tim bisa berganti sesuai proyek aktif.
                </p>
              </div>

              <div className="rounded-card bg-white p-5 border border-line">
                <Compass className="w-6 h-6 text-amber-ink mb-3" />
                <h3 className="font-display font-bold text-base text-ink mb-1.5">
                  Coworking space
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Kebutuhan informasi anggota, shift operasional, dan aturan ruang bersama ditata rapi.
                </p>
              </div>

              <div className="rounded-card bg-white p-5 border border-line">
                <Store className="w-6 h-6 text-success mb-3" />
                <h3 className="font-display font-bold text-base text-ink mb-1.5">
                  UMKM modern
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Satu pemilik usaha mengurus banyak hal sekaligus dengan ringkasan gaji yang mudah dibaca.
                </p>
              </div>

              <div className="rounded-card bg-white p-5 border border-line">
                <Users className="w-6 h-6 text-control mb-3" />
                <h3 className="font-display font-bold text-base text-ink mb-1.5">
                  Startup fleksibel
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Anggota tim bekerja remote, WFA, dan sesekali masuk kantor dengan transparansi penuh.
                </p>
              </div>
            </div>

            {/* Dua Foto Editorial P04 & P06 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <PhotoSlot
                id="P04"
                src="/images/kerjakuy-agency.webp"
                alt="Pekerja kreatif menyiapkan materi di studio kecil"
                aspectRatio="3/2"
                className="shadow-sm border border-line"
              />
              <PhotoSlot
                id="P06"
                src="/images/kerjakuy-small-business.webp"
                alt="Pemilik usaha kecil mengatur aktivitas harian"
                aspectRatio="3/2"
                className="shadow-sm border border-line"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: FAQ */}
        {/* ========================================================================= */}
        <section id="faq" className="py-20 md:py-28 bg-white border-b border-line">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block mb-2">
                Pertanyaan Umum
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
                Yang sering ditanyain
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Jawaban jujur seputar cakupan demo, status fitur, dan kebijakan privasi kerja di KerjaKuy.
              </p>
            </div>

            <FaqSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: CTA PENUTUP */}
        {/* ========================================================================= */}
        <section id="kontak" className="py-20 md:py-28 bg-[#FFF4F0]">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-coral-ink block">
                  Langkah Berikutnya
                </span>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
                  Biar urusan HR lebih ringan buat semua
                </h2>

                <p className="text-base text-muted leading-relaxed">
                  Mulai dari alur izin, lanjutkan ke jadwal, lalu lihat fitur lain yang cocok untuk timmu.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  {/* CTA 5 */}
                  <Button variant="primary" size="lg" href="#simulasi">
                    Lihat simulasi
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    href={config.cta.whatsapp_url || `mailto:${config.contact.email}`}
                    target={config.cta.whatsapp_url ? "_blank" : undefined}
                    rel={config.cta.whatsapp_url ? "noopener noreferrer" : undefined}
                  >
                    Hubungi tim {config.site.name}
                  </Button>
                </div>

                <p className="text-xs text-muted italic pt-1">
                  Foto pada halaman adalah foto ilustrasi, bukan pelanggan {config.site.name}.
                </p>
              </div>

              <div className="lg:col-span-6">
                <PhotoSlot
                  id="P07"
                  src="/images/kerjakuy-closing.webp"
                  alt="Tim kecil merapikan ruang kerja setelah beraktivitas"
                  aspectRatio="16/9"
                  className="shadow-sm border border-line"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 13: FOOTER */}
      <Footer
        footerText={config.footer_text}
        email={config.contact.email}
        phone={config.contact.phone}
        socialLinks={config.contact.social_links}
        logoUrl={config.branding.logo_url}
        siteName={config.site.name}
      />
    </div>
  );
}
