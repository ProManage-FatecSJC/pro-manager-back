
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes'

AppDataSource.initialize();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('ok')
})

app.use(routes)

//DEPLOY
if (!module.parent) {
     app.listen(process.env.PORT);
     console.log('Express started on port 3000');
}

//TESTES LOCALHOST
//app.listen(process.env.PORT)
//console.log('Express started on port 3000')

export default app;