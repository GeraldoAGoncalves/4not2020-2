const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod_venda: {type: Number, require: true },
    filial: { type: mongoose.ObjectId, ref: 'Filial', required: true },
    cliente: { type: mongoose.ObjectId, ref: 'Cliente', required: true  },
    representante: { type: mongoose.ObjectId, ref: 'Representante', required: true },
    emissao: { type: Date, required: true },
    data_de_entrega: { type: Date, required: true },
})
/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('C_ped_vend', esquema, 'c_ped_vend')