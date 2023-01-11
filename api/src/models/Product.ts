import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Category } from './Category'

export class Product {
  @prop({ type: String, required: true, trim: true })
  name: string

  @prop({ type: Number, default: 0 })
  price: number

  @prop({ type: String, required: true })
  description: string

  @prop({ type: String, required: true })
  brand: string

  @prop({ type: String, lowercase: true })
  image: string

  @prop({ type: Number, default: 0 })
  stock: number

  @prop({ type: Number, default: 0 })
  rating: number

  @prop({ ref: Category, required: true })
  categories: Ref<Category>
}

const ProductModel = getModelForClass(Product)
export default ProductModel
