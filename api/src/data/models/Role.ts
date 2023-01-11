import { prop, getModelForClass } from '@typegoose/typegoose'
import objectRoles from '../helpers/objectRoles'

export enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
}

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
