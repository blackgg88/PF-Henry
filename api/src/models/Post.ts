import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { User } from './Users'
import { Comment } from './Comments'
import moment from 'moment';
import { CategoryEnum } from './Category';


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

@prop({ type: String, required: false})
likes: string[]

@prop({ type: Date, default: () => moment().toDate()})
  created: Date


@prop({type: String ,enum:CategoryEnum ,required:false})
category: string
}

const PostModel = getModelForClass(Post)
export default PostModel