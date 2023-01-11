import { prop, getModelForClass } from '@typegoose/typegoose'
import objectRoles from '../helpers/objectRoles'

export class Role {
  @prop({
    required: true,
    type: [String],
    enum: objectRoles,
  })
  name: Array<string>
}

const RoleModel = getModelForClass(Role)
export default RoleModel
