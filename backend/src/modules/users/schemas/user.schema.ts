import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Video' }])
  watchHistory: Types.ObjectId[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Video' }])
  likedVideos: Types.ObjectId[];  

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true, index: true })
  username: string;

  @Prop({ required: true, trim: true, index: true })
  fullName: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  coverUrl: string;

  @Prop({required:true})
  password: string;

  @Prop()
  refreshToken: string;

  @Prop({ default: false })
  isEmailVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);