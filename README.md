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