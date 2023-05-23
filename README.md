# React TypeScript Project

React, TypeScript, json-server 통신을 이용한 토익단어 프로젝트🎖

- **반드시 아래 Setup과 Development 부분을 읽어보세요.**
- 문의는 id4720@gmail.com

## Setup (사전 설치)

Install dependencies

```sh
npm install
```

## Development (작업 방법)

```sh
React 시작하기
npm start
# Visit http://localhost:3000 from your browser (Chrome)
```

```sh
서버랑 통신하기
npx json-server --watch ./src/db/data.json --port 3001
# Visit http://localhost:3001/days from your browser (Chrome)
# Visit http://localhost:3001/words from your browser (Chrome)
```

배포 사이트
1. [TOEIC](https://master--euphonious-lily-276dfb.netlify.app/)
2. 서버랑 통신하면 더 많은 데이터를 볼수 있습니다.