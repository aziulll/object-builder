import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectComponent {
  private object = new Map<string, any>();

  set(key: string, value: any) {
    if (typeof value === 'object' && value !== null) {
      const newComponent = new ObjectComponent();
      this.object.set(key, newComponent);
    } else {
      this.object.set(key, value);
    }
  }

  get(key: string) {
    return this.object.get(key);
  }

  getJson(): string {
    const obj: Record<string, any> = {};
    this.object.forEach((value, key) => {
      obj[key] =
        value instanceof ObjectComponent ? JSON.parse(value.getJson()) : value;
    });
    return JSON.stringify(obj, null, 2);
  }
}
