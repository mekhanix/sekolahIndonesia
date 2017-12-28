import React from 'react'
import GMap from './google_map'

const Hasil = (props)=>{
    if (!props.selectedSekolah) {
        return (
            <div>
                
            </div>
        )
    }
    return (
        <div>
            <div className="container">
                <h3>{props.selectedSekolah.sekolah}</h3>
            
                <h4>Alamat : {props.selectedSekolah.alamat_jalan}</h4>
                <h4>Provinsi : {props.selectedSekolah.propinsi}</h4>
                <h4>Kabupaten Kota : {props.selectedSekolah.kabupaten_kota}</h4>
                <h4>Kecamatan: {props.selectedSekolah.kecamatan}</h4>
                <GMap lat={props.selectedSekolah.lintang} lng={props.selectedSekolah.bujur}/>
            </div>
        </div>
    )
}

export default Hasil