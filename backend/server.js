import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')
});

//create port
const PORT = 5000;
const NODE_ENV = 'development';

app.listen(PORT, console.log(`server running in ${NODE_ENV} port ${PORT}`));