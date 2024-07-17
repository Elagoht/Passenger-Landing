declare type MinifiedHIBPwnedItem = {
  readonly Name: string
  readonly Title: string
  readonly Domain: string
  readonly BreachDate: string
  readonly PwnCount: number
  readonly Description: string
  readonly LogoPath: string
  readonly DataClasses: string[]
}

declare type HIBPwnedItem = MinifiedHIBPwnedItem & {
  AddedDate: string
  ModifiedDate: string
  IsVerified: boolean
  IsFabricated: boolean
  IsSensitive: boolean
  IsRetired: boolean
  IsSpamList: boolean
  IsMalware: boolean
  IsSubscriptionFree: boolean
}