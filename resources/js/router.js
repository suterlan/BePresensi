import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Beacon from './views/Beacon.vue'
import Dosen from './views/Dosen.vue'
import JadwalMatakuliah from './views/JadwalMatakuliah.vue'
import Kelas from './views/Kelas.vue'
import Mahasiswa from './views/Mahasiswa.vue'
import Matakuliah from './views/Matakuliah.vue'
import Presensi from './views/Presensi.vue'
import Rekapitulasi from './views/Rekapitulasi.vue'
import Ruang from './views/Ruang.vue'
import Sesi from './views/Sesi.vue'
import StaffTataUsaha from './views/StaffTataUsaha.vue'
import SuratIzin from './views/SuratIzin.vue'
import User from './views/User.vue'
import TambahMahasiswa from './views/TambahMahasiswa.vue'
import TambahBeacon from './views/TambahBeacon.vue'
import TambahDosen from './views/TambahDosen.vue'
import TambahJadwal from './views/TambahJadwal.vue'
import TambahKelas from './views/TambahKelas.vue'
import TambahMatakuliah from './views/TambahMatakuliah.vue'
import TambahUser from './views/TambahUser.vue'
import TambahSesi from './views/TambahSesi.vue'
import TambahStaffTU from './views/TambahStaffTU.vue'
import TambahSuratIzin from './views/TambahSuratIzin.vue'
import TambahRuang from './views/TambahRuang.vue'
import EditMatakuliah from './views/EditMatakuliah.vue'
import EditMahasiswa from './views/EditMahasiswa.vue'
import EditDosen from './views/EditDosen.vue'
import EditStaffTU from './views/EditStaffTU.vue'
import EditBeacon from './views/EditBeacon.vue'
import EditKelas from './views/EditKelas.vue'
import EditSesi from './views/EditSesi.vue'
import EditSuratIzin from './views/EditSuratIzin.vue'
import EditJadwal from './views/EditJadwal.vue'
import EditRuang from './views/EditRuang.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home},
        { path: '/beacon', name: 'beacon', component: Beacon},
        { path: '/dosen', name: 'dosen', component: Dosen},
        { path: '/jadwal-matakuliah', name: 'jadwal-matakuliah', component: JadwalMatakuliah},
        { path: '/kelas', name: 'kelas', component: Kelas},
        { path: '/mahasiswa', name: 'mahasiswa', component: Mahasiswa},
        { path: '/matakuliah', name: 'matakuliah', component: Matakuliah},
        { path: '/presensi', name: 'presensi', component: Presensi},
        { path: '/rekapitulasi', name: 'rekapitulasi', component: Rekapitulasi},
        { path: '/ruang', name: 'ruang', component: Ruang},
        { path: '/sesi', name: 'sesi', component: Sesi},
        { path: '/staff-tata-usaha', name: 'staff-tata-usaha', component: StaffTataUsaha},
        { path: '/surat-izin', name: 'surat-izin', component: SuratIzin},
        { path: '/user', name: 'user', component: User},
        { path: '/tambah-mahasiswa', name: 'tambah-mahasiswa', component: TambahMahasiswa},
        { path: '/tambah-beacon', name: 'tambah-beacon', component: TambahBeacon},
        { path: '/tambah-dosen', name: 'tambah-dosen', component: TambahDosen},
        { path: '/tambah-jadwal', name: 'tambah-jadwal', component: TambahJadwal},
        { path: '/tambah-kelas', name: 'tambah-kelas', component: TambahKelas},
        { path: '/tambah-matakuliah', name: 'tambah-matakuliah', component: TambahMatakuliah},
        { path: '/tambah-user', name: 'tambah-user', component: TambahUser},
        { path: '/tambah-sesi', name: 'tambah-sesi', component: TambahSesi},
        { path: '/tambah-stafftu', name: 'tambah-stafftu', component: TambahStaffTU},
        { path: '/tambah-surat-izin', name: 'tambah-surat-izin', component: TambahSuratIzin},
        { path: '/tambah-ruang', name: 'tambah-ruang', component: TambahRuang},
        { path: '/edit-matakuliah/:kd_matakuliah/edit', name: 'edit-matakuliah', component: EditMatakuliah},
        { path: '/edit-mahasiswa/:nim/edit', name: 'edit-mahasiswa', component: EditMahasiswa},
        { path: '/edit-dosen/:kd_dosen/edit', name: 'edit-dosen', component: EditDosen},
        { path: '/edit-staff-tu/:kd_staff/edit', name: 'edit-staff-tu', component: EditStaffTU},
        { path: '/edit-beacon/:kd_beacon/edit', name: 'edit-beacon', component: EditBeacon},
        { path: '/edit-kelas/:kd_kelas/edit', name: 'edit-kelas', component: EditKelas},
        { path: '/edit-sesi/:kd_sesi/edit', name: 'edit-sesi', component: EditSesi},
        { path: '/edit-surat-izin/:kd_surat_izin/edit', name: 'edit-surat-izin', component: EditSuratIzin},
        { path: '/edit-jadwal/:kd_jadwal/edit', name: 'edit-jadwal', component: EditJadwal},
        { path: '/edit-ruang/:kd_ruang/edit', name: 'edit-ruang', component: EditRuang},
    ]
})

export default router
