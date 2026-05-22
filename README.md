# Invofest Management System 🚀
> Tugas Mata Kuliah Pemrograman Web 2 - Aplikasi Manajemen Event Festival, Kategori, dan Pembicara.

Aplikasi web full-stack yang dirancang untuk mengelola data kegiatan festival (**Invofest**), meliputi manajemen data **Event** (Seminar, Workshop, Competition, Talkshow), data **Kategori**, serta data **Pembicara (Speaker)**. Aplikasi ini telah terintegrasi secara penuh dengan database cloud dan siap digunakan dalam lingkungan produksi.

---

## 🔗 Link Demo Live
* **Frontend (Vercel):** [https://pemweb-2-fe-invofest-yrsr.vercel.app/](https://vercel.com)
* **Backend API (Railway):** [https://pemweb-2backendinvofest-production.up.railway.app](https://pemweb-2backendinvofest-production.up.railway.app)

---

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** React.js (Vite + TypeScript)
* **Routing:** React Router DOM v6 (Nested & Protected Routes)
* **Form Handling:** React Hook Form
* **Validation:** Zod Schema Validation
* **State Management:** Zustand (Auth Store)
* **Styling:** Tailwind CSS

### Backend (Server)
* **Runtime & Framework:** Node.js + Express.js (TypeScript)
* **ORM:** Prisma ORM
* **Database:** Supabase (PostgreSQL Cloud)
* **Deployment:** Railway (Server) & Vercel (Client)

---

## ✨ Fitur Utama

1. **Autentikasi & Proteksi Halaman (Role Simulation):**
   * Login & Register menggunakan validasi NIM dan Password.
   * State login disimpan secara aman dan diatur menggunakan `Zustand` & `localStorage`.
   * *Protected Routes* mencegah pengguna yang belum login mengakses Dashboard.
2. **Dashboard Dinamis:**
   * Sidebar navigasi interaktif dengan deteksi *Active Sub-Routes* (`startsWith`) untuk halaman Create/Edit.
3. **Manajemen Kategori (CRUD):**
   * Menampilkan, menambah, mengubah, dan menghapus kategori event festival.
4. **Manajemen Pembicara / Speaker (CRUD):**
   * Menambah dan memperbarui data nama serta role pembicara seminar.
5. **Manajemen Event (CRUD):**
   * Menghubungkan relasi data antara Event dengan Kategori dan Pembicara secara *real-time* berbasis PostgreSQL.
6. **Halaman Biodata Pengembang:**
   * Menampilkan profil mahasiswa pengembang lengkap dengan foto yang di-host melalui folder statis produksi.

---

