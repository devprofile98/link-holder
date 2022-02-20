import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Link {
  @Prop()
  address: string;

  @Prop()
  description?: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
