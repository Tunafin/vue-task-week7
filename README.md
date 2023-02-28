# Vue Template

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### 發佈到github pages

1. 到deploy.sh修改下列這行的USERNAME和REPO，並拿掉註解
    ```
    git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
    ```
2. 同理，到vite.config.js修改下列這行
    ```
    base: '/<REPO>/',
    ```
