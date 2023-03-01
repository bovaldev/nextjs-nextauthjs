# Templat Next.js dengan NextAuth.js

## Changelog

### 0.1.4 - Add Login functionality

- Menginstal `next-auth` dan menulis konfigurasi sesuai [dokumentasinya](https://next-auth.js.org/getting-started/example)
- Di `[...nextauth].js`, memvalidasi data yang dikirim oleh form di laman `/login`
- Mengalihkan laman ke `/` setelah data berhasil diproses
- Mengambil _session_ untuk menampilkan nama akun dan tombol _Logout_
- Mengalihkan laman `/login` dan `/signup` ke laman `/` ketika memiliki _session_

### 0.1.3 - Try to fix Nodemailer

- Coba memperbaiki Nodemailer yang hanya berhasil mengirim email verifikasi akun pada kondisi tertentu (yaitu hanya saat _development_ atau saat di mode _incognito_ peramban)

### 0.1.2 - Add Sign Up functionality

- Memvalidasi data yang dikirim oleh form di laman `/signup`
- Menggunakan [bcryptjs](https://www.npmjs.com/package/bcryptjs) untuk _hashing_ kata sandi sebelum disimpan
- Menyimpan data ke Firebase (Realtime Database)
- Menggunakan [Nodemailer](https://nodemailer.com/about/), mengirim email untuk verifikasi akun baru
- Mengalihkan laman ke `/login` setelah data berhasil diproses

### 0.1.1 - Create Auth Form

- Membuat form di laman `/login` dan `/signup` dengan fungsionalitas sampai mencetak data ke _Console_
- Menampilkan indikator ketika nantinya data sedang diproses
- Menampilkan pesan _error_ ketika ada data yang gagal divalidasi (untuk saat ini ketika kata sandi dan konfirmasinya tidak cocok)

### 0.1.0 - Initial development

- Menggunakan [Next.js x Tailwind CSS](https://github.com/bovaldev/nextjs-tailwindcss) sebagai dasar pengembangan
