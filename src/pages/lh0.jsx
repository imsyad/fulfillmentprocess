import React from 'react';
import { Heading, Text, Paragraph } from 'grommet';

const lh0 = () => {

    const text = `
    Laman web ini adalah halaman yang dibuat oleh Gemintang Sangkaji Furqon, Irsyad Muhammad, dan Muhammad Rafi Kamil. laman web ini merupakan bentuk laporan projek untuk pemenuhan tugas Mata Kuliah Perancangan Antarmuka Pengguna teori. Pada laman web ini akan dibagi menjadi 4 bagian, yaitu:
Bagian buku laporan projek. Halaman ini akan menampilkan informasi topik projek, deskripsi singkat, identitas anggota kelompok, serta tugas dan pembagian tugas pada proyek ini.
Bagian Analisis Permasalahan & Kebutuhan. Pada halaman ini akan dimuat permasalahan dan isu user maupun constraint yang terkait dengan permasalahan tersebut; user yang terlibat; task yang harus diselesaikan; fungsi utama yang harus dilakukan oleh sistem sesuai kebutuhan user. Secara rinci, pada halaman ini akan dimuat berbagai hal berikut:
Deskripsi ringkas karakteristik utama dari user pengguna sistem.
Task Yang harus diselesaikan.
Deskripsi karakter utama dari task yang diselesaikan oleh user.
Struktur analisis task menggunakan HTA (Hierarchy Task Analysis).
State yang menjadi tujuan yang ingin dicapai oleh user.
Tanggung jawab atau kontribusi anggota kelompok pada halaman ini. Tanggung jawab atau kontribusi anggota akan ditulis dalam poin-poin kontribusi baik dalam pengerjaan laporan maupun dalam penyelesaian bagian ini.
Bagian rancangan sistem. Pada halaman ini akan difokuskan kepada bagaimana rancangan interface/antarmuka sebagai solusi dari permasalahan. Halaman ini akan dilampirkan rancangan antarmuka yang dapat berbentuk mock-up, storyboards, atau sketsa rancangan dalam representasi gambar elektronik atau gambar manual. Secara spesifik, halaman ini akan memuat hal-hal berikut, yaitu:
Problem identification: berisi tentang permasalahan berdasarkan kebutuhan user yang belum terpenuhi dari sistem yang dianalisis.
Requirement summary: berisi ringkasan key requirements untuk sistem yang akan dibangun, yang terdiri atas:
User requirements;
System requirements untuk setiap user requirements.
Tipe dan struktur data sesuai dengan kebutuhan sistem dan subsistem. Pada bagian ini akan digambarkan menggunakan model data yang digambarkan menggunakan tool Entity Relation Diagram.
Struktur proses sesuai dengan kebutuhan sistem dan subsistem. Pada bagian ini akan digambarkan menggunakan tools utk untuk membuat model proses seperti sequence diagram atau activity diagram.
Terakhir terdapat rancangan tampilan yang terdiri dari:
Deskripsi desain yang menjelaskan secara detail rancangan yang dibangun, mulai dari penjelasan tampilan, skenario, alasan yang rasional atas rancangan yang dibangun.
Tampilan rancangan sesuai dengan plan HTA yang dibuat.
Bagian tampilan prototype/purwarupa. Pada halaman terakhir, akan ditampilkan purwarupa dari topik Order Fulfillment Process. Purwarupa akan bisa melakukan fungsi utama dari antarmuka dan berjalan sesuai dengan persyaratan. Kemudian, pada halaman ini purwarupa dapat didemokan.Pada halaman ini pula akan dilampirkan rangkuman tentang bagaimana purwarupa yang dibentuk, dan seberapa besar dari rancangan yang dapat dibentuk purwarupanya. Kemudian, pada bagian akhir halaman, akan dicantumkan tanggung jawab masing - masing anggota. Akan dituliskan kontribusi (bulleted list) dari tiap anggota, terkait penulisan laporan dan pengerjaan tugas dalam bagian ini
		Setiap bagian akan disimpan dalam satu tab dengan label sesuai dengan judul tiap bagiannya. Secara default, tab ‘Bagian 0 Buku Laporan Projek’ akan terbuka. Jika tab lain ditekan, maka konten pada halaman web akan diganti sesuai dengan tab mana yang ditekan.
    
    `
    return (
        <>
            <Heading>Deskripsi</Heading>
            <Text>{text}<br/><br/>dd</Text>
        </>
    );
}

export default lh0;