/**
 * ============================================================
 *  KONFIGURASI MODUL — Portal KAI OPS 9
 * ============================================================
 *  Edit URL / status di file ini saja kalau ada perubahan link.
 *  TIDAK PERLU edit index.html sama sekali.
 *
 *  Format tiap modul:
 *    name    -> nama modul yang tampil di card
 *    url     -> link tujuan saat card diklik. Kosongkan ""
 *               kalau modul belum aktif (akan tampil "Segera Hadir")
 *    status  -> teks kecil di bawah judul card
 *               (tanggal update terakhir, atau "Segera Hadir")
 * ============================================================
 */

const MODULES = {
  station: {
    name: "RailStatiON",
    url: "https://railstation.kaiops9.com",
    status: "Segera Hadir"
  },
  imo: {
    name: "IMO Tools",
    url: "https://imo.kaiops9.com",
    status: "est. 27 Agustus 2026"
  },
  tracker: {
    name: "Tracker Kendala",
    url: "https://trackerkendala.kaiops9.com",
    status: "est. 10 Agustus 2026"
  },
  inovation: {
    name: "Inovation",
    url: "https://maintenance.kaiops9.com",
    status: "Segera Hadir"
  }
};
