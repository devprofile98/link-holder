import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Link } from './link.schema';
import { CreateLinkDto } from './create-link.dto';
import { UpdateLinkDto } from './update-link.dto';

@Injectable()
export class LinkService {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async findAll(): Promise<Link[]> {
    return await this.linkModel.find().exec();
  }

  async findOne(id: string): Promise<Link> {
    return await this.linkModel.findById(id).exec();
  }

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    return await new this.linkModel({
      ...createLinkDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateLinkDto: UpdateLinkDto): Promise<Link> {
    return await this.linkModel.findByIdAndUpdate(id, updateLinkDto).exec();
  }

  sayLinkName(): string {
    return 'Hello Link';
  }
}
