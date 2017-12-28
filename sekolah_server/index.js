const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/kodeWilayah', (req,res,next)=>{
    axios.get('http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet')
        .then((response)=>{res.send(response.data)}).catch((err)=>{
            console.error(err)
        })
})

app.get('/detailSekolah/:kode/:tingkat/',(req,res,next)=>{
    const detailSekolahURL = `http://jendela.data.kemdikbud.go.id/api/index.php/Csekolah/detailSekolahGET?mst_kode_wilayah=${req.params.kode}&bentuk=${req.params.tingkat}`
    axios.get(detailSekolahURL)
        .then((response)=>{res.send(response.data)}).catch((err)=>{
            console.error(err)
        })
})
app.listen(3001, () => console.log('listening on port 3001!'))