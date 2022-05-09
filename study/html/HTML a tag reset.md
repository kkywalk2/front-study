```css
a {
    all: unset;
}

a:link {
    text-decoration: none;
    color: black;
}

a:visited {
    text-decoration: none;
    color: black;
}

a:active {
    text-decoration: none;
    color: black;
}

a:hover {
    text-decoration: none;
    color: black;
}
```

기본 a태그 스타일이 안예쁨, 일단 리셋

```css
.head-container .head-brand a:hover{
    color: aqua;
    cursor: pointer;
}
```

클릭이 된다는 느낌은 줘야 하기 때문에 위 처럼 hover했을 때 색상과 포인터를 변경