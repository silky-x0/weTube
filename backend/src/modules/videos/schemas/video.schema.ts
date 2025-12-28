import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Video extends Document {

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  title: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true, index: true })
  slug: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  thumbnailUrl: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ required: true, default: 0 })
  views: number;

  @Prop({required: true, default: true})
  isPublished: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  ownerId: Types.ObjectId;

  @Prop({ required: true, default: 0 })
  likes: number;

  @Prop({ required: true, default: 0 })
  dislikes: number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);