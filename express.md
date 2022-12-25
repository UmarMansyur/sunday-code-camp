# Express Js

Express adalah framework web yang berjalan di atas Node Js. Express memungkinkan kita untuk membuat aplikasi web dengan mudah dan cepat. Express termasuk framework yang tidak memiliki aturan struktur yang ketat atau dikenal dengan istilah unopinionated framework. Express juga memungkinkan kita untuk membuat aplikasi web dengan menggunakan template engine seperti EJS, Pug, dan lain-lain.

## Instalasi

Untuk menggunakan express kita perlu menginisiasi project terlebih dahulu. Untuk menginisiasi project kita bisa menggunakan perintah berikut:

```bash
npm init
```

kemudian kita akan diminta untuk mengisi beberapa informasi seperti nama project, versi, deskripsi, dan lain-lain. Setelah itu kita akan mendapatkan file `package.json` yang berisi informasi mengenai project kita.

Jika ingin lebih cepat tanpa perlu memberikan informasi kita dapat menggunakan perintah berikut:

```bash
npm init -y
```

Selanjutnya untuk memulai menggunakan Express, kita harus menginstallnya terlebih dahulu. Untuk menginstall Express, kita bisa menggunakan perintah berikut:

```bash
npm install express
```

Kode tersebut akan menginstall express dan menambahkannya ke dalam file `package.json` di bagian dependencies.

Setelah itu kita bisa membuat file `app.js` untuk menjalankan express. Kode berikut adalah contoh kode untuk menjalankan express:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Setting file package.log seperti berikut:

```json
{
  "name": "Sunday Code Camp",
  "version": "1.0.0",
  "description": "Belajar Express",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "keywords": ["express"],
  "author": "ProJS Universias Madura",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Perhatikan kode "script" di atas. Kode tersebut memiliki fungsi untuk memberikan perintah ketika kita akan menjalankan project kita. Kode tersebut akan menjalankan file `app.js` ketika kita menjalankan perintah `npm start`.

Sekarang, kita bisa menjalankan kode tersebut dengan menggunakan perintah berikut:

```bash
npm start
```

Kode tersebut akan menampilkan pesan `Example app listening at http://localhost:3000` di terminal ketika kita menjalankan kode tersebut.

Kita juga bisa memodifikasi key di bagian script sesuai dengan keinginan kita. Sering kali programmer menggunakan library nodemon untuk mempermudah proses development. Nodemon adalah library yang akan menjalankan ulang server ketika terjadi perubahan pada file. Untuk menginstall nodemon kita bisa menggunakan perintah berikut:

```bash
npm install nodemon
```

Namun Jika ingin menginstall nodemon tanpa menambahkannya ke dalam file `package.json` kita bisa menggunakan perintah berikut:

```bash
npm install nodemon --save-dev
```

**`--save-dev`** memiliki fungsi untuk menambahkan library ke dalam bagian devDependencies di file `package.json`. Bagian devDependencies memiliki fungsi untuk menambahkan library yang hanya digunakan untuk development saja. Jika kita ingin menjalankan nodemon kita bisa menggunakan perintah berikut:

```bash
npm run dev
```

Dengan catatan menambah script di bagian package.json seperti berikut:

```json
{
  "name": "Sunday Code Camp",
  "version": "1.0.0",
  "description": "Belajar Express",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "keywords": ["express"],
  "author": "ProJS Universias Madura",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

Langkah terakhir dalam instalasi express js ini adalah dengan mengakses url `http://localhost:3000` di browser. Jika berhasil maka akan muncul pesan `Cannot GET /` yang berarti server express sudah berjalan.

## Routing

Routing adalah proses menghubungkan antara request dan response. Routing pada Express dapat dilakukan dengan menggunakan method `app.get()` atau `app.post()`. Method `app.get()` digunakan untuk menghubungkan request dengan response ketika method requestnya adalah GET. Sedangkan method `app.post()` digunakan untuk menghubungkan request dengan response ketika method requestnya adalah POST.

