## font-family

```css
.class-name {
    font-familiy: serif, sans-serif
}
```

로컬환경에 따라 폰트가 없을 수 있기 때문에 선호폰트 순서대로 설정가능

## 웹폰트

- 사용자 pc에 설치되어 있지 않으면 설치해주는 기능, 크기가 작더라도 리소스이기 때문에 CDN을 활용
- [구글 폰트](https://fonts.google.com/) 같은 곳을 활용하면 쉽게 사용가능

### 사용예시
```css
<link href="https://fonts.googleapis.com/css2?family=Akshar&display=swap" rel="stylesheet">
<style>
    p.akshar{
      font-family:'Akshar';
      font-weight: 400;
      font-variant: small-caps;
    }
</style>
```

## line-height

inline 요소의 높이를 조절하는 요소 정도로 생각할 수 있는데 정확히는 text line의 높이

## text-overflow

- width 프로퍼티 설정
- white-space: nowrap -> 글자에 들어 있는 스페이스, 탭, 줄바꿈, 자동 줄바꿈 설정, nowrap이면 한줄로 출력됨
- overflow 프로퍼티가 visible 이외의 값으로 설정

위 3가지 조건이 충족되는 경우에만 사용가능, 부모 영역을 벗어나는 text에 대해서 줄바꿈을 어떻게 할지에 대한 설정

```css
p.akshar{
      font-family:'Akshar';
      font-weight: 700;
      font-variant: small-caps;
      letter-spacing: 10px;
      word-spacing: 10px;
      text-decoration: line-through;
      width: 500px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
}
```

- ellipsis : 텍스트가 잘렸다는 것을 말줄임표(...)로 표시
- clip : width를 넘어가는 텍스트를 잘라냄
