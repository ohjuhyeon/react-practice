/*eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  const [describe, setDescribe] = useState('2월 17일 발행');
  const [modal, setModal] = useState(false);

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
          <div className='list'>
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {title[i]}
              <span
                onClick={() => {
                  const copy = [...buttonCount];
                  copy[i] = copy[i] + 1;
                  setButtonCount(copy);
                }}
              >
                👍
              </span>
              {buttonCount[i]}
            </h4>
            <p>{describe}</p>
          </div>
        );
      })}
      {modal == true ? <Modal title={title} setTitle={setTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[0]}</h4>
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
