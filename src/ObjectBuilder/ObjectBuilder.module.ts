import { Module } from '@nestjs/common';
import { ObjectBuilder } from './ObjectBuilder.service';

@Module({
  providers: [ObjectBuilder],
  exports: [ObjectBuilder],
})
export class ObjectBuilderModule {}
export { ObjectBuilder };
