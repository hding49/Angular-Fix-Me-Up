/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * Add accounts$|async in template and the async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.

 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/models/src/lib/account';
import { AccountFacade } from '@bfi/shared/store';
// import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  accounts$: Observable<Account[]> = of([]);
  // constructor(private accountService: AccountService) {}
  constructor(private accountFacade: AccountFacade) {}
  accounts: Account[] = [];
  // accountsFilter = '';

  options=[ {name:'None', value:''},
            {name:'CAD', value:'cad'},
            {name:'USD', value:'usd'}];

  ngOnInit(): void {
    // this.accountService.getAccounts().subscribe((accounts) => {
    //   this.accounts = accounts;
    // });
    this.accountFacade.dispatchAccount()
    this.getAccounts();
  }

  getAccounts() {
    this.accounts$ = this.accountFacade.getAccounts()
  }

  // filterAccounts(accounts: Account[]) {
  //   return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  // }

  filterAccounts(cur: string) {
    this.accounts$ = this.accountFacade.getAccounts().pipe(
      map( (acc : Account[]) => acc.filter((a : Account) => a.currency === cur))
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCurrencySelected(event: any) {
    const param = event.target.value
    if(param === '') {
      this.getAccounts()
    } else {
      this.filterAccounts(param)
    } 
  }

}
