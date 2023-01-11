import { prop, getModelForClass } from "@typegoose/typegoose";

export enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
}

export class Role {
  @prop({ enum: RoleEnum, default: RoleEnum.USER })
  name: RoleEnum;
}

const RoleModel = getModelForClass(Role);
export default RoleModel;
