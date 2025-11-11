/**
 * Data object with invoice and customer information
 */
export class InvoiceForCustomer {
  constructor(public id: string, public name: string, public image_url: string, 
    public email: string, public date: string, public amount: number, public status: string) {
  }

  toString() {
    return this.name + this.email + this.date + this.amount + this.status;
  }
}