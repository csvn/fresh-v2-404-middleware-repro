import { App, fsRoutes, staticFiles } from 'fresh';
import type { State } from './util.ts';

export const app = new App<State>({
  root: 'src',
  build: {
    outDir: '.fresh'
  }
});

app.use(staticFiles());

await fsRoutes(app, {
  loadIsland: (path) => import(`./islands/${path}`),
  loadRoute: (path) => import(`./routes/${path}`)
});

if (import.meta.main) {
  await app.listen();
}
