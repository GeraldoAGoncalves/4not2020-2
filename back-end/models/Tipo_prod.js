const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod_tp_prod: {type: Number, require: true },
    descricao: { type: String, required: true },
    unidade: { type: mongoose.ObjectId, ref: 'Unidade', required: true },
    data: { type: Date, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Tipo_prod', esquema, 'tipo_prod')