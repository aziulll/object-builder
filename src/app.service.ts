import { Injectable } from '@nestjs/common';
import { ObjectBuilder } from './ObjectBuilder/ObjectBuilder.service';
import { ObjectComponent } from './Component/object.component';

@Injectable()
export class AppService {
  private composedInstance: any;

  constructor(private readonly builder: ObjectBuilder) {
    this.builder.register('person', ObjectComponent);

    this.composedInstance = this.builder.build();
  }

  execute() {
    this.composedInstance.person.set('infoAboutPerson', {});
    this.composedInstance.person.get('infoAboutPerson').set('name', 'Luíza');
    this.composedInstance.person.get('infoAboutPerson').set('age', 21);

    this.buildJson();
  }

  buildJson() {
    console.log(this.composedInstance.person.getJson());
  }
}