Method Request adalah sebuah method yang digunakan untuk mengirimkan request ke server. Method Request yang paling sering digunakan adalah GET dan POST. Method Request lainnya adalah PUT, DELETE dan sebagainya. ExpressJs memiliki method routing untuk setiap method request. Berikut adalah tabel method routing yang tersedia pada ExpressJs:

| Method Request | Method Routing |
| -------------- | -------------- |
| GET            | app.get()      |
| POST           | app.post()     |
| PUT            | app.put()      |
| DELETE         | app.delete()   |

### Routing dengan Method GET

Sebelum membuat method routing. Silahkan buat file baru dengan nama data.json. Isi file tersebut dengan kode berikut:

```json
[
  {
    "id": "1",
    "name": "John",
    "age": "20"
  },
  {
    "id": "2",
    "name": "Peter",
    "age": "21"
  },
  {
    "id": "3",
    "name": "Mary",
    "age": "22"
  },
  {
    "id": "4",
    "name": "Jane",
    "age": "23"
  },
  {
    "id": "5",
    "name": "Mark",
    "age": "24"
  },
]
```

Method get adalah method yang digunakan untuk mengambil data dari server. Berikut adalah contoh kode untuk membuat routing dengan method GET:

```javascript
app.get("/", (_req, res) => {
  const data = datas;
  res.json(data);
});
```

Buka browser dan akses url `http://localhost:3000`. Jika berhasil maka akan muncul pesan "Selamat Datang di Sunday Code Camp".

### Routing dengan Method POST

Selanjutnya kita akan membuat routing yang menggunakan method POST. Tuliskan kode berikut di bagian app.js:

```javascript
app.post('/', (req, res) => {
    const body = req.body;
    const data = datas;
    const input = {
        id: parseInt(datas[data.length - 1].id) + 1,
        name: body.name,
        age: body.age,
    }
    data.push(input);
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.json(data);
});
```

Keterangan:
- req digunakan untuk mengambil data yang dikirimkan oleh client.
- req.body digunakan untuk mengambil data yang dikirimkan oleh client.
- fs adalah module yang digunakan untuk mengakses file.
- fs.writeFileSync digunakan untuk menulis data ke file data.json.


Untuk menggunakan method POST kita perlu menambahkan syntask baru di bagian app.js. Kode tersebut adalah kode berikut:

```javascript
const fs = require('fs');


app.use(express.json());
```

Sekarang, kita membuatuhkan aplikasi untuk mengirimkan data ke server. Aplikasi tersebut adalah http request client. Kita akan menggunakan aplikasi insomnia untuk mengirimkan data ke server. Insomnia adalah aplikasi yang digunakan untuk mengirimkan request ke server. Insomnia memiliki fitur yang mirip dengan postman. Untuk menginstall insomnia kita bisa mengunjungi link berikut: https://insomnia.rest/download/

Setelah menginstall insomnia, buka aplikasi tersebut. Kita akan membuat sebuah request POST ke server. Klik tombol `Create Request` dan pilih method POST. Kemudian, isi url dengan `http://localhost:3000`. Setelah itu, klik tombol `Send`. Jika berhasil maka akan muncul pesan `Cannot POST /` di bagian response. Kita akan mengirimkan data ke server. Klik tab `Body` dan pilih `JSON`. Kemudian, isi data dengan data berikut:

```

{
  "name": "Sunday Code Camp"
}

```

Jika berhasil maka akan muncul pesan `Sunday Code Camp` di bagian response.

### Routing menggunakan method PUT

Method PUT digunakan untuk mengubah data yang ada di server. Berikut adalah contoh kode untuk membuat routing dengan method PUT:

```javascript
app.put('/:id', (req, res) => {

    const id = req.params.id;
    const input = req.body;
    const body = {
        id: id,
        name: input.name,
        age: input.age
    }

    const data = datas;
    const index = data.findIndex((item) => item.id == id);

    if (index == -1) { 
       return res.json({ message: 'Data not found' });
    }

    data[index] = body;
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.json(data);
});
```

