const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('hello from the back-end!')
})

module.exports = router
