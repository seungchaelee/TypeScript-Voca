import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import Header from '../components/Header/Header';
import DayList from '../components/Page/DayList';
import Day from '../components/Page/Day';
import CreateWord from '../components/Page/CreateWord';
import CreateDay from '../components/Page/CreateDay';
import EmptyPage from '../components/Page/EmptyPage';
import GoogleLoginButton from "../components/Header/GoogleLogin";
import SocialKakao from "../components/Header/KakaoLogin";

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
        <Background>
          <GoogleLoginButton />
          <SocialKakao />
          <Header />
          <Routes>
            <Route path='/' element={<DayList />} />
            <Route path='/day/:day' element={<Day />} />
            <Route path='/create_word' element={<CreateWord />} />
            <Route path='/create_day' element={<CreateDay />} />
            <Route path='*' element={<EmptyPage />} />
          </Routes>
        </Background>
      </div>
    </BrowserRouter>
  );
}

export default App;
