const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cnpj: { type: String, required: true, index: { unique: true} }, // Índice único: impede a duplicidade de CNPJs no cadastro
    razao: { type: String, required: true },
    fantasia: { type: String, required: true },
    endereco: { type: String, required: true },
    cidade: { type: String, require: true },
    email: { type: String, required: true, index: { unique: true} },
    telefone: { type: String, required: true }, // Índice único: impede a duplicidade de emails no cadastro   
    ativo: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Filial', esquema, 'filial')