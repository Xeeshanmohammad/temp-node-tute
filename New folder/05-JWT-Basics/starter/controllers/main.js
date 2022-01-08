const BadRequestError = require('../errors')

const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new BadRequestError('Please provide Email and Password', 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user create', token })
}

const dashboard = async (req, res) => {
    // console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100)
    // console.log(req.headers)
    res.status(200).json({
        msg: `Hello!, ${req.user.username}`, secret: `Here is your authorized data, your
  luckynumber is ${luckyNumber}`
    })
}

module.exports = {
    login, dashboard
}