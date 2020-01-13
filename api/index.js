const router = require('express').Router()

router.use('/home', require('./routes/home'))

router.use(function(req, res, next) {
  const err = new Error('Not found. Do better')
  err.status = 404
  next(err)
})

module.exports = router
