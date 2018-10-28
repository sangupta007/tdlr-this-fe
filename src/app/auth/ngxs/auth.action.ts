import {IUser} from '../../../interfaces/user';

export class SetUserAction {
  static readonly type = '[login] set user';
  constructor(public payload:{user:IUser }){

  }
}

export class ResetAuthToDefaultState{
  static readonly type = '[login] reset user';
  constructor(){
  }
}

