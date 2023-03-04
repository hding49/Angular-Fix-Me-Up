import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountFacade } from '@bfi/shared/store';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from '../../../../../libs/shared/store/src/lib/account-state/account';

@Component({
  selector: 'bfi-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {

  account?: Account
 
  constructor(private activatedRoute: ActivatedRoute, private accountFacade: AccountFacade) {}

  ngOnInit(): void {
    this.accountFacade.dispatchAccount()
    this.loadAccount()
  }

  loadAccount() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.accountFacade.getAccount(id!).subscribe({
      next: (response) => {
        this.account = response
        console.log(response)
      },
      error: (error) => console.log(error)      
    })
  }
  
}
