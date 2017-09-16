import React, {Component} from 'react';

class Hasil extends Component {

    render(){
        return(
        <div>
            <h3>{this.props.selected_sekolah.sekolah}</h3>
            
            {this.props.selected_sekolah.alamat_jalan}
        </div>
        )
    }
}
export default Hasil