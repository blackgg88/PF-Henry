import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Role, RoleEnum } from './Role';
import { Post } from './Post';
import { Comment } from './Comments';
import { Product } from './Product';
import { boolean } from 'webidl-conversions';

export class User {
  @prop({ type: String })
  username: string;

  @prop({ type: String }) //mongoose
  firstName: string; //typescript

  @prop({ type: String })
  lastName: string;

  @prop({ type: String })
  address: string;

  @prop({ type: String, required: true, trim: true, unique: true })
  email: string;

  @prop({ type: String, minlength: 8 })
  password: string;

  @prop({ type: String, trim: true })
  picture: string;

  @prop({ type: Boolean, default: true })
  isActive: boolean;

  @prop({ type: Boolean })
  email_verified: boolean;

  @prop({ ref: () => Post })
  posts: Ref<Post>[];

  @prop({ ref: () => Comment })
  comments: Ref<Comment>[];

  //asignacion de rol al usuario ref hace referencia a la tabla roles donde hay 3 roles

  @prop({ ref: () => Role, default: RoleEnum.USER, type: String })
  role: Ref<Role>;

  @prop({ ref: () => Product })
  favorites: Ref<Product>[];
}

const UserModel = getModelForClass(User);
export default UserModel;
