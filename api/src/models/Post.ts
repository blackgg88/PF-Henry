import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { User } from './Users'
import { Comment } from './Comments'


export class Post {
@prop({ type: String, required: true })
title: string;

@prop({ type: String, required: true })
content: string;

@prop({ type: String, required: false})
image: string;

@prop({ type: String, required: false})
video: string;

@prop({ type: Boolean, required: false, default: false})
deleted: boolean;

@prop({ ref: "User", required: false })
author: Ref<User>

@prop({ ref: () => Comment })
comments: Ref<Comment>[]

@prop({ ref: "User", required: false})
likes: Ref<User>[]
}


const PostModel = getModelForClass(Post)
export default PostModel