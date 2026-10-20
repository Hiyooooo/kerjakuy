"use client";

import React, { useState } from "react";
import {
  Wallet,
  Receipt,
  MessageSquare,
  Mail,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { calculateTakeHomePay, formatRupiah } from "@/lib/calculations";

// KLAIM: Angka berikut adalah contoh ilustrasi susunan slip gaji, bukan perhitungan resmi pajak atau BPJS.
const SALARY_DATA = {
  employee: "Alya",
  role: "Desainer Produk",
  period: "Oktober 2026 · data ilustrasi",
  base: 7_500_000,
  allowance: 1_000_000,
  overtime: 250_000,
  reimbursement: 180_000,
  pph21Example: 250_000,
  bpjsExample: 150_000,
};

export function SalaryDemo() {
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const takeHomePay = calculateTakeHomePay(
    SALARY_DATA.base,
    SALARY_DATA.allowance,
    SALARY_DATA.overtime,
    SALARY_DATA.reimbursement,
    SALARY_DATA.pph21Example,
    SALARY_DATA.bpjsExample
  );

  const handleChannelChange = (newChannel: "whatsapp" | "email") => {
    setChannel(newChannel);
    setLiveAnnouncement(
      `Pilihan kanal notifikasi gajian diubah ke ${
        newChannel === "whatsapp" ? "WhatsApp" : "Email"
      }. Notifikasi tidak dikirim pada demo ini.`
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-bubble bg-white p-6 sm:p-8 border-2 border-line shadow-md">
      {/* Header Panel */}
      <div className="flex items-center justify-between pb-5 border-b border-line/60">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-card bg-coral/20 text-coral-ink shrink-0">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-ink text-lg">
              Slip Gaji Digital
            </h4>
            <p className="text-xs text-muted">Periode: {SALARY_DATA.period}</p>
          </div>
        </div>
        <span className="rounded-full bg-paper px-2.5 py-1 text-xs font-semibold text-muted border border-line">
          Contoh slip
        </span>
      </div>

      {/* Live Region Accessibility */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Kartu Struk Vertikal */}
      <div className="my-5 rounded-card bg-paper p-5 border border-line">
        {/* Identitas Karyawan */}
        <div className="flex items-center justify-between pb-3 border-b border-line/50 text-xs">
          <div>
            <span className="text-muted block">Penerima</span>
            <span className="font-bold text-ink text-sm">{SALARY_DATA.employee}</span>
          </div>
          <div className="text-right">
            <span className="text-muted block">Jabatan</span>
            <span className="font-medium text-ink">{SALARY_DATA.role}</span>
          </div>
        </div>

        {/* Ringkasan Total Transfer */}
        <div className="py-4 border-b border-line/50 text-center">
          <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
            Total Take-Home Pay (Ilustrasi)
          </span>
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-ink tabular-nums">
            {formatRupiah(takeHomePay)}
          </span>
          <span className="block text-[11px] text-muted mt-1">
            Jadwal gajian: 25 setiap bulan
          </span>
        </div>

        {/* Rincian Komponen Pendapatan & Potongan */}
        <div className="pt-3">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-xs font-bold text-ink py-1 hover:text-coral-ink"
          >
            <span className="flex items-center gap-1.5">
              <Receipt className="w-3.5 h-3.5 text-muted" />
              <span>Rincian pendapatan dan potongan</span>
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-muted" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted" />
            )}
          </button>

          {isExpanded && (
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-line/30">
                <span className="text-muted">Gaji pokok</span>
                <span className="font-semibold text-ink tabular-nums">
                  {formatRupiah(SALARY_DATA.base)}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-line/30">
                <span className="text-muted">Tunjangan tetap</span>
                <span className="font-semibold text-ink tabular-nums">
                  {formatRupiah(SALARY_DATA.allowance)}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-line/30">
                <span className="text-muted">Lembur terekam</span>
                <span className="font-semibold text-ink tabular-nums">
                  {formatRupiah(SALARY_DATA.overtime)}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-line/30">
                <span className="text-muted">Reimbursement transport</span>
                <span className="font-semibold text-ink tabular-nums">
                  {formatRupiah(SALARY_DATA.reimbursement)}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-line/30 text-danger">
                <span>Potongan PPh 21 (contoh)</span>
                <span className="font-semibold tabular-nums">
                  - {formatRupiah(SALARY_DATA.pph21Example)}
                </span>
              </div>
              <div className="flex justify-between py-1 text-danger">
                <span>Potongan BPJS (contoh)</span>
                <span className="font-semibold tabular-nums">
                  - {formatRupiah(SALARY_DATA.bpjsExample)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pilihan Kanal Notifikasi Gajian */}
      <div className="pt-2">
        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
          Kanal notifikasi slip gaji contoh
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleChannelChange("whatsapp")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-control text-xs font-bold border-2 transition-all ${
              channel === "whatsapp"
                ? "border-success bg-success/10 text-success"
                : "border-line bg-paper text-ink hover:bg-paper/80"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Kirim WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => handleChannelChange("email")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-control text-xs font-bold border-2 transition-all ${
              channel === "email"
                ? "border-coral bg-coral/15 text-coral-ink"
                : "border-line bg-paper text-ink hover:bg-paper/80"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Kirim Email</span>
          </button>
        </div>

        <p className="mt-3 text-[11px] text-muted text-center italic">
          Notifikasi dan slip gaji tidak dikirimkan ke pihak mana pun pada simulasi ini.
        </p>
      </div>
    </div>
  );
}
