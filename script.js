// --- 1. ДАННЫЕ ДЛЯ СЕТКИ ФОТО (photo.html) ---
const memories = {
    1: { title: "ГЛЕБ ПРИГЛАСИЛ", text: "Ты рассказывала, как Глеб пригласил тебя гулять, а потом предложил посидеть на скамейке. Я слушала и ловила себя на том, как прикольно думать, что в -5 ты выбрала быть со мной, а не с каким-то мужланом. И это было до жути приятно, я точно помню мысль, что такую как ты я больше нигде не найду", hasPhoto: true },
    2: { title: "МИНУТА ПОСЛЕ", text: "Минуту назад ты стояла передо мной почти голая, а я с фотоаппаратом в руках ловила момент, когда ты уже одета. И в этот миг я чувствовала себя чем-то вроде семейного фотографа, фиксировала каждую деталь, что бы потом на самых отчаяных моментах жизни пересматривать фотографии с неуловимой тоской по моменту.", hasPhoto: true },
    3: { title: "ПРОСТО СЕКСИ", text: "соня у меня просто нет аргументов к этой фото, ты самая роковая красотка, самая первосходная и прекрасная. По тебе рисуют иконы, из-за тебя ходят в церковь. Я тебя люблю💕💕", hasPhoto: true },
    4: { title: "СОНЯ КАМЕРУ ВЫШЕ", text: "Я всегда готова держать фотоаппарат криво, чтобы ты кричала на меня, и пусть это длится вечно. Я всегда на готове. Гораздо печальнее будет, если однажды ты перестанешь кричать.", hasPhoto: true },
    5: { title: "УДМД", text: "Не вечно ни что - ни Юлиан с его лысиной, ни мой фанатизм по УДМД. Но вечной может быть только моя любовь к тебе.", hasPhoto: true },
    6: { title: "ТУТ ДЕВОЧКА КРУТО ФОТКАЕТ", text: "Я помню, когда фотографировала тебя, как страшно мне было. Жизнь, тетка, Сонь… я и представить не могла, что однажды буду писать тебе любовные письма.", hasPhoto: true },
    7: { title: "КРАСОТКА", text: "Я тибя люблюююююю.", hasPhoto: true },
    8: { title: "МИЛАШКА", text: "Здесь ты просто красивая, изящная, сияющая, пленительная, чарующая, неповторимая, очаровательная, притягательная, волшебная, неземная, ослепительная, мягкая и одновременно властная, будто сама красота решила остановиться здесь", hasPhoto: true },
    9: { title: "СЕКСИИ", text: "Сонечка, в общем я тебя люблю невероятно сильно. Любовь эта не только про романтику, а про безумное чувство преданости и тепла, когда бы и как ты не была. Я тебя очень люблю!!", hasPhoto: true },
    10: { title: "С ЛЮБОВЬЮ К СОФИЕ", text: "СОННЯЯЯЯ. Я правда надеюсь, что тебе понравился этот сайт, я честно очень старалась, чтобы он тебе радовал. В будущем я буду обновлять его, добавлять письма, новые штуки. Я хотела, чтобы я была рядом, даже когда не могу физически, чтобы ты всегда могла вернуться сюда и почувствовать, что тебя любят. Я очень ценю тебя, ты моя любимая слпвм, и я счастлива, что именно я твоя. Спасибо тебе, малышкааа!!😘❤❤❤", hasPhoto: false },
    11: { title: "Лист №2", text: "Текст твого другого листа...", hasPhoto: false },
    12: { title: "Лист №3", text: "Текст твого третього листа...", hasPhoto: false },
    13: { title: "Сюрприз", text: "Текст фінального сюрпризу...", hasPhoto: false }
};

// --- 2. НАЛАШТУВАННЯ ЛИСТІВ (Таймери відкриття) ---
const lettersConfig = [
    { id: 10, date: "2024-01-01T00:00:00", title: "Люблю" }, 
    { id: 11, date: "2026-04-08T06:30:00", title: "МЫсли" }, 
    { id: 12, date: "2026-04-15T00:00:00", title: "Воспоминания"},
    { id: 13, date: "2026-04-22T12:00:00", title: "Мотивация" }
];

