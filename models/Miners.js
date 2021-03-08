const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  key: {type: String, required: true},
  date: {type: Date, default: Date.now},
  ip: {type: String, required: true},
  balance: {type: Number, default: 1},
  timeLastRequest: {type: Date, default: null}
})

module.exports = model('Miner', schema)