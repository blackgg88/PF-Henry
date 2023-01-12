import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Role, RoleEnum } from './Role'

export class User {
  @prop({ type: String, required: true, unique: true })
  userName: string

  @prop({ type: String, required: true }) //mongoose
  firstName: string //typescript

  @prop({ type: String, required: true })
  lastName: string

  @prop({ type: String, required: true, trim: true, unique: true })
  email: string

  @prop({ type: String, required: true, minlength: 8 })
  password: string

  @prop({ type: String })
  address: string

  @prop({ type: Number, default: 0 })
  phoneNumber: number

  @prop({ type: String, trim: true })
  avatar: string

  @prop({ type: Number })
  pc: number

  //asignacion de rol al usuario ref hace referencia a la tabla roles donde hay 3 roles

  @prop({ ref: () => Role, default: RoleEnum.USER, type: String })
  role: Ref<Role>
}

const UserModel = getModelForClass(User)
export default UserModel