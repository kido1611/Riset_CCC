Projek ini adalah hasil dari riset KBM CCC FTEK 2016/2017. Riset kali ini merupakan riset Web yang menggunakan teknologi [ReactJS](http://facebook.github.io/react). 

Project ini dibuat dengan menggunakan Bootstrap [Create React App](https://github.com/facebookincubator/create-react-app)

Live demo dapat dilihat di [http://kido1611.github.io/Riset_CCC](http://kido1611.github.io/Riset_CCC)
## Daftar isi
- [Fitur](#fitur)
- [Instalasi](#instalasi)
- [Pengembangan](#pengembangan)
- [Rilis](#rilis)
- [Bug](#bug)
- [License](#license)

## Fitur
Hasil dari projek ini adalah dapat mengusung:
- Teknologi ReactJs
- Hasil berupa SPA (Single Page Application)
- Menampilkan daftar pengurus

## Instalasi
Untuk menjalankan projek ini, anda membutuhkan [Node.js](https://nodejs.org/en/) dan [Git](https://git-scm.com/) *(opsional)*.

Download source code [disini](https://github.com/kido1611/Riset_CCC/archive/master.zip)
atau dengan menggunakan git
```sh
$ git clone git@github.com:kido1611/Riset_CCC.git
$ cd Riset_CCC
```
Install beberapa aplikasi pendukung
```sh
$ npm install
```

## Pengembangan
Untuk memulai pengembangan, ketikkan
```sh
npm start
```
Setelah itu, buka browser dan buka alamat [http://127.0.0.1:3000](http://127.0.0.1:3000) atau yang lain (Sesuai yang keluar di layar).

## Rilis
Untuk melakukan sebuah rilis, ketikkan
```sh
npm run build
```
atau jika ingin melakukan rilis dan mengupload ke sebuah hosting ([Github](http://github.com))
```sh
npm run deploy
```

> ### Catatan
> Sebelum melakukan rilis dan mengupload ke hosting, pastikan anda mengubah isi dari package.json
> Ubah bagian *homepage*

```json
{
  "name": "Riset_CCC",
  "version": "0.1.24",
  "private": true,
  "devDependencies": {
    "axios": "^0.15.3",
    "gh-pages": "^0.12.0",
    "react-scripts": "0.8.4"
  },
  "dependencies": {
    "material-ui": "^0.16.6",
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-router": "^3.0.0",
    "react-tap-event-plugin": "^2.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "deploy": "npm run build&&gh-pages -d build"
  },
  "homepage": "UBAH_INI"
}
```

## Bug
Jika anda menemukan sebuah bug, segera laporkan ke Github Issue saya. 
[https://github.com/kido1611/Riset_CCC/issues](https://github.com/kido1611/Riset_CCC/issues)
## License
MIT
