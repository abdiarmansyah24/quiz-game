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
        text: "Berapakah akar kuadrat dari 144 dikali 5?",
        options: ["60", "50", "72", "48"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapa kelilingnya? (π ≈ 22/7)",
        options: ["44 cm", "154 cm", "88 cm", "22 cm"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah hasil dari 2 pangkat 10 (2¹⁰)?",
        options: ["1024", "512", "2048", "1000"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Rata-rata dari nilai 10, 20, 30, 40, dan 50 adalah...",
        options: ["30", "25", "35", "40"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah 15% dari 200?",
        options: ["30", "25", "35", "40"],
        correctIndex: 0
    },
    {
        category: "MATH",
        text: "Berapakah sisa pembagian (modulo) dari 29 mod 4?",
        options: ["1", "2", "3", "0"],
        correctIndex: 0
    },

    // --- KATEGORI: TECH (10 Soal) ---
    {
        category: "TECH",
        text: "Apakah kepanjangan dari istilah AI dalam dunia teknologi?",
        options: ["Artificial Intelligence", "Automated Information", "Advanced Integration", "Algorithm Interface"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Manakah bahasa pemrograman yang paling populer digunakan dalam pembelajaran Machine Learning?",
        options: ["Python", "HTML", "CSS", "PHP"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Komponen hardware yang berfungsi sebagai 'otak' pemrosesan utama komputer adalah...",
        options: ["CPU", "RAM", "SSD", "GPU"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Apakah fungsi utama dari sistem RAM (Random Access Memory) pada komputer?",
        options: ["Penyimpanan data sementara kecepatan tinggi", "Penyimpanan dokumen permanen", "Pemrosesan grafis 3D", "Menyuplai daya ke motherboard"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Protokol keamanan web yang ditandai dengan ikon gembok aman (HTTPS) menggunakan enkripsi...",
        options: ["SSL / TLS", "FTP", "HTTP Plain", "SMTP"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Siapakah pencipta dan pendiri World Wide Web (WWW) pertama kali?",
        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Istilah 'Open Source' dalam perangkat lunak berarti...",
        options: ["Kode sumber terbuka dan bebas diakses/dimodifikasi", "Software berbayar lisensi mahal", "Software tanpa garansi keamanan", "Software khusus buatan pemerintah"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Struktur data yang menganut prinsip LIFO (Last In First Out) adalah...",
        options: ["Stack", "Queue", "Array", "Linked List"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Teknologi jaringan seluler generasi ke-5 yang menawarkan kecepatan ultra tinggi dinamakan...",
        options: ["5G", "4G LTE", "Wi-Fi 6", "Bluetooth 5"],
        correctIndex: 0
    },
    {
        category: "TECH",
        text: "Model kecerdasan buatan ChatGPT dikembangkan oleh perusahaan teknologi...",
        options: ["OpenAI", "Google", "Microsoft", "Meta"],
        correctIndex: 0
    },

    // --- KATEGORI: PATTERN (10 Soal) ---
    {
        category: "PATTERN",
        text: "Perhatikan deret huruf: A, C, E, G, ... Huruf berikutnya adalah?",
        options: ["I", "H", "J", "K"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret angka Fibonacci: 1, 1, 2, 3, 5, 8, ... Berapakah angka selanjutnya?",
        options: ["13", "11", "12", "15"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret angka: 3, 6, 12, 24, 48, ... Pola perkalian deret ini adalah multiplier berapa?",
        options: ["x2", "x3", "+3", "+6"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Perhatikan pola: 100, 95, 85, 70, 50, ... Angka berikutnya adalah?",
        options: ["25", "30", "35", "20"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Pola kata: Kucing -> Gambar -> Rumah -> ... (Perhatikan huruf terakhir menjadi huruf awal). Kata berikut yang sesuai?",
        options: ["Harimau", "Mobil", "Buku", "Sepeda"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret angka: 5, 10, 7, 12, 9, 14, ... Angka berikutnya adalah?",
        options: ["11", "16", "13", "10"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret huruf berpola: Z, Y, X, W, ... Huruf berikutnya adalah?",
        options: ["V", "U", "T", "S"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Jika 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, berapakah nilai dari 6 (berdasarkan jumlah huruf kata)?",
        options: ["3 (Enam)", "6", "4", "5"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Pola kombinasi: 1A, 2B, 4C, 8D, ... Pasangan berikutnya adalah?",
        options: ["16E", "12E", "16F", "10E"],
        correctIndex: 0
    },
    {
        category: "PATTERN",
        text: "Deret angka kuadrat: 1, 4, 9, 16, 25, 36, ... Angka berikutnya adalah?",
        options: ["49", "42", "64", "56"],
        correctIndex: 0
    },

    // --- KATEGORI: GENERAL (10 Soal) ---
    {
        category: "GENERAL",
        text: "Planet manakah yang dikenal sebagai 'Planet Merah' dalam sistem tata surya kita?",
        options: ["Mars", "Venus", "Yupiter", "Merkurius"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Apakah nama organ tubuh manusia yang bertanggung jawab memompa darah ke seluruh tubuh?",
        options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Senyawa kimia dengan rumus H₂O dalam kehidupan sehari-hari adalah...",
        options: ["Air", "Oksigen", "Garam", "Karbon Dioksida"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Siapakah ilmuwan terkenal yang merumuskan Teori Relativitas (E = mc²)?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Candi Borobudur yang megah terletak di provinsi...",
        options: ["Jawa Tengah", "D.I. Yogyakarta", "Jawa Timur", "Jawa Barat"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Bahasa resmi yang paling banyak digunakan sebagai bahasa internasional dunia adalah...",
        options: ["Bahasa Inggris", "Bahasa Mandarin", "Bahasa Spanyol", "Bahasa Perancis"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Gas utama yang paling melimpah di atmosfer bumi (sekitar 78%) adalah...",
        options: ["Nitrogen", "Oksigen", "Argon", "Karbon Dioksida"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Hewan mamalia terbesar yang hidup di muka bumi saat ini adalah...",
        options: ["Paus Biru", "Gajah Afrika", "Hiu Paus", "Jerapah"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Benua terkecil di dunia berdasarkan luas wilayah daratan adalah...",
        options: ["Australia", "Eropa", "Antartika", "Amerika Selatan"],
        correctIndex: 0
    },
    {
        category: "GENERAL",
        text: "Proses pembuat makanan pada tumbuhan hijau menggunakan bantuan sinar matahari dinamakan...",
        options: ["Fotosintesis", "Respirasi", "Transpirasi", "Oksidasi"],
        correctIndex: 0
    }
];

// -------------------------------------------------------------------
// 2. STATE MANAGEMENT
// -------------------------------------------------------------------
let playerName = "Amalia";
let selectedCategory = "LOGIC";
let selectedAiLevel = "smart";

let sessionQuestions = [];
let currentQuestionIndex = 0;

let playerScore = 0;
let aiScore = 0;

let playerCorrectCount = 0;
let aiCorrectCount = 0;

let comboCount = 0;
let bestCombo = 0;

let timerInterval = null;
let timeRemaining = 15;
let totalAnswerTime = 0;
let questionStartTime = 0;

let isAnswered = false;
let isSoundMuted = localStorage.getItem('human_ai_sound_muted') === 'true';

let leaderboardData = JSON.parse(localStorage.getItem('human_ai_leaderboard')) || [];

// -------------------------------------------------------------------
// 3. DOM ELEMENTS SELECTION
// -------------------------------------------------------------------
const views = {
    screenHome: document.getElementById('screenHome'),
    screenPlayerName: document.getElementById('screenPlayerName'),
    screenCategory: document.getElementById('screenCategory'),
    screenAiSelection: document.getElementById('screenAiSelection'),
    screenQuiz: document.getElementById('screenQuiz'),
    screenResult: document.getElementById('screenResult'),
    screenLeaderboard: document.getElementById('screenLeaderboard'),
    screenHowToPlay: document.getElementById('screenHowToPlay'),
    screenSettings: document.getElementById('screenSettings')
};

const navTabs = document.querySelectorAll('.nav-tab');
const navBrandLink = document.getElementById('navBrandLink');

// Buttons
const homeStartBtn = document.getElementById('homeStartBtn');

const playerNameInput = document.getElementById('playerNameInput');
const nameError = document.getElementById('nameError');
const nameContinueBtn = document.getElementById('nameContinueBtn');

const categoryCards = document.querySelectorAll('.cat-glass-card');
const catBackBtn = document.getElementById('catBackBtn');
const catNextBtn = document.getElementById('catNextBtn');

const aiCards = document.querySelectorAll('.ai-robot-card');
const aiBackBtn = document.getElementById('aiBackBtn');
const startQuizBtn = document.getElementById('startQuizBtn');

// Quiz View
const quizHumanName = document.getElementById('quizHumanName');
const quizAiName = document.getElementById('quizAiName');
const playerScoreEl = document.getElementById('playerScore');
const aiScoreEl = document.getElementById('aiScore');

const questionCounter = document.getElementById('questionCounter');
const timerSeconds = document.getElementById('timerSeconds');
const timerBarFill = document.getElementById('timerBarFill');

const questionText = document.getElementById('questionText');
const optionButtons = document.querySelectorAll('.opt-pill-btn');

const aiOutcomeOverlay = document.getElementById('aiOutcomeOverlay');
const aiThinkingState = document.getElementById('aiThinkingState');
const roundResultState = document.getElementById('roundResultState');
const outcomeBannerBadge = document.getElementById('outcomeBannerBadge');
const outcomeBannerText = document.getElementById('outcomeBannerText');
const playerChoiceTag = document.getElementById('playerChoiceTag');
const playerCorrectBadge = document.getElementById('playerCorrectBadge');
const aiChoiceTag = document.getElementById('aiChoiceTag');
const aiCorrectBadge = document.getElementById('aiCorrectBadge');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');

// Result View
const resHumanScore = document.getElementById('resHumanScore');
const resAiScore = document.getElementById('resAiScore');
const winnerBanner = document.getElementById('winnerBanner');
const winnerTitleText = document.getElementById('winnerTitleText');

const statQuestions = document.getElementById('statQuestions');
const statCorrect = document.getElementById('statCorrect');
const statAccuracy = document.getElementById('statAccuracy');
const statAvgTime = document.getElementById('statAvgTime');
const statBestCombo = document.getElementById('statBestCombo');
const statCategory = document.getElementById('statCategory');
const statAiOpponent = document.getElementById('statAiOpponent');

const resPlayAgainBtn = document.getElementById('resPlayAgainBtn');
const resChangeAiBtn = document.getElementById('resChangeAiBtn');
const resBackHomeBtn = document.getElementById('resBackHomeBtn');

// Leaderboard View
const leaderboardTbody = document.getElementById('leaderboardTbody');
const emptyLbMsg = document.getElementById('emptyLbMsg');
const lbBackBtn = document.getElementById('lbBackBtn');
const clearLbBtn = document.getElementById('clearLbBtn');

// How to Play & Settings
const howBackBtn = document.getElementById('howBackBtn');
const settingsBackBtn = document.getElementById('settingsBackBtn');
const soundEffectsToggle = document.getElementById('soundEffectsToggle');
const resetGameDataBtn = document.getElementById('resetGameDataBtn');
const clearLeaderboardSettingBtn = document.getElementById('clearLeaderboardSettingBtn');

const clickAudioFallback = document.getElementById('clickAudioFallback');

// -------------------------------------------------------------------
// 4. AUDIO SYNTHESIZER
// -------------------------------------------------------------------
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playSound(type) {
    if (isSoundMuted) return;

    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } else if (type === 'correct') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.setValueAtTime(140, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } else if (type === 'victory') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12);
            osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24);
            gain.gain.setValueAtTime(0.4, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        }
    } catch (e) {}
}

// -------------------------------------------------------------------
// 5. SCREEN ROUTER & NAVIGATION
// -------------------------------------------------------------------
function showScreen(screenId) {
    Object.keys(views).forEach(k => {
        if (views[k]) views[k].classList.add('hidden');
    });

    if (views[screenId]) {
        views[screenId].classList.remove('hidden');
    }

    // Update nav tab active status
    navTabs.forEach(tab => {
        if (tab.dataset.target === screenId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    playSound('click');
}

// -------------------------------------------------------------------
// 6. INITIALIZATION & EVENT LISTENERS
// -------------------------------------------------------------------
function initApp() {
    navBrandLink.addEventListener('click', () => {
        clearInterval(timerInterval);
        showScreen('screenHome');
    });

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            if (target === 'screenLeaderboard') renderLeaderboard();
            showScreen(target);
        });
    });

    homeStartBtn.addEventListener('click', () => showScreen('screenPlayerName'));

    if (nameContinueBtn) nameContinueBtn.addEventListener('click', handleNameSubmit);
    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleNameSubmit();
        });
    }

    const featCat = document.getElementById('featCategoriesBtn');
    const featLb = document.getElementById('featLeaderboardBtn');
    const featAi = document.getElementById('featAiBtn');
    const featProg = document.getElementById('featProgressBtn');

    if (featCat) featCat.addEventListener('click', () => showScreen('screenPlayerName'));
    if (featLb) featLb.addEventListener('click', () => showScreen('screenLeaderboard'));
    if (featAi) featAi.addEventListener('click', () => showScreen('screenPlayerName'));
    if (featProg) featProg.addEventListener('click', () => showScreen('screenLeaderboard'));

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedCategory = card.dataset.category;
            playSound('click');
        });
    });

    catBackBtn.addEventListener('click', () => showScreen('screenPlayerName'));
    catNextBtn.addEventListener('click', () => showScreen('screenAiSelection'));

    aiCards.forEach(card => {
        card.addEventListener('click', () => {
            aiCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedAiLevel = card.dataset.ai;
            playSound('click');
        });
    });

    aiBackBtn.addEventListener('click', () => showScreen('screenCategory'));
    startQuizBtn.addEventListener('click', startNewQuizBattle);

    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedIdx = parseInt(btn.dataset.index);
            handlePlayerAnswer(selectedIdx);
        });
    });

    nextQuestionBtn.addEventListener('click', advanceToNextQuestion);

    resPlayAgainBtn.addEventListener('click', startNewQuizBattle);
    resChangeAiBtn.addEventListener('click', () => showScreen('screenAiSelection'));
    resBackHomeBtn.addEventListener('click', () => showScreen('screenHome'));

    lbBackBtn.addEventListener('click', () => showScreen('screenHome'));
    clearLbBtn.addEventListener('click', clearLeaderboard);

    howBackBtn.addEventListener('click', () => showScreen('screenHome'));
    settingsBackBtn.addEventListener('click', () => showScreen('screenHome'));

    if (resetGameDataBtn) {
        resetGameDataBtn.addEventListener('click', () => {
            if (confirm("Reset seluruh data game & rekor?")) {
                localStorage.clear();
                location.reload();
            }
        });
    }

    if (clearLeaderboardSettingBtn) {
        clearLeaderboardSettingBtn.addEventListener('click', clearLeaderboard);
    }

    showScreen('screenHome');
}

function handleNameSubmit() {
    const val = playerNameInput.value.trim();
    if (!val) {
        nameError.classList.remove('hidden');
        playerNameInput.focus();
        return;
    }

    nameError.classList.add('hidden');
    playerName = val;
    showScreen('screenCategory');
}

// -------------------------------------------------------------------
// 7. QUIZ BATTLE ENGINE & GAMEPLAY LOGIC
// -------------------------------------------------------------------
function startNewQuizBattle() {
    sessionQuestions = prepareQuestions(selectedCategory, 10);
    
    currentQuestionIndex = 0;
    playerScore = 0;
    aiScore = 0;
    playerCorrectCount = 0;
    aiCorrectCount = 0;
    comboCount = 0;
    bestCombo = 0;
    totalAnswerTime = 0;

    quizHumanName.textContent = playerName;
    
    let aiDisplayName = "AI";
    if (selectedAiLevel === "rookie") aiDisplayName = "Rookie AI";
    if (selectedAiLevel === "smart") aiDisplayName = "Smart AI";
    if (selectedAiLevel === "genius") aiDisplayName = "Genius AI";
    quizAiName.textContent = aiDisplayName;

    updateScoreboardUI();
    showScreen('screenQuiz');
    
    loadQuestion(0);
}

function prepareQuestions(cat, count = 10) {
    let pool = [];
    if (cat === "RANDOM") {
        pool = [...QUESTION_BANK];
    } else {
        pool = QUESTION_BANK.filter(q => q.category === cat);
    }

    if (pool.length < count) {
        const others = QUESTION_BANK.filter(q => !pool.includes(q));
        pool = [...pool, ...others];
    }

    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, count).map(q => {
        const originalCorrectOption = q.options[q.correctIndex];
        const shuffledOptions = [...q.options];
        
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOption);
        return {
            text: q.text,
            options: shuffledOptions,
            correctIndex: newCorrectIndex,
            category: q.category
        };
    });
}

function loadQuestion(index) {
    isAnswered = false;

    const q = sessionQuestions[index];
    questionCounter.textContent = `Question ${index + 1} of 10`;
    questionText.textContent = q.text;

    optionButtons.forEach((btn, i) => {
        btn.disabled = false;
        btn.className = "opt-pill-btn";
        const optVal = btn.querySelector('.opt-value');
        if (optVal) optVal.textContent = q.options[i];
    });

    aiOutcomeOverlay.classList.add('hidden');
    aiThinkingState.classList.remove('hidden');
    roundResultState.classList.add('hidden');

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = 15;
    questionStartTime = performance.now();

    timerSeconds.textContent = `${timeRemaining}s`;
    timerBarFill.style.width = '100%';

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerSeconds.textContent = `${timeRemaining}s`;
        
        const pct = (timeRemaining / 15) * 100;
        timerBarFill.style.width = `${pct}%`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handlePlayerTimeout();
        }
    }, 1000);
}

function handlePlayerAnswer(selectedIdx) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);

    const timeSpent = (performance.now() - questionStartTime) / 1000;
    totalAnswerTime += timeSpent;

    const currentQ = sessionQuestions[currentQuestionIndex];
    const isPlayerCorrect = (selectedIdx === currentQ.correctIndex);

    optionButtons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === selectedIdx) {
            btn.classList.add('selected');
        }
    });

    processRoundOutcome(isPlayerCorrect, selectedIdx, timeRemaining);
}

