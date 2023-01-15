/*eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [describe, setDescribe] = useState("2월 17일 발행");

  //state를 변경하고싶을땐 setButtonCount함수를 사용하여 state 변경한다.
  //useState(0); <- 0으로 초기값 초기값 설정
  let [buttonCount, setButtonCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        정렬 버튼
      </button>

      <button
        onClick={() => {
          // ...문법은 괄호를 다시 벗겨주세요 (화살표를 다시 설정)
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        이름변경 버튼
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setButtonCount(buttonCount + 1);
            }}
          >
            👍
          </span>
          {buttonCount}
        </h4>
        <p>{describe}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{describe}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{describe}</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