// --- 3. ЦИТАТИ ДНЯ ---
const quotes = [
"София Балакшей, я вас люблю",
"Люди учатся дышать рядом с тобой, помни про это",
"Сегодня не день скромности",
"Пусть путают уверенность с наглостью",
"Слишком ярко, чтобы быть удобной",
"Пусть запоминают и молчат",
"Немного холода, чтобы сильнее тянуло",
"Пусть взгляд опускают первыми",
"Красота, от которой теряют мысль",
"Сегодня не для слабых нервов",
"Пусть пытаются соответствовать",
"Никаких компромиссов с собой",
"Пусть гадают, как это работает",
"Слишком дорого, чтобы объясняться",
"Пусть остаются вопросы",
"Чуть опаснее, чем кажется",
"Пусть не выдерживают контакт глазами",
"Никакой пощады к посредственности",
"Пусть учатся молча восхищаться",
"Состояние, когда можно всё",
"Пусть привыкают к недоступности",
"Слишком красиво, чтобы спорить",
"Пусть не успевают за ритмом",
"Контроль без единого слова",
"Пусть смотрят и запоминают дистанцию",
"Никаких скидок на характер",
"Пусть теряются в деталях",
"Слишком чистая энергия, чтобы игнорировать",
"Пусть пытаются забыть и не могут",
"Сегодня только по своим правилам",
"Пусть ломаются об спокойствие",
"Слишком сильное присутствие",
"Пусть понимают без объяснений",
"Никакой доступности без интереса",
"Пусть остаются за границей внимания",
"Слишком точное попадание",
"Пусть запоминают вкус уверенности",
"Никакой спешки, только эффект",
"Пусть думают дольше, чем смотрят",
"Слишком много огня на один день"
];

const startDate = new Date("2026-03-30"); 

