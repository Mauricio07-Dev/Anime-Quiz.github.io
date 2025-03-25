// Variables
let currentLevel = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questions = [
    // Nivel 1-5 (Fácil)
    {
        question: "🎵 ¿Quién canta 'Gurenge', el opening de 'Demon Slayer'?",
        options: ["LiSA", "Aimer", "ReoNa", "YOASOBI"],
        answer: 0
    },
    {
        question: "⚡ ¿Cuál es el nombre del protagonista de 'Dragon Ball Z'?",
        options: ["Goku", "Vegeta", "Piccolo", "Gohan"],
        answer: 0
    },
    {
        question: "👓 ¿Qué poder usa Light Yagami en 'Death Note' para matar?",
        options: ["Shinigami Eyes", "Death Eraser", "Kira Note", "Ryuk's Pen"],
        answer: 0
    },
    {
        question: "🏀 ¿De qué equipo es capitán Kuroko en 'Kuroko no Basket'?",
        options: ["Seirin", "Rakuzan", "Shutoku", "Tōō"],
        answer: 0
    },
    {
        question: "🔫 ¿Cuál es el nombre real de 'L' en 'Death Note'?",
        options: ["L Lawliet", "Light Yagami", "Near", "Mello"],
        answer: 0
    },
    // Nivel 6-10 (Moderado)
    {
        question: "🎸 ¿Qué banda toca 'Kessoku Band' en 'Bocchi the Rock!'?",
        options: ["STARRY", "SICK HACK", "Kessoku Band", "Glimmer"],
        answer: 2
    },
    {
        question: "👑 ¿Quién es el 'Rey de los Piratas' en 'One Piece'?",
        options: ["Monkey D. Luffy", "Gol D. Roger", "Shanks", "Barbanegra"],
        answer: 1
    },
    {
        question: "🔥 ¿Qué ataque usa Endeavor en 'My Hero Academia'?",
        options: ["Hellflame", "Prominence Burn", "Flashfire Fist", "Blueflame"],
        answer: 1
    },
    {
        question: "🗡️ ¿Qué espada usa Roronoa Zoro como principal en 'One Piece'?",
        options: ["Wado Ichimonji", "Kitetsu III", "Enma", "Shusui"],
        answer: 0
    },
    {
        question: "🎤 ¿Qué grupo idol canta 'Snow Halation' en 'Love Live!'?",
        options: ["μ's", "Aqours", "Nijigasaki", "Liella!"],
        answer: 0
    },
    // Nivel 11-15 (Difícil)
    {
        question: "📅 ¿En qué año se estrenó 'Neon Genesis Evangelion'?",
        options: ["1995", "1997", "2000", "2003"],
        answer: 0
    },
    {
        question: "👻 ¿Qué poder tiene Mob en 'Mob Psycho 100'?",
        options: ["Telequinesis", "Pyrokinesis", "Electrokinesis", "Todas las anteriores"],
        answer: 3
    },
    {
        question: "🎭 ¿Cuál es el nombre del 'Stand' de Jotaro Kujo en 'JoJo's Bizarre Adventure'?",
        options: ["Star Platinum", "The World", "Crazy Diamond", "Gold Experience"],
        answer: 0
    },
    {
        question: "🍥 ¿Quién es el hijo de Naruto en 'Boruto'?",
        options: ["Boruto", "Himawari", "Kawaki", "Sarada"],
        answer: 0
    },
    {
        question: "🎵 ¿Qué opening de 'Attack on Titan' tiene la frase 'Sasageyo'?",
        options: ["Shinzou wo Sasageyo!", "Guren no Yumiya", "Jiyuu no Tsubasa", "Red Swan"],
        answer: 0
    },
    // Nivel 16-20 (Expertos)
    {
        question: "📺 ¿Cuál fue el primer anime dirigido por Hayao Miyazaki?",
        options: ["Lupin III", "Nausicaä", "Castle in the Sky", "Future Boy Conan"],
        answer: 0
    },
    {
        question: "👹 ¿Qué anime adapta la novela visual 'Higurashi no Naku Koro ni'?",
        options: ["When They Cry", "Umineko", "Another", "Shiki"],
        answer: 0
    },
    {
        question: "🎮 ¿En qué año se estrenó 'Sword Art Online'?",
        options: ["2010", "2012", "2014", "2016"],
        answer: 1
    },
    {
        question: "🌌 ¿Quién es el autor del manga 'Berserk'?",
        options: ["Kentaro Miura", "Eiichiro Oda", "Hirohiko Araki", "Tite Kubo"],
        answer: 0
    },
    {
        question: "🎶 ¿Qué cantante interpreta 'Unravel', el opening de 'Tokyo Ghoul'?",
        options: ["TK from Ling Tosite Sigure", "Aimer", "Uverworld", "Asian Kung-Fu Generation"],
        answer: 0
    },
    // Nivel 21-25 (Super Fan)
    {
        question: "📖 ¿Qué obra inspiró 'Madoka Magica' según Gen Urobuchi?",
        options: ["Fausto", "La Divina Comedia", "El Paraíso Perdido", "Cien años de soledad"],
        answer: 0
    },
    {
        question: "🎬 ¿Qué estudio animó 'Your Name'?",
        options: ["CoMix Wave Films", "Kyoto Animation", "Shaft", "Bones"],
        answer: 0
    },
    {
        question: "👽 ¿Qué anime es una metáfora de la depresión según su creador?",
        options: ["Neon Genesis Evangelion", "Serial Experiments Lain", "Welcome to the NHK", "Haibane Renmei"],
        answer: 2
    },
    {
        question: "🔞 ¿Qué anime fue censurado en varios países por su violencia?",
        options: ["Elfen Lied", "Attack on Titan", "Hellsing Ultimate", "Deadman Wonderland"],
        answer: 0
    },
    {
        question: "🎵 ¿Qué banda compuso la música de 'Cowboy Bebop'?",
        options: ["The Seatbelts", "Yoko Kanno", "Shiro Sagisu", "Hiroyuki Sawano"],
        answer: 0
    },
    // Nivel 26-30 (Animes recientes)
    {
        question: "🦸‍♂️ ¿Quién es el protagonista de 'Chainsaw Man'?",
        options: ["Denji", "Aki", "Power", "Makima"],
        answer: 0
    },
    {
        question: "🎸 ¿Cuál es el nombre de la banda en 'Bocchi the Rock!'?",
        options: ["Kessoku Band", "Glimmer", "SICK HACK", "STARRY"],
        answer: 0
    },
    {
        question: "🔴 ¿Qué poder tiene Tanjiro en 'Demon Slayer: Kimetsu no Yaiba'?",
        options: ["Respiración del Agua", "Respiración del Fuego", "Respiración del Rayo", "Respiración de la Bestia"],
        answer: 0
    },
    {
        question: "🏎️ ¿De qué color es el coche de Kanata en 'Overtake!' (2023)?",
        options: ["Azul", "Rojo", "Verde", "Amarillo"],
        answer: 1
    },
    {
        question: "👹 ¿Quién es el villano principal de 'Jujutsu Kaisen'?",
        options: ["Sukuna", "Mahito", "Geto", "Gojo"],
        answer: 0
    },
    // Nivel 31-35 (Más animes recientes)
    {
        question: "🎭 ¿Qué tipo de criatura es Nezuko en 'Demon Slayer'?",
        options: ["Demonio", "Humana", "Hibrida", "Espíritu"],
        answer: 0
    },
    {
        question: "📺 ¿Cuál es el anime más visto de 2023 según Crunchyroll?",
        options: ["Attack on Titan", "Jujutsu Kaisen", "Chainsaw Man", "Demon Slayer"],
        answer: 1
    },
    {
        question: "💀 ¿Qué hace único el poder de Yuji Itadori en 'Jujutsu Kaisen'?",
        options: ["Puede contener a Sukuna", "No tiene maldición", "Es inmortal", "Puede copiar técnicas"],
        answer: 0
    },
    {
        question: "🦊 ¿Quién es el autor de 'Chainsaw Man'?",
        options: ["Tatsuki Fujimoto", "Gege Akutami", "Koyoharu Gotouge", "Hajime Isayama"],
        answer: 0
    },
    {
        question: "🎤 ¿Qué grupo musical aparece en 'Oshi no Ko'?",
        options: ["B-Komachi", "Kessoku Band", "Zombie Land Saga", "Afterglow"],
        answer: 0
    },
    // Nivel 36-40 (Openings/Endings)
    {
        question: "🎵 ¿Qué opening de 'Attack on Titan' empieza con 'Sie sind das Essen und wir sind die Jäger'?",
        options: ["Guren no Yumiya", "Shinzou wo Sasageyo!", "Jiyuu no Tsubasa", "Red Swan"],
        answer: 0
    },
    {
        question: "🎤 ¿Quién canta 'Idol', el opening de 'Oshi no Ko'?",
        options: ["YOASOBI", "LiSA", "Aimer", "ReoNa"],
        answer: 0
    },
    {
        question: "🔥 ¿Cuál es el opening más icónico de 'Naruto Shippuden'?",
        options: ["Blue Bird", "Silhouette", "Sign", "Hero's Come Back"],
        answer: 1
    },
    {
        question: "🎸 ¿Qué banda toca 'Haruka Kanata', opening de 'Naruto'?",
        options: ["Asian Kung-Fu Generation", "FLOW", "UVERworld", "SPYAIR"],
        answer: 0
    },
    {
        question: "🎶 ¿Qué ending de 'Death Note' tiene la frase 'I'm a loser'?",
        options: ["Alumina", "Zetsubou Billy", "The WORLD", "Coda"],
        answer: 1
    },
    // Nivel 41-45 (Más openings/endings)
    {
        question: "🎤 ¿Quién canta 'Unravel', el opening de 'Tokyo Ghoul'?",
        options: ["TK from Ling Tosite Sigure", "Aimer", "Uverworld", "Sukima Switch"],
        answer: 0
    },
    {
        question: "🎵 ¿Qué opening de 'My Hero Academia' tiene la frase 'Plus Ultra'?",
        options: ["The Day", "Peace Sign", "Odd Future", "Make My Story"],
        answer: 0
    },
    {
        question: "🎶 ¿Cuál es el ending 'Shiki no Uta' de 'Samurai Champloo'?",
        options: ["Nujabes", "MINMI", "Shing02", "Force of Nature"],
        answer: 1
    },
    {
        question: "🎤 ¿Quién canta 'Daddy! Daddy! Do!', opening de 'Kaguya-sama: Love is War'?",
        options: ["Masayuki Suzuki", "LiSA", "KANA-BOON", "fripSide"],
        answer: 0
    },
    {
        question: "🎵 ¿Qué opening de 'Demon Slayer' tiene la frase 'Kamado Tanjiro no Uta'?",
        options: ["Gurenge", "Kamado Tanjiro no Uta", "Homura", "Zankyou Zanka"],
        answer: 1
    },
    // Nivel 46-50 (Extras difíciles)
    {
        question: "🎶 ¿Qué ending de 'Neon Genesis Evangelion' es un cover de 'Fly Me to the Moon'?",
        options: ["Rei I", "Rei II", "Rei III", "Rei IV"],
        answer: 0
    },
    {
        question: "🎤 ¿Quién canta 'Redo', el opening de 'Re:Zero'?",
        options: ["Konomi Suzuki", "MYTH & ROID", "LiSA", "Aimer"],
        answer: 1
    },
    {
        question: "🎵 ¿Qué opening de 'One Piece' tiene la frase 'We Are!'?",
        options: ["We Are!", "Hikari e", "Believe", "Bon Voyage!"],
        answer: 0
    },
    {
        question: "🎤 ¿Qué banda canta 'Inferno', el opening de 'Fire Force'?",
        options: ["Mrs. GREEN APPLE", "Coldrain", "Aimer", "UVERworld"],
        answer: 1
    },
    {
        question: "🎶 ¿Qué ending de 'Attack on Titan' es cantado por Linked Horizon?",
        options: ["Great Escape", "Yuugure no Tori", "Akatsuki no Requiem", "Name of Love"],
        answer: 2
    }
];

