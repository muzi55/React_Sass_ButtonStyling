# Styling

![Alt text](%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0.gif)

Sass를 사용한 `Button` 컴포넌트 스타일링

사용한 타입

<br/>
<br/>
<br/>


```tsx
interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "red" | "blue" | "pink";
  fullwidth?: boolean;
  rounded?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ className, type = "button", onClick, color = "blue", size = "medium", rounded, fullwidth, children }: Props): JSX.Element => {
  const styleRounded = rounded ? "rounded" : "";
  const styleFullwidth = fullwidth ? "fullwidth" : "";
  <Button onClick={onClick} className={`${className} ${size} ${color} ${fullwidth} ${rounded}`} type={type}>
    {children}
  </Button>;
};
export default Button;
```

위 버튼 컴포넌트이다.

- className과 color, sizem rounded, fullwidth 로 버튼 크기, 색상을 컨트롤 할 수 있다.
- onClick 으로 이벤트를 넣어줄 수 있다.
- ...rest를 추가해서 기타 다른 이벤트및 다른 속성들도 추가해 줄 수 있다.
<br/>
<br/>
<br/>


## after before

```tsx
interface Props {
  afterContent?: string;
  beforeContent?: string;
}

const Test = ({ afterContent, beforeContent }: Props): JSX.Element => {
  return (
    <div>
      <p className="test" data-before-content={afterContent} data-after-content={beforeContent}>
        가상선택자
      </p>
    </div>
  );
};

export default Test;
```

`before`, `after` 의 컨텐츠의 값은 HTML의 data속성으로 넣어줬다. data-before-content, data-after-content 란 속성쓴 후 css에서 값을 받아와 사용하는 방식이다.
<br/>
<br/>
<br/>

```css
.test {
  font-size: 20px;

  &::before {
    content: attr(data-before-content);
    color: blue;
  }

  &::after {
    content: attr(data-after-content);
    color: aqua;
  }
}
```

이런식으로 사용하면 유동적으로 after와 before 의 값을 받아올 수 있다.

이 외에도 배경색상, 폰트크기 디스플레이 등 값을 `data-background`, `data-fontSize`, `data-display` 등으로 data속성을 넣어준뒤 css에서 값을 받아와 사용하면 된다.
