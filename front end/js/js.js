// Các chủ đề với từ vựng tương ứng
const themes = {
    materials: [
        {
            "word": "肉",
            "meaning": "thịt",
            "pronunciation": "にく",
            "image": "images/kitchen/肉.jpg"
        },
        {
            "word": "魚",
            "meaning": "cá",
            "pronunciation": "さかな",
            "image": "images/kitchen/魚.jpg"
        },
        {
            "word": "野菜",
            "meaning": "rau",
            "pronunciation": "やさい",
            "image": "images/kitchen/野.jpg"
        },
        {
            "word": "干物",
            "meaning": "đồ được sấy khô  ",
            "pronunciation": "ひもの",
            "image": "images/kitchen/干.jpg"
        },
        {
            "word": "冷凍食品",
            "meaning": "đồ đông lạnh ",
            "pronunciation": "れいとうしょうひん",
            "image": "images/kitchen/冷.jpg"
        },
        {
            "word": "拉麺",
            "meaning": "mì ",
            "pronunciation": "ラーメン",
            "image": "images/kitchen/ラ.jpg"
        },
        {
            "word": "弁当",
            "meaning": "cơm hộp ",
            "pronunciation": "べんとう",
            "image": "images/kitchen/弁.jpg"
        },
        {
            "word": "果物",
            "meaning": "trái cây ",
            "pronunciation": "くだもの",
            "image": "images/kitchen/果.jpg"
        },
        {
            "word": "調味料",
            "meaning": "gia vị ",
            "pronunciation": "ちょうみりょう",
            "image": "images/kitchen/調.jpg"
        },
        {
            "word": "天ぷら",
            "meaning": "đồ chiên",
            "pronunciation": "てんぷら",
            "image": "images/kitchen/天.jpg"
        },
        {
            "word": "果汁",
            "meaning": "nước trái cây",
            "pronunciation": "かじゅう",
            "image": "images/kitchen/果汁.jpg"
        },
        {
            "word": "牛乳",
            "meaning": "sữa ",
            "pronunciation": "ぎゅうにゅう",
            "image": "images/kitchen/牛乳.jpg"
        },
        {
            "word": "ヨーグルト",
            "meaning": "sữa chua ",
            "pronunciation": "よーぐると",
            "image": "images/kitchen/ヨ.jpg"
        },
        {
            "word": "バター",
            "meaning": "bơ ",
            "pronunciation": "ばたー",
            "image": "images/kitchen/バ.jpg"
        },
        {
            "word": "醬油",
            "meaning": "nước tương ",
            "pronunciation": "しょうゆ",
            "image": "images/kitchen/しょう.jpg"
        },
        {
            "word": "山葵",
            "meaning": "mù tạt ",
            "pronunciation": "わさび",
            "image": "images/kitchen/わさび.jpg"
        },
        {
            "word": "豆腐",
            "meaning": "đậu phụ ",
            "pronunciation": "とうふ",
            "image": "images/kitchen/とうふ.jpg"
        },
        {
            "word": "小麦粉",
            "meaning": "bột mì ",
            "pronunciation": "こむぎこ",
            "image": "images/kitchen/こむぎ.jpg"
        },
        {
            "word": "餅米",
            "meaning": "gạo nếp ",
            "pronunciation": "もちごめ",
            "image": "images/kitchen/もちごめ.jpg"
        },
        {
            "word": "米",
            "meaning": "gạo ",
            "pronunciation": "こめ",
            "image": "images/kitchen/こめ.jpg"
        },
        {
            "word": "油",
            "meaning": "dầu ăn ",
            "pronunciation": "あぶら",
            "image": "images/kitchen/あぶら.jpg"
        },
        {
            "word": "ごま油",
            "meaning": "dầu mè ",
            "pronunciation": "ごまあぶら",
            "image": "images/kitchen/ごまあぶら.jpg"
        },
        {
            "word": "抹茶",
            "meaning": "trà xanh ",
            "pronunciation": "まっちゃ",
            "image": "images/kitchen/まっちゃ.jpg"
        },
        {
            "word": "玄米茶",
            "meaning": "trà gạo lứt ",
            "pronunciation": "げんまいちゃ",
            "image": "images/kitchen/げんまいちゃ.jpg"
        },
        {
            "word": "洗剤",
            "meaning": "nước giặt ",
            "pronunciation": "せんざい",
            "image": "images/kitchen/せんざい.jpg"
        },
        {
            "word": "食器用洗剤",
            "meaning": "nước rửa chén ",
            "pronunciation": "しょきようせんざい",
            "image": "images/kitchen/しょきよう.jpg"
        },
        {
            "word": "トイレ用洗剤",
            "meaning": "nước cọ toilet ",
            "pronunciation": "といれようせんざい",
            "image": "images/kitchen/といれよう.jpg"
        },
        {
            "word": "浴室用洗剤",
            "meaning": "nước cọ nhà tắm ",
            "pronunciation": "よくしつせんざい",
            "image": "images/kitchen/よくしつ.jpg"
        }
        // Thêm các từ khác cho chủ đề materials
    ],
    traffic: [
        {
            "word": "自動車 / 車",
            "meaning": "Ô tô",
            "pronunciation": "じどうしゃ/くるま",
            "image": "images/traffic/車.jfif"
        },
        {
            "word": "バス ",
            "meaning": " Xe buýt",
            "pronunciation": "バス ",
            "image": "images/traffic/バス.jfif"
        },
        {
            "word": "トラック ",
            "meaning": " Xe tải",
            "pronunciation": "トラック ",
            "image": "images/traffic/トラック.jfif"
        },
        {
            "word": " スポーツカー",
            "meaning": " Xe thể thao",
            "pronunciation":" スポーツカー",
            "image": "images/traffic/スポーツカー.jfif"
        },
        {
            "word": "タクシー ",
            "meaning": "Taxi",
            "pronunciation": "タクシー ",
            "image": "images/traffic/タクシー.jfif"
        },
        {
            "word": " 救急車",
            "meaning": " Xe cứu thương",
            "pronunciation": "きゅうきゅうしゃ",
            "image": "images/traffic/救急車.jfif"
        },
        {
            "word": "消防車",
            "meaning": " Xe cứu hỏa",
            "pronunciation": "しょうぼうしゃ",
            "image": "images/traffic/消防車.jfif"
        },
        {
            "word": "パトカー",
            "meaning": " Xe cảnh sát tuần tra",
            "pronunciation": "パトカー",
            "image": "images/traffic/パトカー.jfif"
        },
        {
            "word": " 白バイ",
            "meaning": "Xe cảnh sát",
            "pronunciation": "しろバイ",
            "image": "images/traffic/白バイ.jfif        "
        },
        {
            "word": "オートバイ",
            "meaning": "Xe gắn máy",
            "pronunciation":"オートバイ",
            "image": "images/traffic/オートバイ.jfif"
        },
        {
            "word": "自転車 ",
            "meaning": " Xe đạp",
            "pronunciation": "じてんしゃ",
            "image": "images/traffic/自転車.jfif"
        },
        {
            "word": "三輪車 ",
            "meaning": "Xe ba bánh",
            "pronunciation": "さんりんしゃ",
            "image": "images/traffic/三輪車.jfif"
        },
        {
            "word": " 汽車 ",
            "meaning": "Tàu (chạy bằng hơi nước )",
            "pronunciation": "きしゃ",
            "image": "images/traffic/汽車.jfif"
        },
        {
            "word": " 電車 ",
            "meaning": "Tàu (điện)",
            "pronunciation": "でんしゃ",
            "image": "images/traffic/電車.jfif"
        },
        {
            "word": "地下鉄 ",
            "meaning": "Tàu điện ngầm",
            "pronunciation": "ちかてつ",
            "image": "images/traffic/地下鉄.jfif"
        },
        {
            "word": " 新幹線 ",
            "meaning": "Tàu cao tốc",
            "pronunciation": "しんかんせん",
            "image": "images/traffic/新幹線.jfif"
        },
        {
            "word": " 船 ",
            "meaning": "Tàu thủy",
            "pronunciation": "ふね",
            "image": "images/traffic/船.jfif"
        },
        {
            "word": " 帆船 ",
            "meaning": "Thuyền buồm",
            "pronunciation": "はんせん",
            "image": "images/traffic/帆船.jfif"
        },
        {
            "word": " ヨット",
            "meaning": "Du thuyền",
            "pronunciation": " ヨット",
            "image": "images/traffic/ヨット.jfif"
        },
        {
            "word": " フェーリー ",
            "meaning": "Phà",
            "pronunciation":" フェーリー ",
            "image": "images/traffic/フェリー.jfif"
        },
        {
            "word": " 飛行機 ",
            "meaning": "Máy bay",
            "pronunciation": "ひこうき",
            "image": "images/traffic/飛行機.jfif"
        },
        {
            "word": "ヘリコプター ",
            "meaning": " Máy bay trực thăng",
            "pronunciation": "ヘリコプター",
            "image": "images/traffic/ヘリコプター.jfif"
        },
        {
            "word": "馬車 ",
            "meaning": " Xe ngựa kéo",
            "pronunciation": "ばしゃ",
            "image": "images/traffic/馬車.jfif"
        },
        {
            "word": " 人力車 ",
            "meaning": "Xe kéo",
            "pronunciation": "じんりきしゃ",
            "image": "images/traffic/人力車.jfif"
        },

        {
            "word": " 免許証を持っていますか",
            "meaning": "Bạn có bằng lái xe?",
            "pronunciation": "めんきょしょうをもっていますか",
            "image": "images/traffic/免許証をもっていますか.jfif"
        },
        {
            "word": " 道を曲がる",
            "meaning": "rẽ đường",
            "pronunciation": "みちをまがる",
            "image": "images/traffic/道を曲がる.jfif"
        },
        {
            "word": "右に曲がる",
            "meaning": "rẽ phải",
            "pronunciation": "みぎにまがる",
            "image": "images/traffic/右に曲がる.jfif"
        },
        {
            "word": "左に曲がる",
            "meaning": " rẽ trái",
            "pronunciation": "ひだりにまがる",
            "image": "images/traffic/左に曲がる.jfif"
        },
        {
            "word": "横断歩道を渡る",
            "meaning": "sang đường dành cho người đi bộ",
            "pronunciation": "おうだんほどうをわたる",
            "image": "images/traffic/横断歩道を渡す.jfif"
        },

        {
            "word": "橋を渡る",
            "meaning": "đi qua cầu",
            "pronunciation": "はしをわたる",
            "image": "images/traffic/橋を渡す.jfif"
        },
        {
            "word": "道が混む",
            "meaning": "đường đông",
            "pronunciation": "みちがこむ",
            "image": "images/traffic/道が混む.jfif"
        },
        {
            "word": "道がすく",
            "meaning": " đường vắng",
            "pronunciation": "みちがすく",
            "image": "images/traffic/道がすく.jfif"
        },
        {
            "word": "渋滞",
            "meaning": " tắc đường",
            "pronunciation": "じゅうたい",
            "image": "images/traffic/渋滞.jfif"
        },
        {
            "word": "信号待",
            "meaning": "chờ đèn tín hiệu giao thông",
            "pronunciation": "しんごうまち",
            "image": "images/traffic/信号待.jfif"
        },
        {
            "word": "制限速度を守る",
            "meaning": " tuân thủ tốc độ giới hạn",
            "pronunciation": "せいげんそくどをまもる",
            "image": "images/traffic/制限速度を守る.jfif"
        },
        {
            "word": "制限速度オーバー",
            "meaning": "chạy quá tốc độ",
            "pronunciation": "せいげんそくどオーバー",
            "image": "images/traffic/制限速度オーバー.jfif"
        },
        {
            "word": " 信号を守る",
            "meaning": " tuân thủ theo đèn tín hiệu",
            "pronunciation": "しんごうをまもる",
            "image": "images/traffic/信号を守る.jfif"
        },
        {
            "word": "信号を無視する",
            "meaning": " vượt đèn đỏ",
            "pronunciation": "しんごうをむしする",
            "image": "images/traffic/信号を無視する.jfif"
        },
        {
            "word": "前の車を追い越す",
            "meaning": "vượt xe phía trước",
            "pronunciation": "まえのくるまをおいこす",
            "image": "images/traffic/前の車を追い越す.jfif"
        },
        {
            "word": "前の車に追い越される",
            "meaning": " bị xe phía trước vượt",
            "pronunciation": "まえのくるまにおいこされる",
            "image": "images/traffic/前の車を追い越される.jfif"
        },
        {
            "word": "クラクションを鳴らす",
            "meaning": "bấm còi xe",
            "pronunciation": "クラクションをならす",
            "image": "images/traffic/クラクションを鳴らす.jfif"
        }
    ]
        // Thêm các từ khác cho chủ đề food
        ,
    drinks: [
        {
            word: "牛乳",
            meaning: "sua",
            pronunciation: "ぎゅうにゅう",
            image: "images/牛乳.jpg"
        },
        {
            word: "抹茶",
            meaning: "tra xanh",
            pronunciation: "まっちゃ",
            image: "images/抹茶.jpg"
        }
        // Thêm các từ khác cho chủ đề drinks
    ]
};

