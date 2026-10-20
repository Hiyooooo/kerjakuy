import Image from "next/image";

export interface PhotoSlotProps {
  id: "P01" | "P02" | "P03" | "P04" | "P05" | "P06" | "P07";
  src: string;
  alt: string;
  aspectRatio?: "4/3" | "3/2" | "16/9" | "1/1";
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
}

export function PhotoSlot({
  src,
  alt,
  aspectRatio = "4/3",
  priority = false,
  className = "",
  showCaption = true,
}: PhotoSlotProps) {
  const aspectClass =
    aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "3/2"
      ? "aspect-[3/2]"
      : aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : "aspect-square";

  return (
    <figure className={`relative overflow-hidden rounded-card ${className}`}>
      <div className={`relative w-full ${aspectClass} overflow-hidden rounded-card bg-paper`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
        {showCaption && (
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-muted backdrop-blur-sm">
            Foto ilustrasi
          </span>
        )}
      </div>
    </figure>
  );
}
