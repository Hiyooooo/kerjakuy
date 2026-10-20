import "server-only";

export interface SiteConfig {
  site: {
    id: string;
    name: string;
    domain: string;
  };
  branding: {
    logo_url: string;
    favicon_url: string;
    primary_color: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta_text: string;
  };
  cta: {
    whatsapp_number: string;
    whatsapp_message_template: string;
    whatsapp_url: string;
  };
  contact: {
    email: string;
    phone: string;
    social_links: Array<{ platform: string; url: string }>;
  };
  footer_text: string;
  tracking: {
    ga_id: string | null;
    meta_pixel_id: string | null;
  };
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
    og_image_url: string;
  };
}

export const DEFAULT_CONFIG: SiteConfig = {
  site: {
    id: "06-kerjakuy",
    name: "KerjaKuy",
    domain: "kerjakuy.example",
  },
  branding: {
    logo_url: "",
    favicon_url: "/favicon.svg",
    primary_color: "#FB7185",
  },
  hero: {
    headline: "HR tanpa ribet. Karyawan happy. Bisnis melesat.",
    subheadline:
      "Kelola absen WFA, pengajuan cuti, gajian, kuis tim, dan panduan kantor dalam pengalaman yang lebih gampang diikuti.",
    cta_text: "Hubungi tim via WhatsApp",
  },
  cta: {
    whatsapp_number: "",
    whatsapp_message_template: "Halo KerjaKuy, saya tertarik untuk konsultasi HRIS untuk tim fleksibel.",
    whatsapp_url: "https://wa.me/?text=Halo%20KerjaKuy%2C%20saya%20tertarik%20untuk%20konsultasi%20HRIS",
  },
  contact: {
    email: "halo@kerjakuy.example",
    phone: "",
    social_links: [],
  },
  footer_text:
    "KerjaKuy · HR harian yang lebih gampang diikuti untuk agensi kreatif, coworking space, UMKM modern, dan tim fleksibel.",
  tracking: {
    ga_id: null,
    meta_pixel_id: null,
  },
  seo: {
    meta_title: "KerjaKuy - Software HRIS Simpel & Asyik untuk Tim Kreatif",
    meta_description:
      "Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.",
    keywords: [
      "HRIS simpel",
      "cuti healing online",
      "absen fleksibel WFA",
      "payroll tim kreatif",
      "slip gaji digital",
      "wiki kantor SOP",
    ],
    og_image_url: "/opengraph-image",
  },
};

export async function getSiteConfig(): Promise<SiteConfig> {
  const apiUrl = process.env.API_URL;
  const siteId = process.env.SITE_ID || "06-kerjakuy";
  const siteSecret = process.env.SITE_SECRET;

  if (!apiUrl || !siteSecret) {
    return DEFAULT_CONFIG;
  }

  try {
    const cleanUrl = apiUrl.replace(/\/+$/, "");
    const revalidateSeconds = Number(process.env.REVALIDATE_SECONDS) || 10;
    const response = await fetch(`${cleanUrl}/api/v1/site/config`, {
      method: "GET",
      headers: {
        "X-Site-Id": siteId,
        "X-Site-Secret": siteSecret,
        Accept: "application/json",
      },
      next: { revalidate: revalidateSeconds },
    });

    if (!response.ok) {
      return DEFAULT_CONFIG;
    }

    const data = await response.json();

    const normalizeSocialUrl = (url: unknown): string => {
      if (!url || typeof url !== "string") return "";
      const trimmed = url.trim();
      if (!trimmed) return "";
      return trimmed.startsWith("http://") || trimmed.startsWith("https://")
        ? trimmed
        : `https://${trimmed}`;
    };

    const PLATFORM_LABELS: Record<string, string> = {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      facebook: "Facebook",
      youtube: "YouTube",
      tiktok: "TikTok",
      twitter: "Twitter / X",
      x: "X",
    };

    const rawSocial = data.contact?.social_links;
    const socialLinks: Array<{ platform: string; url: string }> = [];

    if (Array.isArray(rawSocial)) {
      for (const item of rawSocial) {
        const url = normalizeSocialUrl(item?.url);
        if (url) {
          const rawKey = String(item.platform || item.name || "Tautan").toLowerCase();
          socialLinks.push({
            platform: PLATFORM_LABELS[rawKey] || item.platform || "Tautan",
            url,
          });
        }
      }
    } else if (typeof rawSocial === "object" && rawSocial !== null) {
      for (const [key, val] of Object.entries(rawSocial)) {
        const url = normalizeSocialUrl(val);
        if (url) {
          const rawKey = key.toLowerCase();
          socialLinks.push({
            platform: PLATFORM_LABELS[rawKey] || key.charAt(0).toUpperCase() + key.slice(1),
            url,
          });
        }
      }
    }

    const resolveUrl = (url: string | null | undefined): string => {
      if (!url) return "";
      if (url.startsWith("/")) return `${cleanUrl}${url}`;
      if (url.includes("localhost:8000") && !cleanUrl.includes("localhost:8000")) {
        return url.replace(/https?:\/\/[^/]+/, cleanUrl);
      }
      return url;
    };

    return {
      site: {
        id: data.site?.id || DEFAULT_CONFIG.site.id,
        name: data.site?.name || DEFAULT_CONFIG.site.name,
        domain: data.site?.domain || DEFAULT_CONFIG.site.domain,
      },
      branding: {
        logo_url:
          resolveUrl(data.branding?.logo_url) || DEFAULT_CONFIG.branding.logo_url,
        favicon_url:
          resolveUrl(data.branding?.favicon_url) || DEFAULT_CONFIG.branding.favicon_url,
        primary_color:
          data.branding?.primary_color || DEFAULT_CONFIG.branding.primary_color,
      },
      hero: {
        headline: data.hero?.headline || DEFAULT_CONFIG.hero.headline,
        subheadline: data.hero?.subheadline || DEFAULT_CONFIG.hero.subheadline,
        cta_text: data.hero?.cta_text || DEFAULT_CONFIG.hero.cta_text,
      },
      cta: {
        whatsapp_number:
          data.cta?.whatsapp_number || DEFAULT_CONFIG.cta.whatsapp_number,
        whatsapp_message_template:
          data.cta?.whatsapp_message_template ||
          DEFAULT_CONFIG.cta.whatsapp_message_template,
        whatsapp_url: data.cta?.whatsapp_url || DEFAULT_CONFIG.cta.whatsapp_url,
      },
      contact: {
        email: data.contact?.email || DEFAULT_CONFIG.contact.email,
        phone: data.contact?.phone || DEFAULT_CONFIG.contact.phone,
        social_links: socialLinks,
      },
      footer_text: data.footer_text || DEFAULT_CONFIG.footer_text,
      tracking: {
        ga_id: data.tracking?.ga_id ?? null,
        meta_pixel_id: data.tracking?.meta_pixel_id ?? null,
      },
      seo: {
        meta_title: data.seo?.meta_title || DEFAULT_CONFIG.seo.meta_title,
        meta_description:
          data.seo?.meta_description || DEFAULT_CONFIG.seo.meta_description,
        keywords: Array.isArray(data.seo?.keywords)
          ? data.seo.keywords
          : DEFAULT_CONFIG.seo.keywords,
        og_image_url:
          resolveUrl(data.seo?.og_image_url) || DEFAULT_CONFIG.seo.og_image_url,
      },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}
