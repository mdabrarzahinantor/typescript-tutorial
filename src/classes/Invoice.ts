import { HasFormatter } from "./../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.client} owes $${this.details} for ${this.amount}`;
  }
}
