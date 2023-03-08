# `<%= title %>`

## Usage

parent package.json

```json
scripts {
  "@lib/<%= title %>": "*",
  ...
}
```

command

```
yarn install
```

main.ts(typescript-axios)

```typescript
import { PetApi, PetStatusEnum } from "@lib/pet-store-api";

new PetApi().findPetsByStatus([PetStatusEnum.Sold]).then((response) => {
  console.log("findPetsByStatus : ", response);
});
```

---

date: "<%= creationDate %>"
author: <%= author %>

---
