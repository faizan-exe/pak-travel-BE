import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  phone_no: string;

  @Prop()
  email: string;

  @Prop({type: Object})
  preferences: {
    budget: number;
    travel_type: string;
    distance: number;
  }

  @Prop({required: true, type: String})
  password: string;

  @Prop()
  current_location: string;
}

export const UserSchema = SchemaFactory.createForClass(User);