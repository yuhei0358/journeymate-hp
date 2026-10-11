# JourneyMate HP

JourneyMateの別HP実装。Next.js 16.1.6 / React 19.2.3。既存コード・Git履歴を維持して管理する。

## 入口

- [JourneyMate本体と運用資料](https://github.com/yuhei0358/journeymate)
- [Instagram戦略](https://github.com/yuhei0358/journeymate/tree/main/docs/instagram)
- [共同編集の手順](https://github.com/yuhei0358/journeymate/blob/main/docs/collaboration.md)

## 開発

```sh
git clone https://github.com/yuhei0358/journeymate-hp.git
cd journeymate-hp
npm ci
npm run dev
```

`http://localhost:3000` で表示。`npm run lint` で静的検査、`npm run build` でビルド。認証情報は環境ごとに設定する。

このリポジトリへのpushでInstagramやWordPressの内容は変わらない。公開サイトの反映は既存のデプロイ設定を別途確認する。
