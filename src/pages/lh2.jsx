import React from 'react';
import { Heading } from 'grommet';
import '../style/text.css';
import '../style/image.css';

const lh2 =()=>{

    const ERD ='<iframe frameborder="0" style="width:100%;height:644px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#G1o92MgztjW6UcP4eaXbvlOFPnoSi1uLja"></iframe>'
    const UCD ='<iframe frameborder="0" style="width:100%;height:1403px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#G1k6iLMMCZD_ZYFINb3GtvuH57P20nxTGd"></iframe>'
    const MP ='<iframe frameborder="0" style="width:100%;height:1934px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#G1ak8ML-0J_VkYiPgCOG-h8PQRh9r2hObV"></iframe>'

    return(
        <>
            <Heading>Kebutuhan Situs</Heading>
            <div class='content'>
                <ul class='first'>
                    <li>Deskripsi Proyek</li>
                    <p>Proyek Mata Kuliah Perancangan Antarmuka Pemakai teori memiliki 4 bagian, yaitu, buku laporan proyek, analisis permasalahan dan kebutuhan, perancangan sistem, dan membangun prototype. Hingga saat penulisan deskripsi ini, telah dilakukan pengerjaan bagian 1 dan 2. Pada bagian 1, yaitu buku laporan proyek, dituliskan topik dan deskripsi dari keseluruhan proyek ini. Dan pada bagian 2, yaitu analisis permasalahan dan kebutuhan, dilakukan analisis terhadap karakteristik pengguna, analisis tugas pengguna, dan goal dari masing-masing pengguna. Kemudian, setelah bagian 2 selesai, maka pengerjaan proyek akan dilanjutkan kepada bagian 3, yaitu perancangan sistem. Pada bagian ini akan dianalisis kebutuhan situs, kebutuhan data, kebutuhan proses, dan rancangan tampilan.</p>

                    <li>Identifikasi Masalah</li>
                    <p>Berikut kebutuhan setiap pengguna aplikasi yang diklasifikasikan menjadi beberapa poin:</p>
                    <ul class='second'>
                        <li>Pelanggan</li>
                            <ul class='third'>
                                <li>Fitur memesan barang</li>
                                <li>Fitur membayar tagihan</li>
                                <li>Fitur melihat status pengiriman barang</li>
                                <li>Fitur menyatakan telah menerima barang</li>
                                <li>Fitur mengajukan pengembalian barang</li>
                                <li>Fitur klaim kehilangan atau kerusakan barang</li>
                            </ul>
                        <li>Staf Departemen Pasokan</li>
                            <ul class='third'>
                                <li>Fitur menyetujui pemesanan</li>
                            </ul>
                        <li>Staf Departemen Keuangan</li>
                            <ul class='third'>
                                <li>Fitur memproses pembayaran</li>
                            </ul>
                        <li>Staf Departemen Pembawa</li>
                            <ul class='third'>
                                <li>Fitur membuat laporan kedatangan</li>
                            </ul>
                    </ul>
                    <li>Ringkasan Persyaratan</li>
                    <div class='image-container'>
                        <div dangerouslySetInnerHTML ={{__html:UCD}}></div>
                    </div>
                </ul>
            </div>
            <Heading>Kebutuhan Data</Heading>
                <div class='content'>
                    <p>Kebutuhan data pada sistem ORder Fulfillment digambarkan dengan ERD (Entity Relationship Diagram) sebagai berikut:</p>
                    <div class='image-container'>
                        <div dangerouslySetInnerHTML ={{__html:ERD}}></div>
                    </div>
                </div>
            <Heading>Kebutuhan Proses</Heading>
                <div class='content'>
                    <p>Kebutuhan proses pada sistem Order Fulfillment kami gambarkan dalam bentuk activity diagram sebagai berikut.</p>
                    <div class='image-container'>
                    <div dangerouslySetInnerHTML ={{__html:MP}}></div>
                    </div>
                </div>
            <Heading>Rancangan Tampilan</Heading>
            <div class='content'>
                <ul class="first">
                    <li>Deskripsi Desain</li>
                    <p>Aplikasi yang dirancang memiliki dua perspektif pengguna, yaitu perspektif pelanggan dan perspektif perusahaan. Untuk perspektif perusahaan dibagi menjadi dua pengguna yaitu Staf Departemen Pasokan dan Staf Departemen Pembawa. Berikut beberapa tampilan dari kebutuhan yang krusial pagi setiap pengguna dari aplikasi. <i>Catatan: Tampilan untuk departemen pembawa(kurir) akan memiliki tampilan untuk mobile.</i></p>
                    <li>Kesimpulan Akhir</li>
                    <p>Setelah melakukan diskusi antar anggota dan melakukan perancangan aplikasi, didapatkan kesimpulan yaitu aplikasi yang akan dibangun memiliki dua perspektif yaitu sebagai pelanggan dan sebagai perusahaan. Aplikasi yang dibangun berhasil mengotomasi beberapa kegiatan pada proses Order Fulfillment seperti proses pembuatan Pemesanan Pembelian (PP) atau pembuatan Janji Pengambilan dan Pengiriman. Dengan adanya proses yang terotomasi maka adapun pekerjaan yang hilang dari perusahaan di beberapa proses, contohnya karena pembuatan Pemesanan Pembelian (PP) dilakukan secara otomatis oleh sistem, maka pekerjaan Departemen Manajemen Pemesanan di bagian ini akan tergantikan.</p>
                </ul>
            </div>
        </>
    )
}

export default lh2