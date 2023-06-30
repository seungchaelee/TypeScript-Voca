import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Loading from "../components/Loading/Loading";

import Header from "../components/Header/Header";
import DayList from "../components/Page/DayList";
import Day from "../components/Page/Day";
const CreateWord = lazy(() => import("../components/Page/CreateWord"));
const CreateDay = lazy(() => import("../components/Page/CreateDay"));
const EmptyPage = lazy(() => import("../components/Page/EmptyPage"));
const GoogleLoginButton = lazy(() => import("../components/Header/GoogleLogin"));
const KakaoLoginButton = lazy(() => import("../components/Header/KakaoLogin"));

const Background = styled.div`
  background-color: #e6e6fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loading text="리스트 가져오는 중" />}>
          <Background>
            <GoogleLoginButton />
            <KakaoLoginButton />
            <Header />
            <Routes>
              <Route path="/" element={<DayList />} />
              <Route path="/day/:day" element={<Day />} />
              <Route path="/create_word" element={<CreateWord />} />
              <Route path="/create_day" element={<CreateDay />} />
              <Route path="*" element={<EmptyPage />} />
            </Routes>
          </Background>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
