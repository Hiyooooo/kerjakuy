import { describe, it, expect } from "vitest";
import {
  workedMinutes,
  formatHoursMinutes,
  calculateRemainingLeave,
  calculateTakeHomePay,
  calculateExamScore,
  calculateProgress,
} from "../src/lib/calculations";

describe("Logika Murni Modul KerjaKuy (docs/04-modules.md)", () => {
  describe("Modul 1: Absensi (workedMinutes)", () => {
    it("menghitung 09:05 - 17:10 dengan istirahat 60m menjadi 425 menit (7j 5m)", () => {
      const minutes = workedMinutes("09:05", "17:10", 60);
      expect(minutes).toBe(425);
      expect(formatHoursMinutes(minutes)).toBe("7j 5m");
    });

    it("menghitung 09:00 - 17:00 dengan istirahat 60m menjadi 420 menit (7j)", () => {
      const minutes = workedMinutes("09:00", "17:00", 60);
      expect(minutes).toBe(420);
      expect(formatHoursMinutes(minutes)).toBe("7j");
    });

    it("menghitung 09:00 - 12:00 tanpa istirahat menjadi 180 menit (3j)", () => {
      const minutes = workedMinutes("09:00", "12:00", 0);
      expect(minutes).toBe(180);
      expect(formatHoursMinutes(minutes)).toBe("3j");
    });

    it("menangani input waktu tidak valid atau pulang sebelum masuk", () => {
      expect(workedMinutes("17:00", "09:00", 60)).toBe(0);
      expect(workedMinutes("invalid", "17:00")).toBe(0);
      expect(workedMinutes("09:00", "09:00")).toBe(0);
    });
  });

  describe("Modul 2: Gaji (calculateTakeHomePay)", () => {
    it("menghitung total gaji demo dengan test vector utama Rp8.530.000", () => {
      // 7.500.000 + 1.000.000 + 250.000 + 180.000 - 250.000 - 150.000 = 8.530.000
      const total = calculateTakeHomePay(
        7_500_000,
        1_000_000,
        250_000,
        180_000,
        250_000,
        150_000
      );
      expect(total).toBe(8_530_000);
    });

    it("menghitung gaji pokok saja tanpa tunjangan/potongan Rp6.000.000", () => {
      const total = calculateTakeHomePay(6_000_000, 0, 0, 0, 0, 0);
      expect(total).toBe(6_000_000);
    });
  });

  describe("Modul 3: Perizinan (calculateRemainingLeave)", () => {
    it("menghitung sisa cuti: saldo 12, disetujui 3, pengajuan 2 menjadi 7 hari", () => {
      const remaining = calculateRemainingLeave(12, 3, 2, "healing");
      expect(remaining).toBe(7);
    });

    it("menghitung sisa cuti: saldo 12, disetujui 0, pengajuan 0 menjadi 12 hari", () => {
      const remaining = calculateRemainingLeave(12, 0, 0, "healing");
      expect(remaining).toBe(12);
    });

    it("membatasi sisa cuti minimum nol saat pengajuan melebihi sisa saldo", () => {
      const remaining = calculateRemainingLeave(12, 12, 1, "tahunan");
      expect(remaining).toBe(0);
    });

    it("tidak memotong saldo cuti tahunan jika jenis izin bukan tahunan/healing", () => {
      // Izin sakit atau ulang tahun tidak mengurangi saldo cuti tahunan
      const remainingSakit = calculateRemainingLeave(12, 3, 2, "sakit");
      expect(remainingSakit).toBe(9); // 12 - 3 = 9
      const remainingUltah = calculateRemainingLeave(12, 3, 1, "ulang-tahun");
      expect(remainingUltah).toBe(9);
    });
  });

  describe("Modul 4: Exam (calculateExamScore)", () => {
    it("menghitung skor 4 dari 5 soal benar menjadi 80%", () => {
      expect(calculateExamScore(4, 5)).toBe(80);
    });

    it("menghitung skor 5 dari 5 soal benar menjadi 100%", () => {
      expect(calculateExamScore(5, 5)).toBe(100);
    });

    it("menghitung skor 0 dari 5 soal benar menjadi 0%", () => {
      expect(calculateExamScore(0, 5)).toBe(0);
    });

    it("menangani pembagian dengan nol dengan aman", () => {
      expect(calculateExamScore(0, 0)).toBe(0);
    });
  });

  describe("Modul 5: Library (calculateProgress)", () => {
    it("menghitung progres 3 dari 4 bagian menjadi 75%", () => {
      expect(calculateProgress(3, 4)).toBe(75);
    });

    it("menghitung progres 4 dari 4 bagian menjadi 100%", () => {
      expect(calculateProgress(4, 4)).toBe(100);
    });

    it("menghitung progres 0 dari 4 bagian menjadi 0%", () => {
      expect(calculateProgress(0, 4)).toBe(0);
    });

    it("menangani total nol dengan aman", () => {
      expect(calculateProgress(0, 0)).toBe(0);
    });
  });
});
