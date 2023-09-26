import React from "react";
import Button from "./components/button/Button";
import Test from "./components/pseudoElement/Test";

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
      <Button color="pink" fullwidth={true} size="large" rounded={true} type="submit">
        서브밋
      </Button>
      <Button color="blue" fullwidth={true} size="small" rounded={true} type="submit">
        서브밋
      </Button>

      <Test beforeContent=":D" afterContent="C:" />
    </>
  );
}

export default App;
