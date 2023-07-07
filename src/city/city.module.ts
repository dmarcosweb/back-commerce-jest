import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { ServiceController } from './service/service.controller';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [
    CacheModule.register({ ttl: 90000000 }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController, ServiceController],
  providers: [CityService],
})
export class CityModule {}
