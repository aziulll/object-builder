export class ObjectComponent {
  private object = new Map();

  set(key: string, value: any) {
    this.object.set(key, value);
  }

  getJson(): string {
    return JSON.stringify(Object.fromEntries(this.object), null, 2);
  }
}
