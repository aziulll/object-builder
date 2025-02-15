import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectBuilder {
  private components = new Map<string, any>();

  register<T>(name: string, component: T): void {
    this.components.set(name, component);
  }

  build(): any {
    const instance: Record<string, any> = {};

    this.components.forEach((component, name) => {
      instance[name] = new component();
    });

    return instance;
  }
}
