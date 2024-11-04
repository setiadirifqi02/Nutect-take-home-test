export function dateIdFormatter(date) {
  const tanggal = new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta",
  });

  const waktu = new Date(date).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
    hour12: false, // Menggunakan format 24 jam
  });

  return `${tanggal} \u00A0\u00A0\u00A0\u00A0\u00A0${waktu} WIB`;
}