// --- 3.1 МУЗИКА (Нова система) ---
// Сюди додавай нові пісні. Файли мають бути в папці music/ та images/music/
const songs = [
    { id: 1, title: "You Know I`m No Good", artist: "Amy Winehouse", cover: "images/music/song1.jpg", src: "music/song1.mp3" },
    { id: 2, title: "Glory Box", artist: "Portishead", cover: "images/music/song2.jpg", src: "music/song2.mp3" },
    { id: 3, title: "Seven Nation Army", artist: "The White Stripes", cover: "images/music/song3.jpg", src: "music/song3.mp3" },
    { id: 4, title: "Angel", artist: "Massive Attack", cover: "images/music/song4.jpg", src: "music/song4.mp3" },
    { id: 5, title: "Your Woman", artist: "White Town", cover: "images/music/song5.jpg", src: "music/song5.mp3" },
    { id: 6, title: "Back To Black", artist: "Amy Whinehouse", cover: "images/music/song6.jpg", src: "music/song6.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = new Audio();

// --- 4. ДАННІ ДОРОЖНЬОЇ КАРТИ ---
const travelPhotos = {
    'milestone1': [
        { img: 'm1_1.jpg', text: 'Любимая Балакшей, тогда я не умела даже выговаривать твою фамилию, в моих обьятиях ты всегда будешь Бакалеей' },
        { img: 'm1_2.jpg', text: 'Смотри, мы такие счастливые на камеру моей саоми' },
        { img: 'm1_3.jpg', text: 'Соня я нашла эту фотку, что бы сказать, что когда мы впервые купались, я ряльна сатрела на тваи сиси и думала ебааать ета секс' },
        { img: 'm1_4.jpg', text: 'А ой, нашла😘😘😘😘😘' },
        { img: 'm1_5.jpg', text: 'София балакшей, а вы помните испанские трусы?' },
        { img: 'm1_6.jpg', text: 'А вот тут ты такая красивая просто' },
        { img: 'm1_7.jpg', text: 'А тут тя ваще коля фоткал эм' },
        { img: 'm1_8.jpg', text: 'Ну это так, что бы не забывала' },
        { img: 'm1_9.jpg', text: 'Красивая милашка ня' },
        { img: 'm1_10.jpg', text: 'Ищо красиви сиси извините' },
        { img: 'm1_11.jpg', text: 'София на песочке, стишки, и назарчик с гитарой' },
        { img: 'm1_12.jpg', text: 'Ай мисс зис тайм когда мы все были вольные' },
        { img: 'm1_13.jpg', text: 'А потом мы играли в правду или действие, помните???' }

    ],
    'milestone3': [
        { img: 'm2_1.jpg', text: 'Люблю когда соня балакшей ругавет меня за рюки крюки' },
        { img: 'm2_3.jpg', text: 'Тогда я впервые подумала какой леша хуесос' },
        { img: 'm2_4.jpg', text: 'Ой а ета мы мили няя' },
        { img: 'm2_5.jpg', text: 'Для софии балакшей я всегда бьулу подставкой' },
        { img: 'm2_6.jpg', text: 'Соня я хз, всегда я буду думать о том, как тебе не холодно в пальто зимой' },
        { img: 'm2_7.jpg', text: 'Посмотри на меня прекрасную.' },
        { img: 'm2_8.jpg', text: 'А что бы сделал декстер если бы его обняла соня балакшей?' },
        { img: 'm2_9.jpg', text: 'София прекрасная в аухе' },
        { img: 'm2_10.jpg', text: 'А тут твой поцелуй, жаль не на моей груди' },
        { img: 'm2_11.jpg', text: 'Ты слей и малявка' },
        { img: 'm2_13.jpg', text: 'Я тушусь с даши' },
        { img: 'm2_14.jpg', text: 'ТЫ ТУТ ТАКАЯ ХАРАШОЯ' },
        { img: 'm2_15.jpg', text: 'Глянь какая я свег' },
        { img: 'm2_16.jpg', text: 'Удобна на не маей попе???????7' },
        { img: 'm2_17.jpg', text: 'Слей супер да' },
        { img: 'm2_18.jpg', text: 'Давай удалим с этого фото всех кроме меня ' },
        { img: 'm2_19.jpg', text: 'Соня ты тут такая крутая' },
        { img: 'm2_20.jpg', text: 'Апять измена' },
        { img: 'm2_21.jpg', text: 'Я тогда думала что мы встретимся на след проекте, по итогу софия балакшей в британии' },
        { img: 'm2_22.jpg', text: 'СЕККСИИИ' }
    ],
    'milestone5': [
        { img: 'm5_1.jpg', text: 'ОО ЕТА Я ЦЕЛУЮ СОНЮ БАЛАКШЕЕЙЙ' },
        { img: 'm5_2.jpg', text: 'а ета софия балакшей естетично сидит просит купить кофтачку' },
        { img: 'm5_3.jpg', text: 'Попаааа мм' },
        { img: 'm5_4.jpg', text: 'Красивая софийка в авокадо радостная милая няшка' },
        { img: 'm5_5.jpg', text: 'СЯОМА АХАХ' },
        { img: 'm5_6.jpg', text: 'СЕКС ЛЮТИЙ' },
        { img: 'm5_7.jpg', text: 'Я люблю тебя' },
        { img: 'm5_8.jpg', text: 'Ниадин мужчина не сидел с тобой на скамье, А Я СИДЕЛА' },
        { img: 'm5_9.jpg', text: 'Мне так нравтса ети фотаа' },
        { img: 'm5_10.jpg', text: 'София балакшей и знакомство с УДМДМ' },
        { img: 'm5_11.jpg', text: 'Мы няши' },
        { img: 'm5_12.jpg', text: 'СИСИСЧКИ' },
        { img: 'm5_13.jpg', text: 'СЧАСТЛИВАЯ СОФИЯ' },
        { img: 'm5_12.jpg', text: 'КРАСИВАЯ СОФИЯ' }
    ],
};

let currentSet = [];
let currentIndex = 0;

// --- 5. ФУНКЦІЇ ПЕРЕХОДУ ТА ГЕНЕРАЦІЇ ---

function navigate(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => { window.location.href = url; }, 600);
}

function renderLetters() {
    const container = document.getElementById('lettersContainer');
    if (!container) return;

    container.innerHTML = lettersConfig.map(conf => `
        <div id="letter-${conf.id}" class="letter-item locked" data-id="${conf.id}">
            <div class="letter-card">
                <div class="letter-icon">🔒</div>
                <div class="timer">--:--:--</div>
            </div>
            <div class="letter-label">${conf.title}</div>
        </div>
    `).join('');
}

// --- 5.1 РЕНДЕР МУЗИКИ ---
function renderMusic() {
    const container = document.getElementById('musicCarousel');
    if (!container) return;

    container.innerHTML = songs.map((song, index) => `
        <div class="music-card hidden" id="song-${index}" onclick="changeSong(${index})">
            <img src="${song.cover}" class="song-cover" id="cover-${index}">
            <div class="song-info">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </div>
            <div class="player-controls">
                <button class="play-btn" onclick="togglePlay(event, ${index})">
                    ${(currentSongIndex === index && isPlaying) ? '⏸' : '▶'}
                </button>
            </div>
        </div>
    `).join('');
    updateCarousel();
}

function updateCarousel() {
    songs.forEach((_, index) => {
        const card = document.getElementById(`song-${index}`);
        if (!card) return;

        card.className = 'music-card';
        if (index === currentSongIndex) {
            card.classList.add('active');
        } else if (index === (currentSongIndex - 1 + songs.length) % songs.length) {
            card.classList.add('prev');
        } else if (index === (currentSongIndex + 1) % songs.length) {
            card.classList.add('next');
        } else {
            card.classList.add('hidden');
        }
    });
}

function changeSong(index) {
    if (currentSongIndex === index) return;
    currentSongIndex = index;
    isPlaying = false;
    audioPlayer.pause();
    updateCarousel();
    renderMusic(); // Оновити іконки кнопок
}

function togglePlay(event, index) {
    event.stopPropagation();
    const cover = document.getElementById(`cover-${index}`);

    if (currentSongIndex !== index) {
        changeSong(index);
    }

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        cover.classList.remove('playing');
    } else {
        audioPlayer.src = songs[index].src;
        audioPlayer.play();
        isPlaying = true;
        cover.classList.add('playing');
    }
    renderMusic();
}

