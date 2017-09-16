import React, {Component} from 'react';
class Search extends Component {
    renderSekolah(){
        return(
            this.props.listSekolah.map(val => <option key={val.id} value={val.id}>{val.sekolah}</option> )
        )
    }

    render(){
        return(
            <div>
                <form>

                    <select onChange={this.props.handleChangeKode}>
                        {this.props.kode_wilayah.map(val=> <option key={val.kode_wilayah} value={val.kode_wilayah}>{val.nama}</option>)}
                    </select>

                    <select onChange={this.props.handleChangeTingkat}>
                        <option value="sd">SD</option>
                        <option value="smp">SMP</option>
                        <option value="sma">SMA</option>
                    </select>

                    <select onChange={this.props.handleChangeSekolah}>
                    {this.renderSekolah()}
                    </select>

                </form>
            </div>
        )
}
}
export default Search