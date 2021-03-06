const { param } = require("../routes")

const list = (req, res) => {
    res.render('tabuada/list')
}

const calc = (req, res) => {
    res.render('tabuada/show', {
        num: req.params.num
    })
}

const play = (req, res) => {
    res.render('tabuada/play', {
        num: req.params.num
    })
}


module.exports = {
    list, calc, play
}