import { Injectable } from '@nestjs/common';
import { ObjectBuilder } from './ObjectBuilder/ObjectBuilder.service';
import { ObjectComponent } from './Component/object.component';

@Injectable()
export class AppService {
  private composedInstance: any;

  constructor(private readonly builder: ObjectBuilder) {
    this.builder.register('infoByPerson', ObjectComponent);

    this.composedInstance = this.builder.build();
  }

  execute() {
    this.composedInstance.infoByPerson.set('name', 'Luíza');
    this.composedInstance.infoByPerson.set('age', 21);
    this.composedInstance.infoByPerson.set('framework', 'NestJS');

    this.buildJson();
  }

  buildJson() {
    console.log(this.composedInstance.infoByPerson.getJson());
  }
}
