const router = require('express').Router()
const {Article} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  console.log('made it to the back')
  Article.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!

  })
    .then((articles) => {
      console.log(articles)
      return res.json(articles)
    })
    .catch(next)
})
