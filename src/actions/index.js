export const GET_KODE_WILAYAH = 'GET_KODE_WILAYAH'
export const SELECT_DAERAH = 'SELECT_DAERAH'
export const SELECT_TINGKAT = 'SELECT_TINGKAT'
export const GET_SEKOLAH_LIST = 'GET_SEKOLAH_LIST'
export const SELECT_SEKOLAH = 'SELECT_SEKOLAH'
export function get_kode_wilayah(sekolahs) {
    return {
        type:GET_KODE_WILAYAH,
        sekolahs
    }
}


export function select_daerah(objectDaerah) {
    return {
        type:SELECT_DAERAH,
        objectDaerah
    }
}

export function select_tingkat(tingkat) {
    return {
        type:SELECT_TINGKAT,
        tingkat
    }
}

export function select_sekolah(selectedSekolah) {
    return {
        type:SELECT_SEKOLAH,
        selectedSekolah
    }
}