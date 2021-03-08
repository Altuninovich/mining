const {Router} = require('express')
const Miner = require('../models/Miners')
const router = Router()


router.get('/', async (req, res) => {
  try {

    const ip = req.ip.split(":").pop()
    const timeStop = new Date
    const candidateMiner = await Miner.findOne({ip})
    const start = candidateMiner.timeLastRequest
    if (!start) {
      await candidateMiner.updateOne({timeLastRequest: new Date})
      return res.status(200).json({ message: 'Первый запрос', balance: candidateMiner.balance})
    }
    const timeInterval = timeStop - start
    const requiredTimeInterval = 600000
    let newBalance = 0
    if (timeInterval < requiredTimeInterval) {
      newBalance = candidateMiner.balance - 0.005
      const integer = Math.floor(newBalance * 1000) / 1000
      await candidateMiner.updateOne({balance: newBalance})
      return res.status(200).json({ message: 'Баланс обновлен', balance: integer})
    }
    newBalance = candidateMiner.balance + 1
    await candidateMiner.updateOne({balance: newBalance, timeLastRequest: new Date})
    return res.status(201).json({ message: 'Пользователь найден', balance: newBalance })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router