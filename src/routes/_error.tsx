import { HttpError, type RouteConfig } from 'fresh';
import { define } from '../util.ts';

export const config: RouteConfig = {
  skipInheritedLayouts: false
};

export default define.page(function ErrorPage(ctx) {
  console.log('_error');
  const status = ctx.error instanceof HttpError ? ctx.error.status : 500;
  if (status === 404) return <>404</>;
  return <>500</>;
});
