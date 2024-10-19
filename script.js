// DOMの読み込みが完了したときに実行されるイベントリスナー
// ページの読み込みが完了した後に、要素の操作を行うようにするための設定

document.addEventListener("DOMContentLoaded", () => {
    const maxCharacterSelect = document.getElementById("maxCharacterSelect");
    const characterContainer = document.getElementById("character-container");
    const readyButton = document.getElementById("readyButton");

    // キャラクターリストの情報（キャラクターの名前や画像パスなどを含む）
    // 各キャラクターには暗い画像と明るい画像があり、選択状態によって表示が切り替わる
    const characterList = [
        { id: 1, name: "マリオ", imgPath: "Select5Master/images/ssbudatab/1.mariob.jpg", brightImgPath: "Select5Master/images/ssbudata/1.mario.jpg" },
        { id: 2, name: "ドンキーコング", imgPath: "Select5Master/images/ssbudatab/2.donki-kongub.jpg", brightImgPath: "Select5Master/images/ssbudata/2.donki-kongu.jpg" },
        { id: 3, name: "リンク", imgPath: "Select5Master/images/ssbudatab/3.rinkub.jpg", brightImgPath: "Select5Master/images/ssbudata/3.rinku.jpg" },
        { id: 4, name: "サムス", imgPath: "Select5Master/images/ssbudatab/4.samusub.jpg", brightImgPath: "Select5Master/images/ssbudata/4.samusu.jpg" },
        { id: 4, name: "ダークサムス", imgPath: "Select5Master/images/ssbudatab/4.da-kusamusub.jpg", brightImgPath: "Select5Master/images/ssbudata/4.da-kusamusu.jpg" },
        { id: 5, name: "ヨッシー", imgPath: "Select5Master/images/ssbudatab/5.yotsushi-b.jpg", brightImgPath: "Select5Master/images/ssbudata/5.yotsushi-.jpg" },
        { id: 6, name: "カービィ", imgPath: "Select5Master/images/ssbudatab/6.ka-biib.jpg", brightImgPath: "Select5Master/images/ssbudata/6.ka-bii.jpg" },
        { id: 7, name: "フォックス", imgPath: "Select5Master/images/ssbudatab/7.huotsukusub.jpg", brightImgPath: "Select5Master/images/ssbudata/7.huotsukusu.jpg" },
        { id: 8, name: "ピカチュウ", imgPath: "Select5Master/images/ssbudatab/8.pikachiyuub.jpg", brightImgPath: "Select5Master/images/ssbudata/8.pikachiyuu.jpg" },
        { id: 9, name: "ルイージ", imgPath: "Select5Master/images/ssbudatab/9.rui-zib.jpg", brightImgPath: "Select5Master/images/ssbudata/9.rui-zi.jpg" },
        { id: 10, name: "ネス", imgPath: "Select5Master/images/ssbudatab/10.nesub.jpg", brightImgPath: "Select5Master/images/ssbudata/10.nesu.jpg" },
        { id: 11, name: "ファルコン", imgPath: "Select5Master/images/ssbudatab/11.huarukonb.jpg", brightImgPath: "Select5Master/images/ssbudata/11.huarukon.jpg" },
        { id: 12, name: "プリン", imgPath: "Select5Master/images/ssbudatab/12.12.purinb.jpg", brightImgPath: "Select5Master/images/ssbudata/12.purin.jpg" },
        { id: 13, name: "デイジー", imgPath: "Select5Master/images/ssbudatab/13.deizi-b.jpg", brightImgPath: "Select5Master/images/ssbudata/13.deizi-.jpg" },
        { id: 13, name: "ピーチ", imgPath: "Select5Master/images/ssbudatab/13.pi-chib.jpg", brightImgPath: "Select5Master/images/ssbudata/13.pi-chi.jpg" },
        { id: 14, name: "クッパ", imgPath: "Select5Master/images/ssbudatab/14.kutsupab.jpg", brightImgPath: "Select5Master/images/ssbudata/14.kutsupa.jpg" },
        { id: 15, name: "アイスクライマー", imgPath: "Select5Master/images/ssbudatab/15.aikurab.jpg", brightImgPath: "Select5Master/images/ssbudata/15.aikura.jpg" },
        { id: 16, name: "シーク", imgPath: "Select5Master/images/ssbudatab/16.shi-kub.jpg", brightImgPath: "Select5Master/images/ssbudata/16.shi-ku.jpg" },
        { id: 17, name: "ゼルダ", imgPath: "Select5Master/images/ssbudatab/17.zerudab.jpg", brightImgPath: "Select5Master/images/ssbudata/17.zeruda.jpg" },
        { id: 18, name: "ドクターマリオ", imgPath: "Select5Master/images/ssbudatab/18.dokuta-mariob.jpg", brightImgPath: "Select5Master/images/ssbudata/18.dokuta-mario.jpg" },
        { id: 19, name: "ピチュー", imgPath: "Select5Master/images/ssbudatab/19.pichiyu-b.jpg", brightImgPath: "Select5Master/images/ssbudata/19.pichiyu-.jpg" },
        { id: 20, name: "ファルコ", imgPath: "Select5Master/images/ssbudatab/20.huarukob.jpg", brightImgPath: "Select5Master/images/ssbudata/20.huaruko.jpg" },
        { id: 21, name: "マルス", imgPath: "Select5Master/images/ssbudatab/21.marusub.jpg", brightImgPath: "Select5Master/images/ssbudata/21.marusu.jpg" },
        { id: 21, name: "ルキナ", imgPath: "Select5Master/images/ssbudatab/21.rukinab.jpg", brightImgPath: "Select5Master/images/ssbudata/21.rukina.jpg" },
        { id: 22, name: "こどもリンク", imgPath: "Select5Master/images/ssbudatab/22.kodomorinkub.jpg", brightImgPath: "Select5Master/images/ssbudata/22.kodomorinku.jpg" },
        { id: 23, name: "ガノンドルフ", imgPath: "Select5Master/images/ssbudatab/23.ganondoruhub.jpg", brightImgPath: "Select5Master/images/ssbudata/23.ganondoruhu.jpg" },
        { id: 24, name: "ミュウツー", imgPath: "Select5Master/images/ssbudatab/24.miyuutsu-b.jpg", brightImgPath: "Select5Master/images/ssbudata/24.miyuutsu-.jpg" },
        { id: 25, name: "クロム", imgPath: "Select5Master/images/ssbudatab/25.kuromub.jpg", brightImgPath: "Select5Master/images/ssbudata/25.kuromu.jpg" },
        { id: 25, name: "ロイ", imgPath: "Select5Master/images/ssbudatab/25.roib.jpg", brightImgPath: "Select5Master/images/ssbudata/25.roi.jpg" },
        { id: 26, name: "Mr.ゲーム&ウォッチ", imgPath: "Select5Master/images/ssbudatab/26.Mr.ge-muuotsuchib.jpg", brightImgPath: "Select5Master/images/ssbudata/26.Mr.ge-muuotsuchi.jpg" },
        { id: 27, name: "メタナイト", imgPath: "Select5Master/images/ssbudatab/27.metanaitob.jpg", brightImgPath: "Select5Master/images/ssbudata/27.metanaito.jpg" },
        { id: 28, name: "ピット", imgPath: "Select5Master/images/ssbudatab/28.pitsutob.jpg", brightImgPath: "Select5Master/images/ssbudata/28.pitsuto.jpg" },
        { id: 28, name: "ブラックピット", imgPath: "Select5Master/images/ssbudatab/28.buratsukupitsutob.jpg", brightImgPath: "Select5Master/images/ssbudata/28.buratsukupitsuto.jpg" },
        { id: 29, name: "ゼロスーツサムス", imgPath: "Select5Master/images/ssbudatab/29.zerosu-tsusamusub.jpg", brightImgPath: "Select5Master/images/ssbudata/29.zerosu-tsusamusu.jpg" },
        { id: 30, name: "ワリオ", imgPath: "Select5Master/images/ssbudatab/30.wariob.jpg", brightImgPath: "Select5Master/images/ssbudata/30.wario.jpg" },
        { id: 31, name: "スネーク", imgPath: "Select5Master/images/ssbudatab/31.sune-kub.jpg", brightImgPath: "Select5Master/images/ssbudata/31.sune-ku.jpg" },
        { id: 32, name: "アイク", imgPath: "Select5Master/images/ssbudatab/32.aikub.jpg", brightImgPath: "Select5Master/images/ssbudata/32.aiku.jpg" },
        { id: 33, name: "ポケモントレーナー", imgPath: "Select5Master/images/ssbudatab/33.pokemontore-na-b.jpg", brightImgPath: "Select5Master/images/ssbudata/33.pokemontore-na-.jpg" },
        { id: 34, name: "ディディーコング", imgPath: "Select5Master/images/ssbudatab/34.deidei-kongub.jpg", brightImgPath: "Select5Master/images/ssbudata/34.deidei-kongu.jpg" },
        { id: 35, name: "リュカ", imgPath: "Select5Master/images/ssbudatab/35.riyukab.jpg", brightImgPath: "Select5Master/images/ssbudata/35.riyuka.jpg" },
        { id: 36, name: "ソニック", imgPath: "Select5Master/images/ssbudatab/36.sonitsukub.jpg", brightImgPath: "Select5Master/images/ssbudata/36.sonitsuku.jpg" },
        { id: 37, name: "デデデ", imgPath: "Select5Master/images/ssbudatab/37.dededeb.jpg", brightImgPath: "Select5Master/images/ssbudata/37.dedede.jpg" },
        { id: 38, name: "ピクミン&オリマー", imgPath: "Select5Master/images/ssbudatab/38.pikuminorima-b.jpg", brightImgPath: "Select5Master/images/ssbudata/38.pikuminorima-.jpg" },
        { id: 39, name: "ルカリオ", imgPath: "Select5Master/images/ssbudatab/39.rukariob.jpg", brightImgPath: "Select5Master/images/ssbudata/39.rukario.jpg" },
        { id: 40, name: "ロボット", imgPath: "Select5Master/images/ssbudatab/40.robotsutob.jpg", brightImgPath: "Select5Master/images/ssbudata/40.robotsuto.jpg" },
        { id: 41, name: "トゥーンリンク", imgPath: "Select5Master/images/ssbudatab/41.tou-nrinkub.jpg", brightImgPath: "Select5Master/images/ssbudata/41.tou-nrinku.jpg" },
        { id: 42, name: "ウルフ", imgPath: "Select5Master/images/ssbudatab/42.uruhub.jpg", brightImgPath: "Select5Master/images/ssbudata/42.uruhu.jpg" },
        { id: 43, name: "むらびと", imgPath: "Select5Master/images/ssbudatab/43.murabitob.jpg", brightImgPath: "Select5Master/images/ssbudata/43.murabito.jpg" },
        { id: 44, name: "ロックマン", imgPath: "Select5Master/images/ssbudatab/44.rotsukumanb.jpg", brightImgPath: "Select5Master/images/ssbudata/44.rotsukuman.jpg" },
        { id: 45, name: "WiiFitトレーナー", imgPath: "Select5Master/images/ssbudatab/45.WiiFittore-na-b.jpg", brightImgPath: "Select5Master/images/ssbudata/45.WiiFittore-na-.jpg" },
        { id: 46, name: "ロゼッタ&チコ", imgPath: "Select5Master/images/ssbudatab/46.rozetsutachikob.jpg", brightImgPath: "Select5Master/images/ssbudata/46.rozetsutachiko.jpg" },
        { id: 47, name: "リトル・マック", imgPath: "Select5Master/images/ssbudatab/47.ritorumatsukub.jpg", brightImgPath: "Select5Master/images/ssbudata/47.ritorumatsuku.jpg" },
        { id: 48, name: "ゲッコウガ", imgPath: "Select5Master/images/ssbudatab/48.getsukougab.jpg", brightImgPath: "Select5Master/images/ssbudata/48.getsukouga.jpg" },
        { id: 49, name: "パルテナ", imgPath: "Select5Master/images/ssbudatab/49.parutenab.jpg", brightImgPath: "Select5Master/images/ssbudata/49.parutena.jpg" },
        { id: 50, name: "パックマン", imgPath: "Select5Master/images/ssbudatab/50.patsukumanb.jpg", brightImgPath: "Select5Master/images/ssbudata/50.patsukuman.jpg" },
        { id: 51, name: "ルフレ", imgPath: "Select5Master/images/ssbudatab/51.ruhureb.jpg", brightImgPath: "Select5Master/images/ssbudata/51.ruhure.jpg" },
        { id: 52, name: "シュルク", imgPath: "Select5Master/images/ssbudatab/52.shiyurukub.jpg", brightImgPath: "Select5Master/images/ssbudata/52.shiyuruku.jpg" },
        { id: 53, name: "クッパJr", imgPath: "Select5Master/images/ssbudatab/53.kutsupaJrb.jpg", brightImgPath: "Select5Master/images/ssbudata/53.kutsupaJr.jpg" },
        { id: 54, name: "ダックハント", imgPath: "Select5Master/images/ssbudatab/54.datsukuhantob.jpg", brightImgPath: "Select5Master/images/ssbudata/54.datsukuhanto.jpg" },
        { id: 55, name: "リュウ", imgPath: "Select5Master/images/ssbudatab/55.riyuub.jpg", brightImgPath: "Select5Master/images/ssbudata/55.riyuu.jpg" },
        { id: 56, name: "ケン", imgPath: "Select5Master/images/ssbudatab/56.kenb.jpg", brightImgPath: "Select5Master/images/ssbudata/56.ken.jpg" },
        { id: 57, name: "クラウド", imgPath: "Select5Master/images/ssbudatab/57.kuraudob.jpg", brightImgPath: "Select5Master/images/ssbudata/57.kuraudo.jpg" },
        { id: 58, name: "カムイ", imgPath: "Select5Master/images/ssbudatab/58.kamuib.jpg", brightImgPath: "Select5Master/images/ssbudata/58.kamui.jpg" },
        { id: 59, name: "ベヨネッタ", imgPath: "Select5Master/images/ssbudatab/59.beyonetsutab.jpg", brightImgPath: "Select5Master/images/ssbudata/59.beyonetsuta.jpg" },
        { id: 60, name: "インクリング", imgPath: "Select5Master/images/ssbudatab/60.inkuringub.jpg", brightImgPath: "Select5Master/images/ssbudata/60.inkuringu.jpg" },
        { id: 61, name: "リドリー", imgPath: "Select5Master/images/ssbudatab/61.ridori-b.jpg", brightImgPath: "Select5Master/images/ssbudata/61.ridori-.jpg" },
        { id: 62, name: "シモン", imgPath: "Select5Master/images/ssbudatab/62.shimonb.jpg", brightImgPath: "Select5Master/images/ssbudata/62.shimon.jpg" },
        { id: 62, name: "リヒター", imgPath: "Select5Master/images/ssbudatab/62.rihita-b.jpg", brightImgPath: "Select5Master/images/ssbudata/62.rihita-.jpg" },
        { id: 63, name: "キングクルール", imgPath: "Select5Master/images/ssbudatab/63.kingukuru-rub.jpg", brightImgPath: "Select5Master/images/ssbudata/63.kingukuru-ru.jpg" },
        { id: 64, name: "しずえ", imgPath: "Select5Master/images/ssbudatab/64.shizueb.jpg", brightImgPath: "Select5Master/images/ssbudata/64.shizue.jpg" },
        { id: 65, name: "ガオガエン", imgPath: "Select5Master/images/ssbudatab/65.gaogaenb.jpg", brightImgPath: "Select5Master/images/ssbudata/65.gaogaen.jpg" },
        { id: 66, name: "パックンフラワー", imgPath: "Select5Master/images/ssbudatab/66.patsukunhurawa-b.jpg", brightImgPath: "Select5Master/images/ssbudata/66.patsukunhurawa-.jpg" },
        { id: 67, name: "ジョーカー", imgPath: "Select5Master/images/ssbudatab/67.ziyo-ka-b.jpg", brightImgPath: "Select5Master/images/ssbudata/67.ziyo-ka-.jpg" },
        { id: 68, name: "勇者", imgPath: "Select5Master/images/ssbudatab/68.yusyab.jpg", brightImgPath: "Select5Master/images/ssbudata/68.yusya.jpg" },
        { id: 69, name: "バンジョー&カズーイ", imgPath: "Select5Master/images/ssbudatab/69.banziyo-kazu-ib.jpg", brightImgPath: "Select5Master/images/ssbudata/69.banziyo-kazu-i.jpg" },
        { id: 70, name: "テリー", imgPath: "Select5Master/images/ssbudatab/70.teri-b.jpg", brightImgPath: "Select5Master/images/ssbudata/70.teri-.jpg" },
        { id: 71, name: "ベレス・ベレト", imgPath: "Select5Master/images/ssbudatab/71.beresuberetob.jpg", brightImgPath: "Select5Master/images/ssbudata/71.beresubereto.jpg" },
        { id: 72, name: "ミェンミェン", imgPath: "Select5Master/images/ssbudatab/72.mienmienb.jpg", brightImgPath: "Select5Master/images/ssbudata/72.mienmien.jpg" },
        { id: 73, name: "スティーブ", imgPath: "Select5Master/images/ssbudatab/73.sutei-bub.jpg", brightImgPath: "Select5Master/images/ssbudata/73.sutei-bu.jpg" },
        { id: 74, name: "セフィロス", imgPath: "Select5Master/images/ssbudatab/74.sehuirosub.jpg", brightImgPath: "Select5Master/images/ssbudata/74.sehuirosu.jpg" },
        { id: 75, name: "ホムラ&ヒカリ", imgPath: "Select5Master/images/ssbudatab/75.homurahikarib.jpg", brightImgPath: "Select5Master/images/ssbudata/75.homurahikari.jpg" },
        { id: 76, name: "カズヤ", imgPath: "Select5Master/images/ssbudatab/76.kazuyab.jpg", brightImgPath: "Select5Master/images/ssbudata/76.kazuya.jpg" },
        { id: 77, name: "ソラ", imgPath: "Select5Master/images/ssbudatab/77.sorab.jpg", brightImgPath: "Select5Master/images/ssbudata/77.sora.jpg" },
        { id: 78, name: "格闘Mii", imgPath: "Select5Master/images/ssbudatab/78.kakuMiib.jpg", brightImgPath: "Select5Master/images/ssbudata/78.kakuMii.jpg" },
        { id: 79, name: "剣術Mii", imgPath: "Select5Master/images/ssbudatab/79.kenMiib.jpg", brightImgPath: "Select5Master/images/ssbudata/79.kenMii.jpg" },
        { id: 80, name: "射撃Mii", imgPath: "Select5Master/images/ssbudatab/80.shageMiib.jpg", brightImgPath: "Select5Master/images/ssbudata/80.shageMii.jpg" }
    ];

    // プルダウンメニューに0〜80のオプションを追加
    // ユーザーが選択可能なキャラクターの数を指定するための設定
    for (let i = 0; i <= 80; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        maxCharacterSelect.appendChild(option);
    }

    // キャラクターの画像を画面に生成
    // キャラクターごとにカードを作成し、初期状態で暗い画像を表示
    characterList.forEach((char) => {
        const charCard = document.createElement("div");
        charCard.classList.add("character-card", "dark"); // 初期状態で暗いスタイルを適用
        charCard.dataset.id = char.id;

        const img = document.createElement("img");
        img.src = char.imgPath; // 初期は暗い画像を使用
        img.alt = char.name;

        charCard.appendChild(img);
        // クリックイベントで状態を変更（暗い→明るい→×）
        charCard.addEventListener("click", () => {
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
            updateReadyButtonState(); // ボタンの状態を更新
        });

        characterContainer.appendChild(charCard);
    });

    // 「READY TO FIGHT!」ボタンの有効化を管理する関数
    // 明るく選択されたキャラクターの数が指定された最大数に一致する場合にボタンを有効化
    function updateReadyButtonState() {
        const brightCount = document.querySelectorAll(".character-card.bright").length;
        const maxCharacters = parseInt(maxCharacterSelect.value, 10);
        readyButton.disabled = brightCount !== maxCharacters || maxCharacters === 0;
    }

    // 「READY TO FIGHT!」ボタンのランダム選出機能
    // 選ばれたキャラクターをランダムに5体表示
    readyButton.addEventListener("click", () => {
        const brightCharacters = Array.from(document.querySelectorAll(".character-card.bright"));
        const darkCharacters = Array.from(document.querySelectorAll(".character-card.dark"));

        let chosenCharacters = [];
        if (brightCharacters.length >= 5) {
            // 明るいキャラクターが5体以上ある場合、その中からランダムに5体選ぶ
            while (chosenCharacters.length < 5) {
                const randomIndex = Math.floor(Math.random() * brightCharacters.length);
                const char = brightCharacters[randomIndex];
                if (!chosenCharacters.includes(char)) {
                    chosenCharacters.push(char);
                }
            }
        } else {
            // 明るいキャラクターが5体未満の場合、明るいキャラクターを選びつつ、暗いキャラクターからも補完
            chosenCharacters = brightCharacters.slice();
            while (chosenCharacters.length < 5 && darkCharacters.length > 0) {
                const randomIndex = Math.floor(Math.random() * darkCharacters.length);
                chosenCharacters.push(darkCharacters.splice(randomIndex, 1)[0]);
            }
        }

        // 選ばれたキャラクターの名前をアラートで表示
        const chosenNames = chosenCharacters.map((char) => {
            const charData = characterList.find((c) => c.id == char.dataset.id);
            return charData ? charData.name : "不明";
        });

        alert("選ばれたキャラクター:\n" + chosenNames.join("\n"));
    });

    // 最大キャラクター数が変更されたときに「READY TO FIGHT!」ボタンの状態を更新
    maxCharacterSelect.addEventListener("change", updateReadyButtonState);
});
