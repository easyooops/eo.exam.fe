# MSA Maker (exam-oops-quasar)

## rules

### 은 리터널 타입일 경우 type

```javascript
export type presetsType = {
  [sumi: string]: string,
  sumi: string,
  gofun: string,
  byakuroku: string,
};
```

### DTO 같은 객체 타입의 경우 interface

````javascript
export interface presetDTO {
  color: presetsType;
}
```


MSA Maker App

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
````
