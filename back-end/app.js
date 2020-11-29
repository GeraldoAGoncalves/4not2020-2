var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.bfcxt.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const cliente = require('./routes/cliente')
app.use('/cliente', cliente)

const representante = require('./routes/representante')
app.use('/representante', representante)

const filial = require('./routes/filial')
app.use('/filial', filial)

const c_ped_vend = require('./routes/c_ped_vend')
app.use('/c_ped_vend', c_ped_vend)

const i_ped_vend = require('./routes/i_ped_vend')
app.use('/i_ped_vend', i_ped_vend)

const tipo_prod = require('./routes/tipo_prod')
app.use('/tipo_prod', tipo_prod)

const produto = require('./routes/produto')
app.use('/produto', produto)

const unidade = require('./routes/unidade')
app.use('/unidade', unidade)

module.exports = app;
