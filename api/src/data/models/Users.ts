import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Role, RoleEnum } from "./Role";

export class User {
  @prop({ type: String, required: true })
  userName: string;

  @prop({ type: String, required: true }) //mongoose
  firstName: string; //typescript

  @prop({ type: String, required: true })
  lastName: string;

  @prop({ type: String, required: true, trim: true })
  email: string;

  @prop({ type: String, required: true, minlength: 8 })
  password: string;

  @prop({ type: String })
  address: string;

  @prop({ type: Number, default: 0 })
  phoneNumber: number;

  @prop({ type: String, trim: true })
  avatar: string;

  @prop({ type: Number })
  pc: number;

 //ambas utilizan el tipo "RoleEnum" como tipo de propiedad y su valor por defecto es el mismo.

  @prop({ ref: Role, default: RoleEnum.USER })
  role: Ref<Role>;
}

const UserModel = getModelForClass(User);
export default UserModel;

/////////////////////

