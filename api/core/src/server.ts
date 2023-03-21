import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes'

await AppDataSource.initialize();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('ok')
})

app.use(routes)

if (!module.parent) {
    app.listen(process.env.PORT);
    console.log('Express started on port 3000');
}
export default app;