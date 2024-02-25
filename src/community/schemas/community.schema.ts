import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type CommunityDocument = Community & Document;




@Schema()
export class Community {

@Prop({ type: Types.ObjectId, ref: 'User', required: true })
user: Types.ObjectId | Record<string, any>;

@Prop()
review: string

@Prop()
rating_stars: number;

@Prop()
img_url: string;

@Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const CommunitySchema = SchemaFactory.createForClass(Community);