import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectBuilderModule } from './ObjectBuilder/ObjectBuilder.module';

@Module({
  imports: [ObjectBuilderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
