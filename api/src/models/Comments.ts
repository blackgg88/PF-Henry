import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Post } from './Post'
import { User } from './Users'


export class Comment {
  @prop({ required: true })
  content: string

  @prop({ type: Boolean, required: false, default: false})
  deleted: boolean;

  @prop({ ref: "Post", required: true })
  post: Ref<Post>

  @prop({ ref: "User", required: true })
  author: Ref<User>

  @prop({ ref: "User", required: false})
  likes: Ref<User>[]

}

const CommentModel = getModelForClass(Comment)
export default CommentModel
