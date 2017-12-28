import React, {Component} from 'react'
import Hasil from '../Component/Hasil'
import axios from 'axios'
import {connect} from 'react-redux'
import {GET_KODE_WILAYAH, GET_SEKOLAH_LIST, select_daerah, select_tingkat, select_sekolah} from '../actions/index'
import { Typeahead } from 'react-bootstrap-typeahead'
import '../styles/index.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            kodeIsLoaded : false,
            sekolahIsLoaded: false
        }
    }
    
    componentDidMount() {
        this.props.fetch_kode_wilayah(this.setState({
            kodeIsLoaded:true
        }))
    }


    handleChangeTingkat(e) {
        e.preventDefault()
        this.props.select_tingkat(e.target.value)
        if (this.refs.typeaheadSekolah) { 
            this.refs.typeaheadSekolah.getInstance().clear()
            this.setState({
                sekolahIsLoaded:false
            })
        }
        if (this.props.kode.selected_daerah !== undefined) {
            this.props.fetch_sekolah(this.props.kode.selected_daerah.kode_wilayah,
                e.target.value, ()=>{this.setState({sekolahIsLoaded:true})}
            )
        }
    }

    render(){
        if (this.state.kodeIsLoaded && this.props.kode.wilayah !== undefined) {
            return (
                <div className="container">
                    <form className="form" id="form">
                        <Typeahead  
                            {...this.props.kode.wilayah}
                            options={this.props.kode.wilayah}
                            labelKey={'nama'}
                            onChange={(selected)=>{
                                if (this.refs.typeaheadSekolah) { 
                                    this.refs.typeaheadSekolah.getInstance().clear()
                                    this.setState({
                                        sekolahIsLoaded:false
                                    })
                                }
                                this.props.select_daerah(selected[0])
                                if (selected[0]) {
                                    this.props.fetch_sekolah(selected[0].kode_wilayah, this.props.kode.tingkat,
                                        ()=>{this.setState({sekolahIsLoaded:true})}
                                    )
                                }
                            }}
                            placeholder="cari daerah..."
                        />

                        <div>
                            <select onChange={this.handleChangeTingkat.bind(this)} className="form-control">
                                <option value="sd">SD</option>
                                <option value="smp">SMP</option>
                                <option value="sma">SMA</option>
                            </select>
                        </div>
                        
                        {this.props.sekolah.data !== undefined && this.state.sekolahIsLoaded?
                            <Typeahead 
                                ref={'typeaheadSekolah'}
                                {...this.props.sekolah.data}
                                options={this.props.sekolah.data}
                                labelKey={'sekolah'}
                                onChange={(selected)=>{
                                    this.props.select_sekolah(selected[0])
                                }}
                                placeholder="cari sekolah..."
                            />
                            :<div><input type="text" placeholder="pilih daerah dan tingkat..." className="form-control" disabled></input></div>}

                    </form>
                    <div className="container" id="hasil">
                        <Hasil  selectedSekolah={this.props.sekolah.selectedSekolah}/>
                    </div>
                </div>
            )
        }
        return(
            <div className="container" id="loader" style={{align:'center'}}></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kode : state.kode_sekolah_reducer,
        sekolah :state.detail_sekolah_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch_kode_wilayah : (cb)=>{
            axios.get('http://localhost:3001/kodeWilayah').then((results)=>{
                dispatch({
                    type:GET_KODE_WILAYAH,
                    wilayah:results.data
                })
            })
                .then(cb)
                .catch((err)=>{
                    throw err
                })
        },
        select_daerah : (objectSekolah) => {
            dispatch(select_daerah(objectSekolah))
        },
        select_tingkat : (tingkat) => {
            dispatch(select_tingkat(tingkat))
        },
        fetch_sekolah : (kodeWilayah,tingkat, cb) => {
            if (kodeWilayah !== '' && tingkat !== '') {
                axios.get(`http://localhost:3001/detailSekolah/${kodeWilayah}/${tingkat}/`)
                    .then((results)=>{
                        dispatch({
                            type:GET_SEKOLAH_LIST,
                            results: results.data

                        })
                        return results.data
                    })
                    .then((res)=>{
                        if (res.data.length > 0) {
                            cb()
                        }
                    })
                    .catch((err)=>{
                        throw err
                    })                
            }

        },
        select_sekolah : (selectedSekolah)=>{
            dispatch(select_sekolah(selectedSekolah))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)