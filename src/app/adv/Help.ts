/**
 * Created by liujialin on 2018/1/11.
 */
export class Help {
  command: string;
  desc: string;
  constructor(public desc: string, public command: number) {
    this.command = command;
    this.desc = desc;
  }
}
