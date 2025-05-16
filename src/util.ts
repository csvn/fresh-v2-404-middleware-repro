import { createDefine } from 'fresh';

export interface State {
  middleware?: string;
}

export const define = createDefine<State>();
