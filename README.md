# 🤖 HUMAN vs AI — Quiz Battle

**HUMAN vs AI — Quiz Battle** adalah aplikasi web game kuis interaktif modern bertema *Cyberpunk Technology Exhibition* di mana pemain berlomba menjawab pertanyaan kuis pengetahuan, logika, matematika, dan pola bertanding melawan Artificial Intelligence (AI).

Project ini dibangun murni menggunakan **HTML5, CSS3, dan JavaScript Vanilla (ES6+)** tanpa ketergantungan backend, database eksternal, maupun framework berat, sehingga **100% siap di-host secara gratis di GitHub Pages**.

---

## ✨ Fitur Utama

- 🎮 **Single Page Application (SPA)**: Perpindahan 7 layar (*Home, Player Name, Category, AI Selection, Quiz Gameplay, Result, Leaderboard*) secara mulus dengan JavaScript.
- 🧠 **Bank Soal Variatif (50+ Soal)**: Mencakup 5 kategori utama (**LOGIC**, **MATH**, **TECHNOLOGY**, **PATTERN**, **GENERAL KNOWLEDGE**, dan **RANDOM**).
- 🤖 **3 Level AI Pintar**:
  - 🟢 **Rookie AI** (Easy - ~70% Akurasi)
  - 🟡 **Smart AI** (Medium - ~85% Akurasi)
  - 🔴 **Genius AI** (Hard - ~95% Akurasi)
- ⏱️ **Timer 15 Detik & Bar Dominasi**: Timer countdown dengan indikator warna merah saat <5 detik serta bar dominasi skor real-time *YOU vs AI*.
- 🔥 **Sistem Combo**: Jawaban benar berturut-turut akan mengaktifkan *Combo Multiplier* (`x2`, `x3`, `x4`...) untuk poin bonus.
- 🏆 **Local Leaderboard (LocalStorage)**: Menyimpan rekor nama pemain, skor, akurasi, AI yang dikalahkan, dan tanggal pertandingan di browser tanpa butuh database online.
- 🎨 **Desain Futuristik Cyberpunk**: Animasi *glow neon*, *glassmorphism*, indikator *AI Thinking Scanning*, dan tata letak responsif untuk Desktop & Smartphone.
- 🔊 **Efek Suara Instan**: Ditenagai oleh Web Audio API Synthesizer (suara klik, jawaban benar, jawaban salah, & musik kemenangan).

---

## 📁 Struktur Folder

```text
human-vs-ai/
├── index.html       # Single Page Application HTML5 Structure
├── style.css        # Cyberpunk Neon & Glassmorphism Styling
├── script.js        # Logika Kuis, Bank 50 Soal, Probabilitas AI, Timer & Leaderboard
├── README.md        # Panduan penyiapan & deployment GitHub Pages
└── assets/
    ├── logo.svg     # Logo vector Cyber Shield Human vs AI
    └── sounds/      # Sound effect fallback (click.wav, correct.wav, wrong.wav, victory.wav)
```

---

## 🎮 Cara Memainkan Game

1. **Buka Game**: Buka file `index.html` pada web browser Anda.
2. **Halaman Utama**: Klik tombol **🚀 START BATTLE**.
3. **Identitas Pemain**: Masukkan nama Anda (misal: *CyberAlex*).
4. **Pilih Kategori**: Pilih bidang soal yang Anda kuasai (misal: *TECHNOLOGY* atau *RANDOM*).
5. **Pilih Lawan AI**: Tentukan lawan Anda (🟢 *Rookie*, 🟡 *Smart*, atau 🔴 *Genius*).
6. **Gameplay Kuis**: Jawab 10 pertanyaan sebelum timer 15 detik habis!
7. **Hasil & Rekor**: Kumpulkan total poin melebihi AI untuk meraih kemenangan dan masuk ke **Leaderboard**!

---


## 🛠️ Teknologi yang Digunakan

- **HTML5**: Elemen semantik SPA.
- **CSS3**: CSS Variables, Flexbox, Grid, Glassmorphic Backdrop Blur, & Neon Glowing Animations.
- **JavaScript (ES6+)**: Dynamic DOM manipulation, Web Audio API, `performance.now()`, & `localStorage`.

---
