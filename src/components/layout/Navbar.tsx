"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { KuyCharacter } from "../ui/KuyCharacter";
import { Button } from "../ui/Button";

export interface NavbarProps {
  logoUrl?: string;
  siteName?: string;
}

export function Navbar({ logoUrl, siteName = "KerjaKuy" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fitur", href: "#fitur" },
    { label: "Cara kerja", href: "#cara-kerja" },
    { label: "Untuk tim", href: "#untuk-tim" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Brand Logo / Wordmark */}
        <Link href="#top" className="flex items-center gap-2.5 group">
          {logoUrl ? (
            <div className="relative h-9 w-32">
              <Image
                src={logoUrl}
                alt={siteName}
                fill
                className="object-contain object-left"
              />
            </div>
          ) : (
            <>
              <KuyCharacter size="md" mood="happy" />
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-ink">
                Kerja<span className="text-coral-ink">Kuy</span>
              </span>
            </>
          )}
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-ink">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-coral-ink focus-visible:outline-3 focus-visible:outline-control"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Utama Navigasi */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" href="#simulasi">
            Lihat simulasi
          </Button>
        </div>

        {/* Tombol Menu Ponsel */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="primary" size="sm" href="#simulasi" className="text-xs px-3 min-h-[40px]">
            Simulasi
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
            className="flex h-11 w-11 items-center justify-center rounded-control border border-line bg-paper text-ink focus-visible:outline-3 focus-visible:outline-control"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Ponsel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4 text-base font-bold text-ink">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 transition-colors hover:text-coral-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="#simulasi"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lihat simulasi
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
