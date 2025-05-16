import { define } from '../util.ts';

export const handler = define.middleware((ctx) => {
  ctx.state.middleware = 'middleware';
  return ctx.next();
});
