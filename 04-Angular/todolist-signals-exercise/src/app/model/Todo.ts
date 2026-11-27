export class Todo {
  constructor(public id: number, public description: string, public status: string) {
    if (Number.isNaN(id))
      this.id = Math.trunc(Math.random()*100000);
  }
}
