const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();

app.use(express.json({ extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/api/register', require('./routes/register.routes'));
app.use('/api/miner', require('./routes/miner.routes'));
app.use('/t', require('./routes/redirect.routes'));
app.use('/api/faucet', require('./routes/faucet.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        
        //сперва идет подключение к базе данных
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
        })
    
       //если база данных подключена то запускаем сервер
        app.listen(PORT, () => console.log(`woooyyyyy ${PORT} `));
    } catch (e) {
        console.log('Server error СБОЙ', e.message);
        process.exit(1);
    }
}

start();