function handlePlayerTimeout() {
    if (isAnswered) return;
    isAnswered = true;

    totalAnswerTime += 15;
    optionButtons.forEach(btn => btn.disabled = true);

    processRoundOutcome(false, -1, 0);
}

function processRoundOutcome(isPlayerCorrect, playerChoiceIdx, remainingSec) {
    const currentQ = sessionQuestions[currentQuestionIndex];
    
    aiOutcomeOverlay.classList.remove('hidden');
    aiThinkingState.classList.remove('hidden');
    roundResultState.classList.add('hidden');

    let aiAccuracyProb = 0.70;
    if (selectedAiLevel === "smart") aiAccuracyProb = 0.85;
    if (selectedAiLevel === "genius") aiAccuracyProb = 0.95;

    const isAiCorrect = Math.random() < aiAccuracyProb;
    let aiChoiceIdx = currentQ.correctIndex;

    if (!isAiCorrect) {
        const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== currentQ.correctIndex);
        aiChoiceIdx = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
    }

    const optionLetters = ['A', 'B', 'C', 'D'];
    const playerChoiceLetter = playerChoiceIdx >= 0 ? optionLetters[playerChoiceIdx] : '-';
    const aiChoiceLetter = optionLetters[aiChoiceIdx] || 'A';

    setTimeout(() => {
        aiThinkingState.classList.add('hidden');
        roundResultState.classList.remove('hidden');

        playerChoiceTag.textContent = playerChoiceLetter;
        aiChoiceTag.textContent = aiChoiceLetter;

        if (isPlayerCorrect) {
            playerCorrectBadge.textContent = "Correct ✓";
            playerCorrectBadge.className = "c-badge correct";
            playerChoiceTag.className = "c-val correct";
        } else {
            playerCorrectBadge.textContent = "Wrong ✗";
            playerCorrectBadge.className = "c-badge wrong";
            playerChoiceTag.className = "c-val wrong";
        }

        if (isAiCorrect) {
            aiCorrectBadge.textContent = "Correct ✓";
            aiCorrectBadge.className = "c-badge correct";
            aiChoiceTag.className = "c-val correct";
        } else {
            aiCorrectBadge.textContent = "Wrong ✗";
            aiCorrectBadge.className = "c-badge wrong";
            aiChoiceTag.className = "c-val wrong";
        }

        if (isPlayerCorrect) {
            playerCorrectCount++;
            comboCount++;
            if (comboCount > bestCombo) bestCombo = comboCount;

            const basePts = 100;
            const speedBonus = Math.round((remainingSec / 15) * 50);
            playerScore += (basePts + speedBonus);
            playSound('correct');
        } else {
            comboCount = 0;
            playSound('wrong');
        }

        if (isAiCorrect) {
            aiCorrectCount++;
            const aiBasePts = 100;
            const aiSpeedBonus = Math.floor(Math.random() * 30) + 10;
            aiScore += (aiBasePts + aiSpeedBonus);
        }

        if (isPlayerCorrect && !isAiCorrect) {
            outcomeBannerBadge.className = "outcome-badge-banner correct";
            outcomeBannerText.innerHTML = "YOU OUTSMARTED THE AI!<br><small>Kamu benar, AI salah!</small>";
        } else if (!isPlayerCorrect && isAiCorrect) {
            outcomeBannerBadge.className = "outcome-badge-banner wrong";
            outcomeBannerText.innerHTML = "AI GOT THIS ONE!<br><small>AI benar, kamu salah!</small>";
        } else if (isPlayerCorrect && isAiCorrect) {
            outcomeBannerBadge.className = "outcome-badge-banner correct";
            outcomeBannerText.innerHTML = "BOTH GOT IT RIGHT!<br><small>Keduanya menjawab benar!</small>";
        } else {
            outcomeBannerBadge.className = "outcome-badge-banner wrong";
            outcomeBannerText.innerHTML = "NOBODY GOT IT RIGHT!<br><small>Tidak ada yang benar!</small>";
        }

        updateScoreboardUI();

    }, 1200);
}

function advanceToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        loadQuestion(currentQuestionIndex);
    } else {
        finishQuizBattle();
    }
}

function updateScoreboardUI() {
    playerScoreEl.textContent = playerScore;
    aiScoreEl.textContent = aiScore;
}

function finishQuizBattle() {
    const accuracyPct = Math.round((playerCorrectCount / 10) * 100);
    const avgTimeSec = (totalAnswerTime / 10).toFixed(1);

    resHumanScore.textContent = playerScore;
    resAiScore.textContent = aiScore;

    let aiLabel = "Smart AI";
    if (selectedAiLevel === "rookie") aiLabel = "Rookie AI";
    if (selectedAiLevel === "genius") aiLabel = "Genius AI";

    if (playerScore > aiScore) {
        winnerBanner.className = "winner-outcome-banner win";
        winnerTitleText.textContent = "YOU WIN!";
        playSound('victory');
    } else if (aiScore > playerScore) {
        winnerBanner.className = "winner-outcome-banner lose";
        winnerTitleText.textContent = "AI WINS!";
        playSound('wrong');
    } else {
        winnerBanner.className = "winner-outcome-banner draw";
        winnerTitleText.textContent = "IT'S A DRAW!";
        playSound('correct');
    }

    statQuestions.textContent = "10";
    statCorrect.textContent = `${playerCorrectCount}`;
    statAccuracy.textContent = `${accuracyPct}%`;
    statAvgTime.textContent = `${avgTimeSec}s`;
    statBestCombo.textContent = `x${bestCombo}`;
    statCategory.textContent = getCategoryLabel(selectedCategory);
    statAiOpponent.textContent = aiLabel;

    saveToLeaderboard({
        name: playerName,
        score: playerScore,
        accuracy: `${accuracyPct}%`,
        aiDefeated: aiLabel,
        category: getCategoryLabel(selectedCategory),
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
    });

    showScreen('screenResult');
}

