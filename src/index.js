import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './Component/Search';
import axios from 'axios';
import Hasil from './Component/Hasil';
import _ from 'lodash';
class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            kode_wilayah : [],
            selected_kode : '010100 ',
            selected_tingkat : 'sd',
            sekolah_list : [],
            selected_sekolah:''
        }
    }

    fetchListSekolah(){
        const detailSekolah = `http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah=${this.state.selected_kode}&bentuk=${this.state.selected_tingkat}`
        axios.get(detailSekolah).then((resp)=>{
            this.setState({
                sekolah_list:resp.data.data,
                selected_sekolah : resp.data.data[0]
            })
            // console.log(resp.data.data)
        })
    }

    componentDidMount(){
        const wilayahKab = 'http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet';
        axios.get(wilayahKab).then((resp) => {
            this.setState({
                kode_wilayah: resp.data.data,
            }, ()=>{this.fetchListSekolah()})
        })
    }


    handleChangeKode(e){
        e.preventDefault()
        this.setState({
            selected_kode:e.target.value
        }, ()=>{this.fetchListSekolah()})
    }

    handleChangeTingkat(e){
        e.preventDefault()
        this.setState({
            selected_tingkat:e.target.value,
        }, ()=>{this.fetchListSekolah()})
    }

    handleChangeSekolah(e){
        const indeks = _.findIndex(this.state.sekolah_list, {id: e.target.value})
        e.preventDefault()
        this.setState({
            selected_sekolah : this.state.sekolah_list[indeks] //e.target.value
        })
    }

    handleSearch(){
        axios.get('http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet')
        .then((resp)=>{
            this.setState({kode_wilayah: resp.data.data})
        })
    }

    render(){
        return(
            <div>
            <Search 
            kode_wilayah={this.state.kode_wilayah} 
            handleChangeKode={this.handleChangeKode.bind(this)}
            handleChangeTingkat={this.handleChangeTingkat.bind(this)}
            listSekolah={this.state.sekolah_list}
            fetchListSekolah = {this.fetchListSekolah.bind(this)}
            handleChangeSekolah = {this.handleChangeSekolah.bind(this)}
            handleSearch = {this.handleSearch.bind(this)}
             />
             <Hasil selected_sekolah={this.state.selected_sekolah} />
            </div>
        )
    }
}

ReactDOM.render(<Index/>, window.document.getElementById('root'))

// callbackfunction setelah this.setState supaya data tidak selisih