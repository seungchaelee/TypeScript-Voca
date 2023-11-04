# React TypeScript Project

## 📢 Introduction

- 사용자에게 단어 작성 연습, 단어 관리, 암기 테스트, 진행 상황 체크를 제공하는 서비스입니다.

## ⁉️ Improved Features + Resolved Error

1. CSR의 단점인 초기 로딩 속도를 해결하기 위해 **code splitting**를 하였다.
2. React-Query와 useEffect 둘 다 써보면서 서로의 장단점을 파악할 수 있었다.
3. 네트워크 품질이 안 좋을 시 사용자의 **편의성**을 위해 로딩을 동적으로 구현하였습니다.
4. 서버로 GET 요청이 자주 있어 코드의 **재사용성**을 위해 커스텀훅 useFetch를 만들었습니다.
5. 로그인을 위한 API_KEY들의 노출을 막기 위해. env에 KEY 값들을 숨겼습니다.
6. webpack을 이용하여 코드 축소와 더불어 사용하지 않는 코드를 제거하는 tree shaking과 같은 최적화를 수행함으로써 HTTP 요청 수를 감소하여 웹사이트 성능을 향상시켰다.
7. OAuth를 적용하여 사용자의 **접근성**을 높였다.

## 🧭 Will Update!

- JSON-Server → MongoDB로 변경
- 사용자의 편의성을 위해 반응형으로 변경

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

## 배포 사이트
1. [TOEIC](https://master--euphonious-lily-276dfb.netlify.app/)
2. 서버랑 통신하면 더 많은 데이터를 볼수 있습니다.
