const dataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job"},
          {content: "好きな言語は何ですか？", nextId: "language"},
          {content: "一緒に開発してみたい", nextId: "development"},
          {content: "お喋りしたい", nextId: "chating"}
      ],
      question: "こんにちは！ご用件はなんでしょうか？"
  },
  "job": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other"}
      ],
      question: "どのようなお仕事でしょうか？"
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。"
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。"
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。"
  },
  "other": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。"
  },
  "language": {
      answers: [
          {content: "JavaScript", nextId: "JavaScript"},
          {content: "Ruby", nextId: "Ruby"},
          {content: "PHP", nextId: "PHP"},
          {content: "Java", nextId: "Java"}
      ],
      question: "この中からお好きな言語をお選びください"
  },
  "JavaScript": {
      answers: [
          {content: "React.js", nextId: "React"},
          {content: "Vue.js", nextId: "Vue"},
          {content: "Angular.js", nextId: "Angular"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "JavaScript良いですよね！私も好きです😊良ければ、お好きのライブラリやFWも教えてください！"
  },
  "Ruby": {
      answers: [
          {content: "Ruby on Rails", nextId: "RoR"},
          {content: "Sinatra", nextId: "Sinatra"},
          {content: "HANAMI", nextId: "HANAMI"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Ruby良いですね！私は使ったことがありませんが、楽しそうです😊良ければ、お好きのライブラリやFWも教えてください！"
  },
  "PHP": {
      answers: [
          {content: "Larabel", nextId: "Larabel"},
          {content: "CakePHP", nextId: "CakePHP"},
          {content: "Symfony", nextId: "Symfony"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "PHP良いですね！私も少しだけ学習していました！😊良ければ、お好きのライブラリやFWも教えてください！"
  },
  "Java": {
      answers: [
          {content: "Spring", nextId: "Spring"},
          {content: "Spring Boot", nextId: "Spring Boot"},
          {content: "Play", nextId: "Play"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Java良いですね！私も少しだけ学習していました！😊良ければ、お好きのライブラリやFWも教えてください！"
  },

  "React": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/masa99_it"},
          {content: "Githubを見る", nextId: "https://github.com/kitamura-hub"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "React良いですね！私の大好きなライブラリです！😊貴方とは気が合いそうなので、良ければ私のSNSもチェックしてみてください！"
  },
  "Vue": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Vue良いですね！😊楽しいチャットをありがとうございました！"
  },
  "Angular": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Angular良いですね！😊楽しいチャットをありがとうございました！"
  },

  "RoR": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Ruby on Rails良いですね！😊楽しいチャットをありがとうございました！"
  },
  "Sinatra": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "失礼ながら、Sinatraは存じ上げません。ですが、貴方のお気に入りを教えて頂き嬉しく思います！"
  },
  "HANAMI": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "失礼ながら、HANAMIは存じ上げません。ですが、貴方のお気に入りを教えて頂き嬉しく思います！"
  },

  "Larabel": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Larabel良いですね！私もPHPを学習していたときに使っていました！😊楽しいチャットをありがとうございました！"
  },
  "CakePHP": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "CakePHPは聞いたことがある程度ですね..楽しいチャットをありがとうございました！"
  },
  "Symfony": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Symfonyは聞いたことがある程度ですね..楽しいチャットをありがとうございました！"
  },

  "Spring": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Springは聞いたことがある程度ですね..楽しいチャットをありがとうございました！"
  },
  "Spring Boot": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Spring Bootは聞いたことがある程度ですね..楽しいチャットをありがとうございました！"
  },
  "Play": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Playは聞いたことがある程度ですね..楽しいチャットをありがとうございました！"
  },

  "development": {
      answers: [
          {content: "Githubを見る", nextId: "https://github.com/kitamura-hub"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "私と一緒に開発しませんか？😊"
  },
  "chating": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/masa99_it"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "まずは一緒にランチでもいかがですか？DMしてください😘"
  }
}
export default dataset;