import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Gvstang',
  description:
    'Kebijakan Privasi untuk aplikasi Gvstang - Bot WhatsApp Business untuk pencatatan keuangan',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl col-span-full lg:col-span-3">
      <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>

      <div className="prose dark:prose-invert prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Terakhir diperbarui: 5 November 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Pendahuluan</h2>
          <p className="mb-4">
            Gvstang ("kami", "milik kami", atau "aplikasi") adalah bot WhatsApp
            Business yang dirancang untuk membantu Anda mencatat dan mengelola
            keuangan pribadi. Kami menghargai privasi Anda dan berkomitmen untuk
            melindungi data pribadi yang Anda percayakan kepada kami.
          </p>
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, menyimpan, dan melindungi informasi Anda saat
            menggunakan layanan Gvstang.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Informasi yang Kami Kumpulkan
          </h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            2.1 Informasi yang Anda Berikan
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Nomor WhatsApp Anda</li>
            <li>Nama yang terdaftar di WhatsApp</li>
            <li>
              Data transaksi keuangan yang Anda catat (pemasukan, pengeluaran,
              kategori, jumlah, tanggal, dan catatan)
            </li>
            <li>Pesan dan instruksi yang Anda kirimkan ke bot</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            2.2 Informasi yang Dikumpulkan Secara Otomatis
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Waktu dan tanggal interaksi dengan bot</li>
            <li>Log penggunaan fitur aplikasi</li>
            <li>Data teknis untuk pemeliharaan dan peningkatan layanan</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Bagaimana Kami Menggunakan Informasi Anda
          </h2>
          <p className="mb-4">
            Kami menggunakan informasi yang dikumpulkan untuk:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Menyediakan layanan pencatatan keuangan</li>
            <li>Menyimpan dan mengelola data transaksi Anda</li>
            <li>Menghasilkan laporan dan statistik keuangan pribadi Anda</li>
            <li>Meningkatkan dan mengoptimalkan fitur aplikasi</li>
            <li>Memberikan dukungan teknis dan layanan pelanggan</li>
            <li>Mengirimkan notifikasi terkait layanan (jika diaktifkan)</li>
            <li>Memastikan keamanan dan mencegah penyalahgunaan layanan</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Penyimpanan dan Keamanan Data
          </h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            4.1 Penyimpanan Data
          </h3>
          <p className="mb-4">
            Data keuangan Anda disimpan secara aman di server kami dengan
            enkripsi. Kami menerapkan langkah-langkah keamanan teknis dan
            organisasi yang sesuai untuk melindungi data Anda dari akses,
            pengungkapan, perubahan, atau penghancuran yang tidak sah.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            4.2 Masa Penyimpanan
          </h3>
          <p className="mb-4">
            Kami menyimpan data Anda selama Anda tetap menggunakan layanan kami.
            Jika Anda memutuskan untuk menghapus akun, data Anda akan dihapus
            secara permanen dalam waktu 30 hari.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Keamanan</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Enkripsi data saat transit dan saat disimpan</li>
            <li>Akses terbatas hanya untuk personel yang berwenang</li>
            <li>Pemantauan keamanan secara berkala</li>
            <li>Backup data secara rutin</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Berbagi Informasi</h2>
          <p className="mb-4">
            Kami TIDAK akan menjual, menyewakan, atau membagikan data pribadi
            dan keuangan Anda kepada pihak ketiga untuk tujuan pemasaran atau
            komersial.
          </p>
          <p className="mb-4">
            Kami hanya akan membagikan informasi Anda dalam situasi berikut:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dengan persetujuan eksplisit dari Anda</li>
            <li>
              Kepada penyedia layanan yang membantu operasional aplikasi (dengan
              perjanjian kerahasiaan)
            </li>
            <li>Jika diwajibkan oleh hukum atau proses hukum yang sah</li>
            <li>
              Untuk melindungi hak, properti, atau keselamatan kami, pengguna
              kami, atau publik
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Hak Anda</h2>
          <p className="mb-4">Anda memiliki hak untuk:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Mengakses</strong> data pribadi Anda yang kami simpan
            </li>
            <li>
              <strong>Memperbaiki</strong> data yang tidak akurat atau tidak
              lengkap
            </li>
            <li>
              <strong>Menghapus</strong> data Anda (hak untuk dilupakan)
            </li>
            <li>
              <strong>Mengekspor</strong> data Anda dalam format yang dapat
              dibaca mesin
            </li>
            <li>
              <strong>Membatasi</strong> pemrosesan data Anda
            </li>
            <li>
              <strong>Menolak</strong> pemrosesan data tertentu
            </li>
            <li>
              <strong>Menarik persetujuan</strong> kapan saja
            </li>
          </ul>
          <p className="mt-4">
            Untuk menggunakan hak-hak ini, silakan hubungi kami melalui kontak
            yang tersedia di bagian bawah halaman ini.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Penggunaan oleh Anak-anak
          </h2>
          <p className="mb-4">
            Layanan Gvstang tidak ditujukan untuk pengguna di bawah usia 17
            tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari
            anak-anak. Jika Anda adalah orang tua atau wali dan mengetahui bahwa
            anak Anda telah memberikan informasi pribadi kepada kami, silakan
            hubungi kami.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Cookies dan Teknologi Pelacakan
          </h2>
          <p className="mb-4">
            Sebagai aplikasi berbasis WhatsApp, kami tidak menggunakan cookies
            di browser. Namun, kami mungkin menggunakan teknologi serupa untuk
            meningkatkan pengalaman pengguna dan menganalisis penggunaan
            layanan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. Perubahan Kebijakan Privasi
          </h2>
          <p className="mb-4">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu
            untuk mencerminkan perubahan dalam praktik kami atau karena alasan
            operasional, hukum, atau regulasi lainnya.
          </p>
          <p className="mb-4">
            Kami akan memberi tahu Anda tentang perubahan material melalui
            WhatsApp atau dengan memposting pemberitahuan di halaman ini.
            Tanggal "Terakhir diperbarui" di bagian atas halaman ini akan
            diperbarui sesuai dengan revisi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Hubungi Kami</h2>
          <p className="mb-4">
            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait
            Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi
            kami:
          </p>
          <div className="bg-gray-800/90 p-6 rounded-lg">
            <p className="mb-2">
              <strong>Gvstang</strong>
            </p>
            <p className="mb-2">Email: privacy@gvstang.com</p>
            <p className="mb-2">WhatsApp: +62 851 9065 0528</p>
            <p>Website: https://gvstang.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Persetujuan</h2>
          <p className="mb-4">
            Dengan menggunakan layanan Gvstang, Anda menyetujui pengumpulan dan
            penggunaan informasi sesuai dengan Kebijakan Privasi ini. Jika Anda
            tidak setuju dengan kebijakan ini, mohon untuk tidak menggunakan
            layanan kami.
          </p>
        </section>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm text-gray-700">
            <strong className="text-gray-800">Catatan Penting:</strong> Kami
            berkomitmen untuk melindungi privasi dan keamanan data keuangan
            Anda. Data Anda adalah milik Anda, dan kami hanya bertindak sebagai
            pemroses data untuk membantu Anda mengelola keuangan pribadi dengan
            lebih baik.
          </p>
        </div>
      </div>
    </div>
  );
}
