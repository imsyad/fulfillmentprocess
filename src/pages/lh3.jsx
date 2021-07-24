import React from 'react';
import {Heading, Table, TableHeader, TableCell, TableRow, TableBody} from 'grommet';

const figma = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAw1qqPSM6ijIeDltPed4IY%2FProyek-UID-Teori%3Fnode-id%3D8%253A2%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D8%253A2" allowfullscreen></iframe>'

const lh3 = () =>{
    return(
        <>
            <Heading>Prototype</Heading>
            <div dangerouslySetInnerHTML ={{__html:figma}}></div>
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
                                <li>Semua mockup pada figma</li>
                            </ul>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell border>2</TableCell>
                        <TableCell border>Irsyad Muhammad</TableCell>
                        <TableCell border>
                            <ul>
                                <li>Memperbaiki tampilan mockup</li>
                                <ul>
                                    <li>Halaman untuk kurir</li>
                                    <li>Halaman pembayaran</li>
                                </ul>
                            </ul>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell border>3</TableCell>
                        <TableCell border>Muhammad Rafi Kamil</TableCell>
                        <TableCell border>
                            <ul>
                                <li>Membuat halaman untuk kurir</li>
                                
                                <li>Membuat flow prototype agar prototype dapat di<i>play</i></li>
                                
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default lh3;