let currentIndex = 0; // Chỉ số của flashcard hiện tại
let currentTheme = 'materials'; // Chủ đề mặc định

// Cập nhật flashcard với chủ đề đã chọn
function loadTheme() {
    const themeSelect = document.getElementById('theme');
    currentTheme = themeSelect.value; // Lấy chủ đề đã chọn
    currentIndex = 0; // Đặt lại chỉ số về 0 khi chuyển chủ đề
    updateFlashcard(); // Cập nhật lại flashcard theo chủ đề mới
}

// Cập nhật thông tin flashcard khi chuyển thẻ
function updateFlashcard() {
    const flashcard = themes[currentTheme][currentIndex];
    document.getElementById('flashcard-image').src = flashcard.image;
    document.getElementById('flashcard-word').textContent = flashcard.word;
    document.getElementById('flashcard-meaning').textContent = flashcard.meaning;
    document.getElementById('flashcard-pronunciation').textContent = flashcard.pronunciation;
}

// Lật thẻ flashcard
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flip');
}

// Chuyển đến flashcard tiếp theo
function nextbtn() {
    if (currentIndex < themes[currentTheme].length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Nếu là thẻ cuối cùng, quay lại thẻ đầu tiên
    }
    updateFlashcard(); // Cập nhật thông tin flashcard
}

// Chuyển đến flashcard trước đó
function prevbtn() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = themes[currentTheme].length - 1; // Nếu là thẻ đầu tiên, quay lại thẻ cuối cùng
    }
    updateFlashcard(); // Cập nhật thông tin flashcard
}

// Ban đầu cập nhật flashcard cho chủ đề mặc định
updateFlashcard();
