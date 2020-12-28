import React, { useState, useEffect, useCallback } from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components/index.js';
import FormDialog from './components/Forms/FormDialog';

const App = () => {
  const [answers, setAnswers] = useState([]);               // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]);                   // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState("init");       // 現在の質問ID
  const [dataset] = useState(defaultDataset);               // 質問と回答のデータセット
  const [open, setOpen] = useState(false);                  // お問い合わせフォーム用のモーダルの開閉を管理

  /**
   * 次の質問を表示する関数
   * @param { string } nextQuestionId 質問文を特定する一意のid
   * @param { string } nextDataset nextQuestionIdをキーに持つvalue
   */
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question'
    })
    // stateの更新(ここで画面の状態を更新)
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  }

  /**
   * 選択した回答によって表示を切り分ける関数
   * @param { string } selectedAnswer 回答文
   * @param { string } nextQuestionId 質問文を特定する一意のid
   */
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === "contact"):
        handleClickOpen();
        break;

      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;

      default :
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]) , 1000);
        break;
    }
  }

  // chatsを更新する関数
  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat];  // prevChatsは前回のchats(state)の状態
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // 最初に描画されたときの処理
  useEffect(() => {
    displayNextQuestion(currentId, dataset[currentId]);
  }, []);  //初回のみ実行して欲しいため、空の配列を渡す

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定
  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {  // scrollAreaが存在していれば
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <sction className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </sction>
  );
}
export default App;