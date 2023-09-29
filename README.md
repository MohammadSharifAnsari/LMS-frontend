<!-- git push -u origin cmaster  -->
<!-- npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch -->
<!-- git remote add origin https://github.com/MohammadSharifAnsari/LMS-frontend.git -->
# LMS-frontend

### set up instriction
<!-- import project from github to our repository -->
1. clone the project

```
git clone https://github.com/MohammadSharifAnsari/LMS-frontend.git

```
<!-- yahan par LMS-frontend gitghub par repository ke naam hai na ki vs code me -->
2. move to repository

```
cd LMS-frontend

```
3 install dependencies

```
npm install

```
4. run the server

```
npm run dev

```
<!-- git remote add origin https://github.com/MohammadSharifAnsari/LMS-frontend.git -->
<!-- git push -u origin cmaster -->

### setup instruction tailwind

[ tailwind official instruction docs](https://tailwindcss.com/docs/installation)

1. install tailwind dependency through npm
```
npm install -D tailwindcss

```
2. create tailwind.config.js

```
npx tailwindcss init
```

3. tailwind.config.js ki content property me bataenge ki kaun kaun se file and folder par tailwind apply karni hai

```
"./src/**/*.{html,js}"
```
4. tailwind css framework ko ek css(index.css) file me daal lenge through follwing command

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. run command for ki index.css run karao and uski utility classes App.css me daal do and continuesly watch karte raho if changing


```
npx tailwindcss -i ./src/index.css -o ./src/App.css --watch
```


### addinng plugins(means library)
```
npm install react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```
### add eslint library simple import sort to react or vite project
[eslint official docs for simple import sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort?activeTab=readme)

1. install eslint simple import sort package 
```
npm install --save-dev eslint-plugin-simple-import-sort
```
2. add plugins in eslintrc.cjs
```
  plugins: [..., 'simple-import-sort'],
```
3. Add rules in ellintrc.cjs

```
    rules: {
    'simple-import-sort/imports': 'error',
    "simple-import-sort/exports": "error",
    ....
    }
```
4.configure vs code setting for auto fix

```
1. go to setting on vs code -> then search for setting and select edit in setting json
2. open setting json
3. add
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }


```
5. for run this plugin run given command on terminal
```
npx eslint . --ext .js,.jsx --fix
```