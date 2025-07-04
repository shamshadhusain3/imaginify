
import mongoose, { Document, Schema } from "mongoose";


export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string; 
  width?: number;
  height?: number;
  config?: object; 
  transformationUrl?: string; 
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}
const imageSchema = new Schema({
    title:{type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    securedUrl: {type: String, required: true},
    width: {type: Number,},
    height: {type: Number,},
    config:{type:Object},
    transformationUrl: {type: URL},
    aspectRation: {type: String},
    color: {type: String},
    prompt: {type: String},
    author:{type: Schema.Types.ObjectId, ref: "User"},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

})


export const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);