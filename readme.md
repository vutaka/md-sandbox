# Readme

## これはなにか

`react-markdown` の仕様確認をしたもの

## 確認した内容

- 基本的な使い方
- 対応している記法
- 拡張方法

### 基本的な使い方

[src\component\MarkdownViewer.tsx](src\component\MarkdownViewer.tsx) 参照

### 対応していない記法

- 表
  - 可能
  - 別途プラグインが必要
- 表上のセル結合
  - 対応していない
  - そもそもmarkdown標準ではなくmarkdown extraの内容
  - 拡張することで可能かは未検討
  - html記法は取り込む想定にない
- アンカーリンク
  - 拡張必須
  - `href` の内容は直接書き出されるが `id` は入らないため拡張が必要
- 改行
  - 改行を入力することで可能だが表内改行は未対応
  - br タグに対応するプラグインがあるが未調査

### 拡張方法

[src\component\MarkdownViewer.tsx](src\component\MarkdownViewer.tsx) 参照

リンク先を書き換えることも可能