import React from "react";
import Link from "next/link";
import Image from "next/image";
import { KuyCharacter } from "../ui/KuyCharacter";

export interface FooterProps {
  footerText?: string;
  email?: string;
  phone?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  logoUrl?: string;
  siteName?: string;
}

export function Footer({
  footerText = "KerjaKuy · HR harian yang lebih gampang diikuti untuk agensi kreatif, coworking space, UMKM modern, dan tim fleksibel.",
  email = "halo@kerjakuy.example",
  phone = "",
  socialLinks = [],
  logoUrl,
  siteName = "KerjaKuy",
}: FooterProps) {
  return (
    <footer id="footer" className="w-full bg-ink text-white py-14 px-4 sm:px-6">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-white/15">
          {/* Brand & Deskripsi */}
          <div className="max-w-sm">
            <Link href="#top" className="flex items-center gap-2 mb-3">
              {logoUrl ? (
                <div className="relative h-9 w-32">
                  <Image
                    src={logoUrl}
                    alt={siteName}
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              ) : (
                <>
                  <KuyCharacter size="md" mood="happy" />
                  <span className="font-display text-2xl font-black tracking-tight text-white">
                    Kerja<span className="text-coral">Kuy</span>
                  </span>
                </>
              )}
            </Link>
            <p className="text-sm text-line/80 leading-relaxed">
              {footerText}
            </p>
          </div>

          {/* Tautan Navigasi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Navigasi
              </h5>
              <ul className="space-y-2 text-line/80">
                <li>
                  <Link href="#fitur" className="hover:text-coral transition-colors">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#cara-kerja" className="hover:text-coral transition-colors">
                    Cara kerja
                  </Link>
                </li>
                <li>
                  <Link href="#untuk-tim" className="hover:text-coral transition-colors">
                    Untuk tim
                  </Link>
                </li>
                <li>
                  <Link href="#simulasi" className="hover:text-coral transition-colors">
                    Simulasi izin
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Bantuan
              </h5>
              <ul className="space-y-2 text-line/80">
                <li>
                  <Link href="#faq" className="hover:text-coral transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#kontak" className="hover:text-coral transition-colors">
                    Kontak
                  </Link>
                </li>
                {socialLinks.length > 0 && (
                  <li className="pt-1">
                    <span className="text-xs font-bold text-white/90 block mb-1">
                      Media Sosial
                    </span>
                    <div className="flex flex-col space-y-1">
                      {socialLinks.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-coral transition-colors"
                        >
                          {item.platform}
                        </a>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Informasi Kontak
              </h5>
              <p className="text-xs text-line/70 leading-relaxed mb-2">
                Seluruh gambar manusia dan tempat kerja pada website ini berstatus foto ilustrasi bebas komersial.
              </p>
              {email && (
                <p className="text-xs text-line/80 mb-1">
                  Email:{" "}
                  <a href={`mailto:${email}`} className="text-white hover:text-coral underline">
                    {email}
                  </a>
                </p>
              )}
              {phone && (
                <p className="text-xs text-line/80">
                  Telepon: <span className="text-white">{phone}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-line/60 gap-3">
          <p>© 2026 {siteName}. Hak cipta dilindungi.</p>
          <p className="italic">
            Dirancang dengan penuh kehangatan untuk kemudahan HR tim fleksibel
          </p>
        </div>
      </div>
    </footer>
  );
}
