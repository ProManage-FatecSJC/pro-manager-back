import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';
import { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';
import { PromiseResolver } from '@h4ad/serverless-adapter/lib/resolvers/promise';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';
import express from 'express';
import { AppDataSource } from './data-source';
import  routes  from './routes'

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());
    
    app.get('/', (req, res) => {
        return res.json('ok')
    })

    app.use(routes)

    const handler = ServerlessAdapter.new(app)
  .setFramework(new ExpressFramework())
  .setHandler(new DefaultHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new ApiGatewayV2Adapter())
  .build();

    return app.listen(process.env.PORT);

})