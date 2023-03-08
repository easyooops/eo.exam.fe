## TL;DR

### use

| Name         | Version |
| :----------- | :------ |
| `Nx`         | 15.2.4  |
| `Node`       | 16.14.2 |
| `yarn`       | 1.22.19 |
| `typescript` | 4.5.4   |

### vsCode Extensions

| Name       |
| :--------- |
| `esLint`   |
| `Prettier` |
| `gitLens`  |

### execute

```powershell
 yarn install
 yarn start:exam
```

## Structure

```

--apps
ㄴ exam-oops-quasar : exam-oops-quasar(vue3, quasar, vite)
ㄴ exam-oops-react : exam-oops-react(react)
ㄴ exam-oops-vue : exam-oops(vue3, vite)
ㄴ exam-oops-vuetify : exam-oops-vuetify(vue3, vuetify3, vite)


--package
ㄴ lru-cache : Lru-Cache 패키지
ㄴ mock-service : Mock API 제공자 패키지
ㄴ ...

--libs
ㄴ vue3-comm-ui(vue3, no-Ui-Framework only vue)
ㄴ ...

```

## Rules

- apps

  - 하나의 독립 서비스 e.g) exam-oops

- packages

  - typeScript가 아닌 프로젝트에도 사용.
  - Nx build Cache Hit 목록에 포함됨.(독립 빌드 되므로.)
  - framework(vue,react, ...) ,Js, Ts에 의존하지 않고 독립적으로 빌드되어 js파일로 통합.
  - app에서 직접적인 ts파일 hot-reload X (컴파일된 js파일을 watch하고 있으므로.)
    - Tip) tsc -w옵션으로 제한적으로는 가능.

- libs
  - typeScript프로젝트에서만 사용
  - 부모 프로젝트에서 빌드 되어 통합.
  - Nx build Cache Hit 목록에서 제외됨.(app에서 빌드 되므로.)
  - apps에서 ts파일 hot-reload 가능(ts파일을 watch하고 있으므로)

## Monorepo Command

- **Dependency graph 보기**

```powershell
 npx nx graph
```

- **/packages/\* 추가**

```

npx nx workspace-generator pkglib "comm-paymentAPI" --author=Hong GilDong --dry-run

```

- **/libs/ open-api 추가**

- https://petstore.swagger.io

```powershell
  yarn generate:open-api i=openAPI명세문서 name=패키지명 g=프로토콜 type=패키지 유형

  # use local file
  yarn generate:open-api name='pet-store-api' i='tools/scripts/swagger2-petstore-example.json'
  # use http
  yarn generate:open-api name='pet-store-api' i='https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml'
```

- options
  name : 생성할 패키지명

  i : openAPI 명세문서

  type(optional) : 패키지 유형(default : pkg)

  - pkg입력 시 packages에 생성
  - lib입력 시 libs에 생성

  dry(optional) : 실제 생성하지 않고 생성될 경로만 출력.
  g(optional) : openAPI 생성 프로토콜(default : typescript-axios)

  ```
    typescript (experimental)
    typescript-angular
    typescript-angularjs-deprecated (deprecated)
    typescript-aurelia
    typescript-axios(=> Default)
    typescript-fetch
    typescript-inversify
    typescript-jquery
    typescript-nestjs (experimental)
    typescript-node
    typescript-redux-query
    typescript-rxjs
  ```

## docker

monorepo Home Dir(easyooops)

### exam-oops-vuetify

```
docker build -f apps/exam-oops-vuetify/Dockerfile-mac -t exam-oops-vuetify .
docker run --name "exam-oops-vuetify" -d -p 80:8080 exam-oops-vuetify
```

### TODO

- 코드영역 제한 (husky)

## Ref

- **nx generator** : https://blog.nrwl.io/-using-nx-workspace-generators-to-scaffold-new-blog-posts-8c8162cf857b
- **tsconfig** : https://geonlee.tistory.com/214
- **free rest api**: https://httpbin.org/#/HTTP_Methods/post_post
