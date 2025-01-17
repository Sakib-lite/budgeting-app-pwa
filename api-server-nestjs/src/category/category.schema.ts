import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop()
  name: string;

  @Prop({ enum: ['income', 'expense', 'budget'] })
  type: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
