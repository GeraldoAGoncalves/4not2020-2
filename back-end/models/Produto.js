const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod_prod: {type: String, require: true },
    descricao: { type: String, required: true },
    tipo_produto: { type: mongoose.ObjectId, ref: 'Tipo_prod', required: true },
    unidade: { type: mongoose.ObjectId, ref: 'Tipo_prod', required: true }, 
    ativo: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Produto', esquema, 'produto')