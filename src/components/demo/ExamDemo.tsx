"use client";

import React, { useState } from "react";
import {
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  HelpCircle,
  Award,
} from "lucide-react";
import { calculateExamScore } from "@/lib/calculations";
import { Button } from "../ui/Button";

interface Question {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const ONBOARDING_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Kapan jam fokus kerja bersama di tim kreatif biasanya diadakan?",
    options: [
      { id: "A", text: "Bebas kapan saja tanpa ritme" },
      { id: "B", text: "Pukul 10.00–12.00 WIB minim rapat internal" },
      { id: "C", text: "Hanya di luar jam kerja" },
    ],
    correctAnswer: "B",
    explanation: "Jam fokus 10.00–12.00 WIB didedikasikan untuk kerja mendalam tanpa gangguan rapat.",
  },
  {
    id: 2,
    text: "Bagaimana cara meminjam perlengkapan studio atau kamera?",
    options: [
      { id: "A", text: "Langsung bawa tanpa konfirmasi" },
      { id: "B", text: "Catat di log inventaris dan koordinasikan dengan lead" },
      { id: "C", text: "Menunggu giliran bulanan" },
    ],
    correctAnswer: "B",
    explanation: "Mencatat di log memastikan peralatan tim terlacak rapi dan terawat.",
  },
  {
    id: 3,
    text: "Aturan utama penggunaan fasilitas pantry bersama di kantor:",
    options: [
      { id: "A", text: "Tinggalkan gelas kotor di wastafel" },
      { id: "B", text: "Beri label nama pada wadah di kulkas dan rapikan setelah pakai" },
      { id: "C", text: "Konsumsi makanan siapa pun tanpa izin" },
    ],
    correctAnswer: "B",
    explanation: "Label nama dan kebersihan menjaga kenyamanan seluruh tim yang berbagi ruang.",
  },
  {
    id: 4,
    text: "Bagaimana alur termudah mengajukan cuti healing di KerjaKuy?",
    options: [
      { id: "A", text: "Mengirim pesan pribadi acak ke banyak orang" },
      { id: "B", text: "Buka menu Perizinan lalu pilih jenis dan tanggal dalam 3 langkah" },
      { id: "C", text: "Mengisi berkas kertas rangkap tiga" },
    ],
    correctAnswer: "B",
    explanation: "Alur perizinan 3 langkah membuat permohonan tercatat jelas bagi HR.",
  },
  {
    id: 5,
    text: "Di mana panduan seragam, aturan pantry, dan materi onboarding disimpan?",
    options: [
      { id: "A", text: "Di modul Library / Wiki kantor KerjaKuy" },
      { id: "B", text: "Menanyakan berulang ke senior setiap hari" },
      { id: "C", text: "Mencari di tumpukan lampiran email lama" },
    ],
    correctAnswer: "A",
    explanation: "Modul Library menjadi rumah bagi seluruh dokumen SOP dan pedoman tim.",
  },
];

export function ExamDemo() {
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: "B",
    2: "B",
    3: "B",
    4: "B",
    // Soal 5 sengaja belum dijawab agar user bisa mencoba interaksi
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const totalQuestions = ONBOARDING_QUESTIONS.length;

  const correctCount = ONBOARDING_QUESTIONS.reduce((count, q) => {
    return answers[q.id] === q.correctAnswer ? count + 1 : count;
  }, 0);

  const scorePercent = calculateExamScore(correctCount, totalQuestions);

  const handleSelectOption = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setLiveAnnouncement(`Soal nomor ${questionId} dijawab pilihan ${optionId}`);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setLiveAnnouncement(
      `Kuis simulasi selesai. Skor yang diperoleh: ${scorePercent}% dengan ${correctCount} jawaban benar dari ${totalQuestions} soal.`
    );
  };

  const handleReset = () => {
    setAnswers({ 1: "B", 2: "B", 3: "B", 4: "B" });
    setIsSubmitted(false);
    setLiveAnnouncement("Kuis simulasi telah diatur ulang.");
  };

  return (
    <div className="w-full rounded-bubble bg-white p-6 sm:p-8 border-2 border-line shadow-md">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line/60 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-coral/20 text-coral-ink shrink-0">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display font-bold text-ink text-lg sm:text-xl">
                Kuis Onboarding & Budaya Tim
              </h4>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-semibold text-muted">
                5 Pertanyaan
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              Uji pemahaman budaya kantor tanpa webcam atau proctoring yang membuat tegang
            </p>
          </div>
        </div>

        {/* Skor Box */}
        {isSubmitted && (
          <div className="flex items-center gap-3 rounded-card bg-paper px-4 py-2 border border-line shrink-0">
            <Award className="w-5 h-5 text-amber shrink-0" />
            <div>
              <span className="text-[11px] font-bold text-muted block uppercase">
                Hasil Simulasi
              </span>
              <span className="font-display font-extrabold text-xl text-ink">
                {scorePercent}%{" "}
                <span className="text-xs font-normal text-muted">
                  ({correctCount}/{totalQuestions} benar)
                </span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Live Region Accessibility */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Daftar Pertanyaan */}
      <div className="my-6 space-y-6">
        {ONBOARDING_QUESTIONS.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = selected === q.correctAnswer;

          return (
            <fieldset key={q.id} className="p-4 rounded-card bg-paper/70 border border-line/70">
              <legend className="text-sm font-bold text-ink px-1 mb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-coral/20 text-coral-ink text-xs font-extrabold">
                  {idx + 1}
                </span>
                <span>{q.text}</span>
              </legend>

              <div className="grid grid-cols-1 gap-2 mt-2">
                {q.options.map((opt) => {
                  const isChecked = selected === opt.id;
                  let optionStyle =
                    "border-line bg-white hover:bg-paper text-ink";

                  if (isSubmitted) {
                    if (opt.id === q.correctAnswer) {
                      optionStyle = "border-success bg-success/10 text-ink font-semibold";
                    } else if (isChecked && !isCorrect) {
                      optionStyle = "border-danger bg-danger/10 text-ink";
                    }
                  } else if (isChecked) {
                    optionStyle = "border-coral bg-coral/10 text-ink font-semibold";
                  }

                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-control border-2 text-xs sm:text-sm cursor-pointer transition-colors ${optionStyle}`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt.id}
                        checked={isChecked}
                        disabled={isSubmitted}
                        onChange={() => handleSelectOption(q.id, opt.id)}
                        className="text-coral focus:ring-control"
                      />
                      <span className="font-bold text-muted w-4">{opt.id}.</span>
                      <span className="flex-1">{opt.text}</span>
                    </label>
                  );
                })}
              </div>

              {/* Umpan Balik Penjelasan Pasca Kirim */}
              {isSubmitted && (
                <div
                  className={`mt-3 pt-2 border-t text-xs flex items-start gap-1.5 ${
                    isCorrect
                      ? "border-success/30 text-success"
                      : "border-danger/30 text-danger"
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <p className="text-muted">{q.explanation}</p>
                </div>
              )}
            </fieldset>
          );
        })}
      </div>

      {/* Navigasi dan Aksi */}
      <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-muted italic">
          Nilai demo ini murni simulasi lokal dan tidak dipakai untuk keputusan kerja tim.
        </p>

        <div className="flex items-center gap-3">
          {isSubmitted ? (
            <Button variant="secondary" size="sm" onClick={handleReset}>
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              <span>Coba lagi</span>
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={handleSubmit}>
              Lihat hasil simulasi
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
