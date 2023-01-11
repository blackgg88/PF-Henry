<<<<<<< HEAD
import { prop, getModelForClass, Ref } from '@typegoose/typegoose'

import objectRoles from '../helpers/objectRoles'

import { Role } from './Role'
=======
import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Role, RoleEnum } from "./Role";
>>>>>>> e11bc8c559ec7f44d7db542ffd46c47e4f54bd60

export class User {
  @prop({ type: String, required: true })
  userName: string

  @prop({ type: String, required: true }) //mongoose
  firstName: string //typescript

  @prop({ type: String, required: true })
  lastName: string

  @prop({ type: String, required: true, trim: true })
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
  @prop({
    type: [String],
    default: [objectRoles.user],
    validate: (val: string[]) =>
      val.every(val => Object.values(objectRoles).includes(val)),
  })
  roles: Array<string>
}

const UserModel = getModelForClass(User)
export default UserModel
