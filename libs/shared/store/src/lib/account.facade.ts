import { Injectable } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Account, AccountStateInterface } from "./account-state/account"
import { AccountService } from "libs/shared/services/src/lib/account.service"
import { map, Observable, of, switchMap } from "rxjs"
import { getAccountAction } from "./account-state/account-actions"
import { accountSelector } from "./account-state/account-selectors"

@Injectable({
    providedIn: 'root'
  })
  export class AccountFacade {
    constructor(private store: Store<AccountStateInterface>, private accountService: AccountService) { }
    
    getAccount(id: string): Observable<Account | undefined> {
      return this.store.pipe(
        select(accountSelector)
      ).pipe(
        switchMap(a => a),
        map(b => {
               return of(b.find(c => c.id == id))
            }
        ),
        switchMap(x => x)
      )
    }

    getAccounts(): Observable<Account[]> {
      return this.store.pipe(
        select(accountSelector)
      ).pipe(
        switchMap(x => x)
      )
    }
    
    dispatchAccount() {
        this.store.dispatch(getAccountAction({accounts: this.accountService.getAccounts()}))
    }

  }