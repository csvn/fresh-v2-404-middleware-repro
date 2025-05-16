import { define } from '../util.ts';
import type { RouteConfig } from 'fresh';

export const config: RouteConfig = {
  skipAppWrapper: false
};

export default define.page(({ Component }) => {
  console.log('_layout');
  return (
    <>
      layout/<Component />
    </>
  );
});
