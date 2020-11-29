const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    unidade: {type: String, require: true },
    descricao: { type: String, required: true },
    casas_decimais: { type: Number, required: true },
    data: { type: Date, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Unidade', esquema, 'unidade')