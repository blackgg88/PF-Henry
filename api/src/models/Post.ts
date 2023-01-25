import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { User } from './Users'
import { Comment } from './Comments'


export class Post {
@prop({ required: true })
title: string

@prop({ required: true })
content: string

@prop({required: false})
image: string

@prop({required: false})
video: string

@prop({ ref: "User", required: false })
author: Ref<User>

// @prop({ type: [Comment], ref: "Comment" })
// comments: Array<Ref<Comment>>
@prop({ ref: () => Comment })
comments: Ref<Comment>
}

const PostModel = getModelForClass(Post)
export default PostModel