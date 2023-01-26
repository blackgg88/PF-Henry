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

@prop({ ref: () => Comment })
comments: Ref<Comment>[]

@prop({ ref: "User", required: false})
likes: Ref<User>[]
}


const PostModel = getModelForClass(Post)
export default PostModel