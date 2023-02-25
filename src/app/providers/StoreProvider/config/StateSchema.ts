import { type CounterSchema } from '../../../../entities/counter';
import { type UserSchema } from '../../../../entities/user';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
