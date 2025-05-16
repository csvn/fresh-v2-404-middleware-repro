import { define } from '../util.ts';

export default define.page(() => {
  console.log('err');
  throw new Error('To 500');
});
