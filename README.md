# Templat Next.js dengan NextAuth.js

## Changelog

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
