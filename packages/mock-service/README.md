# `mock-service`

## Usage

- apps/yourApp

```
import { MockService, MockAPIMode } from "@pkg/mock-service";


 let mockService = new MockService();
 mockService
    .getMockAxiosResponse(MockAPIMode.FAST)
    .then((r) => console.log("use MockService", r));

```
