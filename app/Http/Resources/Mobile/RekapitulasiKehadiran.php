<?php

namespace App\Http\Resources\Mobile;

use Illuminate\Http\Resources\Json\JsonResource;

class RekapitulasiKehadiran extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'mahasiswa' => $this->mahasiswa,
            'sakit' => $this->sakit,
            'izin' => $this->izin,
            'alfa' => $this->alfa,
            'status' => $this->statusRekapitulasi
        ];
    }
}