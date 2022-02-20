import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './v0/link/link.schema';
import { V0Module } from './v0/v0.module';

@Module({
  imports: [V0Module],
})
export class ApiModule {}
