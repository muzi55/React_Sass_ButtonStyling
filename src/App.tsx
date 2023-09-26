import React from "react";
import Button from "./components/button/Button";

function App() {
  const handleBtnConsole = () => {
    console.log("버튼이 클릭되었습니다");
  };

  return (
    <>
      <h1>Sass(Scss) 사용하기</h1>
      <Button onClick={handleBtnConsole} color="red">
        전송
      </Button>
      <Button color="pink" fullwidth={true} rounded={true}>
        서브밋
      </Button>
    </>
  );
}

export default App;
