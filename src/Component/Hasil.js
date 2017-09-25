import React, {Component} from 'react';
import GMap from './google_map';
class Hasil extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 5
      };
    render(){
        if (!this.props.selected_sekolah) {
            return (
                <div>loading...</div>
            )
        }
        return(
        <div className="container">
            <h3>{this.props.selected_sekolah.sekolah}</h3>
            
            <h4>Alamat : {this.props.selected_sekolah.alamat_jalan}</h4>
            <h4>Provinsi : {this.props.selected_sekolah.propinsi}</h4>
            <h4>Kabupaten Kota : {this.props.selected_sekolah.kabupaten_kota}</h4>
            <h4>Kecamatan: {this.props.selected_sekolah.kecamatan}</h4>
            <GMap lat={this.props.selected_sekolah.lintang} lng={this.props.selected_sekolah.bujur}/>
        </div>
        )
    }
}
export default Hasil