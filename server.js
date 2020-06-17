import { Server, FlatFile } from 'boardgame.io/server';
import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import { TicTacToe } from './src/Pages/Games/TicTacToe/TicTacToe';

const PORT = process.env.PORT || 8080;
// const lobbyConfig = {
//   apiPort: PORT,
//   apiCallback: () => true,
// };
const app = new Koa();
const router = new Router();
const server = Server({ 
  games: [TicTacToe],
  db: new FlatFile({
    dir: 'storage',
    logging: false,
  }),
});

// router.get('/api/games', (ctx, next) => {
//   ctx.body = server.games;
// });

// router.get('/api/games/create/:id'), (ctx, next) => {
  
// }

const frontEndAppBuildPath = path.resolve(__dirname, './build');
server.app
  .use(serve(frontEndAppBuildPath))
  // .use(router.routes());

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) => await serve(frontEndAppBuildPath)(
      Object.assign(ctx, { path: 'index.html' }),
      next
    )
  );
});


