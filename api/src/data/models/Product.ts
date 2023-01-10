import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./Users";

class Product {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ type: String, default: 0 })
  size: string;

  @prop({ type: Number, default: 0 })
  price: number;

  @prop({ type: String })
  gender: string;

  @prop({ type: String, required: true })
  brand: string;

  @prop({ type: String, lowercase: true })
  url: string;

  // @prop({ ref: () => User })
  // owner: Ref<User>;

  //   @prop({ type: () => [String] })
  //   tags: string[];
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
