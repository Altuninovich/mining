const {Router} = require('express')
//const Link = require('../models/Link')
const Miner = require('../models/Miners')
const crypto = require('crypto')
const router = Router()


router.get('/', async (req, res) => {
  try {

    const ip = req.ip.split(":").pop()
    const candidateMiner = await Miner.findOne({ip})
    if (candidateMiner) {
      return res.status(201).json({ message: 'Пользователь найден', key: null })
    }
    const uniqueKey = crypto.randomBytes(64)
    const miner = new Miner({key: uniqueKey.toString('hex'), ip})
    await miner.save()
    return res.status(201).json({ message: 'Пользователь создан', key: uniqueKey.toString('hex') })
    

    /*
    const link = await Link.findOne({ code: req.params.code })

    if (link) {
      link.clicks++
      await link.save()
      return res.redirect(link.from)
    }

    res.status(404).json('Ссылка не найдена')
    */

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/', async (req, res) => {
    try {
  
      const ip = req.ip.split(":").pop()
      const candidateMiner = await Miner.findOne({key: req.body.text})
      const candidateMinerIp = await Miner.findOne({ip})
      if (candidateMiner && ip === candidateMiner.ip) {
        return res.status(200).json({ message: 'Пользователь найден', success: true })
      }
      
      return res.status(404).json({ message: 'Неверный ключ, попробуйте снова' })
      
  
      /*
      const link = await Link.findOne({ code: req.params.code })
  
      if (link) {
        link.clicks++
        await link.save()
        return res.redirect(link.from)
      }
  
      res.status(404).json('Ссылка не найдена')
      */
  
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router