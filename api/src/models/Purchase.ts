import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { User } from './Users'
import { Product } from './Product'

class Purchase {
  @prop({ ref: () => User })
  userName: Ref<User>[]

  @prop({ ref: () => Product })
  name: Ref<Product>[]
}

const RoleModel = getModelForClass(Purchase)
export default RoleModel
