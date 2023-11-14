# 로컬과 같은 버전
FROM node:18.17.1

# 도커 이미지 만든 사람
LABEL maintainer="hyun0520ho@gmail.com"

# 3000포트로 도커 데몬에 연결
EXPOSE 3000

# 작업 디렉토리 & 자동으로 작업 디렉토리로 현재 위치 변경
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn cache clean & yarn install --network-timeout 100000
COPY . .

CMD ["yarn", "start"]