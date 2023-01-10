import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Role } from "./Role";

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

  @prop({ type: String, required: true })
  address: string;

  @prop({ type: Number, default: 0 })
  phoneNumber: number;

  @prop({ type: String, required: true, trim: true })
  avatar: string;

  @prop({ type: Number })
  pc: number;

  @prop({ ref: () => Role })
  roles: Ref<Role>[];
}

const UserModel = getModelForClass(User);
export default UserModel;
