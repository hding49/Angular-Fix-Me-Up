import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bfi-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
}
