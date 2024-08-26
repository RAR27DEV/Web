let currentDialog = -1;
let isSoundOn = true;
const dialogs = [
    // Tambahkan dialog dan path gambar Anda di sini
    {text: ".......", image: "story1.jpg"},
    {text: "ara~ara", image: "story1.jpg"},
    {text: "cup cup cup", image: "story1.jpg"},
    {text: "kamu terlihat sangat lemah", image: "story1.jpg"},
    {text: "kasihan sekali", image: "story1.jpg"},
    {text: "ikut lah pulang denganku", image: "story2.jpg"},
    {text: "akan ku buatkan semangkuk sup kacang hangat", image: "story3.jpg"},
    {text: "~ara~", image: "story4.jpg"},
    {text: "sekarang kamu sudah besar", image: "story4.jpg"},
    {text: "kurasa pesona ku mulai berkurang sedikit", image: "story4.jpg"},
    {text: "tidak kok", image: "story5.jpg"},
    {text: "ibu masih sama cantiknya", image: "story5.jpg"},
    {text: "seperti dulu saat kita berjumpa", image: "story5.jpg"},
    {text: "ara~ara", image: "story5.jpg"},
    {text: "kau pandai memuji, ya?", image: "story5.jpg"},
    {text: "baiklah", image: "story5.jpg"},
    {text: "makan malam hari ini adalah sup kacang favoritmu", image: "story5.jpg"},
    {text: "ayo kita buat bersama", image: "story5.jpg"},
    {text: "bu, aku bermimpi", image: "story6.jpg"},
    {text: "masa masa sebelum ibu memungutku", image: "story6.jpg"},
    {text: "sudah lama sekali", image: "story6.jpg"},
    {text: ".......", image: "story6.jpg"},
    {text: "mungkin itu yang mereka maksud dengan", image: "story6.jpg"},
    {text: "seseorang akan melihat kilas balik hidupnya sebelum kematiannya", image: "story6.jpg"},
    {text: "hahaha", image: "story6.jpg"},
    {text: "mungkin saja", image: "story6.jpg"},
    {text: "saat itu", image: "story7.jpg"},
    {text: "tubuhku sudah sangat sekarat", image: "story7.jpg"},
    {text: "bahkan waktu itu kupikir aku sudah mati", image: "story7.jpg"},
    {text: "lalu ibu menolongku yang sudah putus asa", image: "story7.jpg"},
    {text: "sejak hati itu", image: "story8.jpg"},
    {text: "IBU", image: "story9.jpg"},
    {text: "Engkaulah satu satunya alasanku untuk tetap hidup", image: "story10.jpg"},
    {text: ".......", image: "story11.jpg"},
    {text: "Terimakasih karna telah membesarkanku", image: "story11.jpg"},
    {text: "Ibu", image: "story12.jpg"},
    {text: "tiba tiba sekali", image: "story13.jpg"},
    {text: "biasanya kau terlalu malu untuk mengatakan hal semacam itu", image: "story13.jpg"},
    {text: "apakah malaikat maut akhirnya menjemput mu", image: "story13.jpg"},
    {text: ".......", image: "story14.jpg"},
    {text: "mungkin", image: "story14.jpg"},
    {text: "apa boleh buat", image: "story14.jpg"},
    {text: "dari tadi", image: "story15.jpg"},
    {text: "aku merasa sangat mengantuk", image: "story15.jpg"},
    {text: "apa boleh buat", image: "story15.jpg"},
    {text: ".......", image: "story15.jpg"},
    {text: "........", image: "story16.jpg"},
    {text: "(menepuk pelan kepalanya)", image: "story17.jpg"},
    {text: ".......", image: "story18.jpg"},
    {text: "tidurlah yang nyeyak...", image: "story18.jpg"},
    {text: "ANAKKU YANG MANIS", image: "story19.jpg"},
    
    // ...
];

function startGame() {
    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('background-music').play();
    nextDialog();
}

function nextDialog() {
    if (currentDialog < dialogs.length - 1) {
        currentDialog++;
        updateDialog();
    }
}

function previousDialog() {
    if (currentDialog > 0) {
        currentDialog--;
        updateDialog();
    }
}

function updateDialog() {
    const dialog = dialogs[currentDialog];
    document.getElementById('dialog-text').innerText = dialog.text;
    document.getElementById('story-image').src = dialog.image;
}

function toggleSound() {
    const music = document.getElementById('background-music');
    const soundToggle = document.getElementById('sound-toggle');
    if (isSoundOn) {
        music.pause();
        soundToggle.innerText = '🔈';
    } else {
        music.play();
        soundToggle.innerText = '🔇';
    }
    isSoundOn = !isSoundOn;
}