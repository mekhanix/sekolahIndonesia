import React, {Component} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            options:[]
        }
    }
    renderSekolah(){
        return(
            this.props.listSekolah.map(val => <option key={val.id} value={val.id}>{val.sekolah}</option> )
        )
    }



    render(){
        return(
            
            <div className="container search">
                <form className="form-inline">
                    {/* <select onChange={this.props.handleChangeKode} className="form-control">
                        {this.props.kode_wilayah.map(val=> <option key={val.kode_wilayah} value={val.kode_wilayah}>{val.nama}</option>)}
                    </select> */}
                    <AsyncTypeahead
                    labelKey="nama"
                    onSearch={this.props.handleSearch}
                    onChange={this.props.handleChange}
                    options = {this.props.kode_wilayah}
                    placeholder = "cari sekolah..."
                    maxResults={1000}
                    />
                    <select onChange={this.props.handleChangeTingkat} className="form-control">
                        <option value="sd">SD</option>
                        <option value="smp">SMP</option>
                        <option value="sma">SMA</option>
                    </select>

                    <select onChange={this.props.handleChangeSekolah} className="form-control">
                    {this.renderSekolah()}
                    </select>

                </form>
            </div>
        )
}
}
export default Search