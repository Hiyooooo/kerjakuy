import React from "react";

export interface KuyCharacterProps {
  size?: "sm" | "md" | "lg";
  mood?: "happy" | "focused" | "coffee";
  className?: string;
  ariaHidden?: boolean;
}

export function KuyCharacter({
  size = "md",
  mood = "happy",
  className = "",
  ariaHidden = true,
}: KuyCharacterProps) {
  const pixelSize = size === "sm" ? 28 : size === "lg" ? 56 : 40;

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      aria-hidden={ariaHidden}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        {/* Tubuh bulat empuk bernuansa coral & amber */}
        <rect
          x="4"
          y="6"
          width="40"
          height="36"
          rx="18"
          fill="#FB7185"
        />
        <circle cx="36" cy="12" r="5" fill="#F59E0B" />

        {/* Mata ekspresif */}
        {mood === "focused" ? (
          <>
            <line x1="15" y1="21" x2="21" y2="21" stroke="#2B2423" strokeWidth="3" strokeLinecap="round" />
            <line x1="27" y1="21" x2="33" y2="21" stroke="#2B2423" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : mood === "coffee" ? (
          <>
            <path d="M14 22C16 19 20 19 22 22" stroke="#2B2423" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26 22C28 19 32 19 34 22" stroke="#2B2423" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="18" cy="21" r="2.5" fill="#2B2423" />
            <circle cx="30" cy="21" r="2.5" fill="#2B2423" />
            <circle cx="19" cy="20" r="0.8" fill="#FFFFFF" />
            <circle cx="31" cy="20" r="0.8" fill="#FFFFFF" />
          </>
        )}

        {/* Senyum ramah */}
        <path
          d="M19 28C21 31 27 31 29 28"
          stroke="#2B2423"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Pipi merah lembut */}
        <circle cx="13" cy="25" r="2" fill="#BE123C" fillOpacity="0.4" />
        <circle cx="35" cy="25" r="2" fill="#BE123C" fillOpacity="0.4" />
      </svg>
    </div>
  );
}

export function KuyBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-chip bg-amber/20 px-3 py-1 text-xs font-semibold text-amber-ink ${className}`}
    >
      <KuyCharacter size="sm" mood="happy" />
      <span>{children}</span>
    </span>
  );
}
