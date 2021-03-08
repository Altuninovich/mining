const {Router} = require('express')
const crypto = require('crypto')
const router = Router()
const Miner = require('../models/Miners')




// /api/auth/register
router.post(
  '/register',
  async (req, res) => {
  try {
    const ip = req.ip.split(":").pop()
    const candidateMiner = await Miner.findOne({ip})
    if (candidateMiner) {
      return res.status(201).json({ message: 'Пользователь найден', candidateMiner })
    }
    const uniqueKey = crypto.randomBytes(64)
    const miner = new Miner({key: uniqueKey.toString('hex'), ip})
    await miner.save()
    res.status(201).json({ message: 'Пользователь создан' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router






