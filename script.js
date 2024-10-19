document.addEventListener("DOMContentLoaded", () => {
    const maxCharacterSelect = document.getElementById("maxCharacterSelect");
    const characterContainer = document.getElementById("character-container");
    const readyButton = document.getElementById("readyButton");

    const characterList = [
        { id: 1, name: "マリオ", imgPath: "1.マリオ.jpg" },
        { id: 2, name: "ドンキーコング", imgPath: "2.ドンキーコング.jpg" },
        { id: 3, name: "リンク", imgPath: "3.リンク.jpg" },
        { id: 4, name: "サムス", imgPath: "4.サムス.jpg" },
        { id: 4, name: "ダークサムス", imgPath: "4.ダークサムス.jpg" },
        // 以下もすべてのキャラクターを追加
    ];

    // プルダウンメニューに0〜80のオプションを追加
    for (let i = 0; i <= 80; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        maxCharacterSelect.appendChild(option);
    }

    // キャラクターを画面に生成
    characterList.forEach((char) => {
        const charCard = document.createElement("div");
        charCard.classList.add("character-card", "dark");
        charCard.dataset.id = char.id;

        const img = document.createElement("img");
        img.src = char.imgPath;

        charCard.appendChild(img);
        charCard.addEventListener("click", () => {
            // 同じIDを持つキャラクターすべてに対して状態を切り替える
            const sameIdCards = document.querySelectorAll(`.character-card[data-id='${char.id}']`);
            sameIdCards.forEach((card) => {
                const cardImg = card.querySelector("img");
                if (card.classList.contains("dark")) {
                    card.classList.remove("dark");
                    card.classList.add("bright");
                    cardImg.src = char.imgPath.replace("b.jpg", ".jpg"); // 明るい画像に切り替え
                } else if (card.classList.contains("bright")) {
                    card.classList.remove("bright");
                    card.classList.add("disabled");
                    cardImg.src = "x.jpg"; // ×の画像
                } else {
                    card.classList.remove("disabled");
                    card.classList.add("dark");
                    cardImg.src = char.imgPath;
                }
            });
            updateReadyButtonState();
        });

        characterContainer.appendChild(charCard);
    });

    // MAXCharacterに基づいてボタンの有効化を管理
    function updateReadyButtonState() {
        const brightCount = document.querySelectorAll(".character-card.bright").length;
        const maxCharacters = parseInt(maxCharacterSelect.value, 10);
        readyButton.disabled = brightCount !== maxCharacters || maxCharacters === 0;
    }

    // ランダムにキャラクターを選出
    readyButton.addEventListener("click", () => {
        const brightCharacters = Array.from(document.querySelectorAll(".character-card.bright"));
        const darkCharacters = Array.from(document.querySelectorAll(".character-card.dark"));

        let chosenCharacters = [];
        if (brightCharacters.length >= 5) {
            while (chosenCharacters.length < 5) {
                const randomIndex = Math.floor(Math.random() * brightCharacters.length);
                const char = brightCharacters[randomIndex];
                if (!chosenCharacters.includes(char)) {
                    chosenCharacters.push(char);
                }
            }
        } else {
            chosenCharacters = brightCharacters.slice();
            while (chosenCharacters.length < 5 && darkCharacters.length > 0) {
                const randomIndex = Math.floor(Math.random() * darkCharacters.length);
                chosenCharacters.push(darkCharacters.splice(randomIndex, 1)[0]);
            }
        }

        const chosenNames = chosenCharacters.map((char) => {
            const charData = characterList.find((c) => c.id == char.dataset.id);
            return charData ? charData.name : "不明";
        });

        alert("選ばれたキャラクター:\n" + chosenNames.join("\n"));
    });

    maxCharacterSelect.addEventListener("change", updateReadyButtonState);
});
