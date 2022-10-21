const input = document.querySelector("#myInput");
const submitForm = document.querySelector("#submitForm");
const progressBar = document.querySelector("#progress");

window.onload = function () {
    goProgress();
};

const textArea = document.querySelector("#textArea");
textArea.value = `Bilgilerim Yükleniyor... Lütfen Bekleyin. `;

const goProgress = function () {
    progressBar.classList.remove("hidden");
    input.disabled = true;
    input.value = "";
    textArea.value = `Bilgilerim Yükleniyor... Lütfen Bekleyin. `;
    progressBar.interval = setInterval(increaseVal, 20, progressBar);
};

const increaseVal = function (progressBar) {
    if (progressBar.value < 100) {
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        clearCommand();
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Yükleme Tamamlandı! \nGirebileceğin Komutları Ögrenmek İcin 'yardım' yazabilirsin.";
    }
};

const commandList = [
    "",
    "Ne Yapmak İstiyorsun:",
    "/bilgilerim  - Kisisel Bilgilerim.",
    "/güncelle - Terminali Günceller.",
    "/clear - Terminali Temizler.",
];

const commandListBilgilerim = [
    "",
    "Adım Can (Erebos) K.",
    "17 Yaşındayım.",
    "Front-end Web Geliştiricisiyim.",
    "Türkiye/Sakarya'da Yaşamaktayım.",
    "HTML5, CSS3, JavaScript, ReactJs İle Uğraşmaktayım.",
    "Aynı zamanda C# ve C++ İle Masaüsüt Program Geliştirmekteyim.",
    "GitHub Profilime Düzenli Olarak Geliştirdiğim Projelerimi Yüklemekteyim.",
    "GitHub: https://www.github.com/CanKayabas",
    "Aynı zamanda İnstagram Hesabımı Takip Edebilirsiniz.",
    "İnstagram: https://www.instagram.com/ere.b0s/"
]

const listAllCommands = function () {
    const arrJoin = commandList.join("\n");
    textArea.value += arrJoin;
    input.value = "";
};

const listBilgilerim = function () {
    const arrJoin = commandListBilgilerim.join("\n");
    textArea.value += arrJoin;
    input.value = "";
}

const clearCommand = function () {
    textArea.value = "";
    input.value = "";
};

const connectCommand = function () { };

submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value === "/clear") {
        clearCommand();
    } else if (input.value == "yardım") {
        listAllCommands();
    }
    else if (input.value === "/bilgilerim") {
        listBilgilerim();
    } else if (input.value === "/güncelle") {
        goProgress();
    } else {
        textArea.value +=
            "\nHATA: Böyle Bir Komut Yok! Komutları Ögrenmek İcin 'yardım' yazmalısın. ";
        input.value = "";
    }
    textArea.scrollTop = textArea.scrollHeight;
});