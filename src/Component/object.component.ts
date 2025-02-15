export class ObjectComponent {
  private object = new Map();

  set(key: string, value: any) {
    this.object.set(key, value);
  }

  get(key: string) {
    return this.object.get(key);
  }
}
