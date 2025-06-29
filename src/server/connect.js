import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import Report from './schema.js'
import addReport from './addReport.js'

const app = express()
const port = 3000

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

app.get('/report', (req, res) => {
  res.send('Reporte enviado con exito')
})

app.post('/report', (req, res) => {
  const report = new Report({
    author: "Usuario de prueba",
    ubication: "Lima, Peru",
    updatedAt: new Date()
  })

  report.save().then(() => {
    return res.send(report)
  }).catch(err => res.send(console.log(err)))
})

addReport()

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`)
})