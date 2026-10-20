import { SiteConfig, DEFAULT_CONFIG } from "./api";
import { FAQ_DATA } from "./faq-data";

export function generateStructuredData(config: SiteConfig = DEFAULT_CONFIG) {
  const siteUrl = config.site.domain.startsWith("http")
    ? config.site.domain
    : `https://${config.site.domain}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: config.site.name,
        url: siteUrl,
        description: config.seo.meta_description,
        email: config.contact.email,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: config.site.name,
        description: config.seo.meta_description,
        inLanguage: "id-ID",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: config.site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: config.seo.meta_description,
        featureList: [
          "Absensi: Clock-in/out, GPS geofencing, shift kerja fleksibel, rekap kehadiran real-time, mood harian WFA",
          "Gaji: Kalkulasi otomatis, contoh PPh 21 dan BPJS, slip gaji digital, reimbursement transport, pilihan kanal notifikasi",
          "Perizinan: Alur approval cuti, izin sakit, pengajuan lembur, transparansi sisa cuti tahunan, cuti healing",
          "Exam: Assessment rekrutmen online, evaluasi kinerja, uji kompetensi, kuis onboarding budaya tim",
          "Library: Knowledge base SOP kantor, arsip dokumen, modul e-learning panduan seragam dan pantry",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: FAQ_DATA.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
