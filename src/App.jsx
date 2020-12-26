import React from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components/index.js';
import FormDialog from './components/Forms/FormDialog';

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
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  /**
   * 次の質問を表示する関数
   * @param { string } nextQuestionId 質問文を特定する一意のid
   */
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })
    // 格stateの更新(ここで画面の状態を更新)
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    })
  }

  /**
   * 選択した回答によって表示を切り分ける関数
   * @param { string } selectedAnswer 回答文
   * @param { string } nextQuestionId 質問文を特定する一意のid
   */
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === "init"):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;

      case (nextQuestionId === "contact"):
        this.handleClickOpen();
        break;

      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;

      default :
        // chatsの更新
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })
        this.setState({
          chats: chats
        });

        setTimeout(() => this.displayNextQuestion(nextQuestionId) , 1000);
        break;
    }
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };

  // 最初に描画されたときの処理
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定
  componentDidUpdate() {
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
          <FormDialog open={this.state.open} handleClose={this.handleClose} />
        </div>
      </sction>
    );
  }
}