import { prop, getModelForClass } from '@typegoose/typegoose'

export enum CategoryEnum {
  Connectivity = 'Connectivity and Control',
  Entertainment = 'Home Entertainment',
  Energy = 'Energy Management',
  Safety = 'Safety and Security',
  Comfort = 'Comfort and Ease',
  Health = 'Lifestyle and Health',
}
export class Category {
  @prop({ type: String, enum: CategoryEnum, required: true })
  name: CategoryEnum
}

const CategoryModel = getModelForClass(Category)
export default CategoryModel
