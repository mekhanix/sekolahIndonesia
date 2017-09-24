import React, {Component} from 'react';

class Hasil extends Component {

    render(){
        if (!this.props.selected_sekolah) {
            return (
                <div>loading...</div>
            )
        }
        return(
        <div className="container hasil well well-lg">
            <h3>{this.props.selected_sekolah.sekolah}</h3>
            
            <h4>Alamat : {this.props.selected_sekolah.alamat_jalan}</h4>
            <h4>Provinsi : {this.props.selected_sekolah.propinsi}</h4>
            <h4>Kabupaten Kota : {this.props.selected_sekolah.kabupaten_kota}</h4>
            <h4>Kecamatan: {this.props.selected_sekolah.kecamatan}</h4>
        </div>
        )
    }
}
export default Hasil