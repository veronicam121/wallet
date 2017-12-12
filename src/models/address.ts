export class Address {
  public img: string;
  public alias: string;
  public address: string;

  constructor(img: string, alias: string, address: string) {
    this.img = img;
    this.alias = alias;
    this.address = address;
  }

  public getAddress() {
    return this.address;
  }

  public getAlias() {
    return this.alias;
  }

  public getImg() {
    return this.img;
  }
}
