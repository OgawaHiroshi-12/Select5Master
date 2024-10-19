document.addEventListener("DOMContentLoaded", () => {
    const maxCharacterSelect = document.getElementById("maxCharacterSelect");
    const characterContainer = document.getElementById("character-container");
    const readyButton = document.getElementById("readyButton");

    // キャラクターリストの情報（画像パスが正しくなるように設定）
    const characterList = [
        { id: 1, name: "マリオ", imgPath: "select5master/images/ssbudata/1.マリオb.jpg", brightImgPath: "select5master/images/ssbudatab/1.マリオ.jpg" },
        { id: 2, name: "ドンキーコング", imgPath: "select5master/images/ssbudata/2.ドンキーコングb.jpg", brightImgPath: "select5master/images/ssbudatab/2.ドンキーコング.jpg" },
        { id: 3, name: "リンク", imgPath: "select5master/images/ssbudata/3.リンクb.jpg", brightImgPath: "select5master/images/ssbudatab/3.リンク.jpg" },
        { id: 4, name: "サムス", imgPath: "select5master/images/ssbudata/4.サムスb.jpg", brightImgPath: "select5master/images/ssbudatab/4.サムス.jpg" },
        { id: 4, name: "ダークサムス", imgPath: "select5master/images/ssbudata/4.ダークサムスb.jpg", brightImgPath: "select5master/images/ssbudatab/4.ダークサムス.jpg" },
        { id: 5, name: "ヨッシー", imgPath: "select5master/images/ssbudata/5.ヨッシーb.jpg", brightImgPath: "select5master/images/ssbudatab/5.ヨッシー.jpg" },
        { id: 6, name: "カービィ", imgPath: "select5master/images/ssbudata/6.カービィb.jpg", brightImgPath: "select5master/images/ssbudatab/6.カービィ.jpg" },
        { id: 7, name: "フォックス", imgPath: "select5master/images/ssbudata/7.フォックスb.jpg", brightImgPath: "select5master/images/ssbudatab/7.フォックス.jpg" },
        { id: 8, name: "ピカチュウ", imgPath: "select5master/images/ssbudata/8.ピカチュウb.jpg", brightImgPath: "select5master/images/ssbudatab/8.ピカチュウ.jpg" },
        { id: 9, name: "ルイージ", imgPath: "select5master/images/ssbudata/9.ルイージb.jpg", brightImgPath: "select5master/images/ssbudatab/9.ルイージ.jpg" },
        { id: 10, name: "ネス", imgPath: "select5master/images/ssbudata/10.ネスb.jpg", brightImgPath: "select5master/images/ssbudatab/10.ネス.jpg" },
        { id: 11, name: "ファルコン", imgPath: "select5master/images/ssbudata/11.ファルコンb.jpg", brightImgPath: "select5master/images/ssbudatab/11.ファルコン.jpg" },
        { id: 12, name: "プリン", imgPath: "select5master/images/ssbudata/12.プリンb.jpg", brightImgPath: "select5master/images/ssbudatab/12.プリン.jpg" },
        { id: 13, name: "デイジー", imgPath: "select5master/images/ssbudata/13.デイジーb.jpg", brightImgPath: "select5master/images/ssbudatab/13.デイジー.jpg" },
        { id: 13, name: "ピーチ", imgPath: "select5master/images/ssbudata/13.ピーチb.jpg", brightImgPath: "select5master/images/ssbudatab/13.ピーチ.jpg" },
        { id: 14, name: "クッパ", imgPath: "select5master/images/ssbudata/14.クッパb.jpg", brightImgPath: "select5master/images/ssbudatab/14.クッパ.jpg" },
        { id: 15, name: "アイスクライマー", imgPath: "select5master/images/ssbudata/15.アイクラb.jpg", brightImgPath: "select5master/images/ssbudatab/15.アイクラ.jpg" },
        { id: 16, name: "シーク", imgPath: "select5master/images/ssbudata/16.シークb.jpg", brightImgPath: "select5master/images/ssbudatab/16.シーク.jpg" },
        { id: 17, name: "ゼルダ", imgPath: "select5master/images/ssbudata/17.ゼルダb.jpg", brightImgPath: "select5master/images/ssbudatab/17.ゼルダ.jpg" },
        { id: 18, name: "ドクターマリオ", imgPath: "select5master/images/ssbudata/18.ドクターマリオb.jpg", brightImgPath: "select5master/images/ssbudatab/18.ドクターマリオ.jpg" },
        { id: 19, name: "ピチュー", imgPath: "select5master/images/ssbudata/19.ピチューb.jpg", brightImgPath: "select5master/images/ssbudatab/19.ピチュー.jpg" },
        { id: 20, name: "ファルコ", imgPath: "select5master/images/ssbudata/20.ファルコb.jpg", brightImgPath: "select5master/images/ssbudatab/20.ファルコ.jpg" },
        { id: 21, name: "マルス", imgPath: "select5master/images/ssbudata/21.マルスb.jpg", brightImgPath: "select5master/images/ssbudatab/21.マルス.jpg" },
        { id: 21, name: "ルキナ", imgPath: "select5master/images/ssbudata/21.ルキナb.jpg", brightImgPath: "select5master/images/ssbudatab/21.ルキナ.jpg" },
        { id: 22, name: "こどもリンク", imgPath: "select5master/images/ssbudata/22.こどもリンクb.jpg", brightImgPath: "select5master/images/ssbudatab/22.こどもリンク.jpg" },
        { id: 23, name: "ガノンドルフ", imgPath: "select5master/images/ssbudata/23.ガノンドルフb.jpg", brightImgPath: "select5master/images/ssbudatab/23.ガノンドルフ.jpg" },
        { id: 24, name: "ミュウツー", imgPath: "select5master/images/ssbudata/24.ミュウツーb.jpg", brightImgPath: "select5master/images/ssbudatab/24.ミュウツー.jpg" },
        { id: 25, name: "クロム", imgPath: "select5master/images/ssbudata/25.クロムb.jpg", brightImgPath: "select5master/images/ssbudatab/25.クロム.jpg" },
        { id: 25, name: "ロイ", imgPath: "select5master/images/ssbudata/25.ロイb.jpg", brightImgPath: "select5master/images/ssbudatab/25.ロイ.jpg" },
        { id: 26, name: "Mr.ゲーム&ウォッチ", imgPath: "select5master/images/ssbudata/26.Mr.ゲーム&ウォッチb.jpg", brightImgPath: "select5master/images/ssbudatab/26.Mr.ゲーム&ウォッチ.jpg" },
        { id: 27, name: "メタナイト", imgPath: "select5master/images/ssbudata/27.メタナイトb.jpg", brightImgPath: "select5master/images/ssbudatab/27.メタナイト.jpg" },
        { id: 28, name: "ピット", imgPath: "select5master/images/ssbudata/28.ピットb.jpg", brightImgPath: "select5master/images/ssbudatab/28.ピット.jpg" },
        { id: 28, name: "ブラックピット", imgPath: "select5master/images/ssbudata/28.ブラックピットb.jpg", brightImgPath: "select5master/images/ssbudatab/28.ブラックピット.jpg" },
        { id: 29, name: "ゼロスーツサムス", imgPath: "select5master/images/ssbudata/29.ゼロスーツサムスb.jpg", brightImgPath: "select5master/images/ssbudatab/29.ゼロスーツサムス.jpg" },
        { id: 30, name: "ワリオ", imgPath: "select5master/images/ssbudata/30.ワリオb.jpg", brightImgPath: "select5master/images/ssbudatab/30.ワリオ.jpg" },
        { id: 31, name: "スネーク", imgPath: "select5master/images/ssbudata/31.スネークb.jpg", brightImgPath: "select5master/images/ssbudatab/31.スネーク.jpg" },
        { id: 32, name: "アイク", imgPath: "select5master/images/ssbudata/32.アイクb.jpg", brightImgPath: "select5master/images/ssbudatab/32.アイク.jpg" },
        { id: 33, name: "ポケモントレーナー", imgPath: "select5master/images/ssbudata/33.ポケモントレーナーb.jpg", brightImgPath: "select5master/images/ssbudatab/33.ポケモントレーナー.jpg" },
        { id: 34, name: "ディディーコング", imgPath: "select5master/images/ssbudata/34.ディディーコングb.jpg", brightImgPath: "select5master/images/ssbudatab/34.ディディーコング.jpg" },
        { id: 35, name: "リュカ", imgPath: "select5master/images/ssbudata/35.リュカb.jpg", brightImgPath: "select5master/images/ssbudatab/35.リュカ.jpg" },
        { id: 36, name: "ソニック", imgPath: "select5master/images/ssbudata/36.ソニックb.jpg", brightImgPath: "select5master/images/ssbudatab/36.ソニック.jpg" },
        { id: 37, name: "デデデ", imgPath: "select5master/images/ssbudata/37.デデデb.jpg", brightImgPath: "select5master/images/ssbudatab/37.デデデ.jpg" },
        { id: 38, name: "ピクミン&オリマー", imgPath: "select5master/images/ssbudata/38.ピクミン&オリマb.jpg", brightImgPath: "select5master/images/ssbudatab/38.ピクミン&オリマー.jpg" },
        { id: 39, name: "ルカリオ", imgPath: "select5master/images/ssbudata/39.ルカリオb.jpg", brightImgPath: "select5master/images/ssbudatab/39.ルカリオ.jpg" },
        { id: 40, name: "ロボット", imgPath: "select5master/images/ssbudata/40.ロボットb.jpg", brightImgPath: "select5master/images/ssbudatab/40.ロボット.jpg" },
        { id: 41, name: "トゥーンリンク", imgPath: "select5master/images/ssbudata/41.トゥーンリンクb.jpg", brightImgPath: "select5master/images/ssbudatab/41.トゥーンリンク.jpg" },
        { id: 42, name: "ウルフ", imgPath: "select5master/images/ssbudata/42.ウルフb.jpg", brightImgPath: "select5master/images/ssbudatab/42.ウルフ.jpg" },
        { id: 43, name: "むらびと", imgPath: "select5master/images/ssbudata/43.むらびとb.jpg", brightImgPath: "select5master/images/ssbudatab/43.むらびと.jpg" },
        { id: 44, name: "ロックマン", imgPath: "select5master/images/ssbudata/44.ロックマンb.jpg", brightImgPath: "select5master/images/ssbudatab/44.ロックマン.jpg" },
        { id: 45, name: "WiiFitトレーナー", imgPath: "select5master/images/ssbudata/45.WiiFitトレーナーb.jpg", brightImgPath: "select5master/images/ssbudatab/45.WiiFitトレーナー.jpg" },
        { id: 46, name: "ロゼッタ&チコ", imgPath: "select5master/images/ssbudata/46.ロゼッタ&チコb.jpg", brightImgPath: "select5master/images/ssbudatab/46.ロゼッタ&チコ.jpg" },
        { id: 47, name: "リトル・マック", imgPath: "select5master/images/ssbudata/47.リトル・マックb.jpg", brightImgPath: "select5master/images/ssbudatab/47.リトル・マック.jpg" },
        { id: 48, name: "ゲッコウガ", imgPath: "select5master/images/ssbudata/48.ゲッコウガb.jpg", brightImgPath: "select5master/images/ssbudatab/48.ゲッコウガ.jpg" },
        { id: 49, name: "パルテナ", imgPath: "select5master/images/ssbudata/49.パルテナb.jpg", brightImgPath: "select5master/images/ssbudatab/49.パルテナ.jpg" },
        { id: 50, name: "パックマン", imgPath: "select5master/images/ssbudata/50.パックマンb.jpg", brightImgPath: "select5master/images/ssbudatab/50.パックマン.jpg" },
        { id: 51, name: "ルフレ", imgPath: "select5master/images/ssbudata/51.ルフレb.jpg", brightImgPath: "select5master/images/ssbudatab/51.ルフレ.jpg" },
        { id: 52, name: "シュルク", imgPath: "select5master/images/ssbudata/52.シュルクb.jpg", brightImgPath: "select5master/images/ssbudatab/52.シュルク.jpg" },
        { id: 53, name: "クッパJr", imgPath: "select5master/images/ssbudata/53.クッパJrb.jpg", brightImgPath: "select5master/images/ssbudatab/53.クッパJr.jpg" },
        { id: 54, name: "ダックハント", imgPath: "select5master/images/ssbudata/54.ダックハントb.jpg", brightImgPath: "select5master/images/ssbudatab/54.ダックハント.jpg" },
        { id: 55, name: "リュウ", imgPath: "select5master/images/ssbudata/55.リュウb.jpg", brightImgPath: "select5master/images/ssbudatab/55.リュウ.jpg" },
        { id: 56, name: "ケン", imgPath: "select5master/images/ssbudata/56.ケンb.jpg", brightImgPath: "select5master/images/ssbudatab/56.ケン.jpg" },
        { id: 57, name: "クラウド", imgPath: "select5master/images/ssbudata/57.クラウドb.jpg", brightImgPath: "select5master/images/ssbudatab/57.クラウド.jpg" },
        { id: 58, name: "カムイ", imgPath: "select5master/images/ssbudata/58.カムイb.jpg", brightImgPath: "select5master/images/ssbudatab/58.カムイ.jpg" },
        { id: 59, name: "ベヨネッタ", imgPath: "select5master/images/ssbudata/59.ベヨネッタb.jpg", brightImgPath: "select5master/images/ssbudatab/59.ベヨネッタ.jpg" },
        { id: 60, name: "インクリング", imgPath: "select5master/images/ssbudata/60.インクリングb.jpg", brightImgPath: "select5master/images/ssbudatab/60.インクリング.jpg" },
        { id: 61, name: "リドリー", imgPath: "select5master/images/ssbudata/61.リドリーb.jpg", brightImgPath: "select5master/images/ssbudatab/61.リドリー.jpg" },
        { id: 62, name: "シモン", imgPath: "select5master/images/ssbudata/62.シモンb.jpg", brightImgPath: "select5master/images/ssbudatab/62.シモン.jpg" },
        { id: 62, name: "リヒター", imgPath: "select5master/images/ssbudata/62.リヒターb.jpg", brightImgPath: "select5master/images/ssbudatab/62.リヒター.jpg" },
        { id: 63, name: "キングクルール", imgPath: "select5master/images/ssbudata/63.キングクルールb.jpg", brightImgPath: "select5master/images/ssbudatab/63.キングクルール.jpg" },
        { id: 64, name: "しずえ", imgPath: "select5master/images/ssbudata/64.しずえb.jpg", brightImgPath: "select5master/images/ssbudatab/64.しずえ.jpg" },
        { id: 65, name: "ガオガエン", imgPath: "select5master/images/ssbudata/65.ガオガエンb.jpg", brightImgPath: "select5master/images/ssbudatab/65.ガオガエン.jpg" },
        { id: 66, name: "パックンフラワー", imgPath: "select5master/images/ssbudata/66.パックンフラワーb.jpg", brightImgPath: "select5master/images/ssbudatab/66.パックンフラワー.jpg" },
        { id: 67, name: "ジョーカー", imgPath: "select5master/images/ssbudata/67.ジョーカーb.jpg", brightImgPath: "select5master/images/ssbudatab/67.ジョーカー.jpg" },
        { id: 68, name: "勇者", imgPath: "select5master/images/ssbudata/68.勇者b.jpg", brightImgPath: "select5master/images/ssbudatab/68.勇者.jpg" },
        { id: 69, name: "バンジョー&カズーイ", imgPath: "select5master/images/ssbudata/69.バンジョー&カズーイb.jpg", brightImgPath: "select5master/images/ssbudatab/69.バンジョー&カズーイ.jpg" },
        { id: 70, name: "テリー", imgPath: "select5master/images/ssbudata/70.テリーb.jpg", brightImgPath: "select5master/images/ssbudatab/70.テリー.jpg" },
        { id: 71, name: "ベレス・ベレト", imgPath: "select5master/images/ssbudata/71.ベレス・ベレトb.jpg", brightImgPath: "select5master/images/ssbudatab/71.ベレス・ベレト.jpg" },
        { id: 72, name: "ミェンミェン", imgPath: "select5master/images/ssbudata/72.ミェンミェンb.jpg", brightImgPath: "select5master/images/ssbudatab/72.ミェンミェン.jpg" },
        { id: 73, name: "スティーブ", imgPath: "select5master/images/ssbudata/73.スティーブb.jpg", brightImgPath: "select5master/images/ssbudatab/73.スティーブ.jpg" },
        { id: 74, name: "セフィロス", imgPath: "select5master/images/ssbudata/74.セフィロスb.jpg", brightImgPath: "select5master/images/ssbudatab/74.セフィロス.jpg" },
        { id: 75, name: "ホムラ&ヒカリ", imgPath: "select5master/images/ssbudata/75.ホムラ&ヒカリb.jpg", brightImgPath: "select5master/images/ssbudatab/75.ホムラ&ヒカリ.jpg" },
        { id: 76, name: "カズヤ", imgPath: "select5master/images/ssbudata/76.カズヤb.jpg", brightImgPath: "select5master/images/ssbudatab/76.カズヤ.jpg" },
        { id: 77, name: "ソラ", imgPath: "select5master/images/ssbudata/77.ソラb.jpg", brightImgPath: "select5master/images/ssbudatab/77.ソラ.jpg" },
        { id: 78, name: "格闘Mii", imgPath: "select5master/images/ssbudata/78.格闘Miib.jpg", brightImgPath: "select5master/images/ssbudatab/78.格闘Mii.jpg" },
        { id: 79, name: "剣術Mii", imgPath: "select5master/images/ssbudata/79.剣術Miib.jpg", brightImgPath: "select5master/images/ssbudatab/79.剣術Mii.jpg" },
        { id: 80, name: "射撃Mii", imgPath: "select5master/images/ssbudata/80.射撃Miib.jpg", brightImgPath: "select5master/images/ssbudatab/80.射撃Mii.jpg" }
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
        img.src = char.imgPath; // 初期は暗い画像を使用
        img.alt = char.name;

        charCard.appendChild(img);
        charCard.addEventListener("click", () => {
            // 状態を順に切り替え（暗い→明るい→×）
            if (charCard.classList.contains("dark")) {
                charCard.classList.remove("dark");
                charCard.classList.add("bright");
                img.src = char.brightImgPath; // 明るい画像に変更
            } else if (charCard.classList.contains("bright")) {
                charCard.classList.remove("bright");
                charCard.classList.add("disabled");
                img.src = "images/x.jpg"; // ×の画像
            } else {
                charCard.classList.remove("disabled");
                charCard.classList.add("dark");
                img.src = char.imgPath; // 暗い画像に戻す
            }
            updateReadyButtonState();
        });

        characterContainer.appendChild(charCard);
    });

    // MAXCharacterに基づいて「READY TO FIGHT!」ボタンの有効化を管理
    function updateReadyButtonState() {
        const brightCount = document.querySelectorAll(".character-card.bright").length;
        const maxCharacters = parseInt(maxCharacterSelect.value, 10);
        readyButton.disabled = brightCount !== maxCharacters || maxCharacters === 0;
    }

    // 「READY TO FIGHT!」ボタンのランダム選出機能
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
