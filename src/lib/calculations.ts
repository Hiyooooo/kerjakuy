/**
 * Logika murni untuk simulasi demo lokal KerjaKuy.
 * Sesuai spesifikasi docs/04-modules.md.
 */

/**
 * Mengubah string waktu "HH:mm" menjadi total menit sejak tengah malam.
 */
export function parseTimeToMinutes(timeStr: string): number | null {
  if (!timeStr || typeof timeStr !== "string") return null;
  const parts = timeStr.trim().split(":");
  if (parts.length !== 2) return null;
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return null;
  }
  return hours * 60 + minutes;
}

/**
 * Menghitung total durasi kerja efektif dalam menit (hari yang sama).
 * Rumus: max(0, minutes(end) - minutes(start) - breakMinutes)
 */
export function workedMinutes(start: string, end: string, breakMinutes: number = 0): number {
  const startMin = parseTimeToMinutes(start);
  const endMin = parseTimeToMinutes(end);
  if (startMin === null || endMin === null) return 0;
  if (endMin <= startMin) return 0;
  const validBreak = Math.max(0, breakMinutes);
  return Math.max(0, endMin - startMin - validBreak);
}

/**
 * Format total menit ke format jam dan menit bahasa Indonesia ringkas.
 */
export function formatHoursMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}j`;
  return `${h}j ${m}m`;
}

/**
 * Menghitung sisa cuti tahunan (simulasi).
 * Hanya jenis cuti tahunan/healing yang mengurangi saldo pada contoh default.
 * Rumus: max(0, openingBalance - approvedAnnualDays - requestedAnnualDays)
 */
export function calculateRemainingLeave(
  openingBalance: number,
  approvedAnnualDays: number,
  requestedAnnualDays: number,
  leaveType: string = "healing"
): number {
  const isAnnualDeductible = leaveType === "tahunan" || leaveType === "healing";
  const deduction = isAnnualDeductible ? Math.max(0, requestedAnnualDays) : 0;
  return Math.max(0, openingBalance - Math.max(0, approvedAnnualDays) - deduction);
}

/**
 * KLAIM: Angka kalkulasi slip gaji adalah contoh ilustrasi simulasi UI.
 * Bukan perhitungan resmi perpajakan PPh 21 atau ketentuan premi BPJS.
 * Rumus: base + allowance + overtime + reimbursement - pph21 - bpjs
 */
export function calculateTakeHomePay(
  base: number,
  allowance: number = 0,
  overtime: number = 0,
  reimbursement: number = 0,
  pph21Example: number = 0,
  bpjsExample: number = 0
): number {
  return (
    Math.max(0, base) +
    Math.max(0, allowance) +
    Math.max(0, overtime) +
    Math.max(0, reimbursement) -
    Math.max(0, pph21Example) -
    Math.max(0, bpjsExample)
  );
}

/**
 * Format angka ke format mata uang Rupiah.
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Menghitung persentase skor kuis Exam.
 * Rumus: total === 0 ? 0 : round(correct / total * 100)
 */
export function calculateExamScore(correct: number, total: number): number {
  if (total <= 0) return 0;
  const clampedCorrect = Math.max(0, Math.min(correct, total));
  return Math.round((clampedCorrect / total) * 100);
}

/**
 * Menghitung progres persentase modul Library.
 * Rumus: total === 0 ? 0 : round(completed / total * 100)
 */
export function calculateProgress(completed: number, total: number): number {
  if (total <= 0) return 0;
  const clampedCompleted = Math.max(0, Math.min(completed, total));
  return Math.round((clampedCompleted / total) * 100);
}
