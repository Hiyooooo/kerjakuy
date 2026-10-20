"use client";

import React, { useState } from "react";
import {
  Fingerprint,
  Coffee,
  Zap,
  Target,
  RotateCcw,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { workedMinutes, formatHoursMinutes } from "@/lib/calculations";
import { Button } from "../ui/Button";

type WorkMode = "wfa" | "kantor" | "remote";
type MoodType = "fokus" | "kopi" | "energi" | null;

export function AttendanceDemo() {
  const [workMode, setWorkMode] = useState<WorkMode>("wfa");
  const [status, setStatus] = useState<"initial" | "checked-in" | "checked-out">("initial");
  const [mood, setMood] = useState<MoodType>(null);
  const [clockInTime, setClockInTime] = useState<string>("09:05");
  const [clockOutTime, setClockOutTime] = useState<string>("17:10");
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  // Test vector: 09:05 - 17:10, istirahat 60m = 425 menit (7j 5m)
  const durationMinutes = workedMinutes(clockInTime, clockOutTime, 60);
  const durationDisplay = formatHoursMinutes(durationMinutes);

  const handleClockIn = () => {
    setStatus("checked-in");
    setLiveAnnouncement(`Check-in simulasi tercatat pukul ${clockInTime} WIB dengan mode ${workMode}.`);
  };

  const handleSelectMood = (selectedMood: MoodType) => {
    setMood(selectedMood);
    setLiveAnnouncement(`Mood kerja harian dipilih: ${selectedMood}.`);
  };

  const handleClockOut = () => {
    setStatus("checked-out");
    setLiveAnnouncement(
      `Check-out simulasi tercatat pukul ${clockOutTime} WIB. Total durasi kerja: ${durationDisplay}.`
    );
  };

  const handleReset = () => {
    setStatus("initial");
    setMood(null);
    setLiveAnnouncement("Simulasi absensi telah diatur ulang.");
  };

  return (
    <div className="w-full rounded-bubble bg-white p-6 sm:p-8 border-2 border-line shadow-md">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line/60 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-coral/20 text-coral-ink shrink-0">
            <Fingerprint className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display font-bold text-ink text-lg sm:text-xl">
                Absensi Fleksibel & Mood Kerja
              </h4>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-semibold text-muted">
                Data ilustrasi
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              Shift Fleksibel · 09.00–17.00 WIB · Mode WFA tanpa pelacakan lokasi aktif
            </p>
          </div>
        </div>

        {/* Status Indikator */}
        <div className="flex items-center gap-2 rounded-card bg-paper px-3.5 py-2 border border-line text-xs font-bold text-ink">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              status === "checked-in"
                ? "bg-success animate-pulse"
                : status === "checked-out"
                ? "bg-muted"
                : "bg-amber"
            }`}
          />
          <span>
            {status === "checked-in"
              ? "Sedang Aktif Bekerja"
              : status === "checked-out"
              ? "Selesai Kerja Hari Ini"
              : "Belum Masuk Shift"}
          </span>
        </div>
      </div>

      {/* Live Region Accessibility */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Kontrol Utama */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom 1: Mode Kerja & Jam */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
              Pilih mode kerja hari ini
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "wfa", label: "WFA" },
                { id: "kantor", label: "Kantor" },
                { id: "remote", label: "Remote" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setWorkMode(item.id as WorkMode)}
                  className={`py-2 px-3 rounded-control text-xs font-bold border-2 transition-colors ${
                    workMode === item.id
                      ? "border-coral bg-coral/15 text-coral-ink"
                      : "border-line bg-paper text-ink hover:bg-paper/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-card bg-paper border border-line/60">
              <span className="text-muted block mb-1">Jam masuk contoh</span>
              <span className="font-extrabold text-ink text-sm flex items-center gap-1.5 tabular-nums">
                <Clock className="w-4 h-4 text-muted" />
                {clockInTime} WIB
              </span>
            </div>
            <div className="p-3 rounded-card bg-paper border border-line/60">
              <span className="text-muted block mb-1">Jam pulang contoh</span>
              <span className="font-extrabold text-ink text-sm flex items-center gap-1.5 tabular-nums">
                <Clock className="w-4 h-4 text-muted" />
                {clockOutTime} WIB
              </span>
            </div>
          </div>

          {/* Tombol Aksi Clock-In / Clock-Out */}
          <div>
            {status === "initial" && (
              <Button variant="primary" size="md" className="w-full" onClick={handleClockIn}>
                Mulai hari (Clock-in simulasi)
              </Button>
            )}

            {status === "checked-in" && (
              <Button variant="secondary" size="md" className="w-full" onClick={handleClockOut}>
                Selesai kerja (Clock-out simulasi)
              </Button>
            )}

            {status === "checked-out" && (
              <div className="flex items-center justify-between p-3 rounded-card bg-success/10 border border-success/30">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  <span className="font-bold text-ink">
                    Shift terekam: {durationDisplay} (istirahat 60m)
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-muted hover:text-ink flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Kolom 2: Mood Harian Opsional */}
        <div className="rounded-card bg-paper p-5 border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-bold text-sm text-ink flex items-center gap-1.5">
                <span>Bagikan mood harian</span>
                <span className="text-[11px] font-normal text-muted">(opsional)</span>
              </h5>
            </div>
            <p className="text-xs text-muted mb-4">
              Kabar singkat untuk rekan satu tim. Mood ini tidak dijadikan penilaian kinerja.
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  id: "fokus",
                  label: "Fokus",
                  icon: Target,
                  color: "text-coral-ink",
                  bg: "bg-coral/20",
                },
                {
                  id: "kopi",
                  label: "Butuh kopi",
                  icon: Coffee,
                  color: "text-amber-ink",
                  bg: "bg-amber/20",
                },
                {
                  id: "energi",
                  label: "Penuh energi",
                  icon: Zap,
                  color: "text-success",
                  bg: "bg-success/20",
                },
              ].map((item) => {
                const IconComponent = item.icon;
                const isSelected = mood === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectMood(item.id as MoodType)}
                    className={`flex flex-col items-center justify-center p-3 rounded-card border-2 transition-all ${
                      isSelected
                        ? "border-control bg-white shadow-xs"
                        : "border-line bg-white/70 hover:bg-white"
                    }`}
                  >
                    <div className={`p-2 rounded-full ${item.bg} ${item.color} mb-1.5`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-ink">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-line/50 flex items-center justify-between text-[11px] text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Geofencing: opsi kebijakan perusahaan</span>
            </span>
            <span>Tidak melacak lokasi di demo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
