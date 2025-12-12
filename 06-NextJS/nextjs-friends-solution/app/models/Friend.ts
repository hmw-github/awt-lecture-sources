export class Friend {
  id: number;
  name: string;
  age: number;

  public constructor(name: string) {
    this.id = Date.now();
    this.name = name;
    this.age = -1;
  }
}