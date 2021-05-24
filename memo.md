# initial install command

1.yarn init -y
2.npx typescript --init
3.yarn add express yup config cors mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
4.yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/yup @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node typescript -D

# mongodb

docker-compose up -d
docker-compose exec mongo bash

# ディレクトリ

├─config ... 設定値
└─src
├─controller ... request,response のコントローラー
├─db ... mongodb 接続設定
├─logger ... pino 使用
├─middleware ... route などで使用する middleware
├─model ... mongodb 用 model
├─schema ... 各種スキーマ
├─service ... DB へのアクセス、ビジネスロジック
└─utils ... ユーティリティ
