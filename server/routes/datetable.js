import express from 'express'
const app = express.Router()

const datetable = {
  _id: 1,
  fecha: '2018-09-09',
  hora: '10:00 pm',
  tch: 1,
}

const datetables = new Array(10).fill(datetable)

app.get('/', (req, res) => res.status(200).json(datetables))

app.get('/:id', (req, res) => res.status(200).json(datetables))

export default app
