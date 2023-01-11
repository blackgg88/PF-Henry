import { prop, getModelForClass } from "@typegoose/typegoose";

export class Category {
  @prop({ type: String, required: true })
  name: string;
}

const CategoryModel = getModelForClass(Category);
export default CategoryModel;