// --- 6. РЕШТА ЛОГІКИ ---

function initPhotoPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const imgElement = document.getElementById('displayImg');
    const titleElement = document.getElementById('articleTitle');
    const textElement = document.getElementById('articleText');

    if (id && memories[id]) {
        if (titleElement) titleElement.innerText = memories[id].title;
        if (textElement) textElement.innerText = memories[id].text;
        if (memories[id].hasPhoto && imgElement) {
            imgElement.src = `images/${id}.jpg`;
            imgElement.style.display = "block";
        } else if (imgElement) {
            imgElement.style.display = "none";
        }
    }
}

function updateAllDynamicContent() {
    const now = new Date();
    lettersConfig.forEach(conf => {
        const item = document.getElementById(`letter-${conf.id}`);
        if (!item) return;
        const targetDate = new Date(conf.date).getTime();
        const diff = targetDate - now.getTime();
        const timerEl = item.querySelector('.timer');
        const iconEl = item.querySelector('.letter-icon');

        if (diff <= 0) {
            if (item.classList.contains('locked')) {
                item.classList.remove('locked');
                item.classList.add('unlocked');
                if (iconEl) iconEl.innerText = "✉️";
                if (timerEl) timerEl.innerText = "ОТКРЫТО";
                item.onclick = () => navigate(`photo.html?id=${conf.id}`);
            }
        } else {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            if (timerEl) timerEl.innerText = `${d}Д ${h}Ч ${m}М ${s}С`;
        }
    });

    const quoteText = document.getElementById('dailyQuoteText');
    const quoteTimerEl = document.getElementById('quoteTimer');
    if (quoteText && quoteTimerEl) {
        const diffInTime = now.getTime() - startDate.getTime();
        const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
        const quoteIndex = Math.max(0, diffInDays) % quotes.length;
        quoteText.innerText = quotes[quoteIndex];
        quoteTimerEl.innerText = `Завтра принесу тебе новую цитату❤`;
    }
}

// Управління модалкою (Travel)
function openTravel(place) {
    if (!travelPhotos[place]) return;
    currentSet = travelPhotos[place];
    currentIndex = 0;
    updateSwiper();
    document.getElementById('travelModal').style.display = 'flex';
}

function updateSwiper() {
    const container = document.getElementById('swiper-inner');
    const item = currentSet[currentIndex];
    if (!container || !item) return;
    container.innerHTML = `
        <div class="slide-container" style="animation: fadeIn 0.5s ease">
            <img src="images/travel/${item.img}" class="swiper-img">
            <p class="swiper-caption">${item.text}</p>
        </div>
    `;
}

function nextSlide() { currentIndex = (currentIndex + 1) % currentSet.length; updateSwiper(); }
function prevSlide() { currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length; updateSwiper(); }
function closeTravel() { document.getElementById('travelModal').style.display = 'none'; }

// Ефект дискотеки
let discoInterval, idleTimer, lastItem = null;
function startDisco() {
    const items = document.querySelectorAll('.item');
    if (items.length === 0) return;
    items.forEach(i => { i.style.filter = 'blur(10px) opacity(0.3)'; });
    discoInterval = setInterval(() => {
        if (lastItem) { lastItem.style.filter = 'blur(10px) opacity(0.3)'; lastItem.style.transform = 'scale(1)'; }
        const visibleItems = Array.from(items);
        let next = visibleItems[Math.floor(Math.random() * visibleItems.length)];
        next.style.filter = 'blur(0px) opacity(1)';
        next.style.transform = 'scale(1.1)';
        lastItem = next;
    }, 2500);
}

function stopDisco() {
    if (discoInterval) clearInterval(discoInterval);
    document.querySelectorAll('.item').forEach(i => { i.style.filter = ''; i.style.transform = ''; });
    resetIdleTimer();
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { if (document.querySelector('.grid')) startDisco(); }, 15000);
}

// Ініціалізація
window.onload = () => {
    if (document.getElementById('articleTitle')) initPhotoPage();
    if (document.querySelector('.grid') || document.getElementById('dailyQuoteText')) {
        renderLetters();
        renderMusic(); // Новий виклик
        updateAllDynamicContent();
        setInterval(updateAllDynamicContent, 1000);
        resetIdleTimer();
        ['mousemove', 'touchstart', 'keydown', 'scroll'].forEach(ev => window.addEventListener(ev, stopDisco));
    }
};

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('travelModal')) closeTravel();
});