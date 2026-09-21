export class Invoice {
  constructor(
    public id: string,
    public customer_id: string,
    public amount: number,
    public date: string,
    public status: 'pending' | 'paid') {
  }
}