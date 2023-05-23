import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import EmptyPage from './component/EmptyPage';
import GoogleLoginButton from "./component/GoogleLogin";
import SocialKakao from "./component/KakaoLogin";

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
          {/* <SocialKakao /> */}
          <Header />
          <Routes>
            <Route exact path='/' element={<DayList />} />
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
