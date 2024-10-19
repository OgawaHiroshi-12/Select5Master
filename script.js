document.addEventListener("DOMContentLoaded", () => {
    const maxCharacterSelect = document.getElementById("maxCharacterSelect");
    const characterContainer = document.getElementById("character-container");
    const readyButton = document.getElementById("readyButton");

    // キャラクターリストの情報（画像パスが正しくなるように設定）
    const characterList = [
        { id: 1, name: "マリオ", imgPath: "select5master/images/ssbudatab/1.mariob.jpg", brightImgPath: "select5master/images/ssbudata/1.mario.jpg" },
        { id: 2, name: "ドンキーコング", imgPath: "select5master/images/ssbudatab/2.donki-kongub.jpg", brightImgPath: "select5master/images/ssbudata/2.donki-kongu.jpg" },
        { id: 3, name: "リンク", imgPath: "select5master/images/ssbudatab/3.rinkub.jpg", brightImgPath: "select5master/images/ssbudata/3.rinku.jpg" },
        { id: 4, name: "サムス", imgPath: "select5master/images/ssbudatab/4.samusub.jpg", brightImgPath: "select5master/images/ssbudata/4.samusu.jpg" },
        { id: 4, name: "ダークサムス", imgPath: "select5master/images/ssbudatab/4.da-kusamusub.jpg", brightImgPath: "select5master/images/ssbudata/4.da-kusamusu.jpg" },
        { id: 5, name: "ヨッシー", imgPath: "select5master/images/ssbudatab/5.yotsushi-b.jpg", brightImgPath: "select5master/images/ssbudata/5.yotsushi-.jpg" },
        { id: 6, name: "カービィ", imgPath: "select5master/images/ssbudatab/6.ka-biib.jpg", brightImgPath: "select5master/images/ssbudata/6.ka-bii.jpg" },
        { id: 7, name: "フォックス", imgPath: "select5master/images/ssbudatab/7.huotsukusub.jpg", brightImgPath: "select5master/images/ssbudata/7.huotsukusu.jpg" },
        { id: 8, name: "ピカチュウ", imgPath: "select5master/images/ssbudatab/8.pikachiyuub.jpg", brightImgPath: "select5master/images/ssbudata/8.pikachiyuu.jpg" },
        { id: 9, name: "ルイージ", imgPath: "select5master/images/ssbudatab/9.rui-zib.jpg", brightImgPath: "select5master/images/ssbudata/9.rui-zi.jpg" },
        { id: 10, name: "ネス", imgPath: "select5master/images/ssbudatab/10.nesub.jpg", brightImgPath: "select5master/images/ssbudata/10.nesu.jpg" },
        { id: 11, name: "ファルコン", imgPath: "select5master/images/ssbudatab/11.huarukonb.jpg", brightImgPath: "select5master/images/ssbudata/11.huarukon.jpg" },
        { id: 12, name: "プリン", imgPath: "select5master/images/ssbudatab/12.12.purinb.jpg", brightImgPath: "select5master/images/ssbudata/12.purin.jpg" },
        { id: 13, name: "デイジー", imgPath: "select5master/images/ssbudatab/13.deizi-b.jpg", brightImgPath: "select5master/images/ssbudata/13.deizi-.jpg" },
        { id: 13, name: "ピーチ", imgPath: "select5master/images/ssbudatab/13.pi-chib.jpg", brightImgPath: "select5master/images/ssbudata/13.pi-chi.jpg" },
        { id: 14, name: "クッパ", imgPath: "select5master/images/ssbudatab/14.kutsupab.jpg", brightImgPath: "select5master/images/ssbudata/14.kutsupa.jpg" },
        { id: 15, name: "アイスクライマー", imgPath: "select5master/images/ssbudatab/15.aikurab.jpg", brightImgPath: "select5master/images/ssbudata/15.aikura.jpg" },
        { id: 16, name: "シーク", imgPath: "select5master/images/ssbudatab/16.shi-kub.jpg", brightImgPath: "select5master/images/ssbudata/16.shi-ku.jpg" },
        { id: 17, name: "ゼルダ", imgPath: "select5master/images/ssbudatab/17.zerudab.jpg", brightImgPath: "select5master/images/ssbudata/17.zeruda.jpg" },
        { id: 18, name: "ドクターマリオ", imgPath: "select5master/images/ssbudatab/18.dokuta-mariob.jpg", brightImgPath: "select5master/images/ssbudata/18.dokuta-mario.jpg" },
        { id: 19, name: "ピチュー", imgPath: "select5master/images/ssbudatab/19.pichiyu-b.jpg", brightImgPath: "select5master/images/ssbudata/19.pichiyu-.jpg" },
        { id: 20, name: "ファルコ", imgPath: "select5master/images/ssbudatab/20.huarukob.jpg", brightImgPath: "select5master/images/ssbudata/20.huaruko.jpg" },
        { id: 21, name: "マルス", imgPath: "select5master/images/ssbudatab/21.marusub.jpg", brightImgPath: "select5master/images/ssbudata/21.marusu.jpg" },
        { id: 21, name: "ルキナ", imgPath: "select5master/images/ssbudatab/21.rukinab.jpg", brightImgPath: "select5master/images/ssbudata/21.rukina.jpg" },
        { id: 22, name: "こどもリンク", imgPath: "select5master/images/ssbudatab/22.kodomorinkub.jpg", brightImgPath: "select5master/images/ssbudata/22.kodomorinku.jpg" },
        { id: 23, name: "ガノンドルフ", imgPath: "select5master/images/ssbudatab/23.ganondoruhub.jpg", brightImgPath: "select5master/images/ssbudata/23.ganondoruhu.jpg" },
        { id: 24, name: "ミュウツー", imgPath: "select5master/images/ssbudatab/24.miyuutsu-b.jpg", brightImgPath: "select5master/images/ssbudata/24.miyuutsu-.jpg" },
        { id: 25, name: "クロム", imgPath: "select5master/images/ssbudatab/25.kuromub.jpg", brightImgPath: "select5master/images/ssbudata/25.kuromu.jpg" },
        { id: 25, name: "ロイ", imgPath: "select5master/images/ssbudatab/25.roib.jpg", brightImgPath: "select5master/images/ssbudata/25.roi.jpg" },
        { id: 26, name: "Mr.ゲーム&ウォッチ", imgPath: "select5master/images/ssbudatab/26.Mr.ge-muuotsuchib.jpg", brightImgPath: "select5master/images/ssbudata/26.Mr.ge-muuotsuchi.jpg" },
        { id: 27, name: "メタナイト", imgPath: "select5master/images/ssbudatab/27.metanaitob.jpg", brightImgPath: "select5master/images/ssbudata/27.metanaito.jpg" },
        { id: 28, name: "ピット", imgPath: "select5master/images/ssbudatab/28.pitsutob.jpg", brightImgPath: "select5master/images/ssbudata/28.pitsuto.jpg" },
        { id: 28, name: "ブラックピット", imgPath: "select5master/images/ssbudatab/28.buratsukupitsutob.jpg", brightImgPath: "select5master/images/ssbudata/28.buratsukupitsuto.jpg" },
        { id: 29, name: "ゼロスーツサムス", imgPath: "select5master/images/ssbudatab/29.zerosu-tsusamusub.jpg", brightImgPath: "select5master/images/ssbudata/29.zerosu-tsusamusu.jpg" },
        { id: 30, name: "ワリオ", imgPath: "select5master/images/ssbudatab/30.wariob.jpg", brightImgPath: "select5master/images/ssbudata/30.wario.jpg" },
        { id: 31, name: "スネーク", imgPath: "select5master/images/ssbudatab/31.sune-kub.jpg", brightImgPath: "select5master/images/ssbudata/31.sune-ku.jpg" },
        { id: 32, name: "アイク", imgPath: "select5master/images/ssbudatab/32.aikub.jpg", brightImgPath: "select5master/images/ssbudata/32.aiku.jpg" },
        { id: 33, name: "ポケモントレーナー", imgPath: "select5master/images/ssbudatab/33.pokemontore-na-b.jpg", brightImgPath: "select5master/images/ssbudata/33.pokemontore-na-.jpg" },
        { id: 34, name: "ディディーコング", imgPath: "select5master/images/ssbudatab/34.deidei-kongub.jpg", brightImgPath: "select5master/images/ssbudata/34.deidei-kongu.jpg" },
        { id: 35, name: "リュカ", imgPath: "select5master/images/ssbudatab/35.riyukab.jpg", brightImgPath: "select5master/images/ssbudata/35.riyuka.jpg" },
        { id: 36, name: "ソニック", imgPath: "select5master/images/ssbudatab/36.sonitsukub.jpg", brightImgPath: "select5master/images/ssbudata/36.sonitsuku.jpg" },
        { id: 37, name: "デデデ", imgPath: "select5master/images/ssbudatab/37.dededeb.jpg", brightImgPath: "select5master/images/ssbudata/37.dedede.jpg" },
        { id: 38, name: "ピクミン&オリマー", imgPath: "select5master/images/ssbudatab/38.pikuminorima-b.jpg", brightImgPath: "select5master/images/ssbudata/38.pikuminorima-.jpg" },
        { id: 39, name: "ルカリオ", imgPath: "select5master/images/ssbudatab/39.rukariob.jpg", brightImgPath: "select5master/images/ssbudata/39.rukario.jpg" },
        { id: 40, name: "ロボット", imgPath: "select5master/images/ssbudatab/40.robotsutob.jpg", brightImgPath: "select5master/images/ssbudata/40.robotsuto.jpg" },
        { id: 41, name: "トゥーンリンク", imgPath: "select5master/images/ssbudatab/41.tou-nrinkub.jpg", brightImgPath: "select5master/images/ssbudata/41.tou-nrinku.jpg" },
        { id: 42, name: "ウルフ", imgPath: "select5master/images/ssbudatab/42.uruhub.jpg", brightImgPath: "select5master/images/ssbudata/42.uruhu.jpg" },
        { id: 43, name: "むらびと", imgPath: "select5master/images/ssbudatab/43.murabitob.jpg", brightImgPath: "select5master/images/ssbudata/43.murabito.jpg" },
        { id: 44, name: "ロックマン", imgPath: "select5master/images/ssbudatab/44.rotsukumanb.jpg", brightImgPath: "select5master/images/ssbudata/44.rotsukuman.jpg" },
        { id: 45, name: "WiiFitトレーナー", imgPath: "select5master/images/ssbudatab/45.WiiFittore-na-b.jpg", brightImgPath: "select5master/images/ssbudata/45.WiiFittore-na-.jpg" },
        { id: 46, name: "ロゼッタ&チコ", imgPath: "select5master/images/ssbudatab/46.rozetsutachikob.jpg", brightImgPath: "select5master/images/ssbudata/46.rozetsutachiko.jpg" },
        { id: 47, name: "リトル・マック", imgPath: "select5master/images/ssbudatab/47.ritorumatsukub.jpg", brightImgPath: "select5master/images/ssbudata/47.ritorumatsuku.jpg" },
        { id: 48, name: "ゲッコウガ", imgPath: "select5master/images/ssbudatab/48.getsukougab.jpg", brightImgPath: "select5master/images/ssbudata/48.getsukouga.jpg" },
        { id: 49, name: "パルテナ", imgPath: "select5master/images/ssbudatab/49.parutenab.jpg", brightImgPath: "select5master/images/ssbudata/49.parutena.jpg" },
        { id: 50, name: "パックマン", imgPath: "select5master/images/ssbudatab/50.patsukumanb.jpg", brightImgPath: "select5master/images/ssbudata/50.patsukuman.jpg" },
        { id: 51, name: "ルフレ", imgPath: "select5master/images/ssbudatab/51.ruhureb.jpg", brightImgPath: "select5master/images/ssbudata/51.ruhure.jpg" },
        { id: 52, name: "シュルク", imgPath: "select5master/images/ssbudatab/52.shiyurukub.jpg", brightImgPath: "select5master/images/ssbudata/52.shiyuruku.jpg" },
        { id: 53, name: "クッパJr", imgPath: "select5master/images/ssbudatab/53.kutsupaJrb.jpg", brightImgPath: "select5master/images/ssbudata/53.kutsupaJr.jpg" },
        { id: 54, name: "ダックハント", imgPath: "select5master/images/ssbudatab/54.datsukuhantob.jpg", brightImgPath: "select5master/images/ssbudata/54.datsukuhanto.jpg" },
        { id: 55, name: "リュウ", imgPath: "select5master/images/ssbudatab/55.riyuub.jpg", brightImgPath: "select5master/images/ssbudata/55.riyuu.jpg" },
        { id: 56, name: "ケン", imgPath: "select5master/images/ssbudatab/56.kenb.jpg", brightImgPath: "select5master/images/ssbudata/56.ken.jpg" },
        { id: 57, name: "クラウド", imgPath: "select5master/images/ssbudatab/57.kuraudob.jpg", brightImgPath: "select5master/images/ssbudata/57.kuraudo.jpg" },
        { id: 58, name: "カムイ", imgPath: "select5master/images/ssbudatab/58.kamuib.jpg", brightImgPath: "select5master/images/ssbudata/58.kamui.jpg" },
        { id: 59, name: "ベヨネッタ", imgPath: "select5master/images/ssbudatab/59.beyonetsutab.jpg", brightImgPath: "select5master/images/ssbudata/59.beyonetsuta.jpg" },
        { id: 60, name: "インクリング", imgPath: "select5master/images/ssbudatab/60.inkuringub.jpg", brightImgPath: "select5master/images/ssbudata/60.inkuringu.jpg" },
        { id: 61, name: "リドリー", imgPath: "select5master/images/ssbudatab/61.ridori-b.jpg", brightImgPath: "select5master/images/ssbudata/61.ridori-.jpg" },
        { id: 62, name: "シモン", imgPath: "select5master/images/ssbudatab/62.shimonb.jpg", brightImgPath: "select5master/images/ssbudata/62.shimon.jpg" },
        { id: 62, name: "リヒター", imgPath: "select5master/images/ssbudatab/62.rihita-b.jpg", brightImgPath: "select5master/images/ssbudata/62.rihita-.jpg" },
        { id: 63, name: "キングクルール", imgPath: "select5master/images/ssbudatab/63.kingukuru-rub.jpg", brightImgPath: "select5master/images/ssbudata/63.kingukuru-ru.jpg" },
        { id: 64, name: "しずえ", imgPath: "select5master/images/ssbudatab/64.shizueb.jpg", brightImgPath: "select5master/images/ssbudata/64.shizue.jpg" },
        { id: 65, name: "ガオガエン", imgPath: "select5master/images/ssbudatab/65.gaogaenb.jpg", brightImgPath: "select5master/images/ssbudata/65.gaogaen.jpg" },
        { id: 66, name: "パックンフラワー", imgPath: "select5master/images/ssbudatab/66.patsukunhurawa-b.jpg", brightImgPath: "select5master/images/ssbudata/66.patsukunhurawa-.jpg" },
        { id: 67, name: "ジョーカー", imgPath: "select5master/images/ssbudatab/67.ziyo-ka-b.jpg", brightImgPath: "select5master/images/ssbudata/67.ziyo-ka-.jpg" },
        { id: 68, name: "勇者", imgPath: "select5master/images/ssbudatab/68.yusyab.jpg", brightImgPath: "select5master/images/ssbudata/68.yusya.jpg" },
        { id: 69, name: "バンジョー&カズーイ", imgPath: "select5master/images/ssbudatab/69.banziyo-kazu-ib.jpg", brightImgPath: "select5master/images/ssbudata/69.banziyo-kazu-i.jpg" },
        { id: 70, name: "テリー", imgPath: "select5master/images/ssbudatab/70.teri-b.jpg", brightImgPath: "select5master/images/ssbudata/70.teri-.jpg" },
        { id: 71, name: "ベレス・ベレト", imgPath: "select5master/images/ssbudatab/71.beresuberetob.jpg", brightImgPath: "select5master/images/ssbudata/71.beresubereto.jpg" },
        { id: 72, name: "ミェンミェン", imgPath: "select5master/images/ssbudatab/72.mienmienb.jpg", brightImgPath: "select5master/images/ssbudata/72.mienmien.jpg" },
        { id: 73, name: "スティーブ", imgPath: "select5master/images/ssbudatab/73.sutei-bub.jpg", brightImgPath: "select5master/images/ssbudata/73.sutei-bu.jpg" },
        { id: 74, name: "セフィロス", imgPath: "select5master/images/ssbudatab/74.sehuirosub.jpg", brightImgPath: "select5master/images/ssbudata/74.sehuirosu.jpg" },
        { id: 75, name: "ホムラ&ヒカリ", imgPath: "select5master/images/ssbudatab/75.homurahikarib.jpg", brightImgPath: "select5master/images/ssbudata/75.homurahikari.jpg" },
        { id: 76, name: "カズヤ", imgPath: "select5master/images/ssbudatab/76.kazuyab.jpg", brightImgPath: "select5master/images/ssbudata/76.kazuya.jpg" },
        { id: 77, name: "ソラ", imgPath: "select5master/images/ssbudatab/77.sorab.jpg", brightImgPath: "select5master/images/ssbudata/77.sora.jpg" },
        { id: 78, name: "格闘Mii", imgPath: "select5master/images/ssbudatab/78.kakuMiib.jpg", brightImgPath: "select5master/images/ssbudata/78.kakuMii.jpg" },
        { id: 79, name: "剣術Mii", imgPath: "select5master/images/ssbudatab/79.kenMiib.jpg", brightImgPath: "select5master/images/ssbudata/79.kenMii.jpg" },
        { id: 80, name: "射撃Mii", imgPath: "select5master/images/ssbudatab/80.shageMiib.jpg", brightImgPath: "select5master/images/ssbudata/80.shageMii.jpg" }
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
