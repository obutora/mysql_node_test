# ベースイメージを指定
FROM node:8.9.4-alpine

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=production

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g express-generator

# ディレクトリを移動する
WORKDIR /app

# ポート3000番を開放する
EXPOSE 3000