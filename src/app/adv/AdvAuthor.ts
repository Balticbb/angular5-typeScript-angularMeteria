/**
 * Created by liujialin on 2017/12/11.
 */
export class AdvAuthor {
  private name: string;
  private sex: number;
  constructor(public _name, public _sex) {
    this._name = _name;
    this._sex = _sex;
  }

  public get name() {
    return this._name;
  }

  public set name(value) {
    this._name = value;
  }

  public get sex() {
    return this._sex;
  }

  public set sex(value) {
    this._sex = value;
  }
}
