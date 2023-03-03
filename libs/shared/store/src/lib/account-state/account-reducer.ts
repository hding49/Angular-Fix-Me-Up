import { Action, createReducer, on } from "@ngrx/store";
import { Account, AccountStateInterface } from "./account";
import { Observable } from "rxjs";
import { getAccountAction } from "./account-actions";

const initialAccountState: AccountStateInterface = {
    data: new Observable<Account[]>
}

const accountReducer = createReducer(

    initialAccountState,
    on(getAccountAction, (state, action): AccountStateInterface => {
        return {
            ...state,
            data: action.accounts
        }
    })
)

export function AccountReducer(state: AccountStateInterface, action: Action) {
    return accountReducer(state, action)
}