// Mezclar preguntas (opcional)
questions.sort(() => Math.random() - 0.5);

// Elementos del DOM
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const progressEl = document.getElementById('progress');
const levelEl = document.getElementById('level');
const timerEl = document.getElementById('timer');
const timeLeftEl = document.getElementById('time-left');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const restartBtn = document.getElementById('restart-btn');

// Cargar pregunta
function loadQuestion() {
    clearInterval(timer); // Detener temporizador anterior
    timeLeft = 10;
    updateTimer();

    const currentQ = questions[currentLevel];
    questionEl.innerHTML = currentQ.question;
    optionsEl.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
    levelEl.textContent = `Nivel ${currentLevel + 1}/${questions.length}`;
    progressEl.style.width = `${(currentLevel / questions.length) * 100}%`;

    // Iniciar temporizador
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

// Actualizar temporizador visual
function updateTimer() {
    timeLeftEl.textContent = timeLeft;
    const percent = (timeLeft / 10) * 100;
    timerEl.style.width = `${percent}%`;
    timerEl.style.background = timeLeft <= 3 ? "#ff0000" : "#00ff00"; // Rojo si queda poco tiempo
}

// Tiempo agotado
function handleTimeOut() {
    feedbackEl.textContent = "⏰ ¡Se acabó el tiempo!";
    feedbackEl.className = "feedback incorrect";
    wrongSound.play();
    setTimeout(() => endGame(false), 1000);
}

// Verificar respuesta
function checkAnswer(index) {
    clearInterval(timer); // Detener temporizador
    const currentQ = questions[currentLevel];
    if (index === currentQ.answer) {
        feedbackEl.textContent = "✅ ¡Correcto!";
        feedbackEl.className = "feedback correct";
        correctSound.play();
        score++;
    } else {
        feedbackEl.textContent = "❌ ¡Incorrecto!";
        feedbackEl.className = "feedback incorrect";
        wrongSound.play();
    }
    setTimeout(() => {
        currentLevel++;
        if (currentLevel < questions.length) {
            loadQuestion();
        } else {
            endGame(true);
        }
    }, 1000);
}

// Finalizar juego (victoria o derrota)
function endGame(isWinner) {
    questionEl.innerHTML = isWinner 
        ? `🏆 ¡Ganaste! Puntuación: ${score}/${questions.length}` 
        : `💥 ¡Perdiste! Puntuación: ${score}/${questions.length}`;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = "";
    progressEl.style.width = "100%";
    restartBtn.style.display = "block"; // Mostrar botón de reinicio
}

// Reiniciar juego
function restartGame() {
    currentLevel = 0;
    score = 0;
    restartBtn.style.display = "none";
    loadQuestion();
}

// Evento del botón de reinicio
restartBtn.addEventListener('click', restartGame);

// Control de música
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 Música: ON";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇 Música: OFF";
    }
});

// Iniciar quiz
loadQuestion();
bgMusic.volume = 0.2;