# `pet-store-api`

## Usage

parent package.json

```json
scripts {
  "@lib/pet-store-api": "*",
  ...
}
```

command

```
yarn install
```

main.ts(typescript-axios)

```typescript
import { PetApi, PetStatusEnum } from "@pkg/pet-store-api";

new PetApi().findPetsByStatus([PetStatusEnum.Sold]).then((response) => {
  console.log("findPetsByStatus : ", response);
});
```

---

date: "2023-02-23T06:27:04.074Z"
author: Bespin

---
