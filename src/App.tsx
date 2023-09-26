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
      <div>
        <Button color="red" size="large">
          전송
        </Button>
        <Button color="red" size="medium">
          전송
        </Button>
        <Button color="red" size="small">
          전송
        </Button>
      </div>
      <div>
        <Button color="blue" size="large">
          전송
        </Button>
        <Button color="blue" size="medium">
          전송
        </Button>
        <Button color="blue" size="small">
          전송
        </Button>
      </div>
      <div>
        <Button color="pink" size="large">
          전송
        </Button>
        <Button color="pink" size="medium">
          전송
        </Button>
        <Button color="pink" size="small">
          전송
        </Button>
      </div>

      <Button color="pink" size="small" fullwidth={true}>
        전송
      </Button>
      <Button color="blue" size="medium" fullwidth={true} rounded={true}>
        전송
      </Button>
      <Button color="red" size="large" fullwidth={true}>
        전송
      </Button>

      <Test beforeContent=":D" afterContent="C:" />
      <Test beforeContent="before" afterContent="after" />
    </>
  );
}

export default App;
