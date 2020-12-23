import React from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],  // 回答コンポーネントに表示するデータ
      chats: [],  // チャットコンポーネントに表示するデータ
      currentId: "init",  // 現在の質問ID
      dataset: defaultDataset,  // 質問と回答のデータセット
      open: false,  // お問い合わせフォーム用のモーダルの開閉を管理
    }
    this.selectedAnswer = this.selectAnswer.bind(this);  // コンポーネントが描画される度にselectAnswer関数が生成されるのを防ぐためにbindを行う
  }

  // 次に表示する質問処理
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    })
  }

  // 質問の回答処理
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === "init"):
        this.displayNextQuestion(nextQuestionId);
        break;
      default :
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        });

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  }

  // 最初に描画されたときの処理
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定
  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {  // scrollAreaが存在していれば
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (
      <sction className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </sction>
    );
  }
}