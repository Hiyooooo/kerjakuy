"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export interface WhatsAppFloatingProps {
  whatsappUrl: string;
}

export function WhatsAppFloating({ whatsappUrl }: WhatsAppFloatingProps) {
  if (!whatsappUrl) return null;

  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi cepat via WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] text-white hover:bg-[#20BA5A] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-3 focus-visible:outline-control"
      >
        <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
        <span className="text-xs sm:text-sm font-bold tracking-tight">
          Tanya Kami
        </span>
      </Link>
    </aside>
  );
}
