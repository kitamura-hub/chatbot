import React from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList } from './components/index.js';

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
  }

  // datasetの中身をstateに格納する関数
  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    });
  }

  // 最初に描画されたときの処理
  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <sction className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </sction>
    );
  }
}