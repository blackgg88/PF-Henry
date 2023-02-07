import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

export const putBannerUser = async (req: Request, res: Response)=> {
    try {
        const {banner, email} = req.body
        
        const user = await UserModel.findOne({ email: email })

        if (user) {
            user.banner = banner
            user.save()
           return res.status(200).json(`${user.username} has change his/her banner picture`)
        } else {
            return res.status(404).json('user not found')
        }
    } catch (error: any) {
        res.status(400).json({err: error.message})
    }
}