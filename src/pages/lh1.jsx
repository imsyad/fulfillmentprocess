import React from 'react';
import { Heading, Table, TableHeader, TableCell, TableRow, TableBody, Layer } from 'grommet';
import '../style/text.css';
import '../style/image.css';
import HTA from '../assets/Order Fulfillment-HTA.jpg';

const lh1 = () => {
    return (
        <>
            <Heading>Karakteristik Pengguna</Heading>
            <div class='content'>
                <p>Berdasarkan referensi yang diberikan, kami dapat mengelompokkan pengguna pada proses order fulfillment sebagai berikut:</p>
                <ul class="first">
                    <li>Pelanggan</li>
                    <p>Pelanggan adalah pria/wanita yang berusia 25 - 50 tahun, pelanggan bisa mengoperasikan gawai, dan pelanggan menyukai tampilan yang sederhana dan terstruktur.</p>
                    <li>Departemen Manajemen Pemaasran</li>
                    <p>Staf departemen manajemen pemesanan adalah pria/wanita yang berusia 25 - 50 tahun, dapat menggunakan gawai dengan handal, dan menyukai tampilan aplikasi yang sederhana dan menampilkan informasi mengenai pemesanan pembelian yang sedang dikerjakan. Departemen manajemen pemesanan terdiri dari:</p>
                    <ul class='second'>
                        <li>Kepala Departemen Manajemen Pemesanan</li>
                        <li>Asisten Kepala Departemen Manajemen Pemesanan</li>
                        <li>Staf Departemen Manajemen Pemesanan</li>
                    </ul>
                    <li>Departemen Pasokan</li>
                    <p>Staf departemen pasokan adalah pria/wanita yang berusia 25 - 50 tahun, dapat menggunakan gawai dengan baik, dan menginginkan tampilan yang sederhana dan terstruktur. Kepala departemen pasokan menginginkan fitur yang dapat mengatur staf departemen pasokan mana yang akan melakukan suatu pekerjaan. Departemen pasokan terdiri dari:</p>
                    <ul class='second'>
                        <li>Kepala Departemen Pasokan</li>
                        <li>Staf Departemen Pasokan</li>
                    </ul>
                    <li>Gudang</li>
                    <p>Staf gudang adalah pria/wanita yang berusia 25 - 50 tahun, dapat menggunakan gawai dengan baik, dan menyukai tampilan yang sederhana, tidak menggunakan warna yang mencolok, memiliki ukuran huruf yang besar dan hanya memberikan informasi yang dibutuhkan staf gudang. Gudang terdiri dari:</p>
                    <ul class='second'>
                        <li>Kepala Gudang</li>
                        <li>Staf Gudang</li>
                    </ul>
                    <li>Departemen Pembawa</li>
                    <p>Staf departemen pembawa adalah pria/wanita yang berusia 25 - 50 tahun, bisa menggunakan gawai dengan baik, dan menyukai tampilah yang sederhana, warna yang kontras dan terlihat jelas saat penggunaan di luar ruangan. Departemen pembawa terdiri dari:</p>
                    <ul class='second'>
                        <li>Kepada Departemen Pembawa</li>
                        <li>Staf Departemen Pembawa</li>
                    </ul>
                    <li>Departemen Keuangan</li>
                    <p>Staf departemen keuangan adalah pria/wanita yang berusia 25 - 50 tahun, dapat menggunakan gawai dengan handal, dan menginginkan tampilan aplikasi yang menggunakan warna kontras tetapi nyaman untuk dilihat dalam jangka waktu yang lama. Departemen keuangan terdiri dari:</p>
                    <ul class='second'>
                        <li>Kepala Departemen Keuangan</li>
                        <li>Staf Departemen Keuangan</li>
                    </ul>
                </ul>
            </div>

            <Heading>Analisis Tugas Pengguna</Heading>
            <div class='content'>
                <ul class="first">
                    <li>Proses yang Harus Diselesaikan</li>
                    <ul class="second">
                        <li>Pemesanan</li>
                        <p>Pada proses <b>Pemesanan</b>, pembelian bisa dibuat, diubah, disetujui, atau ditolak. Jika pemesanan ditolak atau tidak dikonfirmasi tepat waktu, maka prosesnya berakhir, jika tidak (pemesanan disetujui dan dikonfirmasi) maka pengaturan logistik akan dimulai pada task <b>Penunjukkan Pembawa</b> Pada proses Pemesanan, terdapat beberapa sub-proses sebagai berikut:</p>
                        <ul style={{ 'list-style-type': 'none' }}>
                            <li>1.1. Membuat pesanan pembelian.</li>
                            <li>1.2.Menyetujui pesanan pembelian.</li>
                            <ul style={{ 'list-style-type': 'none' }}>
                                <li>1.2.1. Ubah pesanan pembelian.</li>
                                <li>1.2.2. Konfirmasi pesanan pembelian.</li>
                                <li>1.2.3. Waktu pesanan habis.</li>
                            </ul>
                        </ul>
                        <li>Penunjukkan Pembawa</li>
                        <p>Proses <b>Penunjukkan Pembawa</b> berkaitan dengan persiapan kutipan pengiriman, pengiriman dan pengambilan, dan berpuncak (berakhir) pada pengambilan barang dari <b>Departemen Pembawa</b>. Jika kutipan pengiriman tidak disiapkan tepat waktu, maka seluruh proses berakhir dan order dibatalkan. Sebaliknya, jika barang diambil, proses <b>Pembayaran</b> dan <b>Barang dalam Perjalanan</b> akan dimulai secara paralel. Pada proses Penunjukkan Pembawa, terdapat beberapa sub-proses sebagai berikut:</p>
                        <ul style={{ 'list-style-type': 'none' }}>
                            <li>2.1. Mempersiapkan panduan rute.</li>
                            <li>2.2.Estimasi penggunaan trailer.</li>
                            <li>2.3.Mempersiapkan kutipan transportasi.</li>
                            <li>2.4.Membuat pemberitahuan pengiriman.</li>
                        </ul>
                        <li>Pembayaran</li>
                        <p><b>Yang pertama</b> dilakukan adalah memproses <b>Pembayaran</b> untuk barang dan pengiriman. Pada proses Pembayaran, terdapat beberapa sub-proses sebagai berikut:</p>
                        <ul style={{ 'list-style-type': 'none' }}>
                            <li>3.1. Membuat tagihan pengiriman.</li>
                            <ul style={{ 'list-style-type': 'none' }}>
                                <li>3.1.1. Membuat saran pengiriman uang.</li>
                                <li>3.1.2. Membuat pembayaran pesanan.</li>
                                <ul style={{ 'list-style-type': 'none' }}>
                                    <li>3.1.2.1. Menyetujui pembayaran pengiriman pesanan.</li>
                                    <li>3.1.2.2. Memproses pembayaran pengiriman.</li>
                                </ul>
                            </ul>
                        </ul>
                        <li>Barang Dalam Perjalanan</li>
                        <p><b>Yang terakhir</b> memungkinkan <b>Departemen Manajemen Pemesanan</b> untuk mengeluarkan pertanyaan setelah status barang pada perjalanan <b>(Barang dalam Perjalanan)</b>, dan menangani notifikasi progres pengiriman dari <b>Departemen Pembawa</b>. Proses ini akan berakhir dengan barang yang sudah dikirim kepada pelanggan <b>(Barang Terkirim)</b>. Pada proses Barang dalam Perjalanan, terdapat beberapa sub-proses sebagai berikut:</p>
                        <ul style={{ 'list-style-type': 'none' }}>
                            <li>4.1. Membuat pemberitahuan titik jejak.</li>
                            <ul style={{ 'list-style-type': 'none' }}><li>4.1.1. Mencatat seluruh titik jejak pesanan.</li></ul>
                            <li>4.2. Memulai permintaan status pengiriman.</li>
                            <li>4.3. Membuat sertifikat penerimaan.</li>
                        </ul>
                        <li>Barang Terkirim</li>
                    </ul>
                    <li>Karakter Utama Dalam Setiap Proses dan Tujuannya</li>
                    <p>Berikut penjelasan tugas/batasan pengguna pada setiap proses dan tujuannya.</p>
                    <ul class='second'>
                        <li>Pemesanan</li>
                        <p>Proses pemesanan dimulai dengan pembuatan Pesanan Pembelian (PP) oleh Departemen Manajemen Pemesanan. Kemudian PP harus disetujui oleh Departemen Pasokan dan mungkin dilakukan beberapa modifikasi yang selanjutnya dibutuhkan konfirmasi dalam jangka waktu tertentu. Berikut pengguna yang terlibat dalam proses Pemesanan.</p>
                        <ul class='third'>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Manajemen Pemesanan</li>
                            <p>Staf Departemen Manajemen Pemesanan yang sedang melakukan pembuatan suatu PP selanjutnya disebut Manajer PP. Berikut tugas maupun batasan yang dilakukan oleh Staf Departemen Manajemen Pemesanan pada proses Pemesanan:</p>
                            <ul class='first'>
                                <li>Melakukan pembuatan PP.</li>
                                <li>Pada saat menangani pembuatan PP, Manajer PP dapat mengalokasikan tugas pembuatan PP kepada Manajer PP lain dengan status sudah atau belum dilakukan pengerjaan pada PP terkait.</li>
                                <li>Manajer PP dapat berhenti mengerjakan tugas dan meminta sistem untuk menawarkan tugas tersebut kepada Manajer PP yang tersedia.</li>
                                <li>Manajer PP dapat menangguhkan pengerjaan pembuatan PP dan memilih untuk melanjutkan pengerjaan pada tahap selanjutnya.</li>
                                <li>Manajer PP memungkinkan untuk menjadi sukarelawan untuk dijadikan prioritas pada saat memproses PP dalam jangka waktu tertentu.</li>
                                <li>Pada saat Manajer PP ditawarkan tugas untuk membuat PP oleh sistem dan menerimanya, maka sistem secara otomatis akan menginisiasi tugas tersebut.</li>
                                <li>Setelah menyelesaikan PP, Manajer PP harus menentukan Manajer PP mana yang akan mengerjakan permintaan modifikasi karena mungkin akan terjadi di tahap selanjutnya. Secara default, Manajer PP yang menangani modifikasi dan konfirmasi PP adalah Carmine Marino (id “cm”).</li>
                                <li>PP yang sudah selesai dibuat akan diteruskan ke Staf Departemen Pasokan yang perlu menyetujuinya.</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Pasokan</li>
                            <p>Staf Departemen Pasokan yang sedang melakukan tugas penyetujuan PP selanjutnya disebut Petugas DP. Berikut tugas maupun batasan yang dilakukan oleh Staf Departemen Pasokan pada proses Pemesanan:</p>
                            <ul class='first'>
                                <li>Jika Petugas DP merupakan Kepala Departemen Pasokan yang mengalokasikan tugas kepada diri sendiri, maka dia dapat memilih untuk mendelegasi tugas tersebut kepada Staf Departemen Pasokan yang melapornya.</li>
                                <li>Petugas DP memilih tugas persetujuan mana yang akan dikerjakan, dan setelah memilih tugasnya dia dapat menentukan kapan tugas tersebut akan mulai dikerjakan.</li>
                            </ul>
                        </ul>
                        <p>Pesanan Pembelian (PP) mengandung informasi mengenai klien dari perusahaan (nama, alamat, dan nomor bisnis), informasi mengenai pesanan (nomor pesanan, tanggal, mata uang, ketentuan pesanan), biaya pengiriman, dan lokasi pengiriman.</p>
                        <p>Setelah PP disetujui, dapat terjadi permintaan modifikasi yang berulang. Terdapat nomor revisi yang terikat pada suatu PP yang dimana akan terus bertambah seiring dengan jumlah perubahan. Perubahan tersebut perlu untuk disetujui, jika PP ditolak atau modifikasi ditolak maka proses Pemesanan berakhir. Konfirmasi PP dilakukan maksimal dalam jangka waktu tiga hari, jika tidak maka PP akan dibuang dan proses dihentikan.</p>
                        <li>Penunjukan Pembawa</li>
                        <p>Setelah PP dikonfirmasi, perlu disiapkan panduan rute dan estimasi penggunaan trailer. Panduan rute disiapkan dengan menentukan trackpoint yang akan dikunjungi selama pengiriman dan penggunaan trailer ditentukan dengan mengestimasi jumlah paket untuk pengiriman dimana setiap paket mempunyai penanda/identitas dan memiliki volume tetap yaitu 25, 50, 100, atau 200 pon. Proses tersebut dilakukan secara paralel yang dibagi menjadi proses Persiapan Panduan Rute dan Estimasi Penggunaan Trailer. Setelah proses Persiapan Panduan Rute dan Estimasi Penggunaan Trailer selesai, selanjutnya akan dilakukan Persiapan Kutipan Transportasi dengan menghitung biaya pengiriman berdasarkan jumlah paket yang dikirim dan total volume dari kargo. Hasil hitung tersebut terbagi menjadi 3 bagian. Yang pertama Single Package jika paket yang dikirim hanya ada satu, yang kedua less than truckload jika paket yang dikirim lebih kecil dari muatan truk, dan yang ketiga full truckload jika truk sudah dipenuhi paket. Setelah itu akan dilakukan Pembuatan Pemberitahuan Pengiriman jika kategori termasuk kedalam less than truckload dan full truckload. Berikut pengguna yang terlibat dalam proses Penunjukan Pembawa.</p>
                        <ul class='third'>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Pasokan</li>
                            <ul class='first'>
                                <li>Membuat panduan rute dan penggunaan trailer</li>
                                <li>Melakukan persiapan kutipan transportasi</li>
                                <li>Membuat kutipan transportasi</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Gudang</li>
                            <ul>
                                <li>Membuat janji pengiriman dan janji pengambilan</li>
                                <li>Membuat pemberitahuan pengiriman</li>
                            </ul>
                        </ul>
                        <li>Pembayaran</li>
                        <p>Pada proses Pembayaran, pertama yang dilakukan adalah membuat tagihan pengiriman dan tagihan barang, setelah itu membuat saran pengiriman uang dan memproses pembayaran pesanan. Berikut pengguna yang terlibat dalam proses Pembayaran.</p>
                        <ul class="third">
                            <li style={{ 'fontWeight': 'bold' }}>Pelanggan</li>
                            <ul class='first'>
                                <li>Membayar tagihan</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Pasokan</li>
                            <ul class='first'>
                                <li>Membuat tagihan barang dan tagihan pengiriman</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Keuangan</li>
                            <ul class='first'>
                                <li>Membuat dokumen saran pengiriman uang dan pembayaran pesanan</li>
                                <li>Menyetujui dokumen saran pengiriman uang dan pembayaran pesanan</li>
                                <li>Menerima pembayaran dari pelanggan</li>
                            </ul>
                        </ul>
                        <li>Barang dalam perjalanan</li>
                        <p>Pengangkutan di transit dilakukan secara paralel dengan pembayaran dan berkaitan dengan pelacakan proses pengiriman pesanan. Berikut pengguna yang terlibat dalam proses Barang dalam Perjalanan.</p>
                        <ul class='third'>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Pembawa</li>
                            <ul class='first'>
                                <li>Mengirim pesanan</li>
                                <li>Membuat catatan untuk setiap titik jejak</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Manajemen Pemesanan</li>
                            <ul class='first'>
                                <li>Membuat sertifikat penerimaan</li>
                            </ul>
                        </ul>
                        <li>Barang Terkirim</li>
                        <p>Setelah pengiriman barang, pelanggan dapat meminta pengembalian barang atau mengajukan klaim kehilangan atau kerusakan.</p>
                        <ul class='third'>
                            <li style={{ 'fontWeight': 'bold' }}>Pelanggan</li>
                            <ul class='first'>
                                <li>Menerima barang</li>
                                <li>Mengajukan permintaan pengembalian barang</li>
                                <li>Mengajukan klaim kehilangan atau kerusakan</li>
                            </ul>
                            <li style={{ 'fontWeight': 'bold' }}>Staf Departemen Pasokan</li>
                            <ul class='first'>
                                <li>Menerima atau menolak pengajuan</li>
                            </ul>
                        </ul>
                    </ul>
                    <li>Struktur Analisis Tugas</li>
                    <p>Proses analisis task yang sudah dibuat sebelumnya, menggunakan analisis fungsional yang direpresentasikan dengan Hierarchical Task Analysis. Berikut merupakan HTA dari analisis tugas pengguna.</p>
                    <div class='image-container'>
                        <img src={HTA} alt='HTA'/>
                    </div>
                </ul>
            </div>
            <Heading>Tentukan Goal</Heading>
            <div class='content'>
                <ul class='first'>
                    <li>Pemesanan</li>
                    <ul class='second' style={{ 'list-style-type': 'none' }}>
                        <li>Goal: Melakukan pemesanan.</li>
                        <li>Tasks:
                            <ul class='third'>
                                <li>Membuat pemesanan pembelian</li>
                                <li>Menyetujui pesanan pembelian</li>
                            </ul>
                        </li>
                    </ul>
                    <li>Penunjukkan pembawa</li>
                    <ul class='second' style={{ 'list-style-type': 'none' }}>
                        <li>Goal: Melakukan pengiriman sesuai dengan rute yang dibuat</li>
                        <li>Tasks:
                            <ul class='third'>
                                <li>Mempersiapkan panduan rute</li>
                                <li>Estimasi penggunaan trailer</li>
                                <li>Mempersiapkan kutipan transportasi</li>
                                <li>Membuat pemberitahuan pengiriman</li>
                            </ul>
                        </li>
                    </ul>
                    <li>Pembayaran</li>
                    <ul class='second' style={{ 'list-style-type': 'none' }}>
                        <li>Goal: Menerima pembayaran dari pelanggan</li>
                        <li>Tasks:
                            <ul class='third'>
                                <li>Membuat tagihan pengiriman</li>
                            </ul>
                        </li>
                    </ul>
                    <li>Barang dalam Perjalanan</li>
                    <ul class='second' style={{ 'list-style-type': 'none' }}>
                        <li>Goal: Membuat sertifikat atau tanda bukti barang sudah diterima pelanggan</li>
                        <li>Tasks:
                            <ul class='third'>
                                <li>Membuat pemberitahuan titik jejak</li>
                                <li>Memulai permintaan status pengiriman</li>
                                <li>Membuat sertifikat penerimaan</li>
                            </ul>
                        </li>
                    </ul>
                    <li>Barang Terkirim</li>
                    <ul class='second' style={{ 'list-style-type': 'none' }}>
                        <li>Goal: Menangani proses permintaan pengembalian barang dan klaim kerusakan barang</li>
                        <li>Tasks:
                            <ul class='third'>
                                <li>Pengajuan permintaan pengembalian barang</li>
                                <li>Pengajuan klaim kehilangan atau kerusakan</li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>
            <Heading>Kontribusi Anggota</Heading>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell scope="col" border>
                            No
                        </TableCell>
                        <TableCell scope="col" border>
                            Nama
                        </TableCell>
                        <TableCell scope="col" border>
                            Kontribusi
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell border>1</TableCell>
                        <TableCell border>Gemintang Sangkaji Furqon</TableCell>
                        <TableCell border>
                            <ul>
                                <li>Struktur Analisis Task</li>
                                <ul>
                                    <li>Struktur analisis task (pembuatan HTA)</li>
                                </ul>
                            </ul>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell border>2</TableCell>
                        <TableCell border>Irsyad Muhammad</TableCell>
                        <TableCell border>
                            <ul>
                                <li>Karakteristik pengguna</li>
                                <ul>
                                    <li>Deskripsi ringkas karakteristik utama dari user pengguna sistem</li>
                                </ul>
                                <li>Tentukan goal</li>
                                <ul>
                                    <li>Pemesanan</li>
                                    <li>Penunjukkan pembawa</li>
                                </ul>
                            </ul>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell border>3</TableCell>
                        <TableCell border>Muhammad Rafi Kamil</TableCell>
                        <TableCell border>
                            <ul>
                                <li>Struktur analisis task</li>
                                <ul>
                                    <li>Proses yang harus diselesaikan</li>
                                    <li>Karakter utama dalam setiap proses</li>
                                </ul>
                                <li>Tentukan goal</li>
                                <ul>
                                    <li>Pembayaran</li>
                                    <li>Barang dalam Perjalanan</li>
                                    <li>Barang Terkirim</li>
                                </ul>
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export default lh1;