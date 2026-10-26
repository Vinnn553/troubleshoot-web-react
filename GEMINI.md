# Troubleshooting Tutorial Website - Knowledge Base & Guidelines

Dokumen ini berisi informasi arsitektur, struktur direktori, dan aturan teknis proyek untuk panduan asisten AI dan pengembang.

---

## 1. Ringkasan Proyek
- **Nama Proyek:** `troubleshooting-tutorial-website`
- **Tujuan:** Website panduan & tutorial troubleshooting komputer dan jaringan.
- **Lokasi Kerja:** `c:\laragon\www\troubleshooting-tutorial-website`

---

## 2. Tech Stack & Dependensi
- **Frontend Framework:** React 19 (`react`, `react-dom`)
- **Build Tool / Bundler:** Vite 8 (`vite`, `@vitejs/plugin-react`)
- **CSS Framework:** Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
- **Linter:** ESLint (`eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **Port Pengembangan:** Dev server berjalan di `http://localhost:5173` (bukan langsung via Apache/Laragon).

---

## 3. Struktur Direktori Proyek

```text
troubleshooting-tutorial-website/
├── index.html                      # Entry point HTML utama
├── vite.config.js                  # Konfigurasi Vite (plugin: tailwindcss(), react())
├── package.json                    # Konfigurasi dependensi dan scripts npm
├── eslint.config.js                # Konfigurasi linting JavaScript/React
├── README.md                       # Dokumentasi standar proyek
├── GEMINI.md                       # Basis pengetahuan proyek ini untuk AI
├── public/                         # Aset publik statis
│   ├── favicon.svg                 # Favicon aplikasi
│   └── icons.svg                   # Sprite/kumpulan icon SVG
└── src/                            # Sumber kode aplikasi
    ├── main.jsx                    # Entry point React (me-mount <App /> dan import Style.css)
    ├── index.css                   # File CSS alternatif berisi @import "tailwindcss";
    ├── App.jsx                     # Komponen bawaan template awal Vite
    ├── App.css                     # Style bawaan template awal Vite
    ├── app/
    │   └── App.jsx                 # Komponen utama Header/Hero tutorial (aktif dirender di main.jsx)
    ├── container/
    │   └── Container.jsx           # Komponen layout / container pembungkus konten
    └── assets/                     # Aset lokal yang dibundel oleh Vite
        ├── hero.png, react.svg, vite.svg
        ├── css/
        │   └── Style.css           # CSS utama aplikasi (@import "tailwindcss";)
        └── img/
            └── Illustration.svg    # Gambar ilustrasi laptop hero section
```

---

## 4. Konvensi & Aturan Teknis
1. **Tailwind CSS v4 Integration:**
   - Dikonfigurasi melalui plugin `@tailwindcss/vite` di `vite.config.js`:
     ```javascript
     plugins: [tailwindcss(), react()]
     ```
   - Di-import pada stylesheet utama menggunakan sintaks:
     ```css
     @import "tailwindcss";
     ```
   - Tidak memerlukan `tailwind.config.js` terpisah kecuali untuk kustomisasi tema khusus.
2. **React JSX Standards:**
   - Selalu gunakan `className` untuk atribut styling kelas, bukan `class`.
   - Gunakan ES Module import untuk aset media/gambar (contoh: `import laptopImg from '../assets/img/Illustration.svg'`).
3. **Komponen Utama:**
   - [`src/main.jsx`](file:///c:/laragon/www/troubleshooting-tutorial-website/src/main.jsx) merender komponen [`src/app/App.jsx`](file:///c:/laragon/www/troubleshooting-tutorial-website/src/app/App.jsx).
   - Styling utama dimuat melalui [`src/assets/css/Style.css`](file:///c:/laragon/www/troubleshooting-tutorial-website/src/assets/css/Style.css).

