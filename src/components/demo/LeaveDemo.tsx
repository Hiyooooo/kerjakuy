"use client";

import React, { useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { calculateRemainingLeave } from "@/lib/calculations";
import { Button } from "../ui/Button";

type LeaveType = "healing" | "ulang-tahun" | "darurat" | "sakit" | "lembur";

interface LeaveOption {
  id: LeaveType;
  label: string;
  description: string;
  deductsAnnual: boolean;
}

const LEAVE_OPTIONS: LeaveOption[] = [
  {
    id: "healing",
    label: "Cuti healing",
    description: "Recharge energi sejenak dari rutinitas kerja",
    deductsAnnual: true,
  },
  {
    id: "ulang-tahun",
    label: "Cuti ulang tahun",
    description: "Hari spesial khusus untuk merayakan usiamu",
    deductsAnnual: false,
  },
  {
    id: "darurat",
    label: "Cuti darurat",
    description: "Kebutuhan mendadak urusan keluarga atau rumah",
    deductsAnnual: false,
  },
  {
    id: "sakit",
    label: "Izin sakit",
    description: "Istirahat pemulihan kondisi kesehatan",
    deductsAnnual: false,
  },
  {
    id: "lembur",
    label: "Pengajuan lembur",
    description: "Tambahan waktu untuk penyelesaian tugas penting",
    deductsAnnual: false,
  },
];

export function LeaveDemo() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<LeaveType>("healing");
  const [requestedDays, setRequestedDays] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-24");
  const [note, setNote] = useState<string>("Istirahat singkat setelah sprint proyek");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const initialBalance = 12;
  const previouslyApproved = 3;

  // Sisa saldo dihitung dengan rumus murni:
  // Saldo 12, disetujui 3, pengajuan 2 -> sisa 7 hari (bila healing/tahunan)
  const remainingDays = calculateRemainingLeave(
    initialBalance,
    previouslyApproved,
    isSubmitted ? requestedDays : 0,
    selectedType
  );

  const currentOption = LEAVE_OPTIONS.find((opt) => opt.id === selectedType) || LEAVE_OPTIONS[0];

  const handleSelectType = (type: LeaveType) => {
    setSelectedType(type);
    setLiveAnnouncement(`Jenis izin dipilih: ${type}`);
  };

  const handleNextStep = () => {
    if (step < 3) {
      const nextStep = (step + 1) as 2 | 3;
      setStep(nextStep);
      setLiveAnnouncement(`Pindah ke langkah ${nextStep}`);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      const prevStep = (step - 1) as 1 | 2;
      setStep(prevStep);
      setLiveAnnouncement(`Kembali ke langkah ${prevStep}`);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setLiveAnnouncement(
      "Simulasi pengajuan izin berhasil dikirim. Status menunggu persetujuan contoh."
    );
  };

  const handleReset = () => {
    setStep(1);
    setSelectedType("healing");
    setRequestedDays(2);
    setSelectedDate("2026-10-24");
    setNote("Istirahat singkat setelah sprint proyek");
    setIsSubmitted(false);
    setLiveAnnouncement("Simulasi izin telah diatur ulang ke kondisi awal.");
  };

  return (
    <div className="w-full rounded-bubble bg-white p-6 sm:p-8 border-2 border-line shadow-md">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line/60 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-coral/20 text-coral-ink shrink-0">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display font-bold text-ink text-lg sm:text-xl">
                Simulasi Alur Perizinan
              </h4>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-semibold text-muted">
                Demo lokal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              Pilih jenis izin, tanggal, dan kirim simulasi tanpa berpindah aplikasi
            </p>
          </div>
        </div>

        {/* Info Saldo Cuti Transparan */}
        <div className="flex items-center gap-3 rounded-card bg-paper px-4 py-2.5 border border-line/60 shrink-0">
          <div className="text-right">
            <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
              Sisa cuti tahunan Alya
            </p>
            <p className="text-lg font-extrabold text-ink tabular-nums">
              {remainingDays} <span className="text-xs font-medium text-muted">hari kerja</span>
            </p>
          </div>
          <Sparkles className="w-5 h-5 text-amber shrink-0" />
        </div>
      </div>

      {/* Stepper Indikator 3 Langkah */}
      <div className="my-6 flex items-center justify-between border-b border-line/40 pb-4">
        {[
          { num: 1, label: "Pilih jenis izin" },
          { num: 2, label: "Tentukan tanggal" },
          { num: 3, label: "Tinjau & kirim" },
        ].map((item) => (
          <div
            key={item.num}
            className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${
              step === item.num
                ? "text-coral-ink"
                : step > item.num
                ? "text-success"
                : "text-muted"
            }`}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                step === item.num
                  ? "bg-coral text-ink"
                  : step > item.num
                  ? "bg-success text-white"
                  : "bg-paper text-muted border border-line"
              }`}
            >
              {step > item.num ? "✓" : item.num}
            </span>
            <span className="hidden sm:inline">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Live Region Accessibility */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Langkah 1: Pilih Jenis Izin */}
      {step === 1 && (
        <fieldset className="space-y-3">
          <legend className="text-sm font-bold text-ink mb-2">
            Pilih kategori izin yang ingin diajukan
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LEAVE_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-start gap-3 p-3.5 rounded-card border-2 cursor-pointer transition-all ${
                  selectedType === opt.id
                    ? "border-coral bg-coral/10 shadow-xs"
                    : "border-line bg-paper/60 hover:bg-paper"
                }`}
              >
                <input
                  type="radio"
                  name="leave-type"
                  value={opt.id}
                  checked={selectedType === opt.id}
                  onChange={() => handleSelectType(opt.id)}
                  className="mt-1 text-coral focus:ring-control"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-ink">{opt.label}</span>
                    {opt.deductsAnnual ? (
                      <span className="text-[10px] bg-coral/20 text-coral-ink px-2 py-0.5 rounded-full font-semibold">
                        Potong saldo tahunan
                      </span>
                    ) : (
                      <span className="text-[10px] bg-amber/20 text-amber-ink px-2 py-0.5 rounded-full font-semibold">
                        Kebijakan khusus
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted mt-0.5">{opt.description}</p>
                </div>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Langkah 2: Tanggal dan Catatan */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="leave-date" className="block text-sm font-bold text-ink mb-1.5">
                Tanggal mulai izin
              </label>
              <input
                id="leave-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-control border-2 border-line bg-white px-3.5 py-2.5 text-sm text-ink focus-visible:outline-3 focus-visible:outline-control"
              />
            </div>

            <div>
              <label htmlFor="leave-days" className="block text-sm font-bold text-ink mb-1.5">
                Jumlah hari pengajuan
              </label>
              <select
                id="leave-days"
                value={requestedDays}
                onChange={(e) => setRequestedDays(parseInt(e.target.value, 10))}
                className="w-full rounded-control border-2 border-line bg-white px-3.5 py-2.5 text-sm text-ink focus-visible:outline-3 focus-visible:outline-control"
              >
                <option value={1}>1 hari kerja</option>
                <option value={2}>2 hari kerja (contoh test vector)</option>
                <option value={3}>3 hari kerja</option>
                <option value={5}>5 hari kerja</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="leave-note" className="block text-sm font-bold text-ink mb-1.5">
              Catatan untuk tim & HR (opsional)
            </label>
            <input
              id="leave-note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Tuliskan keterangan singkat"
              className="w-full rounded-control border-2 border-line bg-white px-3.5 py-2.5 text-sm text-ink focus-visible:outline-3 focus-visible:outline-control"
            />
          </div>
        </div>
      )}

      {/* Langkah 3: Tinjau dan Kirim */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="rounded-card bg-paper p-5 border border-line">
            <h5 className="font-bold text-sm text-ink mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted" />
              <span>Ringkasan Pengajuan Izin</span>
            </h5>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-muted block">Jenis izin</span>
                <span className="font-bold text-ink">{currentOption.label}</span>
              </div>
              <div>
                <span className="text-muted block">Durasi</span>
                <span className="font-bold text-ink">{requestedDays} hari kerja</span>
              </div>
              <div>
                <span className="text-muted block">Tanggal</span>
                <span className="font-bold text-ink">{selectedDate}</span>
              </div>
              <div>
                <span className="text-muted block">Dampak saldo</span>
                <span className="font-bold text-ink">
                  {currentOption.deductsAnnual
                    ? `Berkurang ${requestedDays} hari`
                    : "Tidak memotong saldo tahunan"}
                </span>
              </div>
            </div>

            {note && (
              <div className="mt-3 pt-3 border-t border-line/50 text-xs">
                <span className="text-muted block mb-0.5">Catatan</span>
                <p className="font-medium text-ink italic">&ldquo;{note}&rdquo;</p>
              </div>
            )}
          </div>

          {isSubmitted ? (
            <div className="rounded-card bg-success/10 p-4 border border-success/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-ink">
                  Menunggu persetujuan (simulasi berhasil)
                </p>
                <p className="text-muted mt-1">
                  Permintaan contoh masuk ke status menunggu persetujuan HR. Tidak ada data yang
                  dikirim ke server atau pihak mana pun.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-card bg-amber/10 p-3.5 border border-amber/20 flex items-center gap-2.5 text-xs text-amber-ink">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Ini adalah simulasi interaktif di browser kamu. Keputusan cuti nyata tetap mengikuti
                kebijakan tim masing-masing.
              </span>
            </div>
          )}
        </div>
      )}

      {/* Navigasi Tombol Stepper */}
      <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
        <div>
          {step > 1 && !isSubmitted && (
            <Button variant="secondary" size="sm" onClick={handlePrevStep}>
              Kembali
            </Button>
          )}
          {isSubmitted && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-ink transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Coba simulasi baru</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          {step < 3 ? (
            <Button variant="primary" size="sm" onClick={handleNextStep}>
              Lanjut ke langkah {step + 1}
            </Button>
          ) : !isSubmitted ? (
            // KLAIM: Pengajuan 3 detik dalam tahap simulasi alur
            <Button variant="primary" size="sm" onClick={handleSubmit}>
              Kirim simulasi
            </Button>
          ) : (
            <Button variant="secondary" size="sm" onClick={handleReset}>
              Reset simulasi
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
