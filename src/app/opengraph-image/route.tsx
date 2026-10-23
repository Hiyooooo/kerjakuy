import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFF8F3",
          padding: "60px 80px",
        }}
      >
        {/* Top Bar: Wordmark + Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "20px",
                backgroundColor: "#FB7185",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2B2423",
                fontSize: "28px",
                fontWeight: "900",
              }}
            >
              K
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "44px",
                fontWeight: "900",
                color: "#2B2423",
                letterSpacing: "-0.03em",
              }}
            >
              <span>Kerja</span>
              <span style={{ color: "#FB7185" }}>Kuy</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(245, 158, 11, 0.2)",
              color: "#874400",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            <span>HR harian untuk tim fleksibel</span>
          </div>
        </div>

        {/* Center: Hero Card Motif */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#FFFFFF",
            padding: "40px 50px",
            borderRadius: "32px",
            border: "3px solid #E9D9D2",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "46px",
              fontWeight: "800",
              color: "#2B2423",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            <span>HR tanpa ribet. Karyawan happy. Bisnis melesat.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#655B58",
              lineHeight: 1.4,
            }}
          >
            <span>
              Kelola cuti, absen fleksibel, dan penggajian tanpa pusing. Solusi HRIS paling ramah untuk tim kekinian.
            </span>
          </div>
        </div>

        {/* Bottom Bar: 5 Modul HRIS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E9D9D2",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#655B58",
            fontWeight: "600",
          }}
        >
          <div style={{ display: "flex", gap: "28px" }}>
            <span>Perizinan 3 Langkah</span>
            <span>Absensi Fleksibel & Mood</span>
            <span>Slip Gaji Digital</span>
            <span>Wiki Kantor</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#2B2423",
              fontWeight: "800",
            }}
          >
            <span>kerjakuy.example</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
