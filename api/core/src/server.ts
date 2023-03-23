
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes'
import cors from 'cors';

AppDataSource.initialize();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json('ok')
})

app.use(routes)

if (!module.parent) {
    app.listen(process.env.PORT);
    console.log('Express started on port 3000');
}
export default app;