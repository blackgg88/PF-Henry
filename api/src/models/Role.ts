import { prop, getModelForClass } from '@typegoose/typegoose'

export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export class Role {
  @prop({
    required: true,
    type: String,
    enum: RoleEnum,
  })
  name: string
}

const RoleModel = getModelForClass(Role)
export default RoleModel
