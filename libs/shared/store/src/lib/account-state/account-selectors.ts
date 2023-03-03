import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AccountStateInterface } from "./account"

const accountFeatureSelector = createFeatureSelector<AccountStateInterface>('account')

export const accountSelector = createSelector(
    accountFeatureSelector,
    (accounts: AccountStateInterface) => accounts.data
)