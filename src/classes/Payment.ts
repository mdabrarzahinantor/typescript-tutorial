import { HasFormatter } from "./../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.recepient} owed $${this.details} for ${this.amount}`;
  }
}
