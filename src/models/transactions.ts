export class Transactions {
    public id: number;
    public date: string;
    public address: string;
    public amount: number;

    constructor(id: number, date: string, address: string, amount: number) {
      this.id = id;
      this.date = date;
      this.address = address;
      this.amount = amount;
    }
}
