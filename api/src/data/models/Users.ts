import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Role } from "./Role";

export class User {
  @prop({ required: true }) //mongoose
  firstname: string; //typescript

  @prop({ required: true })
  lastname: string;

  @prop({ required: true, trim: true })
  email: string;

  @prop({ required: true, minlength: 8 })
  password: string;

  @prop()
  age: number;

  @prop({ ref: () => Role })
  roles: Ref<Role>[];
}

const UserModel = getModelForClass(User);
export default UserModel;
