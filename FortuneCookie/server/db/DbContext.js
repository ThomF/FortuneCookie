import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { FortuneSchema } from '../models/Fortune';


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Fortunes = mongoose.model('Fortune', FortuneSchema)

}

export const dbContext = new DbContext()
