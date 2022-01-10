# ベースイメージを指定
FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install

COPY . .

# ポート3000番を開放する
EXPOSE 3000