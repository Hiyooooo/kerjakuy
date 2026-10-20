import React from "react";
import Link from "next/link";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { KuyCharacter } from "../ui/KuyCharacter";

export function HeroMockup() {
  return (
    <div className="relative w-full max-w-md rounded-bubble bg-white p-6 shadow-md border-2 border-line">
      {/* Header Pengguna Demo */}
      <div className="flex items-center justify-between pb-4 border-b border-line/60">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/20 font-bold text-coral-ink text-sm">
            AL
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-ink text-sm">Alya</span>
              <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-muted">
                data ilustrasi
              </span>
            </div>
            <p className="text-xs text-muted">Tim Desain Kreatif · Bandung</p>
          </div>
        </div>
        <KuyCharacter size="sm" mood="happy" />
      </div>

      {/* Konten Kartu Pengajuan Izin */}
      <div className="my-5 rounded-card bg-paper p-4 border border-line/50">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-chip bg-coral/20 px-2.5 py-1 text-xs font-semibold text-coral-ink">
            Cuti healing
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-amber-ink bg-amber/15 px-2 py-0.5 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>Belum dikirim</span>
          </span>
        </div>

        {/* Tanggal & Durasi */}
        <div className="flex items-center gap-3 text-sm text-ink mb-2">
          <Calendar className="w-4 h-4 text-muted shrink-0" />
          <span>Jumat, 24 Oktober 2026</span>
          <span className="text-xs text-muted">(1 hari kerja)</span>
        </div>

        <p className="text-xs text-muted italic">
          &ldquo;Recharge energi setelah rilis proyek desain&rdquo;
        </p>

        {/* Stepper Indikator 3 Tahap */}
        <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-1 font-semibold text-ink">
            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
            <span>1. Pilih jenis</span>
          </div>
          <span className="text-line">→</span>
          <div className="flex items-center gap-1 font-semibold text-ink">
            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
            <span>2. Tanggal</span>
          </div>
          <span className="text-line">→</span>
          <div className="flex items-center gap-1 text-muted">
            <span className="w-2 h-2 rounded-full bg-amber shrink-0" />
            <span>3. Tinjau</span>
          </div>
        </div>
      </div>

      {/* Tombol Aksi Menuju Demo Lengkap */}
      {/* KLAIM: Angka pengajuan 3 detik menunggu pembuktian alur nyata. */}
      <Link
        href="#simulasi"
        className="w-full inline-flex items-center justify-center font-bold text-ink bg-coral hover:bg-[#F45D74] transition-colors rounded-chip py-3 text-sm shadow-xs focus-visible:outline-3 focus-visible:outline-control"
      >
        Lihat simulasi di bawah
      </Link>
    </div>
  );
}
