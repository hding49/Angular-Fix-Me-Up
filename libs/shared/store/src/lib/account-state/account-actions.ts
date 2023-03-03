import { createAction, props } from "@ngrx/store";
import { Account } from "./account";
import { Observable } from "rxjs";


export const getAccountAction = createAction('[Account] Get account', props<{accounts: Observable<Account[]>}>())