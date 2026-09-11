/**
 * ===================================================================
 * HUMAN vs AI — Quiz Battle Logic (JavaScript ES6+)
 * 100% Match with Design Mockup & Features
 * ===================================================================
 */

// -------------------------------------------------------------------
// 1. BANK SOAL (50+ SOAL DALAM BAHASA INDONESIA)
// -------------------------------------------------------------------
const QUESTION_BANK = [
    // --- KATEGORI: LOGIC (10 Soal) ---
    {
        category: "LOGIC",
        text: "Jika semua A adalah B dan semua B adalah C, maka dapat disimpulkan bahwa...",
        options: ["Semua A adalah C", "Semua C adalah A", "Tidak ada hubungan antara A dan C", "Semua B adalah A"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Manakah pernyataan yang secara logis setara dengan: 'Jika besok hujan, maka lapangan basah'?",
        options: ["Jika lapangan tidak basah, maka besok tidak hujan", "Jika lapangan basah, maka besok hujan", "Jika besok tidak hujan, maka lapangan tidak basah", "Besok pasti hujan"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Beberapa mahasiswa adalah atlet. Semua atlet membutuhkan stamina tinggi. Maka...",
        options: ["Beberapa mahasiswa membutuhkan stamina tinggi", "Semua mahasiswa adalah atlet", "Semua orang berstamina tinggi adalah mahasiswa", "Atlet tidak ada yang mahasiswa"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Sebuah mobil hitam lebih cepat dari mobil merah. Mobil merah lebih cepat dari mobil biru. Maka...",
        options: ["Mobil hitam adalah yang tercepat dari ketiganya", "Mobil biru lebih cepat dari mobil hitam", "Mobil merah adalah yang tercepat", "Ketiga mobil kecepatannya sama"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Jika P -> Q bernilai BENAR, dan Q bernilai SALAH, maka nilai dari P adalah...",
        options: ["SALAH", "BENAR", "Bisa Benar atau Salah", "Tidak dapat ditentukan"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Ayah Mary punya 5 anak: Nana, Nene, Nini, Nono. Siapakah anak ke-5?",
        options: ["Mary", "Nunu", "Nene", "Nana"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Seorang pria melihat foto dan berkata: 'Adik/kakak saya tidak punya, tapi ayah pria ini adalah putra ayah saya.' Siapa di foto itu?",
        options: ["Anak laki-lakinya", "Ayahnya", "Dirinya sendiri", "Kakeknya"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Jika Hari Ini adalah hari setelah esok dari kemarin lusa, maka hari ini adalah...",
        options: ["Hari Ini", "Kemarin", "Besok", "Lusa"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Premis 1: Jika lampu hijau menyala, mobil berjalan. Premis 2: Mobil tidak berjalan. Kesimpulan?",
        options: ["Lampu hijau tidak menyala", "Lampu merah rusak", "Mobil mogok", "Lampu hijau menyala"],
        correctIndex: 0
    },
    {
        category: "LOGIC",
        text: "Semua robot membutuhkan listrik. Sebagian robot memiliki kecerdasan buatan (AI). Maka...",
        options: ["Sebagian robot yang ber-AI membutuhkan listrik", "Semua AI adalah robot", "Robot tidak butuh listrik jika ber-AI", "Semua listrik dibuat untuk AI"],
        correctIndex: 0
    },

    // --- KATEGORI: MATH (10 Soal) ---
    {
        category: "MATH",
        text: "Berapakah nilai dari 8 + 8 ÷ 4 × 2 - 1?",
        options: ["11", "7", "15", "9"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Jika x + 3y = 15 dan x = 3, berapakah nilai y?",
        options: ["4", "3", "5", "6"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Deret angka: 2, 4, 8, 16, 32, ... Berapakah angka selanjutnya?",
        options: ["64", "48", "52", "128"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Sebuah barang didiskon 20% dari harga Rp 100.000. Berapa harga setelah diskon?",
        options: ["Rp 80.000", "Rp 85.000", "Rp 75.000", "Rp 90.000"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah hasil dari 15% dari 200?",
        options: ["30", "25", "35", "40"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Pola angka: 3, 6, 11, 18, 27, ... Berapakah angka selanjutnya?",
        options: ["38", "36", "40", "42"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah akar kuadrat dari 144?",
        options: ["12", "14", "16", "10"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Jika 5 mesin membuat 5 widget dalam 5 menit, berapa menit yang dibutuhkan 100 mesin untuk membuat 100 widget?",
        options: ["5 menit", "100 menit", "1 menit", "50 menit"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah hasil dari (7 × 6) + (18 ÷ 3)?",
        options: ["48", "42", "46", "50"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Sebuah segitiga memiliki alas 10 cm dan tinggi 12 cm. Berapakah luasnya?",
        options: ["60 cm²", "120 cm²", "30 cm²", "90 cm²"],
        correctIndex: 0
    },

    // --- KATEGORI: TECH (10 Soal) ---
    {
        category: "TECH",
        text: "Apa kepanjangan dari singkatan 'AI' dalam dunia teknologi?",
        options: ["Artificial Intelligence", "Automated Information", "Advanced Integration", "Algorithm Interface"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Bahasa pemrograman mana yang paling populer digunakan untuk Machine Learning dan Data Science?",
        options: ["Python", "HTML", "C++", "PHP"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Komponen hardware mana yang sering disebut sebagai 'Otak' dari sebuah komputer?",
        options: ["CPU (Processor)", "RAM", "Harddisk / SSD", "Power Supply"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Protokol aman apa yang digunakan untuk enkripsi komunikasi di web (URL diawali https://)?",
        options: ["HTTPS / TLS", "HTTP", "FTP", "SMTP"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Istilah 'Cloud Computing' mengacu pada...",
        options: ["Penyimpanan dan komputasi melalui jaringan Internet", "Komputer buatan cuaca", "Kecepatan akses data secara offline", "Jaringan kabel bawah laut"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Sistem operasi opensource berbasis kernel Linux yang paling banyak digunakan di smartphone adalah...",
        options: ["Android", "iOS", "Windows Phone", "Symbian"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Siapakah tokoh pencetus istilah 'Artificial Intelligence' pada konferensi Dartmouth 1956?",
        options: ["John McCarthy", "Alan Turing", "Steve Jobs", "Bill Gates"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Model AI generasi baru buatan Google yang mampu memproses teks, audio, dan gambar secara multimodal adalah...",
        options: ["Gemini", "ChatGPT", "Claude", "Llama"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Satuan terkecil data dalam komputasi biner yang bernilai 0 atau 1 disebut...",
        options: ["Bit", "Byte", "Kilobyte", "Pixel"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Teknologi terdesentralisasi yang menjadi dasar dari aset Kripto (Cryptocurrency) adalah...",
        options: ["Blockchain", "Big Data", "Cloud Base", "Virtual Machine"],
        correctIndex: 0
    },

    // --- KATEGORI: PATTERN (10 Soal) ---
    {
        category: "PATTERN",
        text: "Lengkapi deret simbol pola: 🔺, 🔵, 🔺, 🔵, 🔺, ...",
        options: ["🔵", "🔺", "🟩", "⭐"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Manakah kelanjutan pola huruf ini: A, C, E, G, ...?",
        options: ["I", "H", "J", "K"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Perhatikan pola: (1, 2), (2, 4), (3, 6), (4, 8), (5, ...)",
        options: ["10", "9", "12", "15"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret angka berpola selisih: 5, 10, 20, 40, ... Angka berikutnya?",
        options: ["80", "60", "70", "100"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Analogi Kata: Kucing : Meong = Anjing : ...",
        options: ["Gonggong", "Ringkik", "Membawa", "Kokok"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Pola susunan kata: SENIN, SELASA, RABU, KAMIS, ...",
        options: ["JUMAT", "SABTU", "MINGGU", "LIBUR"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Analogi Geometri: Kubus : Persegi = Bola : ...",
        options: ["Lingkaran", "Segitiga", "Tabung", "Kerucut"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Lengkapi pola angka majemuk: 100, 95, 90, 85, ...",
        options: ["80", "75", "82", "84"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Pola urutan: Jan, Feb, Mar, Apr, ...",
        options: ["Mei", "Jun", "Jul", "Agu"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Analogi Hubungan: Mobil : Bensin = Manusia : ...",
        options: ["Makanan", "Pakaian", "Rumah", "Kendaraan"],
        correctIndex: 0
    },

    // --- KATEGORI: GENERAL (10 Soal) ---
    {
        category: "GENERAL",
        text: "Apakah nama planet terbesar di Tata Surya kita?",
        options: ["Jupiter", "Saturnus", "Bumi", "Mars"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Ibu kota dari negara Indonesia saat ini adalah...",
        options: ["Jakarta", "Nusantara (IKN)", "Bandung", "Surabaya"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Siapakah ilmuwan terkenal pencetus Teori Relativitas (E=mc²)?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Organ tubuh manusia yang berfungsi memompa darah ke seluruh tubuh adalah...",
        options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Unsur kimia dengan lambang 'O' dan nomor atom 8 adalah...",
        options: ["Oksigen", "Emas (Aurum)", "Hidrogen", "Nitrogen"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Benua terkecil di dunia berdasarkan luas daratannya adalah...",
        options: ["Australia", "Eropa", "Antartika", "Asia"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Candi Borobudur yang megah terletak di provinsi...",
        options: ["Jawa Tengah", "Jawa Timur", "DI Yogyakarta", "Jawa Barat"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Proses pembuatan makanan pada tumbuhan hijau menggunakan bantuan cahaya matahari disebut...",
        options: ["Fotosintesis", "Respirasi", "Klorofil", "Transpirasi"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Mata uang resmi negara Jepang adalah...",
        options: ["Yen", "Won", "Yuan", "Ringgit"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Laut terluas di dunia adalah Samudra...",
        options: ["Pasifik", "Atlantik", "Hindia", "Arktik"],
        correctIndex: 0
    }
];

// -------------------------------------------------------------------
// 2. STATE GAME & VARIABEL UTAMA
// -------------------------------------------------------------------
let gameState = {
    playerName: "Pemain",
    selectedCategory: "LOGIC",
    selectedAi: "smart", // rookie, smart, genius
    currentQuestionIndex: 0,
    questions: [],
    playerScore: 0,
    aiScore: 0,
    playerCorrectCount: 0,
    aiCorrectCount: 0,
    currentCombo: 0,
    bestCombo: 0,
    totalTimeSpent: 0,
    timer: 15,
    timerInterval: null,
    playerChoice: null,
    aiChoice: null,
    isAnswering: false
};

// Web Audio Synth Generator
class WebAudioSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playClick() {
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.05);
        } catch (e) {}
    }

    playCorrect() {
        if (!this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(now + 0.3);
        } catch (e) {}
    }

    playWrong() {
        if (!this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.2);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(now + 0.25);
        } catch (e) {}
    }
}

const audioSynth = new WebAudioSynth();

// -------------------------------------------------------------------
// 3. SPA VIEW SWITCHING LOGIC
// -------------------------------------------------------------------
function showScreen(screenId) {
    document.querySelectorAll('.view-screen').forEach(screen => {
        screen.classList.add('hidden');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }

    // Update active nav tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-target') === screenId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------------
// 4. INIT & EVENT LISTENERS
// -------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // Nav Tab Clicks
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            audioSynth.init();
            audioSynth.playClick();
            const target = tab.getAttribute('data-target');
            if (target) showScreen(target);
        });
    });

    // Home Action Buttons
    const homeStartBtn = document.getElementById('homeStartBtn');
    if (homeStartBtn) {
        homeStartBtn.addEventListener('click', () => {
            audioSynth.init();
            audioSynth.playClick();
            showScreen('screenPlayerName');
        });
    }

    document.getElementById('featCategoriesBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenCategory');
    });
    document.getElementById('featLeaderboardBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); loadLeaderboardData(); showScreen('screenLeaderboard');
    });
    document.getElementById('featAiBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenAiSelection');
    });
    document.getElementById('featProgressBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenLeaderboard');
    });

    // Player Name Continue
    const nameContinueBtn = document.getElementById('nameContinueBtn');
    const playerNameInput = document.getElementById('playerNameInput');
    const nameError = document.getElementById('nameError');

    if (nameContinueBtn) {
        nameContinueBtn.addEventListener('click', () => {
            audioSynth.init();
            audioSynth.playClick();
            const name = playerNameInput.value.trim();
            if (!name) {
                nameError.classList.remove('hidden');
                playerNameInput.focus();
                return;
            }
            nameError.classList.add('hidden');
            gameState.playerName = name;
            showScreen('screenCategory');
        });
    }

    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') nameContinueBtn.click();
        });
    }

    // Category Selection
    document.querySelectorAll('.cat-glass-card').forEach(card => {
        card.addEventListener('click', () => {
            audioSynth.init();
            audioSynth.playClick();
            document.querySelectorAll('.cat-glass-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            gameState.selectedCategory = card.getAttribute('data-category');
        });
    });

    document.getElementById('catBackBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenPlayerName');
    });
    document.getElementById('catNextBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenAiSelection');
    });

    // AI Selection
    document.querySelectorAll('.ai-robot-card').forEach(card => {
        card.addEventListener('click', () => {
            audioSynth.init();
            audioSynth.playClick();
            document.querySelectorAll('.ai-robot-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            gameState.selectedAi = card.getAttribute('data-ai');
        });
    });

    document.getElementById('aiBackBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenCategory');
    });
    document.getElementById('startQuizBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); startQuizGame();
    });

    // Quiz Options Clicks
    document.querySelectorAll('.opt-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (gameState.isAnswering) return;
            audioSynth.init();
            audioSynth.playClick();
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            handlePlayerAnswer(idx);
        });
    });

    // Next Question Button
    document.getElementById('nextQuestionBtn')?.addEventListener('click', () => {
        audioSynth.init();
        audioSynth.playClick();
        document.getElementById('aiOutcomeOverlay').classList.add('hidden');
        nextQuestion();
    });

    // Battle Result Buttons
    document.getElementById('resPlayAgainBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); startQuizGame();
    });
    document.getElementById('resChangeAiBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenAiSelection');
    });
    document.getElementById('resBackHomeBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenHome');
    });

    // Leaderboard Controls
    document.getElementById('lbBackBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenHome');
    });
    document.getElementById('clearLbBtn')?.addEventListener('click', clearLeaderboardData);

    // How to Play & Settings Back
    document.getElementById('howBackBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenHome');
    });
    document.getElementById('settingsBackBtn')?.addEventListener('click', () => {
        audioSynth.init(); audioSynth.playClick(); showScreen('screenHome');
    });

    document.getElementById('clearLeaderboardSettingBtn')?.addEventListener('click', clearLeaderboardData);

    // Load Initial Leaderboard Data
    loadLeaderboardData();
});

// -------------------------------------------------------------------
// 5. GAMEPLAY LOGIC & AI PROBABILITY ENGINE
// -------------------------------------------------------------------
function startQuizGame() {
    // Filter questions based on category
    let pool = [];
    if (gameState.selectedCategory === "RANDOM") {
        pool = [...QUESTION_BANK];
    } else {
        pool = QUESTION_BANK.filter(q => q.category === gameState.selectedCategory);
    }

    if (pool.length === 0) pool = [...QUESTION_BANK];

    // Shuffle and pick 10 questions
    pool.sort(() => Math.random() - 0.5);
    gameState.questions = pool.slice(0, 10);

    // Reset game counters
    gameState.currentQuestionIndex = 0;
    gameState.playerScore = 0;
    gameState.aiScore = 0;
    gameState.playerCorrectCount = 0;
    gameState.aiCorrectCount = 0;
    gameState.currentCombo = 0;
    gameState.bestCombo = 0;
    gameState.totalTimeSpent = 0;

    // Update names in Header
    document.getElementById('quizHumanName').textContent = gameState.playerName;
    const aiNames = { rookie: "Rookie AI", smart: "Smart AI", genius: "Genius AI" };
    document.getElementById('quizAiName').textContent = aiNames[gameState.selectedAi] || "AI";

    showScreen('screenQuiz');
    loadQuestion(0);
}

function loadQuestion(index) {
    if (index >= gameState.questions.length) {
        finishBattle();
        return;
    }

    const q = gameState.questions[index];
    gameState.currentQuestionIndex = index;
    gameState.isAnswering = false;

    // Update Counter & Scores
    document.getElementById('questionCounter').textContent = `Pertanyaan ${index + 1} dari ${gameState.questions.length}`;
    document.getElementById('playerScore').textContent = gameState.playerScore;
    document.getElementById('aiScore').textContent = gameState.aiScore;

    // Update Question & Options Text
    document.getElementById('questionText').textContent = q.text;

    // Shuffle option display while keeping track of correct option
    const optionBtns = document.querySelectorAll('.opt-pill-btn');
    const optionLabels = ["A", "B", "C", "D"];

    optionBtns.forEach((btn, idx) => {
        btn.className = "opt-pill-btn";
        btn.disabled = false;
        btn.querySelector('.opt-value').textContent = q.options[idx];
    });

    // Reset AI Overlay
    document.getElementById('aiOutcomeOverlay').classList.add('hidden');
    document.getElementById('aiThinkingState').classList.remove('hidden');
    document.getElementById('roundResultState').classList.add('hidden');

    // Start 15s Timer
    startTimer();
}

function startTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timer = 15;
    const timerText = document.getElementById('timerSeconds');
    const timerFill = document.getElementById('timerBarFill');

    timerText.textContent = `15s`;
    timerFill.style.width = `100%`;

    const startTime = Date.now();

    gameState.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(0, 15 - elapsed);
        gameState.timer = remaining;

        timerText.textContent = `${remaining}s`;
        const pct = (remaining / 15) * 100;
        timerFill.style.width = `${pct}%`;

        if (remaining <= 0) {
            clearInterval(gameState.timerInterval);
            if (!gameState.isAnswering) {
                handlePlayerAnswer(-1); // Timeout
            }
        }
    }, 200);
}

function handlePlayerAnswer(playerChoiceIdx) {
    gameState.isAnswering = true;
    clearInterval(gameState.timerInterval);

    const timeTaken = 15 - gameState.timer;
    gameState.totalTimeSpent += timeTaken;

    gameState.playerChoice = playerChoiceIdx;

    // Highlight selected option
    const optionBtns = document.querySelectorAll('.opt-pill-btn');
    optionBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === playerChoiceIdx) {
            btn.classList.add('selected');
        }
    });

    // Calculate AI Answer Choice based on difficulty accuracy probability
    const q = gameState.questions[gameState.currentQuestionIndex];
    let aiAccuracyProb = 0.70;
    if (gameState.selectedAi === "smart") aiAccuracyProb = 0.85;
    if (gameState.selectedAi === "genius") aiAccuracyProb = 0.95;

    const isAiCorrect = Math.random() < aiAccuracyProb;
    if (isAiCorrect) {
        gameState.aiChoice = q.correctIndex;
    } else {
        // Pick wrong option
        const wrongOpts = [0, 1, 2, 3].filter(i => i !== q.correctIndex);
        gameState.aiChoice = wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
    }

    // Show AI Thinking Scan Overlay
    const overlay = document.getElementById('aiOutcomeOverlay');
    const thinkingState = document.getElementById('aiThinkingState');
    const roundResultState = document.getElementById('roundResultState');

    overlay.classList.remove('hidden');
    thinkingState.classList.remove('hidden');
    roundResultState.classList.add('hidden');

    // Simulate AI thinking delay (1.2 seconds)
    setTimeout(() => {
        thinkingState.classList.add('hidden');
        roundResultState.classList.remove('hidden');
        evaluateRoundResult(q);
    }, 1200);
}

function evaluateRoundResult(q) {
    const isPlayerCorrect = (gameState.playerChoice === q.correctIndex);
    const isAiCorrect = (gameState.aiChoice === q.correctIndex);

    // Calculate Scores & Combos
    if (isPlayerCorrect) {
        gameState.playerCorrectCount++;
        gameState.currentCombo++;
        if (gameState.currentCombo > gameState.bestCombo) {
            gameState.bestCombo = gameState.currentCombo;
        }

        const baseScore = 100;
        const timeBonus = gameState.timer * 10;
        const comboBonus = (gameState.currentCombo - 1) * 25;
        gameState.playerScore += (baseScore + timeBonus + comboBonus);
        audioSynth.playCorrect();
    } else {
        gameState.currentCombo = 0;
        audioSynth.playWrong();
    }

    if (isAiCorrect) {
        gameState.aiCorrectCount++;
        const baseScore = 100;
        const aiTimeBonus = Math.floor(Math.random() * 8 + 5) * 10;
        gameState.aiScore += (baseScore + aiTimeBonus);
    }

    // Update Score Display
    document.getElementById('playerScore').textContent = gameState.playerScore;
    document.getElementById('aiScore').textContent = gameState.aiScore;

    // Option Keys A, B, C, D
    const keys = ["A", "B", "C", "D"];

    const playerChoiceTag = document.getElementById('playerChoiceTag');
    const playerCorrectBadge = document.getElementById('playerCorrectBadge');
    const aiChoiceTag = document.getElementById('aiChoiceTag');
    const aiCorrectBadge = document.getElementById('aiCorrectBadge');
    const outcomeBanner = document.getElementById('outcomeBannerBadge');
    const outcomeBannerText = document.getElementById('outcomeBannerText');

    playerChoiceTag.textContent = gameState.playerChoice >= 0 ? keys[gameState.playerChoice] : "TIMEOUT";
    playerChoiceTag.className = isPlayerCorrect ? "c-val correct" : "c-val wrong";
    playerCorrectBadge.textContent = isPlayerCorrect ? "Benar ✓" : "Salah ✗";
    playerCorrectBadge.className = isPlayerCorrect ? "c-badge correct" : "c-badge wrong";

    aiChoiceTag.textContent = keys[gameState.aiChoice];
    aiChoiceTag.className = isAiCorrect ? "c-val correct" : "c-val wrong";
    aiCorrectBadge.textContent = isAiCorrect ? "Benar ✓" : "Salah ✗";
    aiCorrectBadge.className = isAiCorrect ? "c-badge correct" : "c-badge wrong";

    if (isPlayerCorrect && !isAiCorrect) {
        outcomeBanner.className = "outcome-badge-banner correct";
        outcomeBannerText.innerHTML = `<strong>KAMU MENGALAHKAN AI!</strong><br><small>Kamu benar, AI salah!</small>`;
    } else if (!isPlayerCorrect && isAiCorrect) {
        outcomeBanner.className = "outcome-badge-banner wrong";
        outcomeBannerText.innerHTML = `<strong>AI UNGGUL ROUND INI!</strong><br><small>AI benar, kamu salah!</small>`;
    } else if (isPlayerCorrect && isAiCorrect) {
        outcomeBanner.className = "outcome-badge-banner correct";
        outcomeBannerText.innerHTML = `<strong>SERI (SERUPA)!</strong><br><small>Keduanya berhasil menjawab benar!</small>`;
    } else {
        outcomeBanner.className = "outcome-badge-banner wrong";
        outcomeBannerText.innerHTML = `<strong>KEDUANYA SALAH!</strong><br><small>Tidak ada yang mendapat poin sempurna.</small>`;
    }

    // Highlight correct & wrong options in quiz grid
    const optionBtns = document.querySelectorAll('.opt-pill-btn');
    optionBtns.forEach((btn, idx) => {
        if (idx === q.correctIndex) {
            btn.classList.add('correct');
        } else if (idx === gameState.playerChoice && !isPlayerCorrect) {
            btn.classList.add('wrong');
        }
    });
}

function nextQuestion() {
    loadQuestion(gameState.currentQuestionIndex + 1);
}

// -------------------------------------------------------------------
// 6. FINISH BATTLE & LEADERBOARD MANAGEMENT
// -------------------------------------------------------------------
function finishBattle() {
    showScreen('screenResult');

    document.getElementById('resHumanScore').textContent = gameState.playerScore;
    document.getElementById('resAiScore').textContent = gameState.aiScore;

    const winnerBanner = document.getElementById('winnerBanner');
    const winnerTitleText = document.getElementById('winnerTitleText');

    if (gameState.playerScore > gameState.aiScore) {
        winnerBanner.className = "winner-outcome-banner win";
        winnerTitleText.textContent = "KAMU MENANG MENGALAHKAN AI!";
    } else if (gameState.playerScore < gameState.aiScore) {
        winnerBanner.className = "winner-outcome-banner lose";
        winnerTitleText.textContent = "AI MEMENANGKAN PERTANDINGAN!";
    } else {
        winnerBanner.className = "winner-outcome-banner tie";
        winnerTitleText.textContent = "PERTANDINGAN SERI!";
    }

    const accuracy = Math.round((gameState.playerCorrectCount / 10) * 100);
    const avgTime = (gameState.totalTimeSpent / 10).toFixed(1);

    document.getElementById('statQuestions').textContent = "10";
    document.getElementById('statCorrect').textContent = `${gameState.playerCorrectCount} / 10`;
    document.getElementById('statAccuracy').textContent = `${accuracy}%`;
    document.getElementById('statAvgTime').textContent = `${avgTime}s`;
    document.getElementById('statBestCombo').textContent = `x${gameState.bestCombo}`;
    document.getElementById('statCategory').textContent = gameState.selectedCategory;

    const aiNames = { rookie: "Rookie AI", smart: "Smart AI", genius: "Genius AI" };
    document.getElementById('statAiOpponent').textContent = aiNames[gameState.selectedAi] || "AI";

    // Save Score Record to LocalStorage
    saveLeaderboardEntry({
        name: gameState.playerName,
        score: gameState.playerScore,
        accuracy: `${accuracy}%`,
        ai: aiNames[gameState.selectedAi] || "AI",
        category: gameState.selectedCategory,
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
    });
}

function saveLeaderboardEntry(entry) {
    let lb = JSON.parse(localStorage.getItem('human_vs_ai_leaderboard') || '[]');
    lb.push(entry);
    lb.sort((a, b) => b.score - a.score);
    lb = lb.slice(0, 20); // Keep top 20
    localStorage.setItem('human_vs_ai_leaderboard', JSON.stringify(lb));
}

function loadLeaderboardData() {
    const tbody = document.getElementById('leaderboardTbody');
    const emptyMsg = document.getElementById('emptyLbMsg');

    if (!tbody) return;
    tbody.innerHTML = '';

    const lb = JSON.parse(localStorage.getItem('human_vs_ai_leaderboard') || '[]');

    if (lb.length === 0) {
        if (emptyMsg) emptyMsg.classList.remove('hidden');
        return;
    }

    if (emptyMsg) emptyMsg.classList.add('hidden');

    lb.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>#${idx + 1}</strong></td>
            <td>${escapeHtml(item.name)}</td>
            <td><strong style="color: #38bdf8;">${item.score}</strong></td>
            <td>${item.accuracy}</td>
            <td>${item.ai}</td>
            <td>${item.category}</td>
            <td><small>${item.date}</small></td>
        `;
        tbody.appendChild(tr);
    });
}

function clearLeaderboardData() {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh data papan skor?')) {
        localStorage.removeItem('human_vs_ai_leaderboard');
        loadLeaderboardData();
    }
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
}
