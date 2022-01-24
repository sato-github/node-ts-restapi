### ディレクトリ構造

- ├─config ... 設定値
- └─src
  - ├─controller ... request,response のコントローラー
  - ├─db ... mongodb 接続設定
  - ├─logger ... pino 使用
  - ├─middleware ... route などで使用する middleware
  - ├─model ... mongodb 用 model
  - ├─schema ... 各種スキーマ
  - ├─service ... DB へのアクセス、ビジネスロジック
  - └─utils ... ユーティリティ

### 起動方法

Docker を使用する場合、ルートディレクトリで以下のコマンド実行。

```
docker-compose up d
```

Docker を使用しない場合、ローカルの 27017 ポートで MongoDB が必要。

また、config/defaults.ts の以下の行をコメントアウトを交換する。

```
// dbUri: 'mongodb://localhost:27017/rest-api', //  localhost
  dbUri: 'mongodb://host.docker.internal:27017/rest-api', // for docker
```

その後、yarn install と yarn start

### 認証認可フロー

app.ts の deserializeUser でリクエストヘッダーからアクセストークンとリフレッシュトークンを取得。

以下の検証を行い、リクエストにユーザ情報を設定しその他ルーティングに回る。

- アクセストークンの有効期限内
- アクセストークンの有効期限外、かつ、リフレッシュトークンの有効期限内

上記の 2 番目の場合のみ、アクセストークンの再発行を行う。なお、このシステムではリフレッシュトークンの再発行はしていない。

認可に関しては、route.ts の「requireUser」でリクエストのユーザ情報が設定されているかどうかで判断する。

### 認証スキーム

RFC 6750 に準拠した「Bearer スキーム」を実装

https://openid-foundation-japan.github.io/rfc6750.ja.html

（OAuth の仕様の一部だが、 OAuth に限らず一般的な HTTP 認可の手段として使える）
