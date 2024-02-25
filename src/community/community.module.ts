import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { CommunitySchema } from './schemas/community.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Community } from './schemas/community.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Community.name, schema: CommunitySchema }])],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
