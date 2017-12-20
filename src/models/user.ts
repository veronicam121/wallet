import { IAddress } from './IAddress';

// Placeholder Class/Interface for the data of the logged user

export class User {
  public name: string;
  public email: string;
  public address: IAddress;
  public code: string;

  constructor(name, email, code, address?) {
    this.name = name;
    this.email = email;
    this.code = code;
    this.address = address;
  }

  public setAddress(address: IAddress) {
    this.address = address;
  }
}
