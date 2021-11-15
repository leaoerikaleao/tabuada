const express = require('express')
const router = express.Router()

const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)
router.get('/do/:num', tabuadaController.calc)
router.get('/jogar/:num', tabuadaController.play)

module.exports = router