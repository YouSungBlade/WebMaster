import './App.css';
import React, {useState, useRef} from "react";
import Diary from './Diary';
import DiaryList from './DiaryList';

function App() {

  const [count, setCount] = useState(0);
  const heartbuttton = () => {
    setCount(count+1)
  }
  const [data, setData] = useState([]);
  
  const dataId = useRef(0);

  const onCreate = (content) => {
    const newitem = {
      content,
      id : dataId.current,
    }
    dataId.current += 1;
    setData([newitem, ...data])
  };

  return (
    <div className="insta">
      <div className="image"></div>
      <div className="right-hand">
        <div className="title">
          <div className="logo"></div>
          <div className="title-title">musinsacom</div>
          <div><ui><li>팔로잉</li></ui></div>
        </div>
        <div className="comentbox">
          <div className="comentbox-post">
            <div className="logo2"></div>
            <div className="title-title2">musinsacom</div>
            <div className="s">무신사 역대급 여름 패션의 장</div>
            <div className="coment-letter">7월 18일부터 7월 25일까지 
            <br />무신사에서 역대급 여름 할인이 펼퍼집니다<br /><br />
            <div className="d">#무신사#무진장#무신사세일</div></div>

          </div>
          <div className="comentbox-coment">
            <DiaryList diaryList={data}/>
          </div>
        </div>
        <div className="comentinputbox">
          <div><button onClick={heartbuttton} className='heart'></button><>  좋아요 : {count}</></div>
          <Diary onCreate={onCreate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
