const express = require('express')
const router = express.Router()

const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)
router.get('/do/:num', tabuadaController.calc)

module.exports = router