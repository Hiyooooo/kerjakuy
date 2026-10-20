"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  CheckCircle2,
  FileText,
  Bookmark,
  Layers,
  Sparkles,
} from "lucide-react";
import { calculateProgress } from "@/lib/calculations";
import { Button } from "../ui/Button";

interface LibraryArticle {
  id: string;
  title: string;
  category: "SOP" | "Pantry" | "Seragam" | "Agenda";
  readTime: string;
  summary: string;
  completed: boolean;
  content: string;
}

const INITIAL_ARTICLES: LibraryArticle[] = [
  {
    id: "seragam",
    title: "Panduan busana dan pakaian kerja fleksibel",
    category: "Seragam",
    readTime: "2 mnt baca",
    summary: "Berpakaian kasual, sopan, dan nyaman untuk hari kerja di studio maupun coworking.",
    completed: true,
    content:
      "Tim KerjaKuy mengutamakan kenyamanan bekerja. Kaos polo, kemeja santai, jeans rapi, dan sneakers sangat dipersilakan. Saat bertemu klien eksternal, gunakan pakaian kasual rapi berkerah.",
  },
  {
    id: "pantry",
    title: "Aturan pantry bersama dan etika kulkas kantor",
    category: "Pantry",
    readTime: "3 mnt baca",
    summary: "Menjaga kebersihan cangkir kopi, microwave, dan memberi label nama makanan.",
    completed: true,
    content:
      "Beri label nama dan tanggal pada kotak bekal di kulkas. Cuci cangkir dan sendok setelah digunakan. Hari Jumat sore adalah jadwal pembersihan kulkas mingguan bersama.",
  },
  {
    id: "izin",
    title: "Cara mudah mengajukan cuti dan izin kerja fleksibel",
    category: "SOP",
    readTime: "3 mnt baca",
    summary: "Langkah pengajuan cuti healing, ulang tahun, dan koordinasi shift WFA.",
    completed: true,
    content:
      "Buka menu Perizinan, pilih jenis izin, tentukan tanggal, lalu periksa ringkasan sebelum konfirmasi. Lead dan HR akan meninjau sesuai kesepakatan tim tanpa formulir rumit.",
  },
  {
    id: "agenda",
    title: "Agenda bulanan dan jadwal kegiatan bersama",
    category: "Agenda",
    readTime: "4 mnt baca",
    summary: "Rangkaian sesi demo mingguan, makan siang bersama, dan tinjauan bulanan.",
    completed: false, // Default 3 selesai dari 4 -> 75% test vector
    content:
      "Sesi demo showcase karya diadakan setiap Kamis pukul 15.00 WIB. Makan siang santai tim diadakan setiap awal bulan untuk menyambut anggota baru dan mengobrol santai.",
  },
];

export function LibraryDemo() {
  const [articles, setArticles] = useState<LibraryArticle[]>(INITIAL_ARTICLES);
  const [selectedArticleId, setSelectedArticleId] = useState<string>("izin");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const completedCount = articles.filter((a) => a.completed).length;
  const totalArticles = articles.length;
  // Test vector: 3 dari 4 selesai = 75%
  const progressPercent = calculateProgress(completedCount, totalArticles);

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "Semua" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const currentArticle =
    articles.find((a) => a.id === selectedArticleId) || articles[0];

  const handleToggleComplete = (id: string) => {
    setArticles((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextCompleted = !item.completed;
          setLiveAnnouncement(
            `Status artikel "${item.title}" diubah menjadi ${
              nextCompleted ? "selesai dibaca" : "belum selesai"
            }.`
          );
          return { ...item, completed: nextCompleted };
        }
        return item;
      })
    );
  };

  const categories = ["Semua", "SOP", "Pantry", "Seragam", "Agenda"];

  return (
    <div className="w-full rounded-bubble bg-white p-6 sm:p-8 border-2 border-line shadow-md">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line/60 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-coral/20 text-coral-ink shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display font-bold text-ink text-lg sm:text-xl">
                Wiki & Panduan Kantor
              </h4>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-semibold text-muted">
                Knowledge Base
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              Pusat informasi SOP, aturan fasilitas, dan materi belajar tim tanpa cari chat lama
            </p>
          </div>
        </div>

        {/* Progress Belajar */}
        <div className="flex items-center gap-3 rounded-card bg-paper px-4 py-2 border border-line shrink-0">
          <Sparkles className="w-5 h-5 text-amber shrink-0" />
          <div>
            <div className="flex items-center justify-between gap-3 text-xs mb-1">
              <span className="font-bold text-muted">Progres Onboarding</span>
              <span className="font-extrabold text-ink tabular-nums">
                {completedCount}/{totalArticles} ({progressPercent}%)
              </span>
            </div>
            <div className="w-36 h-2 rounded-full bg-line overflow-hidden">
              <div
                className="h-full bg-coral transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live Region Accessibility */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Filter Kategori & Pencarian */}
      <div className="my-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari panduan (mis. pantry, seragam, izin)..."
            className="w-full rounded-control border-2 border-line bg-paper pl-9 pr-4 py-2 text-xs sm:text-sm text-ink placeholder:text-muted focus-visible:outline-3 focus-visible:outline-control"
          />
        </div>

        {/* Kategori Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-chip text-xs font-bold border transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-amber text-ink border-amber shadow-xs"
                  : "bg-paper text-muted border-line hover:bg-paper/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Konten Utama 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Kolom Kiri: Daftar Artikel */}
        <div className="md:col-span-5 space-y-2.5">
          {filteredArticles.length === 0 ? (
            <p className="text-xs text-muted p-4 text-center">
              Tidak ada panduan yang cocok dengan pencarian.
            </p>
          ) : (
            filteredArticles.map((item) => {
              const isSelected = item.id === currentArticle.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedArticleId(item.id)}
                  className={`w-full text-left p-3.5 rounded-card border-2 transition-all flex items-start gap-3 ${
                    isSelected
                      ? "border-coral bg-coral/10 shadow-xs"
                      : "border-line bg-paper/60 hover:bg-paper"
                  }`}
                >
                  <div className="mt-0.5 text-muted shrink-0">
                    {item.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    ) : (
                      <FileText className="w-4 h-4 text-muted" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-line/60 text-muted">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-muted">{item.readTime}</span>
                    </div>
                    <p className="font-bold text-xs sm:text-sm text-ink truncate">
                      {item.title}
                    </p>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Kolom Kanan: Detail Bacaan & Aksi Selesai */}
        <div className="md:col-span-7 rounded-card bg-paper p-5 border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-line/50 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-ink">
                {currentArticle.category} · {currentArticle.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Dokumen contoh</span>
              </span>
            </div>

            <h5 className="font-display font-bold text-ink text-base sm:text-lg mb-2">
              {currentArticle.title}
            </h5>

            <p className="text-xs text-muted mb-4 italic">
              &ldquo;{currentArticle.summary}&rdquo;
            </p>

            <div className="rounded-control bg-white p-4 border border-line/60 text-xs sm:text-sm text-ink leading-relaxed">
              {currentArticle.content}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-line/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] text-muted italic">
              Simulasi e-learning. Tidak ada file sungguhan yang diunduh.
            </span>

            <Button
              variant={currentArticle.completed ? "secondary" : "primary"}
              size="sm"
              onClick={() => handleToggleComplete(currentArticle.id)}
            >
              {currentArticle.completed ? "Tandai belum selesai" : "Tandai selesai dibaca"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
