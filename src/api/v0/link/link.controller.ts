import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { LinkService } from 'src/api/v0/link/link.service';
import { CreateLinkDto } from './create-link.dto';

@Controller('link')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  async index() {
    return await this.linkService.findAll();
  }

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    console.log(createLinkDto);
    return await this.linkService.create(createLinkDto);
  }
}
