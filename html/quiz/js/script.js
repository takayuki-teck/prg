const question = "最も売れたゲーム機は？";
const answers = [
    "スーパーファミコン",
    "ニンテンドーDS",
    "ニンテンドースイッチ",
    "プレイステーション2",
];
const correct = "ニンテンドーDS";
const quizlist = [
    {
        question: '最も売れたゲーム機は？',
        answers: [
            "スーパーファミコン",
            "ニンテンドーDS",
            "ニンテンドースイッチ",
            "プレイステーション2"
        ],
        correct: "ニンテンドーDS"
    }, 
    {
        question: '最も売れたゲーム機は？',
        answers: [
            "スーパーファミコン",
            "ニンテンドーDS",
            "ニンテンドースイッチ",
            "プレイステーション2"
        ],
        correct: "ニンテンドーDS"
    }
]
const $button = document.getElementsByTagName("button");

// 正解判定
const clickHandler = (e) => {
    if (correct === e.target.textContent) {
        alert('正解')
    } else {
        alert('不正解')
    }
};

// クイズの問題文、選択肢を定義
const setQuiz = () => {
    document.getElementById("js-question").textContent = question;
    let buttonIndex = 0;
    while (buttonIndex < $button.length) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        $button[buttonIndex].addEventListener('click', (e) => { 
            clickHandler(e)
        });
        buttonIndex++;
    }
};

setQuiz();