// -------------------------------------------------------------------
// 8. LEADERBOARD SYSTEM (LOCALSTORAGE)
// -------------------------------------------------------------------
function saveToLeaderboard(record) {
    leaderboardData.push(record);
    leaderboardData.sort((a, b) => b.score - a.score);
    leaderboardData = leaderboardData.slice(0, 20);

    localStorage.setItem('human_ai_leaderboard', JSON.stringify(leaderboardData));
}

function renderLeaderboard() {
    leaderboardTbody.innerHTML = '';

    if (leaderboardData.length === 0) {
        emptyLbMsg.classList.remove('hidden');
        return;
    }

    emptyLbMsg.classList.add('hidden');

    leaderboardData.forEach((row, index) => {
        const tr = document.createElement('tr');
        const rankBadge = index === 0 ? '🥇 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : `${index + 1}`;

        tr.innerHTML = `
            <td><strong>${rankBadge}</strong></td>
            <td><strong>${escapeHtml(row.name)}</strong></td>
            <td style="color: var(--gold-accent); font-weight: 800;">${row.score}</td>
            <td>${row.accuracy}</td>
            <td>${row.aiDefeated}</td>
            <td>${row.category}</td>
            <td style="color: var(--text-muted); font-size: 0.78rem;">${row.date}</td>
        `;
        leaderboardTbody.appendChild(tr);
    });
}

function clearLeaderboard() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh data Papan Skor?")) {
        leaderboardData = [];
        localStorage.removeItem('human_ai_leaderboard');
        renderLeaderboard();
        alert("Papan Skor berhasil dibersihkan!");
    }
}

// -------------------------------------------------------------------
// 9. UTILITIES & HELPERS
// -------------------------------------------------------------------
function getCategoryLabel(cat) {
    const labels = {
        'LOGIC': 'Logic',
        'MATH': 'Math',
        'TECH': 'Technology',
        'PATTERN': 'Pattern',
        'GENERAL': 'General Knowledge',
        'RANDOM': 'Random'
    };
    return labels[cat] || 'Logic';
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

document.addEventListener('DOMContentLoaded', initApp);
