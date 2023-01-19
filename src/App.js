/*eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  const [describe, setDescribe] = useState('2월 17일 발행');
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  //내가 짠거
  const [arrTitle, setArrTitle] = useState();

  //state를 변경하고싶을땐 setButtonCount함수를 사용하여 state 변경한다.
  //useState(0); <- 0으로 초기값 초기값 설정
  const [buttonCount, setButtonCount] = useState([0, 0, 0]);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {title.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setArrTitle(title[i]);
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const dupButtonCount = [...buttonCount];
                  dupButtonCount[i] = dupButtonCount[i] + 1;
                  setButtonCount(dupButtonCount);
                }}
              >
                👍
              </span>

              {buttonCount[i]}
              <div style={{ display: 'flex' }}>
                <button
                  onClick={() => {
                    title.splice(i, 1);
                  }}
                  style={{ marginLeft: 'auto' }}
                >
                  삭제
                </button>
              </div>
            </h4>
            <p>{describe}</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          //정보 state변경함수는 늦게처리됨
          setInputValue(e.target.value);
          console.log(); //이거 완료되기 전에
          console.log(inputValue); //다음줄부터 실행함
        }}
      ></input>
      <button
        onClick={() => {
          setTitle([inputValue, ...title]);
        }}
      >
        게시글 늘리기
      </button>

      {modal == true ? <Modal title={title} setTitle={setTitle} arrTitle={arrTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.arrTitle}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.title];
          copy[0] = '여자 코트 추천';
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
