const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hackaton11', 'root', '12demetrio34', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;