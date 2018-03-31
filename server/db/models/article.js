const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT
  },
  author: {
    type: Sequelize.STRING
  }
})

module.exports = Article
