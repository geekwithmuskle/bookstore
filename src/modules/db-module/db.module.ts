import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'src/libs/configuration';

const config = configuration();
@Module({
  imports: [MongooseModule.forRoot(config.mongodb.url)],
  controllers: [],
  providers: [],
})
export class DbModule {}
