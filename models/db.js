const Sequelize = require('sequelize');

const sequelize = new Sequelize("teste", "root","123456", {
    host:'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Sucesso")
}).catch(function(){
    console.log("Erro")
})

module.exports = sequelize;