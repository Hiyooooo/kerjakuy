import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope, Nunito_Sans } from "next/font/google";
import { getSiteConfig } from "@/lib/api";
import { generateStructuredData } from "@/lib/schema";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  const rawDomain = config.site.domain;
  const isPlaceholderDomain =
    !rawDomain || rawDomain.includes(".example") || rawDomain.includes("localhost");

  let siteDomain: string;
  if (!isPlaceholderDomain) {
    siteDomain = rawDomain.startsWith("http") ? rawDomain : `https://${rawDomain}`;
  } else if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    siteDomain = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  } else if (process.env.VERCEL_URL) {
    siteDomain = `https://${process.env.VERCEL_URL}`;
  } else {
    siteDomain = "https://kerjakuy.example";
  }

  const ogImageUrl = config.seo.og_image_url || "/opengraph-image";

  return {
    title: config.seo.meta_title,
    description: config.seo.meta_description,
    keywords: config.seo.keywords,
    metadataBase: new URL(siteDomain),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      url: siteDomain,
      siteName: config.site.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.seo.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: config.branding.favicon_url || "/favicon.svg",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  const jsonLd = generateStructuredData(config);

  return (
    <html
      lang="id"
      className={`${manrope.variable} ${nunitoSans.variable}`}
      style={
        {
          "--color-coral": config.branding.primary_color,
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics - Hanya disuntikkan jika ID terisi */}
        {config.tracking.ga_id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.tracking.ga_id}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.tracking.ga_id}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel - Hanya disuntikkan jika ID terisi */}
        {config.tracking.meta_pixel_id && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.tracking.meta_pixel_id}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-coral selection:text-ink">
        {children}
        <WhatsAppFloating whatsappUrl={config.cta.whatsapp_url} />
      </body>
    </html>
  );
}
