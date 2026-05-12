// import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';
import { RiHomeHeartFill } from 'react-icons/ri';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      {/* 전체 화면을 쓸 수 있도록 tailwind를 설정하고, 헤더, 메인, 푸터를 수직으로 배치. mxauto는 수평정렬을 중앙으로 해주는 것*/}
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        {/*justify-between은 양쪽 끝으로 정렬, items-center는 수직 중앙 정렬, text-xl은 글자 크기, font-bold는 글자 굵기, h-20은 높이, p-10은 패딩, bg-slate-200은 배경색*/}
        <p>리액트 기초 </p>
        <p> <RiHomeHeartFill /> </p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        {/* grow는 남은 공간을 모두 차지하도록 하는 것, w-full은 너비를 100%로 하는 것, flex는 플렉스 박스를 사용하는 것, justify-center는 수평 중앙 정렬, items-center는 수직 중앙 정렬, overflow-y-auto는 세로 스크롤이 필요할 때만 스크롤바를 표시하는 것 */}
        {/* <MyDiv1 /> */}
        <MyList />
      </main>
      <footer className='flex justify-center items-center text-slate-100 h-20 p-4 bg-black'>
        &copy; Choi 2026. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
