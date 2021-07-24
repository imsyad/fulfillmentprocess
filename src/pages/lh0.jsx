import React from 'react';
import { Heading } from 'grommet';
import '../style/text.css';

const lh0 = () => {

    return (
        <>
            <Heading>Topik</Heading>
            <div><p>Order fulfillment.</p></div>
            <Heading>Deskripsi</Heading>
            <div style={{'line-height':'1.5'}}>
                Laman web ini adalah halaman yang dibuat oleh Gemintang Sangkaji Furqon (dengan NIM 191524009), Irsyad Muhammad (dengan NIM 191524014), dan Muhammad Rafi Kamil (dengan NIM 191524029). Laman web ini merupakan bentuk laporan proyek untuk pemenuhan tugas Mata Kuliah Perancangan Antarmuka Pengguna teori. Pada laman web ini, konten akan dibagi menjadi 4 bagian, yaitu:
                <ul class="first">
                    <li>Bagian buku laporan proyek. Halaman ini akan menampilkan informasi topik proyek, deskripsi singkat proyek, identitas dan foto anggota kelompok, serta tugas dan pembagian tugas pada proyek ini.</li>
                    <li>Bagian Analisis Permasalahan & Kebutuhan. Pada halaman ini akan dimuat permasalahan dan isu user maupun constraint yang terkait dengan permasalahan tersebut; user yang terlibat; task yang harus diselesaikan; fungsi utama yang harus dilakukan oleh sistem sesuai kebutuhan user. Secara rinci, pada halaman ini akan dimuat berbagai hal berikut:
                        <ul class="second">
                            <li>Deskripsi ringkas karakteristik utama dari user pengguna sistem.</li>
                            <li>Task Yang harus diselesaikan.</li>
                            <li>Deskripsi karakter utama dari task yang diselesaikan oleh user.</li>
                            <li>Struktur analisis task menggunakan HTA (Hierarchy Task Analysis).</li>
                            <li>State yang menjadi tujuan yang ingin dicapai oleh user.</li>
                            <li>Tanggung jawab atau kontribusi anggota kelompok pada halaman ini. Tanggung jawab atau kontribusi anggota akan ditulis dalam poin-poin kontribusi baik dalam pengerjaan laporan maupun dalam penyelesaian bagian ini.</li>
                        </ul>
                    </li>
                    <li>Bagian rancangan sistem. Pada halaman ini akan difokuskan kepada bagaimana rancangan interface/antarmuka sebagai solusi dari permasalahan. Pada halaman ini akan dilampirkan rancangan antarmuka yang dapat berbentuk mock-up, storyboards, atau sketsa rancangan dalam representasi gambar elektronik atau gambar manual. Secara spesifik, halaman ini akan memuat hal-hal berikut, yaitu:
                        <ul class="second">
                            <li>Problem identification: berisi tentang permasalahan berdasarkan kebutuhan user yang belum terpenuhi dari sistem yang dianalisis.</li>
                            <li>Requirement summary: berisi ringkasan key requirements untuk sistem yang akan dibangun, yang terdiri atas:
                                <ul class="third">
                                    <li>User requirements;</li>
                                    <li>System requirements untuk setiap user requirements.</li>
                                </ul>
                            </li>
                            <li>Tipe dan struktur data sesuai dengan kebutuhan sistem dan subsistem. Pada bagian ini akan digambarkan menggunakan model data yang digambarkan menggunakan tool Entity Relation Diagram.</li>
                            <li>Struktur proses sesuai dengan kebutuhan sistem dan subsistem. Pada bagian ini akan digambarkan menggunakan tools utk untuk membuat model proses seperti sequence diagram atau activity diagram.</li>
                            <li>Terakhir terdapat rancangan tampilan yang terdiri dari:
                                <ul class="third">
                                    <li>Deskripsi desain yang menjelaskan secara detail rancangan yang dibangun, mulai dari penjelasan tampilan, skenario, alasan yang rasional atas rancangan yang dibangun.</li>
                                    <li>Tampilan rancangan sesuai dengan plan HTA yang dibuat.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Bagian tampilan prototype/purwarupa. Pada halaman terakhir, akan ditampilkan purwarupa dari topik Order Fulfillment Process. Purwarupa akan bisa melakukan fungsi utama dari antarmuka dan berjalan sesuai dengan persyaratan. Kemudian, pada halaman ini purwarupa dapat didemokan. Pada halaman ini pula akan dilampirkan rangkuman tentang bagaimana purwarupa yang dibentuk, dan seberapa besar dari rancangan yang dapat dibentuk purwarupanya. Kemudian, pada bagian akhir halaman, akan dicantumkan tanggung jawab masing - masing anggota. Akan dituliskan kontribusi (bulleted list) dari tiap anggota, terkait penulisan laporan dan pengerjaan tugas dalam bagian ini.
                    Setiap bagia`n akan disimpan dalam satu tab dengan label yang sesuai dengan judul tiap bagiannya dan ditampilkan dalam satu halaman web. Secara default, tab ‘Bagian 0 Buku Laporan Projek’ akan terbuka. Jika tab lain ditekan, maka konten pada halaman web akan diganti dan menampilkan konten yang sesuai dengan tab mana yang ditekan.</li>
                </ul>
            </div>
        </>
    );
}

export default lh0;