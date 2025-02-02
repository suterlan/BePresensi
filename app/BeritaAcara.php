<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BeritaAcara extends Model
{
    /**
     * Menandakan nama tabel yang
     * digunakan oleh model ini
     * 
     * @var string
     */
    protected $table = 'berita_acara';
    
    /**
     * Menandakan kolom apa yang
     * dijadikan primary key
     * 
     * @var string 
     */
    protected $primaryKey = 'kd_berita_acara';

    /**
     * Menandakan apakah kolom
     * primary key bersifat incremental
     * atau tidak
     * 
     * @var boolean
     */
    public $incrementing = false;

    /**
     * Menandakan apakah tabel
     * memiliki kolom timestamps
     * 
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Menandakan kolom apa saja
     * yang dapat diisi pada database
     * 
     * @var array
     */
    protected $fillable = [
        'kd_berita_acara',
        'kd_jadwal',
        'desk_perkuliahan',
        'desk_penugasan',
        'tgl_pertemuan',
        'mhs_hadir',
        'mhs_tidak_hadir',
        'jam_presensi_dibuka',
        'jam_presensi_ditutup'
    ];

    /**
     * Menandai bahwa tabel berita acara memiliki
     * foreign key relation one to one 
     * terhadap tabel jadwal
     */
    public function jadwal()
    {
        return $this->belongsTo('App\Jadwal','kd_jadwal');
    }
}
