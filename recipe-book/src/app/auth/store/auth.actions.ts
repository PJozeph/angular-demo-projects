import { Action } from "@ngrx/store";
import { UserModel } from "../user-model";
import { User } from "../user.model";

export const LOGIN_FINISH = "[Auth] Login finish";
export const LOGIN_START = "[Auth] Login start";
export const LOGIN = "[Auth] Login";
export const LOGOUT = "[Auth] Logout";

export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload : UserModel) {}
}

export class Logout implements Action {
    readonly  type = LOGOUT;
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;

    constructor(public payload : {email : string, password: string}){};
}

export type AuthActions = Login | Logout;