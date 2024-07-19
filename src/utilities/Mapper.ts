class Mapper {
  static toMinifiedHIBPwnedItem = (
    hibpwnedItem: HIBPwnedItem
  ): MinifiedHIBPwnedItem => ({
    Name: hibpwnedItem.Name,
    Title: hibpwnedItem.Title,
    Domain: hibpwnedItem.Domain,
    BreachDate: hibpwnedItem.BreachDate,
    PwnCount: hibpwnedItem.PwnCount,
    Description: hibpwnedItem.Description,
    LogoPath: hibpwnedItem.LogoPath,
    DataClasses: hibpwnedItem.DataClasses
  })

  static toHIBPwnedPlatformName = (
    platform: HIBPwnedItem | MinifiedHIBPwnedItem
  ): string => platform.Name
}

export default Mapper