const {Router} = require('express')
//const Link = require('../models/Link')
const Miner = require('../models/Miners')
//const crypto = require('crypto')
const router = Router()


router.get('/', async (req, res) => {
  try {

    const ip = req.ip.split(":").pop()
    //const {start} = req.body
    //console.log(start)
   
    const timeStop = new Date
    const candidateMiner = await Miner.findOne({ip})
    //const userCreationDate = candidateMiner.date
    const start = candidateMiner.timeLastRequest
    if (!start) {
      await candidateMiner.updateOne({timeLastRequest: new Date})
      return res.status(200).json({ message: 'Первый запрос', balance: candidateMiner.balance})
    }
    const timeInterval = timeStop - start
    //const isFirstRequest =   //если пользователь первый раз отправляет запрос на /faucet
    const requiredTimeInterval = 600000
    let newBalance = 0
    //if (candidateMiner.date )
    if (timeInterval < requiredTimeInterval) {
      newBalance = candidateMiner.balance - 0.005
      const integer = Math.floor(newBalance * 1000) / 1000
      await candidateMiner.updateOne({balance: newBalance})
      return res.status(200).json({ message: 'Баланс обновлен', balance: integer})
    }
    //const candidateMiner = await Miner.findOne({ip})
    newBalance = candidateMiner.balance + 1
    await candidateMiner.updateOne({balance: newBalance, timeLastRequest: new Date})
    return res.status(201).json({ message: 'Пользователь найден', balance: newBalance })

    //if (candidateMiner) {
      //return res.status(201).json({ message: 'Пользователь найден', balance: stop - start })
   // }
    
    //await miner.save()
    //return res.status(201).json({ message: 'Пользователь создан', key: uniqueKey })
    

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
/////////////////


module.exports = router