Keterangan:

- req.params digunakan untuk mengambil data yang dikirimkan oleh client melalui url.

### Routing menggunakan method DELETE

Method DELETE digunakan untuk menghapus data yang ada di server. Berikut adalah contoh kode untuk membuat routing dengan method DELETE:

```javascript
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const data = datas;
    const index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.json(data);
});
```

## Database

Database yang akan kita gunakan adalah mariadb. Ketikkan perintah berikut di terminal untuk menginstall di package mariadb:

```bash
npm install mariadb
```

Kemudian, buatlah file baru dengan nama db.js. Tuliskan kode berikut di file db.js:

```javascript
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todolist',
    connectionLimit: 5
});

module.exports = pool;

```

Keterangan:

- mariadb adalah module yang digunakan untuk mengakses database.
- mariadb.createPool digunakan untuk membuat koneksi ke database.
- host adalah alamat dari database.
- user adalah username dari database.
- password adalah password dari database.
- database adalah nama database yang akan kita gunakan.
- connectionLimit adalah jumlah koneksi yang akan dibuat ke database.

Kemudian, buka file app.js dan tambahkan kode berikut:

```javascript
const pool = require('./db');
```

Kemudian, kita akan membuat routing untuk mengakses database. Tuliskan kode berikut di bagian app.js:

```javascript
app.get('/db', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM task");
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
});
```

Buat database dengan nama todolist. Kemudian, buatlah tabel dengan nama task. Tabel task memiliki kolom id, kegiatan, dan status.

CREATE TABLE `task` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `kegiatan` varchar(255) NOT NULL,
  `status` TINYINT NOT NULL DEFAULT 0
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

Akses link berikut untuk melihat hasilnya: http://localhost:3000/db menggunakan insomnia.

## Membuat aplikasi todolist

Selanjutnya akan di pandu lansung oleh pemateri untuk membuat aplikasi todolist.

## HTML dan CSS
```html
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <title>TodoList</title>
</head>

<body>
    <h1 class="text-center">Aplikasi Todo List</h1>
    <div class="container">
        <div class="row justify-content-center">
            <form action="/" method="post" class="d-flex">
                <div class="col-10 text-center">
                    <input type="text" name="task" id="task" class="form-control">
                </div>
                <div class="col-3 text-end">
                    <button class="btn btn-warning" type="button" id="save">Tambah</button>
                </div>
            </form>
        </div>
        <div class="row justify-content-center">
            <div class="col-8">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th style="width: 10%;">No</th>
                            <th style="width: 40%;">Kegiatan</th>
                            <th>Keterangan</th>
                            <th style="width: 10%;">#</th>
                            <th style="width: 10%;">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Belajar</td>
                            <td>Belajar PHP</td>
                            <td><a><i class="fas fa-pen"></i></a></td>
                            <td><a></a> <i class="fas fa-trash"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
```

### CSS

```css

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    color: #212529;
}

span {
    cursor: pointer;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.col-3 {
    flex: 0 0 25%;
    max-width: 25%;
}


.col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}

.col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}


form {
    width: 100%;
    max-width: 500px;
    padding: 15px;
    margin: 0 auto;
}

.justify-content-center {
    justify-content: center !important;
}


.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #8e96a0;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn {
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: #007bff;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}

.btn-warning :hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
}

.btn-warning :focus {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.d-flex {
    display: flex;
}

.text-end {
    text-align: end;
}

.form-control :active {
    color: #495057;
    background-color: #fff;
    border-color: #ced4da;
    outline: 0;
    box-shadow: none;
}

.table {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;

    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
    border-top: 2px solid #dee2e6;
}

.table tr {
    border-bottom: 1px solid #dee2e6;
}

.table-bordered th, .table-bordered td {
    border: 1px solid #dee2e6;
}

a {
    cursor: pointer;
}

.text-center {
    text-align: center;
}

```

