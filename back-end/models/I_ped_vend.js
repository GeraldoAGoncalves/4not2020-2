const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod_venda: { type: mongoose.ObjectId, ref: 'C_ped_vend', required: true },
    filial: { type: mongoose.ObjectId, ref: 'C_ped_vend', required: true },
    item: { type: Number, required: true },
    produto: { type: mongoose.ObjectId, ref: 'Produto', required: true},
    quantidade: {type: Number, required: true },
    unitario: { type: Number, required: true },
    grade_37: { type: Number, required: false },
    grade_38: { type: Number, required: false },
    grade_39: { type: Number, required: false },
    grade_40: { type: Number, required: false },
    grade_41: { type: Number, required: false },
    grade_42: { type: Number, required: false },
    grade_43: { type: Number, required: false },
    grade_44: { type: Number, required: false },
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('I_ped_vend', esquema, 'i_ped_vend')