# `<%= title %>`

## Usage

package.json

```
"@pkg/<%= title %>": "*",
```

command

```
yarn install
```

main.ts

```
  import { add } from "@pkg/<%= title %>";
  ...

  let result = add(1,2);
```

modify - packages 라이브러리 변경사항 반영(컴파일)

```
 yourlibRoot> yarn build
```

modifyDevelop - packages 라이브러리 변경사항 실시간 반영(실시간 컴파일)

```
 yourlibRoot> yarn buid:hot
```

---

date: "<%= creationDate %>"
author: <%= author %>

---
